import {
  any,
  intf,
  property, sym,
  Sym,
  testIsType
} from "../ir/ir";

import factorio from '../../factorio.json';
const { defines: rawDefines } = factorio;

type RawDefine = typeof factorio.defines[0] & { subkeyParentName?: string };

const rawDefineToSym = (params: RawDefine): any => {
  const { name: parentName, description = '', values = [], subkeys = [], subkeyParentName = '' } = params;

  const  rootText = [subkeyParentName, parentName].filter(Boolean).join('.');

  const root = sym({
    text: rootText,
    description,
    jsDocDescription: ''
  });

  const properties = values.map(({ name, description }) =>
      sym({
        text: ['defines', subkeyParentName, parentName, name].filter(Boolean).join('.'),
        description,
        jsDocDescription: ''
      })
  );

  const subDefines = subkeys.map(subkey => rawDefineToSym({
    ...subkey,
    subkeyParentName: rootText
  }));

  const rootArray = subDefines ? [] : [root]
  return [...rootArray, ...properties, ...subDefines];
};

const ofDefines = (definesSyms: Sym[]) => {
  const root = intf({
    name: "Defines",
    isRoot: true,
    membersByName: {},
    description:
      "Factorio constants, persistent handles.\n@{see https://lua-api.factorio.com/latest/defines.html}\nFactorio does not include types associated with defines :/",
  });
  return definesSyms.reduce((defines, curr) => {
    const [_, ...parts] = curr.text.split(".");
    parts.reduce((prevIntf, name, i, _arr) => {
      const isFinalPart = parts[i] === parts[parts.length - 1];
      if (isFinalPart) {
        prevIntf.membersByName[name] = property({ name, type: any({}) });
        return root;
      }
      const existing = prevIntf.membersByName[name];
      if (existing) {
        if (testIsType(existing.type, intf)) {
          return existing.type;
        } else {
          throw new Error("expected interface");
        }
      }
      const next = intf({ name, membersByName: {} });
      prevIntf.membersByName[name] = property({ name, type: next });
      return next;
    }, defines);
    return defines;
  }, root);
};

export const getDefinesFromJson = () => {
  const symDefines = rawDefines.map(rawDefineToSym)
  return ofDefines(symDefines.flat(10));
}