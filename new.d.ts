/** @noSelfInFile */
/** defines */
declare const defines: Defines;
/** concepts */

/** Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following: */
/** @noSelf **/
interface AchievementPrototypeFilter 
{ 
/** The condition to filter on. One of `"allowed-without-fight"`, `"type"`. */
filter: string;
 
/** Inverts the condition. Default is `false`. */
invert: (null | boolean);
 
/** How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`. */
mode: (null | string);
 } 
/** @noSelf **/
interface AdvancedMapGenSettings 
{ difficulty_settings: DifficultySettings;
 enemy_evolution: EnemyEvolutionMapSettings;
 enemy_expansion: EnemyExpansionMapSettings;
 pollution: PollutionMapSettings;
 } 
/** @noSelf **/
interface Alert 
{ 
/** The SignalID used for a custom alert. Only present for custom alerts. */
icon: (null | SignalID);
 
/** The message for a custom alert. Only present for custom alerts. */
message: (null | LocalisedString);
 position: (null | MapPosition);
 prototype: (null | LuaEntityPrototype);
 target: (null | LuaEntity);
 
/** The tick this alert was created. */
tick: number;
 } 

/** A [string](string) that specifies where a GUI element should be. */
/** @noSelf **/
interface Alignment 
{ 
/** A [string](string) that specifies where a GUI element should be. */
Alignment: 
/** A [string](string) that specifies where a GUI element should be. */
("top-left" | "middle-left" | "left" | "bottom-left" | "top-center" | "middle-center" | "center" | "bottom-center" | "top-right" | "right" | "bottom-right");
 } 
/** @noSelf **/
interface AmmoType 
{ action: TriggerItem[];
 
/** Ammo category of this ammo. */
category: string;
 
/** When `true`, the gun will be able to shoot even when the target is out of range. Only applies when `target_type` is `position`. The gun will fire at the maximum range in the direction of the target position. Defaults to `false`. */
clamp_position: (null | boolean);
 consumption_modifier: (null | number);
 cooldown_modifier: (null | number);
 
/** Energy consumption of a single shot, if applicable. Defaults to `0`. */
energy_consumption: (null | number);
 range_modifier: (null | number);
 
/** One of `"entity"` (fires at an entity), `"position"` (fires directly at a position), or `"direction"` (fires in a direction). */
target_type: string;
 } 

/** Any basic type (string, number, boolean), table, or LuaObject. */
/** @noSelf **/
interface Any 
{ 
/** Any basic type (string, number, boolean), table, or LuaObject. */
Any: 
/** Any basic type (string, number, boolean), table, or LuaObject. */
(string | boolean | number | any | LuaObject);
 } 

/** Any basic type (string, number, boolean) or table. */
/** @noSelf **/
interface AnyBasic 
{ 
/** Any basic type (string, number, boolean) or table. */
AnyBasic: 
/** Any basic type (string, number, boolean) or table. */
(string | boolean | number | any);
 } 
/** @noSelf **/
interface ArithmeticCombinatorParameters 
{ 
/** Constant to use as the first argument of the operation. Has no effect when `first_signal` is set. Defaults to `0`. */
first_constant: (null | number);
 
/** First signal to use in an operation. If not specified, the second argument will be the value of `first_constant`. */
first_signal: (null | SignalID);
 
/** Must be one of `"*"`, `"/"`, `"+"`, `"-"`, `"%"`, `"^"`, `"<<"`, `">>"`, `"AND"`, `"OR"`, `"XOR"`. When not specified, defaults to `"*"`. */
operation: (null | string);
 
/** Specifies the signal to output. */
output_signal: (null | SignalID);
 
/** Constant to use as the second argument of the operation. Has no effect when `second_signal` is set. Defaults to `0`. */
second_constant: (null | number);
 
/** Second signal to use in an operation. If not specified, the second argument will be the value of `second_constant`. */
second_signal: (null | SignalID);
 } 
/** @noSelf **/
interface AttackParameterFluid 
{ 
/** Multiplier applied to the damage of an attack. */
damage_modifier: number;
 
/** Name of the [LuaFluidPrototype](LuaFluidPrototype). */
type: string;
 } 
/** @noSelf **/
interface AttackParameters 
{ 
/** List of the names of compatible [LuaAmmoCategoryPrototypes](LuaAmmoCategoryPrototype). */
ammo_categories: 
/** List of the names of compatible [LuaAmmoCategoryPrototypes](LuaAmmoCategoryPrototype). */
string[];
 
/** Multiplier applied to the ammo consumption of an attack. */
ammo_consumption_modifier: number;
 ammo_type: (null | AmmoType);
 
/** Minimum amount of ticks between shots. If this is less than `1`, multiple shots can be performed per tick. */
cooldown: number;
 
/** Multiplier applied to the damage of an attack. */
damage_modifier: number;
 
/** When searching for the nearest enemy to attack, `fire_penalty` is added to the enemy's distance if they are on fire. */
fire_penalty: number;
 
/** When searching for an enemy to attack, a higher `health_penalty` will discourage targeting enemies with high health. A negative penalty will do the opposite. */
health_penalty: number;
 
/** If less than `range`, the entity will choose a random distance between `range` and `min_attack_distance` and attack from that distance. Used for spitters. */
min_attack_distance: number;
 
/** Minimum range of attack. Used with flamethrower turrets to prevent self-immolation. */
min_range: number;
 movement_slow_down_cooldown: number;
 movement_slow_down_factor: number;
 
/** Maximum range of attack. */
range: number;
 
/** Defines how the range is determined. Either `'center-to-center'` or `'bounding-box-to-bounding-box'`. */
range_mode: string;
 
/** When searching for an enemy to attack, a higher `rotate_penalty` will discourage targeting enemies that would take longer to turn to face. */
rotate_penalty: number;
 
/** The arc that the entity can attack in as a fraction of a circle. A value of `1` means the full 360 degrees. */
turn_range: number;
 
/** The type of AttackParameter. One of `'projectile'`, `'stream'` or `'beam'`. */
type: string;
 
/** Number of ticks it takes for the weapon to actually shoot after it has been ordered to do so. */
warmup: number;
 } 
/** @noSelf **/
interface AutoplaceControl 
{ 
/** For things that are placed as spots such as ores and enemy bases, frequency is generally proportional to number of spots placed per unit area. For continuous features such as forests, frequency is how compressed the probability function is over distance, i.e. the inverse of 'scale' (similar to terrain_segmentation). When the [LuaAutoplaceControlPrototype](LuaAutoplaceControlPrototype) is of the category `"terrain"`, then scale is shown in the map generator GUI instead of frequency. */
frequency: MapGenSize;
 
/** Has different effects for different things, but generally affects the 'health' or density of a thing that is placed without affecting where it is placed. For trees, richness affects tree health. For ores, richness multiplies the amount of ore at any given tile in a patch. Metadata about autoplace controls (such as whether or not 'richness' does anything for them) can be found in the [LuaAutoplaceControlPrototype](LuaAutoplaceControlPrototype) by looking up `game.autoplace_control_prototypes[(control prototype name)]`, e.g. `game.autoplace_control_prototypes["enemy-base"].richness` is false, because enemy base autoplacement doesn't use richness. */
richness: MapGenSize;
 
/** For things that are placed as spots, size is proportional to the area of each spot. For continuous features, size affects how much of the map is covered with the thing, and is called 'coverage' in the GUI. */
size: MapGenSize;
 } 
/** @noSelf **/
interface AutoplaceSettings 
{ settings: Record<string, AutoplaceControl>;
 
/** Whether missing autoplace names for this type should be default enabled. */
treat_missing_as_default: boolean;
 } 

/** Specifies how probability and richness are calculated when placing something on the map. Can be specified either using `probability_expression` and `richness_expression` or by using all the other fields. */
/** @noSelf **/
interface AutoplaceSpecification 
{ 
/** Control prototype name. */
control: (null | string);
 coverage: number;
 default_enabled: boolean;
 force: string;
 max_probability: number;
 order: string;
 peaks: AutoplaceSpecificationPeak[];
 placement_density: number;
 probability_expression: NoiseExpression;
 random_probability_penalty: number;
 richness_base: number;
 richness_expression: NoiseExpression;
 richness_multiplier: number;
 richness_multiplier_distance_bonus: number;
 sharpness: number;
 starting_area_size: number;
 tile_restriction: AutoplaceSpecificationRestriction[];
 } 
/** @noSelf **/
interface AutoplaceSpecificationPeak 
{ aux_max_range: number;
 aux_optimal: number;
 aux_range: number;
 aux_top_property_limit: number;
 distance_max_range: number;
 distance_optimal: number;
 distance_range: number;
 distance_top_property_limit: number;
 elevation_max_range: number;
 elevation_optimal: number;
 elevation_range: number;
 elevation_top_property_limit: number;
 influence: number;
 max_influence: number;
 min_influence: number;
 noisePersistence: number;
 
/** Prototype name of the noise layer. */
noise_layer: (null | string);
 noise_octaves_difference: number;
 richness_influence: number;
 starting_area_weight_max_range: number;
 starting_area_weight_optimal: number;
 starting_area_weight_range: number;
 starting_area_weight_top_property_limit: number;
 temperature_max_range: number;
 temperature_optimal: number;
 temperature_range: number;
 temperature_top_property_limit: number;
 tier_from_start_max_range: number;
 tier_from_start_optimal: number;
 tier_from_start_range: number;
 tier_from_start_top_property_limit: number;
 water_max_range: number;
 water_optimal: number;
 water_range: number;
 water_top_property_limit: number;
 } 
/** @noSelf **/
interface AutoplaceSpecificationRestriction 
{ 
/** Tile prototype name */
first: (null | string);
 
/** Second prototype name */
second: (null | string);
 } 
/** @noSelf **/
interface BeamTarget 
{ 
/** The target entity. */
entity: (null | LuaEntity);
 
/** The target position. */
position: (null | MapPosition);
 } 

/** The representation of an entity inside of a blueprint. It has at least these fields, but can contain additional ones depending on the kind of entity. */
/** @noSelf **/
interface BlueprintEntity 
{ 
/** The circuit network connections of the entity, if there are any. Only relevant for entities that support circuit connections. */
connections: (null | BlueprintCircuitConnection);
 
/** The control behavior of the entity, if it has one. The format of the control behavior depends on the entity's type. Only relevant for entities that support control behaviors. */
control_behavior: (null | BlueprintControlBehavior);
 
/** The direction the entity is facing. Only present for entities that can face in different directions and when the entity is not facing north. */
direction: (null | typeof defines.direction);
 
/** The entity's unique identifier in the blueprint. */
entity_number: number;
 
/** The items that the entity will request when revived, if there are any. It's a mapping of prototype names to amounts. Only relevant for entity ghosts. */
items: 
/** The items that the entity will request when revived, if there are any. It's a mapping of prototype names to amounts. Only relevant for entity ghosts. */
Record<string, number>;
 
/** The prototype name of the entity. */
name: string;
 
/** The position of the entity. */
position: MapPosition;
 
/** The schedule of the entity, if it has one. Only relevant for locomotives. */
schedule: 
/** The schedule of the entity, if it has one. Only relevant for locomotives. */
TrainScheduleRecord[];
 
/** The entity tags of the entity, if there are any. Only relevant for entity ghosts. */
tags: (null | Tags);
 } 
/** @noSelf **/
interface BlueprintItemIcon 
{ 
/** Index of the icon in the blueprint icons slots. Has to be an integer in the range [1, 4]. */
index: number;
 
/** Name of the item prototype whose icon should be used. */
name: string;
 } 
/** @noSelf **/
interface BlueprintSignalIcon 
{ 
/** Index of the icon in the blueprint icons slots. Has to be an integer in the range [1, 4]. */
index: number;
 
/** The icon to use. It can be any item icon as well as any virtual signal icon. */
signal: SignalID;
 } 

/** Two positions, specifying the top-left and bottom-right corner of the box respectively. Like with [MapPosition](MapPosition), the names of the members may be omitted. When read from the game, the third member `orientation` is present if it is non-zero, however it is ignored when provided to the game. */
/** @noSelf **/
interface BoundingBox 
{ 
/** Two positions, specifying the top-left and bottom-right corner of the box respectively. Like with [MapPosition](MapPosition), the names of the members may be omitted. When read from the game, the third member `orientation` is present if it is non-zero, however it is ignored when provided to the game. */
BoundingBox: 
/** Two positions, specifying the top-left and bottom-right corner of the box respectively. Like with [MapPosition](MapPosition), the names of the members may be omitted. When read from the game, the third member `orientation` is present if it is non-zero, however it is ignored when provided to the game. */
(/** @noSelf **/
{ left_top: MapPosition;
 orientation: (null | RealOrientation);
 right_bottom: MapPosition;
 } | ["MapPosition","MapPosition","RealOrientation"]);
 } 
/** @noSelf **/
interface CapsuleAction 
{ 
/** Only present when `type` is `"throw"` or `"use-on-self"`. */
attack_parameters: (null | AttackParameters);
 
/** Only present when `type` is `"equipment-remote"`. It is the equipment prototype name. */
equipment: (null | string);
 
/** One of `"throw"`, `"equipment-remote"`, `"use-on-self"`. */
type: string;
 } 
/** @noSelf **/
interface ChartTagSpec 
{ icon: (null | SignalID);
 last_user: (null | PlayerIdentification);
 position: MapPosition;
 text: (null | string);
 } 

/** Coordinates of a chunk in a [LuaSurface](LuaSurface) where each integer `x`/`y` represents a different chunk. This uses the same format as [MapPosition](MapPosition), meaning it can be specified either with or without explicit keys. A [MapPosition](MapPosition) can be translated to a ChunkPosition by dividing the `x`/`y` values by 32. */
/** @noSelf **/
interface ChunkPosition 
{ 
/** Coordinates of a chunk in a [LuaSurface](LuaSurface) where each integer `x`/`y` represents a different chunk. This uses the same format as [MapPosition](MapPosition), meaning it can be specified either with or without explicit keys. A [MapPosition](MapPosition) can be translated to a ChunkPosition by dividing the `x`/`y` values by 32. */
ChunkPosition: 
/** Coordinates of a chunk in a [LuaSurface](LuaSurface) where each integer `x`/`y` represents a different chunk. This uses the same format as [MapPosition](MapPosition), meaning it can be specified either with or without explicit keys. A [MapPosition](MapPosition) can be translated to a ChunkPosition by dividing the `x`/`y` values by 32. */
(/** @noSelf **/
{ x: number;
 y: number;
 } | ["int","int"]);
 } 

/** A [ChunkPosition](ChunkPosition) with an added bounding box for the area of the chunk. */
/** @noSelf **/
interface ChunkPositionAndArea 
{ area: BoundingBox;
 x: number;
 y: number;
 } 
/** @noSelf **/
interface CircuitCondition 
{ 
/** Specifies how the inputs should be compared. If not specified, defaults to `"<"`. */
comparator: (null | ComparatorString);
 
/** Constant to compare `first_signal` to. Has no effect when `second_signal` is set. When neither `second_signal` nor `constant` are specified, the effect is as though `constant` were specified with the value `0`. */
constant: (null | number);
 
/** Defaults to blank */
first_signal: (null | SignalID);
 
/** What to compare `first_signal` to. If not specified, `first_signal` will be compared to `constant`. */
second_signal: (null | SignalID);
 } 
/** @noSelf **/
interface CircuitConditionDefinition 
{ condition: CircuitCondition;
 
/** Whether the condition is currently fulfilled */
fulfilled: (null | boolean);
 } 
/** @noSelf **/
interface CircuitConnectionDefinition 
{ source_circuit_id: typeof defines.circuit_connector_id;
 target_circuit_id: typeof defines.circuit_connector_id;
 target_entity: LuaEntity;
 
/** Wire color, either [defines.wire_type.red](defines.wire_type.red) or [defines.wire_type.green](defines.wire_type.green). */
wire: typeof defines.wire_type;
 } 
/** @noSelf **/
interface CircularParticleCreationSpecification 
{ 
/** This vector is a table with `x` and `y` keys instead of an array. */
center: Vector;
 creation_distance: number;
 creation_distance_orientation: number;
 direction: number;
 direction_deviation: number;
 height: number;
 height_deviation: number;
 
/** Name of the [LuaEntityPrototype](LuaEntityPrototype) */
name: string;
 speed: number;
 speed_deviation: number;
 starting_frame_speed: number;
 starting_frame_speed_deviation: number;
 use_source_position: boolean;
 vertical_speed: number;
 vertical_speed_deviation: number;
 } 
/** @noSelf **/
interface CliffOrientation 
{ CliffOrientation: ("west-to-east" | "north-to-south" | "east-to-west" | "south-to-north" | "west-to-north" | "north-to-east" | "east-to-south" | "south-to-west" | "west-to-south" | "north-to-west" | "east-to-north" | "south-to-east" | "west-to-none" | "none-to-east" | "east-to-none" | "none-to-west" | "north-to-none" | "none-to-south" | "south-to-none" | "none-to-north");
 } 
/** @noSelf **/
interface CliffPlacementSettings 
{ 
/** Elevation at which the first row of cliffs is placed. The default is `10`, and this cannot be set from the map generation GUI. */
cliff_elevation_0: number;
 
/** Elevation difference between successive rows of cliffs. This is inversely proportional to 'frequency' in the map generation GUI. Specifically, when set from the GUI the value is `40 / frequency`. */
cliff_elevation_interval: number;
 
/** Name of the cliff prototype. */
name: string;
 
/** Corresponds to 'continuity' in the GUI. This value is not used directly, but is used by the 'cliffiness' noise expression, which in combination with elevation and the two cliff elevation properties drives cliff placement (cliffs are placed when elevation crosses the elevation contours defined by `cliff_elevation_0` and `cliff_elevation_interval` when 'cliffiness' is greater than `0.5`). The default 'cliffiness' expression interprets this value such that larger values result in longer unbroken walls of cliffs, and smaller values (between `0` and `1`) result in larger gaps in cliff walls. */
richness: MapGenSize;
 } 

/** A set of flags. Set flags are in the dictionary as `true`, while unset flags aren't present at all. */
/** @noSelf **/
interface CollisionMask 
{ 
/** A set of flags. Set flags are in the dictionary as `true`, while unset flags aren't present at all. */
CollisionMask: 
/** A set of flags. Set flags are in the dictionary as `true`, while unset flags aren't present at all. */
Record<CollisionMaskLayer, true>;
 } 

/** A [string](string) specifying a collision mask layer.

In addition to the listed layers, there is `"layer-13"` through `"layer-55"`. These layers are currently unused by the game but may change. If a mod is going to use one of the unused layers it's recommended to start at the higher layers because the base game will take from the lower ones. */
/** @noSelf **/
interface CollisionMaskLayer 
{ 
/** A [string](string) specifying a collision mask layer.

In addition to the listed layers, there is `"layer-13"` through `"layer-55"`. These layers are currently unused by the game but may change. If a mod is going to use one of the unused layers it's recommended to start at the higher layers because the base game will take from the lower ones. */
CollisionMaskLayer: 
/** A [string](string) specifying a collision mask layer.

In addition to the listed layers, there is `"layer-13"` through `"layer-55"`. These layers are currently unused by the game but may change. If a mod is going to use one of the unused layers it's recommended to start at the higher layers because the base game will take from the lower ones. */
("ground-tile" | "water-tile" | "resource-layer" | "doodad-layer" | "floor-layer" | "item-layer" | "ghost-layer" | "object-layer" | "player-layer" | "train-layer" | "rail-layer" | "transport-belt-layer" | "not-setup");
 } 

/** A [CollisionMask](CollisionMask) which also includes any flags this mask has. */
/** @noSelf **/
interface CollisionMaskWithFlags 
{ 
/** A [CollisionMask](CollisionMask) which also includes any flags this mask has. */
CollisionMaskWithFlags: 
/** A [CollisionMask](CollisionMask) which also includes any flags this mask has. */
Record<(CollisionMaskLayer | "not-colliding-with-itself" | "consider-tile-transitions" | "colliding-with-tiles-only"), true>;
 } 

/** Red, green, blue and alpha values, all in range [0, 1] or all in range [0, 255] if any value is > 1. All values here are optional. Color channels default to `0`, the alpha channel defaults to `1`.

Similar to [MapPosition](MapPosition), Color allows the short-hand notation of passing an array of exactly 3 or 4 numbers. The game usually expects colors to be in pre-multiplied form (color channels are pre-multiplied by alpha). */
/** @noSelf **/
interface Color 
{ 
/** Red, green, blue and alpha values, all in range [0, 1] or all in range [0, 255] if any value is > 1. All values here are optional. Color channels default to `0`, the alpha channel defaults to `1`.

Similar to [MapPosition](MapPosition), Color allows the short-hand notation of passing an array of exactly 3 or 4 numbers. The game usually expects colors to be in pre-multiplied form (color channels are pre-multiplied by alpha). */
Color: 
/** Red, green, blue and alpha values, all in range [0, 1] or all in range [0, 255] if any value is > 1. All values here are optional. Color channels default to `0`, the alpha channel defaults to `1`.

Similar to [MapPosition](MapPosition), Color allows the short-hand notation of passing an array of exactly 3 or 4 numbers. The game usually expects colors to be in pre-multiplied form (color channels are pre-multiplied by alpha). */
(/** @noSelf **/
{ a: (null | number);
 b: (null | number);
 g: (null | number);
 r: (null | number);
 } | ["float","float","float","float"]);
 } 

/** Same as [Color](Color), but red, green, blue and alpha values can be any floating point number, without any special handling of the range [1, 255]. */
/** @noSelf **/
interface ColorModifier 
{ 
/** Same as [Color](Color), but red, green, blue and alpha values can be any floating point number, without any special handling of the range [1, 255]. */
ColorModifier: 
/** Same as [Color](Color), but red, green, blue and alpha values can be any floating point number, without any special handling of the range [1, 255]. */
(/** @noSelf **/
{ a: (null | number);
 b: (null | number);
 g: (null | number);
 r: (null | number);
 } | ["float","float","float","float"]);
 } 

/** Commands can be given to enemies and unit groups. */
/** @noSelf **/
interface Command 
{ 
/** Type of command. The remaining fields depend on the value of this field. */
type: typeof defines.command;
 } 

/** A string that specifies how the inputs should be compared */
/** @noSelf **/
interface ComparatorString 
{ 
/** A string that specifies how the inputs should be compared */
ComparatorString: 
/** A string that specifies how the inputs should be compared */
("=" | ">" | "<" | "≥" | ">=" | "≤" | "<=" | "≠" | "!=");
 } 
/** @noSelf **/
interface ConfigurationChangedData 
{ 
/** `true` when mod prototype migrations have been applied since the last time this save was loaded. */
migration_applied: boolean;
 
/** Dictionary of mod changes. It is indexed by mod name. */
mod_changes: 
/** Dictionary of mod changes. It is indexed by mod name. */
Record<string, ModChangeData>;
 
/** `true` when mod startup settings have changed since the last time this save was loaded. */
mod_startup_settings_changed: boolean;
 
/** New version of the map. Present only when loading map version other than the current version. */
new_version: (null | string);
 
/** Old version of the map. Present only when loading map version other than the current version. */
old_version: (null | string);
 } 
/** @noSelf **/
interface ConstantCombinatorParameters 
{ 
/** Value of the signal to emit. */
count: number;
 
/** Index of the constant combinator's slot to set this signal to. */
index: number;
 
/** Signal to emit. */
signal: SignalID;
 } 
/** @noSelf **/
interface CraftingQueueItem 
{ 
/** The amount of items being crafted. */
count: number;
 
/** The index of the item in the crafting queue. */
index: number;
 
/** The item is a prerequisite for another item in the queue. */
prerequisite: boolean;
 
/** The recipe being crafted. */
recipe: string;
 } 
/** @noSelf **/
interface CursorBoxRenderType 
{ CursorBoxRenderType: ("entity" | "not-allowed" | "electricity" | "pair" | "copy" | "train-visualization" | "logistics" | "blueprint-snap-rectangle");
 } 
/** @noSelf **/
interface CustomCommandData 
{ 
/** The name of the command. */
name: string;
 
/** The parameter passed after the command, if there is one. */
parameter: (null | string);
 
/** The player who issued the command, or `nil` if it was issued from the server console. */
player_index: (null | number);
 
/** The tick the command was used in. */
tick: number;
 } 
/** @noSelf **/
interface CutsceneWaypoint 
{ 
/** Position to pan the camera to. */
position: (null | MapPosition);
 
/** Entity or unit group to pan the camera to. */
target: 
/** Entity or unit group to pan the camera to. */
(LuaEntity | LuaUnitGroup);
 
/** Time in ticks to wait before moving to the next waypoint. */
time_to_wait: number;
 
/** How many ticks it will take to reach this waypoint from the previous one. */
transition_time: number;
 
/** Zoom level to be set when the waypoint is reached. When not specified, the previous waypoint's zoom is used. */
zoom: (null | number);
 } 
/** @noSelf **/
interface DeciderCombinatorParameters 
{ 
/** Specifies how the inputs should be compared. If not specified, defaults to `"<"`. */
comparator: (null | ComparatorString);
 
/** Constant to use as the second argument of operation. Defaults to `0`. */
constant: (null | number);
 
/** Defaults to `true`. When `false`, will output a value of `1` for the given `output_signal`. */
copy_count_from_input: (null | boolean);
 
/** Defaults to blank. */
first_signal: (null | SignalID);
 
/** Defaults to blank. */
output_signal: (null | SignalID);
 
/** Second signal to use in an operation, if any. If this is not specified, the second argument to a decider combinator's operation is assumed to be the value of `constant`. */
second_signal: (null | SignalID);
 } 
/** @noSelf **/
interface Decorative 
{ amount: number;
 
/** The name of the decorative prototype. */
name: string;
 position: TilePosition;
 } 

/** Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following: */
/** @noSelf **/
interface DecorativePrototypeFilter 
{ 
/** The condition to filter on. One of `"decal"`, `"autoplace"`, `"collision-mask"`. */
filter: string;
 
/** Inverts the condition. Default is `false`. */
invert: (null | boolean);
 
/** How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`. */
mode: (null | string);
 } 
/** @noSelf **/
interface DecorativeResult 
{ amount: number;
 decorative: LuaDecorativePrototype;
 position: TilePosition;
 } 

/** Technology and recipe difficulty settings. Updating any of the attributes will immediately take effect in the game engine. */
/** @noSelf **/
interface DifficultySettings 
{ recipe_difficulty: typeof defines.difficulty_settings.recipe_difficulty;
 
/** Either `"after-victory"`, `"always"` or `"never"`. Changing this to `"always"` or `"after-victory"` does not automatically unlock the research queue. See [LuaForce](LuaForce) for that. */
research_queue_setting: string;
 technology_difficulty: typeof defines.difficulty_settings.technology_difficulty;
 
/** A value in range [0.001, 1000]. */
technology_price_multiplier: number;
 } 
/** @noSelf **/
interface DisplayResolution 
{ height: number;
 width: number;
 } 

/** These values represent a percentual increase in evolution. This means a value of `0.1` would increase evolution by 10%. */
/** @noSelf **/
interface EnemyEvolutionMapSettings 
{ 
/** The amount evolution progresses for every destroyed spawner. Defaults to `0.002`. */
destroy_factor: number;
 
/** Whether enemy evolution is enabled at all. */
enabled: boolean;
 
/** The amount evolution progresses for every unit of pollution. Defaults to `0.0000009`. */
pollution_factor: number;
 
/** The amount evolution naturally progresses by every second. Defaults to `0.000004`. */
time_factor: number;
 } 

/** Candidate chunks are given scores to determine which one of them should be expanded into. This score takes into account various settings noted below. The iteration is over a square region centered around the chunk for which the calculation is done, and includes the central chunk as well. Distances are calculated as [Manhattan distance](https://en.wikipedia.org/wiki/Taxicab_geometry).

The pseudocode algorithm to determine a chunk's score is as follows:

```
player = 0
for neighbour in all chunks within enemy_building_influence_radius from chunk:
  player += number of player buildings on neighbour
          * building_coefficient
          * neighbouring_chunk_coefficient^distance(chunk, neighbour)

base = 0
for neighbour in all chunk within friendly_base_influence_radius from chunk:
  base += num of enemy bases on neighbour
          * other_base_coefficient
          * neighbouring_base_chunk_coefficient^distance(chunk, neighbour)

score(chunk) = 1 / (1 + player + base)
``` */
/** @noSelf **/
interface EnemyExpansionMapSettings 
{ 
/** Defaults to `0.1`. */
building_coefficient: number;
 
/** Whether enemy expansion is enabled at all. */
enabled: boolean;
 
/** Defaults to `2`. */
enemy_building_influence_radius: number;
 
/** Defaults to `2`. */
friendly_base_influence_radius: number;
 
/** A chunk has to have at most this high of a percentage of unbuildable tiles for it to be considered a candidate to avoid chunks full of water as candidates. Defaults to `0.9`, or 90%. */
max_colliding_tiles_coefficient: number;
 
/** The maximum time between expansions in ticks. The actual cooldown is adjusted to the current evolution levels. Defaults to `60*3,600=216,000` ticks. */
max_expansion_cooldown: number;
 
/** Distance in chunks from the furthest base around to prevent expansions from reaching too far into the player's territory. Defaults to `7`. */
max_expansion_distance: number;
 
/** The minimum time between expansions in ticks. The actual cooldown is adjusted to the current evolution levels. Defaults to `4*3,600=14,400` ticks. */
min_expansion_cooldown: number;
 
/** Defaults to `0.4`. */
neighbouring_base_chunk_coefficient: number;
 
/** Defaults to `0.5`. */
neighbouring_chunk_coefficient: number;
 
/** Defaults to `2.0`. */
other_base_coefficient: number;
 
/** The maximum size of a biter group that goes to build a new base. This is multiplied by the evolution factor. Defaults to `20`. */
settler_group_max_size: number;
 
/** The minimum size of a biter group that goes to build a new base. This is multiplied by the evolution factor. Defaults to `5`. */
settler_group_min_size: number;
 } 

/** Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following: */
/** @noSelf **/
interface EntityPrototypeFilter 
{ 
/** The condition to filter on. One of `"flying-robot"`, `"robot-with-logistics-interface"`, `"rail"`, `"ghost"`, `"explosion"`, `"vehicle"`, `"crafting-machine"`, `"rolling-stock"`, `"turret"`, `"transport-belt-connectable"`, `"wall-connectable"`, `"buildable"`, `"placable-in-editor"`, `"clonable"`, `"selectable"`, `"hidden"`, `"entity-with-health"`, `"building"`, `"fast-replaceable"`, `"uses-direction"`, `"minable"`, `"circuit-connectable"`, `"autoplace"`, `"blueprintable"`, `"item-to-place"`, `"name"`, `"type"`, `"collision-mask"`, `"flag"`, `"build-base-evolution-requirement"`, `"selection-priority"`, `"emissions"`, `"crafting-category"`. */
filter: string;
 
/** Inverts the condition. Default is `false`. */
invert: (null | boolean);
 
/** How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`. */
mode: (null | string);
 } 

/** A set of flags. Set flags are in the dictionary as `true`, while unset flags aren't present at all.

By default, none of these flags are set. */
/** @noSelf **/
interface EntityPrototypeFlags 
{ 
/** A set of flags. Set flags are in the dictionary as `true`, while unset flags aren't present at all.

By default, none of these flags are set. */
EntityPrototypeFlags: 
/** A set of flags. Set flags are in the dictionary as `true`, while unset flags aren't present at all.

By default, none of these flags are set. */
Record<("not-rotatable" | "placeable-neutral" | "placeable-player" | "placeable-enemy" | "placeable-off-grid" | "player-creation" | "building-direction-8-way" | "filter-directions" | "fast-replaceable-no-build-while-moving" | "breaths-air" | "not-repairable" | "not-on-map" | "not-deconstructable" | "not-blueprintable" | "hidden" | "hide-alt-info" | "fast-replaceable-no-cross-type-while-moving" | "no-gap-fill-while-building" | "not-flammable" | "no-automated-item-removal" | "no-automated-item-insertion" | "no-copy-paste" | "not-selectable-in-game" | "not-upgradable" | "not-in-kill-statistics" | "not-in-made-in"), true>;
 } 

/** An entity prototype may be specified in one of three ways. */
/** @noSelf **/
interface EntityPrototypeIdentification 
{ 
/** An entity prototype may be specified in one of three ways. */
EntityPrototypeIdentification: 
/** An entity prototype may be specified in one of three ways. */
(LuaEntity | LuaEntityPrototype | string);
 } 

/** A table used to define a manual shape for a piece of equipment. */
/** @noSelf **/
interface EquipmentPoint 
{ x: number;
 y: number;
 } 

/** Position inside an equipment grid. This uses the same format as [MapPosition](MapPosition), meaning it can be specified either with or without explicit keys. */
/** @noSelf **/
interface EquipmentPosition 
{ 
/** Position inside an equipment grid. This uses the same format as [MapPosition](MapPosition), meaning it can be specified either with or without explicit keys. */
EquipmentPosition: 
/** Position inside an equipment grid. This uses the same format as [MapPosition](MapPosition), meaning it can be specified either with or without explicit keys. */
(/** @noSelf **/
{ x: number;
 y: number;
 } | ["int","int"]);
 } 

/** Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following: */
/** @noSelf **/
interface EquipmentPrototypeFilter 
{ 
/** The condition to filter on. One of `"item-to-place"`, `"type"`. */
filter: string;
 
/** Inverts the condition. Default is `false`. */
invert: (null | boolean);
 
/** How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`. */
mode: (null | string);
 } 

/** Information about the event that has been raised. The table can also contain other fields depending on the type of event. See [the list of Factorio events](events.html) for more information on these. */
/** @noSelf **/
interface EventData 
{ 
/** The name of the mod that raised the event if it was raised using [LuaBootstrap::raise_event](LuaBootstrap::raise_event). */
mod_name: (null | string);
 
/** The identifier of the event this handler was registered to. */
name: typeof defines.events;
 
/** The tick during which the event happened. */
tick: number;
 } 

/** Used to filter out irrelevant event callbacks in a performant way. */
/** @noSelf **/
interface EventFilter 
{ 
/** Used to filter out irrelevant event callbacks in a performant way. */
EventFilter: 
/** Used to filter out irrelevant event callbacks in a performant way. */
(LuaEntityClonedEventFilter | LuaEntityDamagedEventFilter | LuaPlayerMinedEntityEventFilter | LuaPreRobotMinedEntityEventFilter | LuaRobotBuiltEntityEventFilter | LuaPostEntityDiedEventFilter | LuaEntityDiedEventFilter | LuaScriptRaisedReviveEventFilter | LuaPrePlayerMinedEntityEventFilter | LuaEntityMarkedForDeconstructionEventFilter | LuaPreGhostDeconstructedEventFilter | LuaPreGhostUpgradedEventFilter | LuaEntityDeconstructionCancelledEventFilter | LuaEntityMarkedForUpgradeEventFilter | LuaSectorScannedEventFilter | LuaRobotMinedEntityEventFilter | LuaScriptRaisedDestroyEventFilter | LuaUpgradeCancelledEventFilter | LuaScriptRaisedBuiltEventFilter | LuaPlayerBuiltEntityEventFilter | LuaPlayerRepairedEntityEventFilter)[];
 } 
/** @noSelf **/
interface Fluid 
{ 
/** Amount of the fluid. */
amount: number;
 
/** Fluid prototype name of the fluid. */
name: string;
 
/** The temperature. When reading from [LuaFluidBox](LuaFluidBox), this field will always be present. It is not necessary to specify it when writing, however. When not specified, the fluid will be set to the fluid's default temperature as specified in the fluid's prototype. */
temperature: (null | number);
 } 

/** A definition of a fluidbox connection point. */
/** @noSelf **/
interface FluidBoxConnection 
{ 
/** The maximum tile distance this underground connection can connect at if this is an underground pipe. */
max_underground_distance: (null | number);
 
/** The 4 cardinal direction connection points for this pipe. This vector is a table with `x` and `y` keys instead of an array. */
positions: 
/** The 4 cardinal direction connection points for this pipe. This vector is a table with `x` and `y` keys instead of an array. */
Vector[];
 
/** The connection type: "input", "output", or "input-output". */
type: string;
 } 
/** @noSelf **/
interface FluidBoxFilter 
{ 
/** The maximum temperature allowed into the fluidbox. */
maximum_temperature: number;
 
/** The minimum temperature allowed into the fluidbox. */
minimum_temperature: number;
 
/** Fluid prototype name of the filtered fluid. */
name: string;
 } 
/** @noSelf **/
interface FluidBoxFilterSpec 
{ 
/** Force the filter to be set, regardless of current fluid content. */
force: (null | boolean);
 
/** The maximum temperature allowed into the fluidbox. */
maximum_temperature: (null | number);
 
/** The minimum temperature allowed into the fluidbox. */
minimum_temperature: (null | number);
 
/** Fluid prototype name of the filtered fluid. */
name: string;
 } 

/** A fluid may be specified in one of three ways. */
/** @noSelf **/
interface FluidIdentification 
{ 
/** A fluid may be specified in one of three ways. */
FluidIdentification: 
/** A fluid may be specified in one of three ways. */
(string | LuaFluidPrototype | Fluid);
 } 

/** Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following: */
/** @noSelf **/
interface FluidPrototypeFilter 
{ 
/** The condition to filter on. One of `"hidden"`, `"name"`, `"subgroup"`, `"default-temperature"`, `"max-temperature"`, `"heat-capacity"`, `"fuel-value"`, `"emissions-multiplier"`, `"gas-temperature"`. */
filter: string;
 
/** Inverts the condition. Default is `false`. */
invert: (null | boolean);
 
/** How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`. */
mode: (null | string);
 } 
/** @noSelf **/
interface ForceCondition 
{ ForceCondition: ("all" | "enemy" | "ally" | "friend" | "not-friend" | "same" | "not-same");
 } 

/** A force may be specified in one of two ways. */
/** @noSelf **/
interface ForceIdentification 
{ 
/** A force may be specified in one of two ways. */
ForceIdentification: 
/** A force may be specified in one of two ways. */
(string | LuaForce);
 } 

/** Parameters that affect the look and control of the game. Updating any of the member attributes here will immediately take effect in the game engine. */
/** @noSelf **/
interface GameViewSettings 
{ 
/** Show the flashing alert icons next to the player's toolbar. */
show_alert_gui: boolean;
 
/** Show the controller GUI elements. This includes the toolbar, the selected tool slot, the armour slot, and the gun and ammunition slots. */
show_controller_gui: boolean;
 
/** Show overlay icons on entities. Also known as "alt-mode". */
show_entity_info: boolean;
 
/** Shows or hides the view options when map is opened. */
show_map_view_options: boolean;
 
/** Show the chart in the upper right-hand corner of the screen. */
show_minimap: boolean;
 
/** Shows or hides quickbar of shortcuts. */
show_quickbar: boolean;
 
/** When `true` (`false` is default), the rails will always show the rail block visualisation. */
show_rail_block_visualisation: boolean;
 
/** Show research progress and name in the upper right-hand corner of the screen. */
show_research_info: boolean;
 
/** Shows or hides the shortcut bar. */
show_shortcut_bar: boolean;
 
/** Shows or hides the buttons row. */
show_side_menu: boolean;
 
/** When `true` (the default), mousing over an entity will select it. Otherwise, moving the mouse won't update entity selection. */
update_entity_selection: boolean;
 } 
/** @noSelf **/
interface GuiAnchor 
{ gui: typeof defines.relative_gui_type;
 
/** If provided, only anchors the GUI element when the opened thing matches the name. `name` takes precedence over `names`. */
name: (null | string);
 
/** If provided, only anchors the GUI element when the opened thing matches one of the names. When reading an anchor, `names` is always populated. */
names: 
/** If provided, only anchors the GUI element when the opened thing matches one of the names. When reading an anchor, `names` is always populated. */
string[];
 position: typeof defines.relative_gui_position;
 
/** If provided, only anchors the GUI element when the opened things type matches the type. */
type: (null | string);
 } 

/** Used for specifying where a GUI arrow should point to. */
/** @noSelf **/
interface GuiArrowSpecification 
{ 
/** This determines which of the following fields will be required. Must be one of `"nowhere"` (will remove the arrow entirely), `"goal"` (will point to the current goal), `"entity_info"`, `"active_window"`, `"entity"`, `"position"`, `"crafting_queue"` or `"item_stack"` (will point to a given item stack in an inventory). Depending on this value, other fields may have to be specified. */
type: string;
 } 

/** Screen coordinates of a GUI element in a [LuaGui](LuaGui). This uses the same format as [TilePosition](TilePosition), meaning it can be specified either with or without explicit keys. */
/** @noSelf **/
interface GuiLocation 
{ 
/** Screen coordinates of a GUI element in a [LuaGui](LuaGui). This uses the same format as [TilePosition](TilePosition), meaning it can be specified either with or without explicit keys. */
GuiLocation: 
/** Screen coordinates of a GUI element in a [LuaGui](LuaGui). This uses the same format as [TilePosition](TilePosition), meaning it can be specified either with or without explicit keys. */
(/** @noSelf **/
{ x: number;
 y: number;
 } | ["int","int"]);
 } 
/** @noSelf **/
interface HeatConnection 
{ direction: typeof defines.direction;
 position: Vector;
 } 

/** The settings used by a heat-interface type entity. */
/** @noSelf **/
interface HeatSetting 
{ 
/** `"at-least"`, `"at-most"`, `"exactly"`, `"add"`, or `"remove"`. Defaults to `"at-least"`. */
mode: (null | string);
 
/** The target temperature. Defaults to the minimum temperature of the heat buffer. */
temperature: (null | number);
 } 

/** A single filter used by an infinity-filters instance. */
/** @noSelf **/
interface InfinityInventoryFilter 
{ 
/** The count of the filter. */
count: (null | number);
 
/** The index of this filter in the filters list. */
index: number;
 
/** `"at-least"`, `"at-most"`, or `"exactly"`. Defaults to `"at-least"`. */
mode: (null | string);
 
/** Name of the item. */
name: string;
 } 

/** A single filter used by an infinity-pipe type entity. */
/** @noSelf **/
interface InfinityPipeFilter 
{ 
/** `"at-least"`, `"at-most"`, `"exactly"`, `"add"`, or `"remove"`. Defaults to `"at-least"`. */
mode: (null | string);
 
/** Name of the fluid. */
name: string;
 
/** The fill percentage the pipe (e.g. 0.5 for 50%). Can't be negative. */
percentage: (null | number);
 
/** The temperature of the fluid. Defaults to the default/minimum temperature of the fluid. */
temperature: (null | number);
 } 
/** @noSelf **/
interface Ingredient 
{ 
/** Amount of the item or fluid. */
amount: number;
 
/** How much of this ingredient is a catalyst. */
catalyst_amount: 
/** How much of this ingredient is a catalyst. */
(number | number);
 
/** Prototype name of the required item or fluid. */
name: string;
 
/** `"item"` or `"fluid"`. */
type: string;
 } 
/** @noSelf **/
interface InserterCircuitConditions 
{ circuit: (null | CircuitCondition);
 logistics: (null | CircuitCondition);
 } 
/** @noSelf **/
interface InventoryFilter 
{ 
/** Position of the corresponding filter slot. */
index: number;
 
/** Item prototype name of the item to filter. */
name: string;
 } 

/** Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following: */
/** @noSelf **/
interface ItemPrototypeFilter 
{ 
/** The condition to filter on. One of `"tool"`, `"mergeable"`, `"item-with-inventory"`, `"selection-tool"`, `"item-with-label"`, `"has-rocket-launch-products"`, `"fuel"`, `"place-result"`, `"burnt-result"`, `"place-as-tile"`, `"placed-as-equipment-result"`, `"name"`, `"type"`, `"flag"`, `"subgroup"`, `"fuel-category"`, `"stack-size"`, `"default-request-amount"`, `"wire-count"`, `"fuel-value"`, `"fuel-acceleration-multiplier"`, `"fuel-top-speed-multiplier"`, `"fuel-emissions-multiplier"`. */
filter: string;
 
/** Inverts the condition. Default is `false`. */
invert: (null | boolean);
 
/** How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`. */
mode: (null | string);
 } 

/** A set of flags. Set flags are in the dictionary as `true`, while unset flags aren't present at all.

By default, none of these flags are set. */
/** @noSelf **/
interface ItemPrototypeFlags 
{ 
/** A set of flags. Set flags are in the dictionary as `true`, while unset flags aren't present at all.

By default, none of these flags are set. */
ItemPrototypeFlags: 
/** A set of flags. Set flags are in the dictionary as `true`, while unset flags aren't present at all.

By default, none of these flags are set. */
Record<("draw-logistic-overlay" | "hidden" | "always-show" | "hide-from-bonus-gui" | "hide-from-fuel-tooltip" | "not-stackable" | "can-extend-inventory" | "primary-place-result" | "mod-openable" | "only-in-cursor" | "spawnable"), true>;
 } 

/** An item prototype may be specified in one of three ways. */
/** @noSelf **/
interface ItemPrototypeIdentification 
{ 
/** An item prototype may be specified in one of three ways. */
ItemPrototypeIdentification: 
/** An item prototype may be specified in one of three ways. */
(LuaItemStack | LuaItemPrototype | string);
 } 
/** @noSelf **/
interface ItemStackDefinition 
{ 
/** Amount of ammo in the ammo items in the stack. */
ammo: (null | number);
 
/** Number of items the stack holds. If not specified, defaults to `1`. */
count: (null | number);
 
/** Durability of the tool items in the stack. */
durability: (null | number);
 
/** Health of the items in the stack. Defaults to `1.0`. */
health: (null | number);
 
/** Prototype name of the item the stack holds. */
name: string;
 
/** Tags of the items with tags in the stack. */
tags: 
/** Tags of the items with tags in the stack. */
string[];
 } 

/** An item may be specified in one of two ways. */
/** @noSelf **/
interface ItemStackIdentification 
{ 
/** An item may be specified in one of two ways. */
ItemStackIdentification: 
/** An item may be specified in one of two ways. */
(SimpleItemStack | LuaItemStack);
 } 
/** @noSelf **/
interface ItemStackLocation 
{ inventory: typeof defines.inventory;
 slot: number;
 } 
/** @noSelf **/
interface LogisticFilter 
{ 
/** The count for this filter. */
count: number;
 
/** The index this filter applies to. */
index: number;
 
/** The item name for this filter. */
name: string;
 } 
/** @noSelf **/
interface LogisticParameters 
{ max: (null | number);
 min: (null | number);
 
/** The item. `nil` clears the filter. */
name: (null | string);
 } 
/** @noSelf **/
interface Loot 
{ 
/** Maximum amount of loot to drop. */
count_max: number;
 
/** Minimum amount of loot to drop. */
count_min: number;
 
/** Item prototype name of the result. */
item: string;
 
/** Probability that any loot at all will drop, as a number in range [0, 1]. */
probability: number;
 } 

/** Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following: */
/** @noSelf **/
interface LuaEntityClonedEventFilter 
{ 
/** The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`. */
filter: string;
 
/** Inverts the condition. Default is `false`. */
invert: (null | boolean);
 
/** How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`. */
mode: (null | string);
 } 

/** Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following: */
/** @noSelf **/
interface LuaEntityDamagedEventFilter 
{ 
/** The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"original-damage-amount"`, `"final-damage-amount"`, `"damage-type"`, `"final-health"`. */
filter: string;
 
/** Inverts the condition. Default is `false`. */
invert: (null | boolean);
 
/** How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`. */
mode: (null | string);
 } 

/** Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following: */
/** @noSelf **/
interface LuaEntityDeconstructionCancelledEventFilter 
{ 
/** The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`. */
filter: string;
 
/** Inverts the condition. Default is `false`. */
invert: (null | boolean);
 
/** How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`. */
mode: (null | string);
 } 

/** Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following: */
/** @noSelf **/
interface LuaEntityDiedEventFilter 
{ 
/** The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`. */
filter: string;
 
/** Inverts the condition. Default is `false`. */
invert: (null | boolean);
 
/** How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`. */
mode: (null | string);
 } 

/** Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following: */
/** @noSelf **/
interface LuaEntityMarkedForDeconstructionEventFilter 
{ 
/** The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`. */
filter: string;
 
/** Inverts the condition. Default is `false`. */
invert: (null | boolean);
 
/** How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`. */
mode: (null | string);
 } 

/** Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following: */
/** @noSelf **/
interface LuaEntityMarkedForUpgradeEventFilter 
{ 
/** The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`. */
filter: string;
 
/** Inverts the condition. Default is `false`. */
invert: (null | boolean);
 
/** How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`. */
mode: (null | string);
 } 

/** Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following: */
/** @noSelf **/
interface LuaPlayerBuiltEntityEventFilter 
{ 
/** The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"force"`. */
filter: string;
 
/** Inverts the condition. Default is `false`. */
invert: (null | boolean);
 
/** How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`. */
mode: (null | string);
 } 

/** Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following: */
/** @noSelf **/
interface LuaPlayerMinedEntityEventFilter 
{ 
/** The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`. */
filter: string;
 
/** Inverts the condition. Default is `false`. */
invert: (null | boolean);
 
/** How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`. */
mode: (null | string);
 } 

/** Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following: */
/** @noSelf **/
interface LuaPlayerRepairedEntityEventFilter 
{ 
/** The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`. */
filter: string;
 
/** Inverts the condition. Default is `false`. */
invert: (null | boolean);
 
/** How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`. */
mode: (null | string);
 } 

/** Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following: */
/** @noSelf **/
interface LuaPostEntityDiedEventFilter 
{ 
/** The condition to filter on. Can only be `"type"`. */
filter: string;
 
/** Inverts the condition. Default is `false`. */
invert: (null | boolean);
 
/** How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`. */
mode: (null | string);
 } 

/** Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following: */
/** @noSelf **/
interface LuaPreGhostDeconstructedEventFilter 
{ 
/** The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`. */
filter: string;
 
/** Inverts the condition. Default is `false`. */
invert: (null | boolean);
 
/** How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`. */
mode: (null | string);
 } 

/** Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following: */
/** @noSelf **/
interface LuaPreGhostUpgradedEventFilter 
{ 
/** The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`. */
filter: string;
 
/** Inverts the condition. Default is `false`. */
invert: (null | boolean);
 
/** How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`. */
mode: (null | string);
 } 

/** Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following: */
/** @noSelf **/
interface LuaPrePlayerMinedEntityEventFilter 
{ 
/** The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`. */
filter: string;
 
/** Inverts the condition. Default is `false`. */
invert: (null | boolean);
 
/** How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`. */
mode: (null | string);
 } 

/** Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following: */
/** @noSelf **/
interface LuaPreRobotMinedEntityEventFilter 
{ 
/** The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`. */
filter: string;
 
/** Inverts the condition. Default is `false`. */
invert: (null | boolean);
 
/** How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`. */
mode: (null | string);
 } 

/** Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following: */
/** @noSelf **/
interface LuaRobotBuiltEntityEventFilter 
{ 
/** The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"force"`. */
filter: string;
 
/** Inverts the condition. Default is `false`. */
invert: (null | boolean);
 
/** How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`. */
mode: (null | string);
 } 

/** Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following: */
/** @noSelf **/
interface LuaRobotMinedEntityEventFilter 
{ 
/** The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`. */
filter: string;
 
/** Inverts the condition. Default is `false`. */
invert: (null | boolean);
 
/** How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`. */
mode: (null | string);
 } 

/** Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following: */
/** @noSelf **/
interface LuaScriptRaisedBuiltEventFilter 
{ 
/** The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`. */
filter: string;
 
/** Inverts the condition. Default is `false`. */
invert: (null | boolean);
 
/** How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`. */
mode: (null | string);
 } 

/** Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following: */
/** @noSelf **/
interface LuaScriptRaisedDestroyEventFilter 
{ 
/** The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`. */
filter: string;
 
/** Inverts the condition. Default is `false`. */
invert: (null | boolean);
 
/** How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`. */
mode: (null | string);
 } 

/** Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following: */
/** @noSelf **/
interface LuaScriptRaisedReviveEventFilter 
{ 
/** The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`. */
filter: string;
 
/** Inverts the condition. Default is `false`. */
invert: (null | boolean);
 
/** How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`. */
mode: (null | string);
 } 

/** Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following: */
/** @noSelf **/
interface LuaSectorScannedEventFilter 
{ 
/** The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`. */
filter: string;
 
/** Inverts the condition. Default is `false`. */
invert: (null | boolean);
 
/** How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`. */
mode: (null | string);
 } 

/** Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following: */
/** @noSelf **/
interface LuaUpgradeCancelledEventFilter 
{ 
/** The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`. */
filter: string;
 
/** Inverts the condition. Default is `false`. */
invert: (null | boolean);
 
/** How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`. */
mode: (null | string);
 } 

/** All regular [MapSettings](MapSettings) plus an additional table that contains the [DifficultySettings](DifficultySettings). */
/** @noSelf **/
interface MapAndDifficultySettings 
{ difficulty_settings: DifficultySettings;
 enemy_evolution: EnemyEvolutionMapSettings;
 enemy_expansion: EnemyExpansionMapSettings;
 
/** If a behavior fails this many times, the enemy (or enemy group) is destroyed. This solves biters getting stuck within their own base. */
max_failed_behavior_count: number;
 path_finder: PathFinderMapSettings;
 pollution: PollutionMapSettings;
 steering: SteeringMapSettings;
 unit_group: UnitGroupMapSettings;
 } 

/** The data that can be extracted from a map exchange string, as a plain table. */
/** @noSelf **/
interface MapExchangeStringData 
{ map_gen_settings: MapGenSettings;
 map_settings: MapAndDifficultySettings;
 } 
/** @noSelf **/
interface MapGenPreset 
{ advanced_settings: (null | AdvancedMapGenSettings);
 basic_settings: (null | MapGenSettings);
 
/** Whether this is the preset that is selected by default. */
default: (null | boolean);
 
/** The string used to alphabetically sort the presets. It is a simple string that has no additional semantic meaning. */
order: string;
 } 

/** The 'map type' dropdown in the map generation GUI is actually a selector for elevation generator. The base game sets `property_expression_names.elevation` to `"0_16-elevation"` to reproduce terrain from 0.16 or to `"0_17-island"` for the island preset. If generators are available for other properties, the 'map type' dropdown in the GUI will be renamed to 'elevation' and shown along with selectors for the other selectable properties. */
/** @noSelf **/
interface MapGenSettings 
{ 
/** Indexed by autoplace control prototype name. */
autoplace_controls: 
/** Indexed by autoplace control prototype name. */
Record<string, AutoplaceControl>;
 
/** Each setting in this dictionary maps the string type to the settings for that type. Valid types are `"entity"`, `"tile"` and `"decorative"`. */
autoplace_settings: 
/** Each setting in this dictionary maps the string type to the settings for that type. Valid types are `"entity"`, `"tile"` and `"decorative"`. */
Record<string, AutoplaceSettings>;
 
/** Map generation settings for entities of the type "cliff". */
cliff_settings: CliffPlacementSettings;
 
/** Whether undefined `autoplace_controls` should fall back to the default controls or not. Defaults to `true`. */
default_enable_all_autoplace_controls: boolean;
 
/** Height in tiles. If `0`, the map has 'infinite' height, with the actual limitation being one million tiles in each direction from the center. */
height: number;
 
/** Whether peaceful mode is enabled for this map. */
peaceful_mode: boolean;
 
/** Overrides for tile property value generators. Values either name a NamedNoiseExpression or can be literal numbers, stored as strings (e.g. `"5"`). All other controls can be overridden by a property expression names. Notable properties: 
- `moisture` - a value between 0 and 1 that determines whether a tile becomes sandy (low moisture) or grassy (high moisture).
- `aux` - a value between 0 and 1 that determines whether low-moisture tiles become sand or red desert.
- `temperature` - provides a value (vaguely representing degrees Celsius, varying between -20 and 50) that is used (together with moisture and aux) as part of tree and decorative placement.
- `elevation` - tiles values less than zero become water. Cliffs are placed along certain contours according to [CliffPlacementSettings](CliffPlacementSettings).
- `cliffiness` - determines whether (when >0.5) or not (when <0.5) a cliff will be placed at an otherwise suitable (according to [CliffPlacementSettings](CliffPlacementSettings)) location.
- `enemy-base-intensity` - a number that is referenced by both `enemy-base-frequency` and `enemy-base-radius`. i.e. if this is overridden, enemy base frequency and size will both be affected and do something reasonable. By default, this expression returns a value proportional to distance from any starting point, clamped at about 7.
- `enemy-base-frequency` - a number representing average number of enemy bases per tile for a region, by default in terms of `enemy-base-intensity`.
- `enemy-base-radius` - a number representing the radius of an enemy base, if one were to be placed on the given tile, by default proportional to a constant plus `enemy-base-intensity`. Climate controls ('Moisture' and 'Terrain type' at the bottom of the Terrain tab in the map generator GUI) don't have their own dedicated structures in MapGenSettings. Instead, their values are stored as property expression overrides with long names: 
- `control-setting:moisture:frequency:multiplier` - frequency (inverse of scale) multiplier for moisture noise. Default is 1.
- `control-setting:moisture:bias` - global bias for moisture (which normally varies between 0 and 1). Default is 0.
- `control-setting:aux:frequency:multiplier` - frequency (inverse of scale) multiplier for aux (called 'terrain type' in the GUI) noise. Default is 1.
- `control-setting:aux:bias` - global bias for aux/terrain type (which normally varies between 0 and 1). Default is 0. All other MapGenSettings feed into named noise expressions, and therefore placement can be overridden by including the name of a property in this dictionary. The probability and richness functions for placing specific tiles, entities, and decoratives can be overridden by including an entry named `{tile|entity|decorative}:(prototype name):{probability|richness}`. */
property_expression_names: 
/** Overrides for tile property value generators. Values either name a NamedNoiseExpression or can be literal numbers, stored as strings (e.g. `"5"`). All other controls can be overridden by a property expression names. Notable properties: 
- `moisture` - a value between 0 and 1 that determines whether a tile becomes sandy (low moisture) or grassy (high moisture).
- `aux` - a value between 0 and 1 that determines whether low-moisture tiles become sand or red desert.
- `temperature` - provides a value (vaguely representing degrees Celsius, varying between -20 and 50) that is used (together with moisture and aux) as part of tree and decorative placement.
- `elevation` - tiles values less than zero become water. Cliffs are placed along certain contours according to [CliffPlacementSettings](CliffPlacementSettings).
- `cliffiness` - determines whether (when >0.5) or not (when <0.5) a cliff will be placed at an otherwise suitable (according to [CliffPlacementSettings](CliffPlacementSettings)) location.
- `enemy-base-intensity` - a number that is referenced by both `enemy-base-frequency` and `enemy-base-radius`. i.e. if this is overridden, enemy base frequency and size will both be affected and do something reasonable. By default, this expression returns a value proportional to distance from any starting point, clamped at about 7.
- `enemy-base-frequency` - a number representing average number of enemy bases per tile for a region, by default in terms of `enemy-base-intensity`.
- `enemy-base-radius` - a number representing the radius of an enemy base, if one were to be placed on the given tile, by default proportional to a constant plus `enemy-base-intensity`. Climate controls ('Moisture' and 'Terrain type' at the bottom of the Terrain tab in the map generator GUI) don't have their own dedicated structures in MapGenSettings. Instead, their values are stored as property expression overrides with long names: 
- `control-setting:moisture:frequency:multiplier` - frequency (inverse of scale) multiplier for moisture noise. Default is 1.
- `control-setting:moisture:bias` - global bias for moisture (which normally varies between 0 and 1). Default is 0.
- `control-setting:aux:frequency:multiplier` - frequency (inverse of scale) multiplier for aux (called 'terrain type' in the GUI) noise. Default is 1.
- `control-setting:aux:bias` - global bias for aux/terrain type (which normally varies between 0 and 1). Default is 0. All other MapGenSettings feed into named noise expressions, and therefore placement can be overridden by including the name of a property in this dictionary. The probability and richness functions for placing specific tiles, entities, and decoratives can be overridden by including an entry named `{tile|entity|decorative}:(prototype name):{probability|richness}`. */
Record<string, string>;
 
/** The random seed used to generated this map. */
seed: number;
 
/** Size of the starting area. */
starting_area: MapGenSize;
 
/** Positions of the starting areas. */
starting_points: 
/** Positions of the starting areas. */
MapPosition[];
 
/** The inverse of 'water scale' in the map generator GUI. Lower `terrain_segmentation` increases the scale of elevation features (lakes, continents, etc). This behavior can be overridden with alternate elevation generators (see `property_expression_names`, below). */
terrain_segmentation: MapGenSize;
 
/** The equivalent to 'water coverage' in the map generator GUI. Specifically, when this value is non-zero, `water_level = 10 * log2` (the value of this field), and the elevation generator subtracts water level from elevation before adding starting lakes. If water is set to 'none', elevation is clamped to a small positive value before adding starting lakes. This behavior can be overridden with alternate elevation generators (see `property_expression_names`, below). */
water: MapGenSize;
 
/** Width in tiles. If `0`, the map has 'infinite' width, with the actual limitation being one million tiles in each direction from the center. */
width: number;
 } 

/** A floating point number specifying an amount.

For backwards compatibility, MapGenSizes can also be specified as one of the following strings, which will be converted to a number (when queried, a number will always be returned): */
/** @noSelf **/
interface MapGenSize 
{ 
/** A floating point number specifying an amount.

For backwards compatibility, MapGenSizes can also be specified as one of the following strings, which will be converted to a number (when queried, a number will always be returned): */
MapGenSize: 
/** A floating point number specifying an amount.

For backwards compatibility, MapGenSizes can also be specified as one of the following strings, which will be converted to a number (when queried, a number will always be returned): */
(number | "none" | "very-low" | "very-small" | "very-poor" | "low" | "small" | "poor" | "normal" | "medium" | "regular" | "high" | "big" | "good" | "very-high" | "very-big" | "very-good");
 } 

/** Coordinates on a surface, for example of an entity. MapPositions may be specified either as a dictionary with `x`, `y` as keys, or simply as an array with two elements.

The coordinates are saved as a fixed-size 32 bit integer, with 8 bits reserved for decimal precision, meaning the smallest value step is `1/2^8 = 0.00390625` tiles. */
/** @noSelf **/
interface MapPosition 
{ 
/** Coordinates on a surface, for example of an entity. MapPositions may be specified either as a dictionary with `x`, `y` as keys, or simply as an array with two elements.

The coordinates are saved as a fixed-size 32 bit integer, with 8 bits reserved for decimal precision, meaning the smallest value step is `1/2^8 = 0.00390625` tiles. */
MapPosition: 
/** Coordinates on a surface, for example of an entity. MapPositions may be specified either as a dictionary with `x`, `y` as keys, or simply as an array with two elements.

The coordinates are saved as a fixed-size 32 bit integer, with 8 bits reserved for decimal precision, meaning the smallest value step is `1/2^8 = 0.00390625` tiles. */
(/** @noSelf **/
{ x: number;
 y: number;
 } | ["double","double"]);
 } 

/** Various game-related settings. Updating any of the attributes will immediately take effect in the game engine. */
/** @noSelf **/
interface MapSettings 
{ enemy_evolution: EnemyEvolutionMapSettings;
 enemy_expansion: EnemyExpansionMapSettings;
 
/** If a behavior fails this many times, the enemy (or enemy group) is destroyed. This solves biters getting stuck within their own base. */
max_failed_behavior_count: number;
 path_finder: PathFinderMapSettings;
 pollution: PollutionMapSettings;
 steering: SteeringMapSettings;
 unit_group: UnitGroupMapSettings;
 } 

/** What is shown in the map view. If a field is not given, that setting will not be changed. */
/** @noSelf **/
interface MapViewSettings 
{ "show-electric-network": (null | boolean);
 "show-logistic-network": (null | boolean);
 "show-networkless-logistic-members": (null | boolean);
 "show-non-standard-map-info": (null | boolean);
 "show-player-names": (null | boolean);
 "show-pollution": (null | boolean);
 "show-train-station-names": (null | boolean);
 "show-turret-range": (null | boolean);
 } 
/** @noSelf **/
interface ModChangeData 
{ 
/** New version of the mod. May be `nil` if the mod is no longer present (i.e. it was just removed). */
new_version: string;
 
/** Old version of the mod. May be `nil` if the mod wasn't previously present (i.e. it was just added). */
old_version: string;
 } 
/** @noSelf **/
interface ModSetting 
{ 
/** The value of the mod setting. The type depends on the setting. */
value: 
/** The value of the mod setting. The type depends on the setting. */
(number | number | boolean | string);
 } 

/** Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following: */
/** @noSelf **/
interface ModSettingPrototypeFilter 
{ 
/** The condition to filter on. One of `"type"`, `"mod"`, `"setting-type"`. */
filter: string;
 
/** Inverts the condition. Default is `false`. */
invert: (null | boolean);
 
/** How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`. */
mode: (null | string);
 } 
/** @noSelf **/
interface ModuleEffectValue 
{ 
/** The percentual increase of the attribute. A value of `0.6` means a 60% increase. */
bonus: number;
 } 
/** @noSelf **/
interface ModuleEffects 
{ consumption: (null | ModuleEffectValue);
 pollution: (null | ModuleEffectValue);
 productivity: (null | ModuleEffectValue);
 speed: (null | ModuleEffectValue);
 } 

/** A set of flags. Set flags are in the dictionary as `true`, while unset flags aren't present at all.

To write to this, use an array[[string](string)] of the mouse buttons that should be possible to use with on button. The flag `"left-and-right"` can also be set, which will set `"left"` and `"right"` to `true`. */
/** @noSelf **/
interface MouseButtonFlags 
{ 
/** A set of flags. Set flags are in the dictionary as `true`, while unset flags aren't present at all.

To write to this, use an array[[string](string)] of the mouse buttons that should be possible to use with on button. The flag `"left-and-right"` can also be set, which will set `"left"` and `"right"` to `true`. */
MouseButtonFlags: 
/** A set of flags. Set flags are in the dictionary as `true`, while unset flags aren't present at all.

To write to this, use an array[[string](string)] of the mouse buttons that should be possible to use with on button. The flag `"left-and-right"` can also be set, which will set `"left"` and `"right"` to `true`. */
Record<("left" | "right" | "middle" | "button-4" | "button-5" | "button-6" | "button-7" | "button-8" | "button-9"), true>;
 } 

/** A fragment of a functional program used to generate coherent noise, probably for purposes related to terrain generation. These can only be meaningfully written/modified during the data load phase. More detailed information is found on the [wiki](https://wiki.factorio.com/Types/NoiseExpression). */
/** @noSelf **/
interface NoiseExpression 
{ 
/** Names the type of the expression and determines what other fields are required. */
type: string;
 } 
/** @noSelf **/
interface NthTickEventData 
{ 
/** The nth tick this handler was registered to. */
nth_tick: number;
 
/** The tick during which the event happened. */
tick: number;
 } 

/** A single offer on a market entity. */
/** @noSelf **/
interface Offer 
{ 
/** The action that will take place when a player accepts the offer. Usually a `"give-item"` modifier. */
offer: TechnologyModifier;
 
/** List of prices. */
price: 
/** List of prices. */
Ingredient[];
 } 
/** @noSelf **/
interface OldTileAndPosition 
{ old_tile: LuaTilePrototype;
 position: TilePosition;
 } 
/** @noSelf **/
interface PathFinderMapSettings 
{ 
/** When looking for a path from cache, make sure it doesn't end too far from the requested end in relative terms. This is typically more lenient than the start ratio since the end target could be moving. Defaults to `0.15`. */
cache_accept_path_end_distance_ratio: number;
 
/** When looking for a path from cache, make sure it doesn't start too far from the requested start in relative terms. Defaults to `0.2`. */
cache_accept_path_start_distance_ratio: number;
 
/** When looking for a connection to a cached path, search at most for this number of steps times the original estimate. Defaults to `100`. */
cache_max_connect_to_cache_steps_multiplier: number;
 
/** When assigning a rating to the best path, this multiplier times end distances is considered. This value is typically higher than the start multiplier as this results in better end path quality. Defaults to `20`. */
cache_path_end_distance_rating_multiplier: number;
 
/** When assigning a rating to the best path, this multiplier times start distances is considered. Defaults to `10`. */
cache_path_start_distance_rating_multiplier: number;
 
/** The maximum direct distance in tiles before a request is no longer considered short. Defaults to `100`. */
direct_distance_to_consider_short_request: number;
 
/** A penalty that is applied for another unit that is too close and either not moving or has a different goal. Defaults to `30`. */
enemy_with_different_destination_collision_penalty: number;
 
/** The collision penalty for collisions in the extended bounding box but outside the entity's actual bounding box. Defaults to `3`. */
extended_collision_penalty: number;
 
/** The pathfinder performs a step of the backward search every `fwd2bwd_ratio`'th step. The minimum allowed value is `2`, which means symmetric search. The default value is `5`. */
fwd2bwd_ratio: number;
 
/** The general collision penalty with other units. Defaults to `10`. */
general_entity_collision_penalty: number;
 
/** The collision penalty for positions that require the destruction of an entity to get to. Defaults to `3`. */
general_entity_subsequent_collision_penalty: number;
 
/** When looking at which node to check next, their heuristic value is multiplied by this ratio. The higher it is, the more the search is directed straight at the goal. Defaults to `2`. */
goal_pressure_ratio: number;
 
/** The distance in tiles after which other moving units are not considered for pathfinding. Defaults to `5`. */
ignore_moving_enemy_collision_distance: number;
 
/** The minimal distance to the goal in tiles required to be searched in the long path cache. Defaults to `30`. */
long_cache_min_cacheable_distance: number;
 
/** Number of elements in the long cache. Defaults to `25`. */
long_cache_size: number;
 
/** The amount of path finder requests accepted per tick regardless of the requested path's length. Defaults to `10`. */
max_clients_to_accept_any_new_request: number;
 
/** When the `max_clients_to_accept_any_new_request` amount is exhausted, only path finder requests with a short estimate will be accepted until this amount (per tick) is reached. Defaults to `100`. */
max_clients_to_accept_short_new_request: number;
 
/** The maximum number of nodes that are expanded per tick. Defaults to `1,000`. */
max_steps_worked_per_tick: number;
 
/** The maximum amount of work each pathfinding job is allowed to do per tick. Defaults to `8,000`. */
max_work_done_per_tick: number;
 
/** The minimum amount of steps that are guaranteed to be performed for every request. Defaults to `2000`. */
min_steps_to_check_path_find_termination: number;
 
/** Same principle as `cache_accept_path_end_distance_ratio`, but used for negative cache queries. Defaults to `0.3`. */
negative_cache_accept_path_end_distance_ratio: number;
 
/** Same principle as `cache_accept_path_start_distance_ratio`, but used for negative cache queries. Defaults to `0.3`. */
negative_cache_accept_path_start_distance_ratio: number;
 
/** The delay in ticks between decrementing the score of all paths in the negative cache by one. Defaults to `20`. */
negative_path_cache_delay_interval: number;
 
/** The thresholds of waiting clients after each of which the per-tick work limit will be increased by the corresponding value in `overload_multipliers`. This is to avoid clients having to wait too long. Must have the same number of elements as `overload_multipliers`. Defaults to `{0, 100, 500}`. */
overload_levels: 
/** The thresholds of waiting clients after each of which the per-tick work limit will be increased by the corresponding value in `overload_multipliers`. This is to avoid clients having to wait too long. Must have the same number of elements as `overload_multipliers`. Defaults to `{0, 100, 500}`. */
number[];
 
/** The multipliers to the amount of per-tick work applied after the corresponding thresholds in `overload_levels` have been reached. Must have the same number of elements as `overload_multipliers`. Defaults to `{2, 3, 4}`. */
overload_multipliers: 
/** The multipliers to the amount of per-tick work applied after the corresponding thresholds in `overload_levels` have been reached. Must have the same number of elements as `overload_multipliers`. Defaults to `{2, 3, 4}`. */
number[];
 
/** The minimal number of nodes required to be searched in the short path cache. Defaults to `50`. */
short_cache_min_algo_steps_to_cache: number;
 
/** The minimal distance to the goal in tiles required to be searched in the short path cache. Defaults to `10`. */
short_cache_min_cacheable_distance: number;
 
/** Number of elements in the short cache. Defaults to `5`. */
short_cache_size: number;
 
/** The maximum amount of nodes a short request will traverse before being rescheduled as a long request. Defaults to `1000`. */
short_request_max_steps: number;
 
/** The amount of steps that are allocated to short requests each tick, as a percentage of all available steps. Defaults to `0.5`, or 50%. */
short_request_ratio: number;
 
/** A penalty that is applied for another unit that is on the way to the goal. This is mainly relevant for situations where a group of units has arrived at the target they are supposed to attack, making units further back circle around to reach the target. Defaults to `30`. */
stale_enemy_with_same_destination_collision_penalty: number;
 
/** If the actual amount of steps is higher than the initial estimate by this factor, pathfinding is terminated. Defaults to `2000.0`. */
start_to_goal_cost_multiplier_to_terminate_path_find: number;
 
/** Whether to cache paths at all. Defaults to `true`. */
use_path_cache: boolean;
 } 
/** @noSelf **/
interface PathfinderFlags 
{ 
/** Allows pathing through friendly entities. Defaults to `false`. */
allow_destroy_friendly_entities: (null | boolean);
 
/** Allows the pathfinder to path through entities of the same force. Defaults to `false`. */
allow_paths_through_own_entities: (null | boolean);
 
/** Enables path caching. This can be more efficient, but might fail to respond to changes in the environment. Defaults to `true`. */
cache: (null | boolean);
 
/** Sets lower priority on the path request, meaning it might take longer to find a path at the expense of speeding up others. Defaults to `false`. */
low_priority: (null | boolean);
 
/** Makes the pathfinder not break in the middle of processing this pathfind, no matter how much work is needed. Defaults to `false`. */
no_break: (null | boolean);
 
/** Makes the pathfinder try to path in straight lines. Defaults to `false`. */
prefer_straight_paths: (null | boolean);
 } 
/** @noSelf **/
interface PathfinderWaypoint 
{ 
/** `true` if the path from the previous waypoint to this one goes through an entity that must be destroyed. */
needs_destroy_to_reach: boolean;
 
/** The position of the waypoint on its surface. */
position: MapPosition;
 } 
/** @noSelf **/
interface PlaceAsTileResult 
{ condition: CollisionMask;
 condition_size: number;
 
/** The tile prototype. */
result: LuaTilePrototype;
 } 

/** A player may be specified in one of three ways. */
/** @noSelf **/
interface PlayerIdentification 
{ 
/** A player may be specified in one of three ways. */
PlayerIdentification: 
/** A player may be specified in one of three ways. */
(number | string | LuaPlayer);
 } 

/** These values are for the time frame of one second (60 ticks). */
/** @noSelf **/
interface PollutionMapSettings 
{ 
/** The amount of pollution eaten by a chunk's tiles as a percentage of 1. Defaults to `1`. */
aeging: number;
 
/** The amount that is diffused to a neighboring chunk (possibly repeated for other directions as well). Defaults to `0.02`. */
diffusion_ratio: number;
 
/** Whether pollution is enabled at all. */
enabled: boolean;
 
/** Defaults to `1`. */
enemy_attack_pollution_consumption_modifier: number;
 
/** Any amount of pollution larger than this value is visualized as this value instead. Defaults to `150`. */
expected_max_per_chunk: number;
 
/** Defaults to `20`. */
max_pollution_to_restore_trees: number;
 
/** Defaults to `60`. */
min_pollution_to_damage_trees: number;
 
/** The amount of PUs that need to be in a chunk for it to start diffusing. Defaults to `15`. */
min_to_diffuse: number;
 
/** Any amount of pollution smaller than this value (but bigger than zero) is visualized as this value instead. Defaults to `50`. */
min_to_show_per_chunk: number;
 
/** Defaults to `50`. */
pollution_per_tree_damage: number;
 
/** Defaults to `10`. */
pollution_restored_per_tree_damage: number;
 
/** Defaults to `150`. */
pollution_with_max_forest_damage: number;
 } 
/** @noSelf **/
interface Product 
{ 
/** Amount of the item or fluid to give. If not specified, `amount_min`, `amount_max` and `probability` must all be specified. */
amount: (null | number);
 
/** Maximum amount of the item or fluid to give. Has no effect when `amount` is specified. */
amount_max: 
/** Maximum amount of the item or fluid to give. Has no effect when `amount` is specified. */
(number | number);
 
/** Minimal amount of the item or fluid to give. Has no effect when `amount` is specified. */
amount_min: 
/** Minimal amount of the item or fluid to give. Has no effect when `amount` is specified. */
(number | number);
 
/** How much of this product is a catalyst. */
catalyst_amount: 
/** How much of this product is a catalyst. */
(number | number);
 
/** Prototype name of the result. */
name: string;
 
/** A value in range [0, 1]. Item or fluid is only given with this probability; otherwise no product is produced. */
probability: (null | number);
 
/** `"item"` or `"fluid"`. */
type: string;
 } 
/** @noSelf **/
interface ProgrammableSpeakerAlertParameters 
{ alert_message: string;
 icon_signal_id: SignalID;
 show_alert: boolean;
 show_on_map: boolean;
 } 
/** @noSelf **/
interface ProgrammableSpeakerCircuitParameters 
{ instrument_id: number;
 note_id: number;
 signal_value_is_pitch: boolean;
 } 
/** @noSelf **/
interface ProgrammableSpeakerInstrument 
{ name: string;
 notes: string[];
 } 
/** @noSelf **/
interface ProgrammableSpeakerParameters 
{ allow_polyphony: boolean;
 playback_globally: boolean;
 playback_volume: number;
 } 

/** Types `"signal"` and `"item-group"` do not support filters. */
/** @noSelf **/
interface PrototypeFilter 
{ 
/** Types `"signal"` and `"item-group"` do not support filters. */
PrototypeFilter: 
/** Types `"signal"` and `"item-group"` do not support filters. */
(ItemPrototypeFilter | TilePrototypeFilter | EntityPrototypeFilter | FluidPrototypeFilter | RecipePrototypeFilter | DecorativePrototypeFilter | AchievementPrototypeFilter | EquipmentPrototypeFilter | TechnologyPrototypeFilter)[];
 } 

/** The smooth orientation. It is a [float](float) in the range `[0, 1)` that covers a full circle, starting at the top and going clockwise. This means a value of `0` indicates "north", a value of `0.5` indicates "south".

For example then, a value of `0.625` would indicate "south-west", and a value of `0.875` would indicate "north-west". */
type RealOrientation = number

/** Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following: */
/** @noSelf **/
interface RecipePrototypeFilter 
{ 
/** The condition to filter on. One of `"enabled"`, `"hidden"`, `"hidden-from-flow-stats"`, `"hidden-from-player-crafting"`, `"allow-as-intermediate"`, `"allow-intermediates"`, `"allow-decomposition"`, `"always-show-made-in"`, `"always-show-products"`, `"show-amount-in-title"`, `"has-ingredients"`, `"has-products"`, `"has-ingredient-item"`, `"has-ingredient-fluid"`, `"has-product-item"`, `"has-product-fluid"`, `"subgroup"`, `"category"`, `"energy"`, `"emissions-multiplier"`, `"request-paste-multiplier"`, `"overload-multiplier"`. */
filter: string;
 
/** Inverts the condition. Default is `false`. */
invert: (null | boolean);
 
/** How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`. */
mode: (null | string);
 } 

/** A number between 0 and 255 inclusive, represented by one of the following named strings or the string version of the number. For example `"27"` and `"decals"` are both valid. Higher values are rendered above lower values. */
/** @noSelf **/
interface RenderLayer 
{ 
/** A number between 0 and 255 inclusive, represented by one of the following named strings or the string version of the number. For example `"27"` and `"decals"` are both valid. Higher values are rendered above lower values. */
RenderLayer: 
/** A number between 0 and 255 inclusive, represented by one of the following named strings or the string version of the number. For example `"27"` and `"decals"` are both valid. Higher values are rendered above lower values. */
(string | "water-tile" | "ground-tile" | "tile-transition" | "decals" | "lower-radius-visualization" | "radius-visualization" | "transport-belt-integration" | "resource" | "building-smoke" | "decorative" | "ground-patch" | "ground-patch-higher" | "ground-patch-higher2" | "remnants" | "floor" | "transport-belt" | "transport-belt-endings" | "floor-mechanics-under-corpse" | "corpse" | "floor-mechanics" | "item" | "lower-object" | "transport-belt-circuit-connector" | "lower-object-above-shadow" | "object" | "higher-object-under" | "higher-object-above" | "item-in-inserter-hand" | "wires" | "wires-above" | "entity-info-icon" | "entity-info-icon-above" | "explosion" | "projectile" | "smoke" | "air-object" | "air-entity-info-icon" | "light-effect" | "selection-box" | "higher-selection-box" | "collision-selection-box" | "arrow" | "cursor");
 } 
/** @noSelf **/
interface Resistance 
{ 
/** Absolute damage decrease */
decrease: number;
 
/** Percentual damage decrease */
percent: number;
 } 
/** @noSelf **/
interface RidingState 
{ acceleration: typeof defines.riding.acceleration;
 direction: typeof defines.riding.direction;
 } 

/** An area defined using the map editor. */
/** @noSelf **/
interface ScriptArea 
{ area: BoundingBox;
 color: Color;
 id: number;
 name: string;
 } 

/** A position defined using the map editor. */
/** @noSelf **/
interface ScriptPosition 
{ color: Color;
 id: number;
 name: string;
 position: MapPosition;
 } 
/** @noSelf **/
interface ScriptRenderTarget 
{ entity: (null | LuaEntity);
 entity_offset: (null | Vector);
 position: (null | MapPosition);
 } 

/** One vertex of a ScriptRenderPolygon. */
/** @noSelf **/
interface ScriptRenderVertexTarget 
{ target: (MapPosition | LuaEntity);
 
/** Only used if `target` is a LuaEntity. */
target_offset: (null | Vector);
 } 
/** @noSelf **/
interface SelectedPrototypeData 
{ 
/** E.g. `"entity"`. */
base_type: string;
 
/** E.g. `"tree"`. */
derived_type: string;
 
/** E.g. `"tree-05"`. */
name: string;
 } 

/** A set of flags. Set flags are in the dictionary as `true`, while unset flags aren't present at all. */
/** @noSelf **/
interface SelectionModeFlags 
{ 
/** A set of flags. Set flags are in the dictionary as `true`, while unset flags aren't present at all. */
SelectionModeFlags: 
/** A set of flags. Set flags are in the dictionary as `true`, while unset flags aren't present at all. */
Record<("blueprint" | "deconstruct" | "cancel-deconstruct" | "item" | "trees" | "buildable-type" | "nothing" | "items-to-place" | "any-entity" | "any-tile" | "same-force" | "not-same-force" | "friend" | "enemy" | "upgrade" | "cancel-upgrade" | "entity-with-health" | "entity-with-force" | "entity-with-owner"), true>;
 } 

/** An actual signal transmitted by the network. */
/** @noSelf **/
interface Signal 
{ 
/** Value of the signal. */
count: number;
 
/** ID of the signal. */
signal: SignalID;
 } 
/** @noSelf **/
interface SignalID 
{ 
/** Name of the item, fluid or virtual signal. */
name: (null | string);
 
/** `"item"`, `"fluid"`, or `"virtual"`. */
type: string;
 } 

/** An item stack may be specified in one of two ways. */
/** @noSelf **/
interface SimpleItemStack 
{ 
/** An item stack may be specified in one of two ways. */
SimpleItemStack: 
/** An item stack may be specified in one of two ways. */
(string | ItemStackDefinition);
 } 
/** @noSelf **/
interface SmokeSource 
{ deviation: (null | MapPosition);
 east_position: (null | Vector);
 frequency: number;
 height: number;
 height_deviation: number;
 name: string;
 north_position: (null | Vector);
 offset: number;
 position: (null | Vector);
 slow_down_factor: number;
 south_position: (null | Vector);
 starting_frame: number;
 starting_frame_deviation: number;
 starting_frame_speed: number;
 starting_frame_speed_deviation: number;
 starting_vertical_speed: number;
 starting_vertical_speed_deviation: number;
 vertical_speed_slowdown: number;
 west_position: (null | Vector);
 } 

/** It can be either the name of a [sound prototype](https://wiki.factorio.com/Prototype/Sound) defined in the data stage, or a path in the form `"type/name"`. The latter option can be sorted into three categories.

The validity of a SoundPath can be verified at runtime using [LuaGameScript::is_valid_sound_path](LuaGameScript::is_valid_sound_path).

The utility and ambient types each contain general use sound prototypes defined by the game itself.
- `"utility"` - Uses the [UtilitySounds](https://wiki.factorio.com/Prototype/UtilitySounds) prototype. Example: `"utility/wire_connect_pole"`
- `"ambient"` - Uses [AmbientSound](https://wiki.factorio.com/Prototype/AmbientSound) prototypes. Example: `"ambient/resource-deficiency"`

The following types can be combined with any tile name as long as its prototype defines the
    corresponding sound.
- `"tile-walking"` - Uses [Tile::walking_sound](https://wiki.factorio.com/Prototype/Tile#walking_sound). Example: `"tile-walking/concrete"`
- `"tile-mined"` - Uses [Tile::mined_sound](https://wiki.factorio.com/Prototype/Tile#mined_sound)
- `"tile-build-small"` - Uses [Tile::build_sound](https://wiki.factorio.com/Prototype/Tile#build_sound). Example: `"tile-build-small/concrete"`
- `"tile-build-medium"` - Uses [Tile::build_sound](https://wiki.factorio.com/Prototype/Tile#build_sound)
- `"tile-build-large"` - Uses [Tile::build_sound](https://wiki.factorio.com/Prototype/Tile#build_sound)

The following types can be combined with any entity name as long as its prototype defines the
    corresponding sound.
- `"entity-build"` - Uses [Entity::build_sound](https://wiki.factorio.com/Prototype/Entity#build_sound). Example: `"entity-build/wooden-chest"`
- `"entity-mined"` - Uses [Entity::mined_sound](https://wiki.factorio.com/Prototype/Entity#mined_sound)
- `"entity-mining"` - Uses [Entity::mining_sound](https://wiki.factorio.com/Prototype/Entity#mining_sound)
- `"entity-vehicle_impact"` - Uses [Entity::vehicle_impact_sound](https://wiki.factorio.com/Prototype/Entity#vehicle_impact_sound)
- `"entity-rotated"` - Uses [Entity::rotated_sound](https://wiki.factorio.com/Prototype/Entity#rotated_sound)
- `"entity-open"` - Uses [Entity::open_sound](https://wiki.factorio.com/Prototype/Entity#open_sound)
- `"entity-close"` - Uses [Entity::close_sound](https://wiki.factorio.com/Prototype/Entity#close_sound) */
type SoundPath = string

/** Defines which slider in the game's sound settings affects the volume of this sound. Furthermore, some sound types are mixed differently than others, e.g. zoom level effects are applied. */
/** @noSelf **/
interface SoundType 
{ 
/** Defines which slider in the game's sound settings affects the volume of this sound. Furthermore, some sound types are mixed differently than others, e.g. zoom level effects are applied. */
SoundType: 
/** Defines which slider in the game's sound settings affects the volume of this sound. Furthermore, some sound types are mixed differently than others, e.g. zoom level effects are applied. */
("game-effect" | "gui-effect" | "ambient" | "environment" | "walking" | "alert" | "wind");
 } 
/** @noSelf **/
interface SpawnPointDefinition 
{ 
/** Evolution factor for which this weight applies. */
evolution_factor: number;
 
/** Probability of spawning this unit at this evolution factor. */
weight: number;
 } 

/** It can be either the name of a [sprite prototype](https://wiki.factorio.com/Prototype/Sprite) defined in the data stage, or a path in form "type/name".

The validity of a SpritePath can be verified at runtime using [LuaGameScript::is_valid_sprite_path](LuaGameScript::is_valid_sprite_path).

The supported types are:
- `"item"` - for example "item/iron-plate" is the icon sprite of iron plate
- `"entity"` - for example "entity/small-biter" is the icon sprite of the small biter
- `"technology"`
- `"recipe"`
- `"item-group"`
- `"fluid"`
- `"tile"`
- `"virtual-signal"`
- `"achievement"`
- `"equipment"`
- `"file"` - path to an image file located inside the current scenario. This file is not preloaded so it will be slower; for frequently used sprites, it is better to define sprite prototype and use it instead.
- `"utility"` - sprite defined in the utility-sprites object, these are the pictures used by the game internally for the UI. */
type SpritePath = string
/** @noSelf **/
interface SteeringMapSetting 
{ 
/** Used to make steering look better for aesthetic purposes. */
force_unit_fuzzy_goto_behavior: boolean;
 
/** Does not include the radius of the unit. */
radius: number;
 separation_factor: number;
 separation_force: number;
 } 
/** @noSelf **/
interface SteeringMapSettings 
{ default: SteeringMapSetting;
 moving: SteeringMapSetting;
 } 

/** A surface may be specified in one of three ways. */
/** @noSelf **/
interface SurfaceIdentification 
{ 
/** A surface may be specified in one of three ways. */
SurfaceIdentification: 
/** A surface may be specified in one of three ways. */
(number | string | LuaSurface);
 } 
/** @noSelf **/
interface TabAndContent 
{ content: LuaGuiElement;
 tab: LuaGuiElement;
 } 

/** A dictionary of string to the four basic Lua types: `string`, `boolean`, `number`, `table`. */
/** @noSelf **/
interface Tags 
{ 
/** A dictionary of string to the four basic Lua types: `string`, `boolean`, `number`, `table`. */
Tags: 
/** A dictionary of string to the four basic Lua types: `string`, `boolean`, `number`, `table`. */
Record<string, AnyBasic>;
 } 

/** A technology may be specified in one of three ways. */
/** @noSelf **/
interface TechnologyIdentification 
{ 
/** A technology may be specified in one of three ways. */
TechnologyIdentification: 
/** A technology may be specified in one of three ways. */
(string | LuaTechnology | LuaTechnologyPrototype);
 } 

/** The effect that is applied when a technology is researched. It is a table that contains at least the field `type`. */
/** @noSelf **/
interface TechnologyModifier 
{ 
/** Modifier type. Specifies which of the other fields will be available. Possible values are: `"inserter-stack-size-bonus"`, `"stack-inserter-capacity-bonus"`, `"laboratory-speed"`, `"character-logistic-trash-slots"`, `"maximum-following-robots-count"`, `"worker-robot-speed"`, `"worker-robot-storage"`, `"ghost-time-to-live"`, `"turret-attack"`, `"ammo-damage"`, `"give-item"`, `"gun-speed"`, `"unlock-recipe"`, `"character-crafting-speed"`, `"character-mining-speed"`, `"character-running-speed"`, `"character-build-distance"`, `"character-item-drop-distance"`, `"character-reach-distance"`, `"character-resource-reach-distance"`, `"character-item-pickup-distance"`, `"character-loot-pickup-distance"`, `"character-inventory-slots-bonus"`, `"deconstruction-time-to-live"`, `"max-failed-attempts-per-tick-per-construction-queue"`, `"max-successful-attempts-per-tick-per-construction-queue"`, `"character-health-bonus"`, `"mining-drill-productivity-bonus"`, `"train-braking-force-bonus"`, `"zoom-to-world-enabled"`, `"zoom-to-world-ghost-building-enabled"`, `"zoom-to-world-blueprint-enabled"`, `"zoom-to-world-deconstruction-planner-enabled"`, `"zoom-to-world-upgrade-planner-enabled"`, `"zoom-to-world-selection-tool-enabled"`, `"worker-robot-battery"`, `"laboratory-productivity"`, `"follower-robot-lifetime"`, `"artillery-range"`, `"nothing"`, `"character-additional-mining-categories"`, `"character-logistic-requests"`. */
type: string;
 } 

/** Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following: */
/** @noSelf **/
interface TechnologyPrototypeFilter 
{ 
/** The condition to filter on. One of `"enabled"`, `"hidden"`, `"upgrade"`, `"visible-when-disabled"`, `"has-effects"`, `"has-prerequisites"`, `"research-unit-ingredient"`, `"level"`, `"max-level"`, `"time"`. */
filter: string;
 
/** Inverts the condition. Default is `false`. */
invert: (null | boolean);
 
/** How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`. */
mode: (null | string);
 } 
/** @noSelf **/
interface Tile 
{ 
/** The prototype name of the tile. */
name: string;
 
/** The position of the tile. */
position: TilePosition;
 } 

/** Coordinates of a tile on a [LuaSurface](LuaSurface) where each integer `x`/`y` represents a different tile. This uses the same format as [MapPosition](MapPosition), except it rounds any non-integer `x`/`y` down to whole numbers. It can be specified either with or without explicit keys. */
/** @noSelf **/
interface TilePosition 
{ 
/** Coordinates of a tile on a [LuaSurface](LuaSurface) where each integer `x`/`y` represents a different tile. This uses the same format as [MapPosition](MapPosition), except it rounds any non-integer `x`/`y` down to whole numbers. It can be specified either with or without explicit keys. */
TilePosition: 
/** Coordinates of a tile on a [LuaSurface](LuaSurface) where each integer `x`/`y` represents a different tile. This uses the same format as [MapPosition](MapPosition), except it rounds any non-integer `x`/`y` down to whole numbers. It can be specified either with or without explicit keys. */
(/** @noSelf **/
{ x: number;
 y: number;
 } | ["int","int"]);
 } 

/** Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following: */
/** @noSelf **/
interface TilePrototypeFilter 
{ 
/** The condition to filter on. One of `"minable"`, `"autoplace"`, `"blueprintable"`, `"item-to-place"`, `"collision-mask"`, `"walking-speed-modifier"`, `"vehicle-friction-modifier"`, `"decorative-removal-probability"`, `"emissions"`. */
filter: string;
 
/** Inverts the condition. Default is `false`. */
invert: (null | boolean);
 
/** How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`. */
mode: (null | string);
 } 
/** @noSelf **/
interface TrainSchedule 
{ 
/** Index of the currently active record */
current: number;
 records: TrainScheduleRecord[];
 } 
/** @noSelf **/
interface TrainScheduleRecord 
{ 
/** Rail to path to. Ignored if `station` is present. */
rail: (null | LuaEntity);
 
/** When a train is allowed to reach rail target from any direction it will be `nil`. If rail has to be reached from specific direction, this value allows to choose the direction. This value corresponds to [LuaEntity::connected_rail_direction](LuaEntity::connected_rail_direction) of a TrainStop. */
rail_direction: (null | typeof defines.rail_direction);
 
/** Name of the station. */
station: (null | string);
 
/** Only present when the station is temporary, the value is then always `true`. */
temporary: (null | boolean);
 wait_conditions: WaitCondition[];
 } 
/** @noSelf **/
interface TriggerDelivery 
{ source_effects: TriggerEffectItem[];
 target_effects: TriggerEffectItem[];
 
/** One of `"instant"`, `"projectile"`, `"flame-thrower"`, `"beam"`, `"stream"`, `"artillery"`. */
type: string;
 } 
/** @noSelf **/
interface TriggerEffectItem 
{ affects_target: boolean;
 repeat_count: number;
 show_in_tooltip: boolean;
 
/** One of`"damage"`, `"create-entity"`, `"create-explosion"`, `"create-fire"`, `"create-smoke"`, `"create-trivial-smoke"`, `"create-particle"`, `"create-sticker"`, `"nested-result"`, `"play-sound"`, `"push-back"`, `"destroy-cliffs"`, `"show-explosion-on-chart"`, `"insert-item"`, `"script"`. */
type: string;
 } 
/** @noSelf **/
interface TriggerItem 
{ action_delivery: TriggerDelivery[];
 
/** The trigger will only affect entities that would collide with given collision mask. */
collision_mask: CollisionMask;
 
/** The trigger will only affect entities that contain any of these flags. */
entity_flags: (null | EntityPrototypeFlags);
 
/** If `"enemy"`, the trigger will only affect entities whose force is different from the attacker's and for which there is no cease-fire set. `"ally"` is the opposite of `"enemy"`. */
force: ForceCondition;
 ignore_collision_condition: boolean;
 repeat_count: number;
 trigger_target_mask: TriggerTargetMask;
 
/** One of `"direct"`, `"area"`, `"line"`, `"cluster"`. */
type: string;
 } 

/** A set of trigger target masks. */
/** @noSelf **/
interface TriggerTargetMask 
{ 
/** A set of trigger target masks. */
TriggerTargetMask: 
/** A set of trigger target masks. */
Record<string, boolean>;
 } 
/** @noSelf **/
interface UnitGroupMapSettings 
{ 
/** The maximum number of automatically created unit groups gathering for attack at any time. Defaults to `30`. */
max_gathering_unit_groups: number;
 
/** The maximum amount of time in ticks a group will spend gathering before setting off. The actual time is a random time between the minimum and maximum times. Defaults to `10*3,600=36,000` ticks. */
max_group_gathering_time: number;
 
/** When a member of a group falls back more than this factor times the group radius, the group will slow down to its `max_group_slowdown_factor` speed to let them catch up. Defaults to `3`. */
max_group_member_fallback_factor: number;
 
/** The maximum group radius in tiles. The actual radius is adjusted based on the number of members. Defaults to `30.0`. */
max_group_radius: number;
 
/** The minimum speed as a percentage of its maximum speed that a group will slow down to so members that fell behind can catch up. Defaults to `0.3`, or 30%. */
max_group_slowdown_factor: number;
 
/** The minimum speed a percentage of its regular speed that a group member can slow down to when ahead of the group. Defaults to `0.6`, or 60%. */
max_member_slowdown_when_ahead: number;
 
/** The maximum speed a percentage of its regular speed that a group member can speed up to when catching up with the group. Defaults to `1.4`, or 140%. */
max_member_speedup_when_behind: number;
 
/** The maximum number of members for an attack unit group. This only affects automatically created unit groups, manual groups created through the API are unaffected. Defaults to `200`. */
max_unit_group_size: number;
 
/** After gathering has finished, the group is allowed to wait this long in ticks for delayed members. New members are not accepted anymore however. Defaults to `2*3,600=7,200` ticks. */
max_wait_time_for_late_members: number;
 
/** When a member of a group falls back more than this factor times the group radius, it will be dropped from the group. Defaults to `10`. */
member_disown_distance: number;
 
/** The minimum amount of time in ticks a group will spend gathering before setting off. The actual time is a random time between the minimum and maximum times. Defaults to `3,600` ticks. */
min_group_gathering_time: number;
 
/** The minimum group radius in tiles. The actual radius is adjusted based on the number of members. Defaults to `5.0`. */
min_group_radius: number;
 tick_tolerance_when_member_arrives: number;
 } 
/** @noSelf **/
interface UnitSpawnDefinition 
{ 
/** The points at which to spawn the unit. */
spawn_points: 
/** The points at which to spawn the unit. */
SpawnPointDefinition[];
 
/** Prototype name of the unit that would be spawned. */
unit: string;
 } 
/** @noSelf **/
interface UpgradeFilter 
{ 
/** Name of the item, or entity. */
name: (null | string);
 
/** `"item"`, or `"entity"`. */
type: string;
 } 

/** A vector is a two-element array containing the `x` and `y` components. In some specific cases, the vector is a table with `x` and `y` keys instead, which the documentation will point out. */
/** @noSelf **/
interface Vector 
{ 
/** A vector is a two-element array containing the `x` and `y` components. In some specific cases, the vector is a table with `x` and `y` keys instead, which the documentation will point out. */
Vector: 
/** A vector is a two-element array containing the `x` and `y` components. In some specific cases, the vector is a table with `x` and `y` keys instead, which the documentation will point out. */
(/** @noSelf **/
{ x: number;
 y: number;
 } | ["float","float"]);
 } 
/** @noSelf **/
interface VehicleAutomaticTargetingParameters 
{ auto_target_with_gunner: boolean;
 auto_target_without_gunner: boolean;
 } 
/** @noSelf **/
interface WaitCondition 
{ 
/** Either `"and"`, or `"or"`. Tells how this condition is to be compared with the preceding conditions in the corresponding `wait_conditions` array. */
compare_type: string;
 
/** Only present when `type` is `"item_count"`, `"circuit"` or `"fluid_count"`. */
condition: (null | CircuitCondition);
 
/** Number of ticks to wait or of inactivity. Only present when `type` is `"time"` or `"inactivity"`. */
ticks: (null | number);
 
/** One of `"time"`, `"inactivity"`, `"full"`, `"empty"`, `"item_count"`, `"circuit"`, `"robots_inactive"`, `"fluid_count"`, `"passenger_present"`, `"passenger_not_present"`. */
type: string;
 } 
/** @noSelf **/
interface WireConnectionDefinition 
{ 
/** Mandatory if the source entity has more than one circuit connection using circuit wire. */
source_circuit_id: (null | typeof defines.circuit_connector_id);
 
/** Mandatory if the source entity has more than one wire connection using copper wire. */
source_wire_id: (null | typeof defines.circuit_connector_id);
 
/** Mandatory if the target entity has more than one circuit connection using circuit wire. */
target_circuit_id: (null | typeof defines.circuit_connector_id);
 
/** The entity to (dis)connect the source entity with. */
target_entity: LuaEntity;
 
/** Mandatory if the target entity has more than one wire connection using copper wire. */
target_wire_id: (null | typeof defines.circuit_connector_id);
 
/** Wire color, either [defines.wire_type.red](defines.wire_type.red) or [defines.wire_type.green](defines.wire_type.green). */
wire: typeof defines.wire_type;
 } 
/** classes */
/** events */
/** globals */
/** This is the main object, through which most of the API is accessed. It is, however, not available inside handlers registered with LuaBootstrap::on_load. */
declare const game: LuaGameScript;
/** Provides an interface for registering event handlers. */
declare const script: LuaBootstrap;
/** Allows inter-mod communication by way of providing a repository of interfaces that is shared by all mods. */
declare const remote: LuaRemote;
/** Allows registering custom commands for the in-game console accessible via the grave key. */
declare const commands: LuaCommandProcessor;
/** Allows reading the current mod settings. */
declare const settings: LuaSettings;
/** Allows printing messages to the calling RCON instance if any. */
declare const rcon: LuaRCON;
/** Allows rendering of geometric shapes, text and sprites in the game world. */
declare const rendering: LuaRendering;
/** libs */
/** noSelfInFile **/
type SerpentOptions = {
  /** indentation; triggers long multi-line output. */
  indent: string;
  /** provide stringified value in a comment (up to maxlevel of depth). */
  comment: boolean | number;
  /** sort keys. */
  sortkeys: boolean | ((...args: unknown[]) => any);
  /** force sparse encoding (no nil filling based on #t). */
  sparse: boolean;
  /** remove spaces. */
  compact: boolean;
  /** raise fatal error on non-serilizable values. */
  fatal: boolean;
  /** disable bytecode serialization for easy comparison. */
  nocode: boolean;
  /** disable checking numbers against undefined and huge values. */
  nohuge: boolean;
  /** specify max level up to which to expand nested tables. */
  maxlevel: number;
  /** specify max number of elements in a table. */
  maxnum: number;
  /** specify max length for all table elements. */
  maxlength: number;
  /** use __tostring metamethod when serializing tables (v0.29); set to false to disable and serialize the table as is, even when __tostring is present. */
  metatostring: boolean;
  /** specify format for numeric values as shortest possible round-trippable double (v0.30). Use "%.16g" for better readability and "%.17g" (the default value) to preserve floating point precision. */
  numformat: string;
  /** allows to specify a list of values to ignore (as keys). */
  valignore: string[];
  /** allows to specify the list of keys to be serialized. Any keys not in this list are not included in final output (as keys). */
  keyallow: string[];
  /** allows to specity the list of keys to ignore in serialization. */
  keyignore: string[];
  /** allows to specify a list of value types to ignore (as keys). */
  valtypeignore: string[];
  /** provide custom output for tables. */
  custom: (opts: {
    /**  the name of the current element with '=' or an empty string in case of array index, */
    tag: any;
    /**  an opening table bracket { and associated indentation and newline (if any), */
    head: any;
    /**  table elements concatenated into a string using commas and indentation/newlines (if any), */
    body: any;
    /**  a closing table bracket } and associated indentation and newline (if any), and */
    tail: any;
    /**  the current level. */
    level: any;
  }) => any;
  /** name; triggers full serialization with self-ref section. */
  name: string;
};
declare const serpent: Serpent;

/** @noSelf **/
interface Serpent {
  /** full serialization; sets name, compact and sparse options; */
  dump(tbl: any, options?: Partial<SerpentOptions>): string;
  /** single line pretty printing, no self-ref section; sets sortkeys and comment options; */
  line(tbl: any, options?: Partial<SerpentOptions>): string;
  /** multi-line indented pretty printing, no self-ref section; sets indent, sortkeys, and comment options. */
  block(tbl: any, options?: Partial<SerpentOptions>): string;
}

/** This function allows to log LocalisedStrings to the Factorio log file. This, in combination with serpent, makes debugging in the data stage easier, because it allows to simply inspect entire prototype tables. For example, this allows to see all properties of the sulfur item prototype: log(serpent.block(data.raw["item"]["sulfur"])) */
// @ts-ignore
declare const log: (ls: LocalisedString) => void;

// @ts-ignore
declare const print: (v: any) => void;

/** This function allows printing LocalisedStrings to stdout without polluting the logfile. This is primarily useful for communicating with external tools that launch Factorio as a child process. */
declare const localised_print: typeof log;

declare const table_size: <T extends {}>(v: T) => number;

declare const pairs: <K, V, M extends Map<K, V>>(v: M) => [K, V][];

// https://lua-api.factorio.com/latest/LuaLazyLoadedValue.html
type LuaLazyLoadedValue<T> = {
  /** Is this object valid? */
  readonly valid: boolean;
  /** The class name of this object. */
  readonly object_name: string;
  /** Gets the value of this lazy loaded value. */
  get: () => T;
  /** All methods, and properties that this object supports. */
  help: () => string;
};

/**
 * Some factorio typedefs ref LLV w/out Lua prefix :|
 */
type LazyLoadedValue<T> = LuaLazyLoadedValue<T>;

/**
 * Waypoint defined ad-hoc, inline here: https://lua-api.factorio.com/latest/events.html#on_script_path_request_finished
 * Should probably be moved to a Concept on the concept page
 */
type Waypoint = {
  position: Position;
  /** if the path from the previous Waypoint to this one goes through an entity that must be destroyed. */
  needs_destroy_to_reach: boolean;
};

/** hacks */
/** unimplented!
 * @see {https://lua-api.factorio.com/latest/Event-Filters.html Filters} */
type Filters = unknown;