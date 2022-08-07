/** @noSelfInFile */
/** defines */
declare const defines: Defines;

/** Factorio constants, persistent handles.
@{see https://lua-api.factorio.com/latest/defines.html}
Factorio does not include types associated with defines :/ */
/** @noSelf **/
interface Defines 
{ alert_type: /** @noSelf **/
{ custom: any;
 entity_destroyed: any;
 entity_under_attack: any;
 no_material_for_construction: any;
 no_storage: any;
 not_enough_construction_robots: any;
 not_enough_repair_packs: any;
 train_out_of_fuel: any;
 turret_fire: any;
 };
 behavior_result: /** @noSelf **/
{ deleted: any;
 fail: any;
 in_progress: any;
 success: any;
 };
 build_check_type: /** @noSelf **/
{ blueprint_ghost: any;
 ghost_revive: any;
 manual: any;
 manual_ghost: any;
 script: any;
 script_ghost: any;
 };
 chain_signal_state: /** @noSelf **/
{ all_open: any;
 none: any;
 none_open: any;
 partially_open: any;
 };
 chunk_generated_status: /** @noSelf **/
{ basic_tiles: any;
 corrected_tiles: any;
 custom_tiles: any;
 entities: any;
 nothing: any;
 tiles: any;
 };
 circuit_condition_index: /** @noSelf **/
{ arithmetic_combinator: any;
 constant_combinator: any;
 decider_combinator: any;
 inserter_circuit: any;
 inserter_logistic: any;
 lamp: any;
 offshore_pump: any;
 pump: any;
 };
 circuit_connector_id: /** @noSelf **/
{ accumulator: any;
 combinator_input: any;
 combinator_output: any;
 constant_combinator: any;
 container: any;
 electric_pole: any;
 inserter: any;
 lamp: any;
 linked_container: any;
 offshore_pump: any;
 programmable_speaker: any;
 pump: any;
 rail_chain_signal: any;
 rail_signal: any;
 roboport: any;
 storage_tank: any;
 wall: any;
 };
 command: /** @noSelf **/
{ attack: any;
 attack_area: any;
 build_base: any;
 compound: any;
 flee: any;
 go_to_location: any;
 group: any;
 stop: any;
 wander: any;
 };
 compound_command: /** @noSelf **/
{ logical_and: any;
 logical_or: any;
 return_last: any;
 };
 control_behavior: /** @noSelf **/
{ inserter: /** @noSelf **/
{ circuit_mode_of_operation: /** @noSelf **/
{ enable_disable: any;
 none: any;
 read_hand_contents: any;
 set_filters: any;
 set_stack_size: any;
 };
 hand_read_mode: /** @noSelf **/
{ hold: any;
 pulse: any;
 };
 };
 lamp: /** @noSelf **/
{ circuit_mode_of_operation: /** @noSelf **/
{ use_colors: any;
 };
 };
 logistic_container: /** @noSelf **/
{ circuit_mode_of_operation: /** @noSelf **/
{ send_contents: any;
 set_requests: any;
 };
 };
 mining_drill: /** @noSelf **/
{ resource_read_mode: /** @noSelf **/
{ entire_patch: any;
 this_miner: any;
 };
 };
 transport_belt: /** @noSelf **/
{ content_read_mode: /** @noSelf **/
{ hold: any;
 pulse: any;
 };
 };
 type: /** @noSelf **/
{ accumulator: any;
 arithmetic_combinator: any;
 constant_combinator: any;
 container: any;
 decider_combinator: any;
 generic_on_off: any;
 inserter: any;
 lamp: any;
 logistic_container: any;
 mining_drill: any;
 programmable_speaker: any;
 rail_chain_signal: any;
 rail_signal: any;
 roboport: any;
 storage_tank: any;
 train_stop: any;
 transport_belt: any;
 wall: any;
 };
 };
 controllers: /** @noSelf **/
{ character: any;
 cutscene: any;
 editor: any;
 ghost: any;
 god: any;
 spectator: any;
 };
 deconstruction_item: /** @noSelf **/
{ entity_filter_mode: /** @noSelf **/
{ blacklist: any;
 whitelist: any;
 };
 tile_filter_mode: /** @noSelf **/
{ blacklist: any;
 whitelist: any;
 };
 tile_selection_mode: /** @noSelf **/
{ always: any;
 never: any;
 normal: any;
 only: any;
 };
 };
 difficulty: /** @noSelf **/
{ easy: any;
 hard: any;
 normal: any;
 };
 difficulty_settings: /** @noSelf **/
{ recipe_difficulty: /** @noSelf **/
{ expensive: any;
 normal: any;
 };
 technology_difficulty: /** @noSelf **/
{ expensive: any;
 normal: any;
 };
 };
 direction: /** @noSelf **/
{ east: any;
 north: any;
 northeast: any;
 northwest: any;
 south: any;
 southeast: any;
 southwest: any;
 west: any;
 };
 disconnect_reason: /** @noSelf **/
{ afk: any;
 banned: any;
 cannot_keep_up: any;
 desync_limit_reached: any;
 dropped: any;
 kicked: any;
 kicked_and_deleted: any;
 quit: any;
 reconnect: any;
 switching_servers: any;
 wrong_input: any;
 };
 distraction: /** @noSelf **/
{ by_anything: any;
 by_damage: any;
 by_enemy: any;
 none: any;
 };
 entity_status: /** @noSelf **/
{ cant_divide_segments: any;
 charging: any;
 closed_by_circuit_network: any;
 disabled: any;
 disabled_by_control_behavior: any;
 disabled_by_script: any;
 discharging: any;
 fluid_ingredient_shortage: any;
 full_output: any;
 fully_charged: any;
 item_ingredient_shortage: any;
 launching_rocket: any;
 low_input_fluid: any;
 low_power: any;
 low_temperature: any;
 marked_for_deconstruction: any;
 missing_required_fluid: any;
 missing_science_packs: any;
 networks_connected: any;
 networks_disconnected: any;
 no_ammo: any;
 no_fuel: any;
 no_ingredients: any;
 no_input_fluid: any;
 no_minable_resources: any;
 no_modules_to_transmit: any;
 no_power: any;
 no_recipe: any;
 no_research_in_progress: any;
 normal: any;
 not_connected_to_rail: any;
 not_plugged_in_electric_network: any;
 opened_by_circuit_network: any;
 out_of_logistic_network: any;
 preparing_rocket_for_launch: any;
 recharging_after_power_outage: any;
 turned_off_during_daytime: any;
 waiting_for_source_items: any;
 waiting_for_space_in_destination: any;
 waiting_for_target_to_be_built: any;
 waiting_for_train: any;
 waiting_to_launch_rocket: any;
 working: any;
 };
 events: /** @noSelf **/
{ on_ai_command_completed: any;
 on_area_cloned: any;
 on_biter_base_built: any;
 on_brush_cloned: any;
 on_build_base_arrived: any;
 on_built_entity: any;
 on_cancelled_deconstruction: any;
 on_cancelled_upgrade: any;
 on_character_corpse_expired: any;
 on_chart_tag_added: any;
 on_chart_tag_modified: any;
 on_chart_tag_removed: any;
 on_chunk_charted: any;
 on_chunk_deleted: any;
 on_chunk_generated: any;
 on_combat_robot_expired: any;
 on_console_chat: any;
 on_console_command: any;
 on_cutscene_cancelled: any;
 on_cutscene_waypoint_reached: any;
 on_difficulty_settings_changed: any;
 on_entity_cloned: any;
 on_entity_damaged: any;
 on_entity_destroyed: any;
 on_entity_died: any;
 on_entity_logistic_slot_changed: any;
 on_entity_renamed: any;
 on_entity_settings_pasted: any;
 on_entity_spawned: any;
 on_equipment_inserted: any;
 on_equipment_removed: any;
 on_force_cease_fire_changed: any;
 on_force_created: any;
 on_force_friends_changed: any;
 on_force_reset: any;
 on_forces_merged: any;
 on_forces_merging: any;
 on_game_created_from_scenario: any;
 on_gui_checked_state_changed: any;
 on_gui_click: any;
 on_gui_closed: any;
 on_gui_confirmed: any;
 on_gui_elem_changed: any;
 on_gui_location_changed: any;
 on_gui_opened: any;
 on_gui_selected_tab_changed: any;
 on_gui_selection_state_changed: any;
 on_gui_switch_state_changed: any;
 on_gui_text_changed: any;
 on_gui_value_changed: any;
 on_land_mine_armed: any;
 on_lua_shortcut: any;
 on_marked_for_deconstruction: any;
 on_marked_for_upgrade: any;
 on_market_item_purchased: any;
 on_mod_item_opened: any;
 on_permission_group_added: any;
 on_permission_group_deleted: any;
 on_permission_group_edited: any;
 on_permission_string_imported: any;
 on_picked_up_item: any;
 on_player_alt_selected_area: any;
 on_player_ammo_inventory_changed: any;
 on_player_armor_inventory_changed: any;
 on_player_banned: any;
 on_player_built_tile: any;
 on_player_cancelled_crafting: any;
 on_player_changed_force: any;
 on_player_changed_position: any;
 on_player_changed_surface: any;
 on_player_cheat_mode_disabled: any;
 on_player_cheat_mode_enabled: any;
 on_player_clicked_gps_tag: any;
 on_player_configured_blueprint: any;
 on_player_configured_spider_remote: any;
 on_player_crafted_item: any;
 on_player_created: any;
 on_player_cursor_stack_changed: any;
 on_player_deconstructed_area: any;
 on_player_demoted: any;
 on_player_died: any;
 on_player_display_resolution_changed: any;
 on_player_display_scale_changed: any;
 on_player_driving_changed_state: any;
 on_player_dropped_item: any;
 on_player_fast_transferred: any;
 on_player_flushed_fluid: any;
 on_player_gun_inventory_changed: any;
 on_player_joined_game: any;
 on_player_kicked: any;
 on_player_left_game: any;
 on_player_main_inventory_changed: any;
 on_player_mined_entity: any;
 on_player_mined_item: any;
 on_player_mined_tile: any;
 on_player_muted: any;
 on_player_pipette: any;
 on_player_placed_equipment: any;
 on_player_promoted: any;
 on_player_removed: any;
 on_player_removed_equipment: any;
 on_player_repaired_entity: any;
 on_player_respawned: any;
 on_player_reverse_selected_area: any;
 on_player_rotated_entity: any;
 on_player_selected_area: any;
 on_player_set_quick_bar_slot: any;
 on_player_setup_blueprint: any;
 on_player_toggled_alt_mode: any;
 on_player_toggled_map_editor: any;
 on_player_trash_inventory_changed: any;
 on_player_unbanned: any;
 on_player_unmuted: any;
 on_player_used_capsule: any;
 on_player_used_spider_remote: any;
 on_post_entity_died: any;
 on_pre_build: any;
 on_pre_chunk_deleted: any;
 on_pre_entity_settings_pasted: any;
 on_pre_ghost_deconstructed: any;
 on_pre_ghost_upgraded: any;
 on_pre_permission_group_deleted: any;
 on_pre_permission_string_imported: any;
 on_pre_player_crafted_item: any;
 on_pre_player_died: any;
 on_pre_player_left_game: any;
 on_pre_player_mined_item: any;
 on_pre_player_removed: any;
 on_pre_player_toggled_map_editor: any;
 on_pre_robot_exploded_cliff: any;
 on_pre_script_inventory_resized: any;
 on_pre_surface_cleared: any;
 on_pre_surface_deleted: any;
 on_research_cancelled: any;
 on_research_finished: any;
 on_research_reversed: any;
 on_research_started: any;
 on_resource_depleted: any;
 on_robot_built_entity: any;
 on_robot_built_tile: any;
 on_robot_exploded_cliff: any;
 on_robot_mined: any;
 on_robot_mined_entity: any;
 on_robot_mined_tile: any;
 on_robot_pre_mined: any;
 on_rocket_launch_ordered: any;
 on_rocket_launched: any;
 on_runtime_mod_setting_changed: any;
 on_script_inventory_resized: any;
 on_script_path_request_finished: any;
 on_script_trigger_effect: any;
 on_sector_scanned: any;
 on_selected_entity_changed: any;
 on_spider_command_completed: any;
 on_string_translated: any;
 on_surface_cleared: any;
 on_surface_created: any;
 on_surface_deleted: any;
 on_surface_imported: any;
 on_surface_renamed: any;
 on_technology_effects_reset: any;
 on_tick: any;
 on_train_changed_state: any;
 on_train_created: any;
 on_train_schedule_changed: any;
 on_trigger_created_entity: any;
 on_trigger_fired_artillery: any;
 on_unit_added_to_group: any;
 on_unit_group_created: any;
 on_unit_group_finished_gathering: any;
 on_unit_removed_from_group: any;
 on_worker_robot_expired: any;
 script_raised_built: any;
 script_raised_destroy: any;
 script_raised_revive: any;
 script_raised_set_tiles: any;
 };
 flow_precision_index: /** @noSelf **/
{ fifty_hours: any;
 five_seconds: any;
 one_hour: any;
 one_minute: any;
 one_thousand_hours: any;
 ten_hours: any;
 ten_minutes: any;
 two_hundred_fifty_hours: any;
 };
 group_state: /** @noSelf **/
{ attacking_distraction: any;
 attacking_target: any;
 finished: any;
 gathering: any;
 moving: any;
 pathfinding: any;
 wander_in_group: any;
 };
 gui_type: /** @noSelf **/
{ achievement: any;
 blueprint_library: any;
 bonus: any;
 controller: any;
 custom: any;
 entity: any;
 equipment: any;
 item: any;
 logistic: any;
 none: any;
 other_player: any;
 permissions: any;
 player_management: any;
 production: any;
 research: any;
 script_inventory: any;
 server_management: any;
 tile: any;
 trains: any;
 tutorials: any;
 };
 input_action: /** @noSelf **/
{ activate_copy: any;
 activate_cut: any;
 activate_paste: any;
 add_permission_group: any;
 add_train_station: any;
 admin_action: any;
 alt_select_area: any;
 alt_select_blueprint_entities: any;
 alternative_copy: any;
 begin_mining: any;
 begin_mining_terrain: any;
 build: any;
 build_rail: any;
 build_terrain: any;
 cancel_craft: any;
 cancel_deconstruct: any;
 cancel_new_blueprint: any;
 cancel_research: any;
 cancel_upgrade: any;
 change_active_character_tab: any;
 change_active_item_group_for_crafting: any;
 change_active_item_group_for_filters: any;
 change_active_quick_bar: any;
 change_arithmetic_combinator_parameters: any;
 change_decider_combinator_parameters: any;
 change_entity_label: any;
 change_item_description: any;
 change_item_label: any;
 change_multiplayer_config: any;
 change_picking_state: any;
 change_programmable_speaker_alert_parameters: any;
 change_programmable_speaker_circuit_parameters: any;
 change_programmable_speaker_parameters: any;
 change_riding_state: any;
 change_shooting_state: any;
 change_train_stop_station: any;
 change_train_wait_condition: any;
 change_train_wait_condition_data: any;
 clear_cursor: any;
 connect_rolling_stock: any;
 copy: any;
 copy_entity_settings: any;
 copy_opened_blueprint: any;
 copy_opened_item: any;
 craft: any;
 cursor_split: any;
 cursor_transfer: any;
 custom_input: any;
 cycle_blueprint_book_backwards: any;
 cycle_blueprint_book_forwards: any;
 deconstruct: any;
 delete_blueprint_library: any;
 delete_blueprint_record: any;
 delete_custom_tag: any;
 delete_permission_group: any;
 destroy_item: any;
 destroy_opened_item: any;
 disconnect_rolling_stock: any;
 drag_train_schedule: any;
 drag_train_wait_condition: any;
 drop_blueprint_record: any;
 drop_item: any;
 edit_blueprint_tool_preview: any;
 edit_custom_tag: any;
 edit_permission_group: any;
 export_blueprint: any;
 fast_entity_split: any;
 fast_entity_transfer: any;
 flush_opened_entity_fluid: any;
 flush_opened_entity_specific_fluid: any;
 go_to_train_station: any;
 grab_blueprint_record: any;
 gui_checked_state_changed: any;
 gui_click: any;
 gui_confirmed: any;
 gui_elem_changed: any;
 gui_location_changed: any;
 gui_selected_tab_changed: any;
 gui_selection_state_changed: any;
 gui_switch_state_changed: any;
 gui_text_changed: any;
 gui_value_changed: any;
 import_blueprint: any;
 import_blueprint_string: any;
 import_blueprints_filtered: any;
 import_permissions_string: any;
 inventory_split: any;
 inventory_transfer: any;
 launch_rocket: any;
 lua_shortcut: any;
 map_editor_action: any;
 market_offer: any;
 mod_settings_changed: any;
 open_achievements_gui: any;
 open_blueprint_library_gui: any;
 open_blueprint_record: any;
 open_bonus_gui: any;
 open_character_gui: any;
 open_current_vehicle_gui: any;
 open_equipment: any;
 open_gui: any;
 open_item: any;
 open_logistic_gui: any;
 open_mod_item: any;
 open_parent_of_opened_item: any;
 open_production_gui: any;
 open_technology_gui: any;
 open_tips_and_tricks_gui: any;
 open_train_gui: any;
 open_train_station_gui: any;
 open_trains_gui: any;
 paste_entity_settings: any;
 place_equipment: any;
 quick_bar_pick_slot: any;
 quick_bar_set_selected_page: any;
 quick_bar_set_slot: any;
 reassign_blueprint: any;
 remove_cables: any;
 remove_train_station: any;
 reset_assembling_machine: any;
 reset_item: any;
 reverse_select_area: any;
 rotate_entity: any;
 select_area: any;
 select_blueprint_entities: any;
 select_entity_slot: any;
 select_item: any;
 select_mapper_slot: any;
 select_next_valid_gun: any;
 select_tile_slot: any;
 send_spidertron: any;
 set_auto_launch_rocket: any;
 set_autosort_inventory: any;
 set_behavior_mode: any;
 set_car_weapons_control: any;
 set_circuit_condition: any;
 set_circuit_mode_of_operation: any;
 set_controller_logistic_trash_filter_item: any;
 set_deconstruction_item_tile_selection_mode: any;
 set_deconstruction_item_trees_and_rocks_only: any;
 set_entity_color: any;
 set_entity_energy_property: any;
 set_entity_logistic_trash_filter_item: any;
 set_filter: any;
 set_flat_controller_gui: any;
 set_heat_interface_mode: any;
 set_heat_interface_temperature: any;
 set_infinity_container_filter_item: any;
 set_infinity_container_remove_unfiltered_items: any;
 set_infinity_pipe_filter: any;
 set_inserter_max_stack_size: any;
 set_inventory_bar: any;
 set_linked_container_link_i_d: any;
 set_logistic_filter_item: any;
 set_logistic_filter_signal: any;
 set_player_color: any;
 set_recipe_notifications: any;
 set_request_from_buffers: any;
 set_research_finished_stops_game: any;
 set_signal: any;
 set_splitter_priority: any;
 set_train_stopped: any;
 set_trains_limit: any;
 set_vehicle_automatic_targeting_parameters: any;
 setup_assembling_machine: any;
 setup_blueprint: any;
 setup_single_blueprint_record: any;
 smart_pipette: any;
 spawn_item: any;
 stack_split: any;
 stack_transfer: any;
 start_repair: any;
 start_research: any;
 start_walking: any;
 stop_building_by_moving: any;
 switch_connect_to_logistic_network: any;
 switch_constant_combinator_state: any;
 switch_inserter_filter_mode_state: any;
 switch_power_switch_state: any;
 switch_to_rename_stop_gui: any;
 take_equipment: any;
 toggle_deconstruction_item_entity_filter_mode: any;
 toggle_deconstruction_item_tile_filter_mode: any;
 toggle_driving: any;
 toggle_enable_vehicle_logistics_while_moving: any;
 toggle_entity_logistic_requests: any;
 toggle_equipment_movement_bonus: any;
 toggle_map_editor: any;
 toggle_personal_logistic_requests: any;
 toggle_personal_roboport: any;
 toggle_show_entity_info: any;
 translate_string: any;
 undo: any;
 upgrade: any;
 upgrade_opened_blueprint_by_item: any;
 upgrade_opened_blueprint_by_record: any;
 use_artillery_remote: any;
 use_item: any;
 wire_dragging: any;
 write_to_console: any;
 };
 input_method: /** @noSelf **/
{ game_controller: any;
 keyboard_and_mouse: any;
 };
 inventory: /** @noSelf **/
{ artillery_turret_ammo: any;
 artillery_wagon_ammo: any;
 assembling_machine_input: any;
 assembling_machine_modules: any;
 assembling_machine_output: any;
 beacon_modules: any;
 burnt_result: any;
 car_ammo: any;
 car_trunk: any;
 cargo_wagon: any;
 character_ammo: any;
 character_armor: any;
 character_corpse: any;
 character_guns: any;
 character_main: any;
 character_trash: any;
 character_vehicle: any;
 chest: any;
 editor_ammo: any;
 editor_armor: any;
 editor_guns: any;
 editor_main: any;
 fuel: any;
 furnace_modules: any;
 furnace_result: any;
 furnace_source: any;
 god_main: any;
 item_main: any;
 lab_input: any;
 lab_modules: any;
 mining_drill_modules: any;
 roboport_material: any;
 roboport_robot: any;
 robot_cargo: any;
 robot_repair: any;
 rocket: any;
 rocket_silo_input: any;
 rocket_silo_modules: any;
 rocket_silo_output: any;
 rocket_silo_result: any;
 rocket_silo_rocket: any;
 spider_ammo: any;
 spider_trash: any;
 spider_trunk: any;
 turret_ammo: any;
 };
 logistic_member_index: /** @noSelf **/
{ character_provider: any;
 character_requester: any;
 character_storage: any;
 generic_on_off_behavior: any;
 logistic_container: any;
 vehicle_storage: any;
 };
 logistic_mode: /** @noSelf **/
{ active_provider: any;
 buffer: any;
 none: any;
 passive_provider: any;
 requester: any;
 storage: any;
 };
 mouse_button_type: /** @noSelf **/
{ left: any;
 middle: any;
 none: any;
 right: any;
 };
 rail_connection_direction: /** @noSelf **/
{ left: any;
 none: any;
 right: any;
 straight: any;
 };
 rail_direction: /** @noSelf **/
{ back: any;
 front: any;
 };
 relative_gui_position: /** @noSelf **/
{ bottom: any;
 left: any;
 right: any;
 top: any;
 };
 relative_gui_type: /** @noSelf **/
{ accumulator_gui: any;
 achievement_gui: any;
 additional_entity_info_gui: any;
 admin_gui: any;
 arithmetic_combinator_gui: any;
 armor_gui: any;
 assembling_machine_gui: any;
 assembling_machine_select_recipe_gui: any;
 beacon_gui: any;
 blueprint_book_gui: any;
 blueprint_library_gui: any;
 blueprint_setup_gui: any;
 bonus_gui: any;
 burner_equipment_gui: any;
 car_gui: any;
 constant_combinator_gui: any;
 container_gui: any;
 controller_gui: any;
 decider_combinator_gui: any;
 deconstruction_item_gui: any;
 electric_energy_interface_gui: any;
 electric_network_gui: any;
 entity_variations_gui: any;
 entity_with_energy_source_gui: any;
 equipment_grid_gui: any;
 furnace_gui: any;
 generic_on_off_entity_gui: any;
 heat_interface_gui: any;
 infinity_pipe_gui: any;
 inserter_gui: any;
 item_with_inventory_gui: any;
 lab_gui: any;
 lamp_gui: any;
 linked_container_gui: any;
 loader_gui: any;
 logistic_gui: any;
 market_gui: any;
 mining_drill_gui: any;
 other_player_gui: any;
 permissions_gui: any;
 pipe_gui: any;
 power_switch_gui: any;
 production_gui: any;
 programmable_speaker_gui: any;
 rail_chain_signal_gui: any;
 rail_signal_gui: any;
 reactor_gui: any;
 rename_stop_gui: any;
 resource_entity_gui: any;
 roboport_gui: any;
 rocket_silo_gui: any;
 script_inventory_gui: any;
 server_config_gui: any;
 spider_vehicle_gui: any;
 splitter_gui: any;
 standalone_character_gui: any;
 storage_tank_gui: any;
 tile_variations_gui: any;
 train_gui: any;
 train_stop_gui: any;
 trains_gui: any;
 transport_belt_gui: any;
 upgrade_item_gui: any;
 wall_gui: any;
 };
 render_mode: /** @noSelf **/
{ chart: any;
 chart_zoomed_in: any;
 game: any;
 };
 rich_text_setting: /** @noSelf **/
{ disabled: any;
 enabled: any;
 highlight: any;
 };
 riding: /** @noSelf **/
{ acceleration: /** @noSelf **/
{ accelerating: any;
 braking: any;
 nothing: any;
 reversing: any;
 };
 direction: /** @noSelf **/
{ left: any;
 right: any;
 straight: any;
 };
 };
 rocket_silo_status: /** @noSelf **/
{ arms_advance: any;
 arms_retract: any;
 building_rocket: any;
 create_rocket: any;
 doors_closing: any;
 doors_opened: any;
 doors_opening: any;
 engine_starting: any;
 launch_started: any;
 launch_starting: any;
 lights_blinking_close: any;
 lights_blinking_open: any;
 rocket_flying: any;
 rocket_ready: any;
 rocket_rising: any;
 };
 shooting: /** @noSelf **/
{ not_shooting: any;
 shooting_enemies: any;
 shooting_selected: any;
 };
 signal_state: /** @noSelf **/
{ closed: any;
 open: any;
 reserved: any;
 reserved_by_circuit_network: any;
 };
 train_state: /** @noSelf **/
{ arrive_signal: any;
 arrive_station: any;
 destination_full: any;
 manual_control: any;
 manual_control_stop: any;
 no_path: any;
 no_schedule: any;
 on_the_path: any;
 path_lost: any;
 wait_signal: any;
 wait_station: any;
 };
 transport_line: /** @noSelf **/
{ left_line: any;
 left_split_line: any;
 left_underground_line: any;
 right_line: any;
 right_split_line: any;
 right_underground_line: any;
 secondary_left_line: any;
 secondary_left_split_line: any;
 secondary_right_line: any;
 secondary_right_split_line: any;
 };
 wire_connection_id: /** @noSelf **/
{ electric_pole: any;
 power_switch_left: any;
 power_switch_right: any;
 };
 wire_type: /** @noSelf **/
{ copper: any;
 green: any;
 red: any;
 };
 } 
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

/** Called when a [CustomInput](https://wiki.factorio.com/Prototype/CustomInput) is activated. */
type CustomInputEventPayload = /** @noSelf **/
{ 
/** The mouse cursor position when the custom input was activated. */
cursor_position: MapPosition;
 
/** The prototype name of the custom input that was activated. */
input_name: string;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** The player that activated the custom input. */
player_index: number;
 
/** Information about the prototype that is selected when the custom input is used. Needs to be enabled on the custom input's prototype. `nil` if none is selected. */
selected_prototype: (null | SelectedPrototypeData);
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when a unit/group completes a command. */
type OnAiCommandCompletedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
name: typeof defines.events;
 result: typeof defines.behavior_result;
 
/** Tick the event was generated. */
tick: number;
 
/** unit_number/group_number of the unit/group which just completed a command. */
unit_number: number;
 
/** Was this command generated by a distraction. */
was_distracted: boolean;
 }

/** Called when an area of the map is cloned. */
type OnAreaClonedPayload = /** @noSelf **/
{ clear_destination_decoratives: boolean;
 clear_destination_entities: boolean;
 clone_decoratives: boolean;
 clone_entities: boolean;
 clone_tiles: boolean;
 destination_area: BoundingBox;
 destination_force: (null | LuaForce);
 destination_surface: LuaSurface;
 
/** Identifier of the event */
name: typeof defines.events;
 source_area: BoundingBox;
 source_surface: LuaSurface;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when a biter migration builds a base. */
type OnBiterBaseBuiltPayload = /** @noSelf **/
{ 
/** The entity that was built. */
entity: LuaEntity;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when a set of positions on the map is cloned. */
type OnBrushClonedPayload = /** @noSelf **/
{ clear_destination_decoratives: boolean;
 clear_destination_entities: boolean;
 clone_decoratives: boolean;
 clone_entities: boolean;
 clone_tiles: boolean;
 destination_force: (null | LuaForce);
 destination_offset: TilePosition;
 destination_surface: LuaSurface;
 
/** Identifier of the event */
name: typeof defines.events;
 source_offset: TilePosition;
 source_positions: TilePosition;
 source_surface: LuaSurface;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when a [defines.command.build_base](defines.command.build_base) command reaches its destination, and before building starts. */
type OnBuildBaseArrivedPayload = /** @noSelf **/
{ 
/** The unit group the command was assigned to. */
group: (null | LuaUnitGroup);
 
/** Identifier of the event */
name: typeof defines.events;
 
/** Tick the event was generated. */
tick: number;
 
/** The unit the command was assigned to. */
unit: (null | LuaEntity);
 }

/** Called when player builds something. Can be filtered using [LuaPlayerBuiltEntityEventFilter](LuaPlayerBuiltEntityEventFilter). */
type OnBuiltEntityPayload = /** @noSelf **/
{ created_entity: LuaEntity;
 
/** The item prototype used to build the entity. Note this won't exist in some situations (built from blueprint, undo, etc). */
item: (null | LuaItemPrototype);
 
/** Identifier of the event */
name: typeof defines.events;
 player_index: number;
 stack: LuaItemStack;
 
/** The tags associated with this entity if any. */
tags: (null | Tags);
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when the deconstruction of an entity is canceled. Can be filtered using [LuaEntityDeconstructionCancelledEventFilter](LuaEntityDeconstructionCancelledEventFilter). */
type OnCancelledDeconstructionPayload = /** @noSelf **/
{ entity: LuaEntity;
 
/** Identifier of the event */
name: typeof defines.events;
 player_index: (null | number);
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when the upgrade of an entity is canceled. Can be filtered using [LuaUpgradeCancelledEventFilter](LuaUpgradeCancelledEventFilter). */
type OnCancelledUpgradePayload = /** @noSelf **/
{ direction: (null | typeof defines.direction);
 entity: LuaEntity;
 
/** Identifier of the event */
name: typeof defines.events;
 player_index: (null | number);
 target: LuaEntityPrototype;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when a character corpse expires due to timeout or all of the items being removed from it. */
type OnCharacterCorpseExpiredPayload = /** @noSelf **/
{ 
/** The corpse. */
corpse: LuaEntity;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when a chart tag is created. */
type OnChartTagAddedPayload = /** @noSelf **/
{ force: LuaForce;
 
/** Identifier of the event */
name: typeof defines.events;
 player_index: (null | number);
 tag: LuaCustomChartTag;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when a chart tag is modified by a player. */
type OnChartTagModifiedPayload = /** @noSelf **/
{ force: LuaForce;
 
/** Identifier of the event */
name: typeof defines.events;
 old_icon: (null | SignalID);
 old_player: (null | number);
 old_text: string;
 player_index: (null | number);
 tag: LuaCustomChartTag;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called just before a chart tag is deleted. */
type OnChartTagRemovedPayload = /** @noSelf **/
{ force: LuaForce;
 
/** Identifier of the event */
name: typeof defines.events;
 player_index: (null | number);
 tag: LuaCustomChartTag;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when a chunk is charted or re-charted. */
type OnChunkChartedPayload = /** @noSelf **/
{ 
/** Area of the chunk. */
area: BoundingBox;
 force: LuaForce;
 
/** Identifier of the event */
name: typeof defines.events;
 position: ChunkPosition;
 surface_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when one or more chunks are deleted using [LuaSurface::delete_chunk](LuaSurface::delete_chunk). */
type OnChunkDeletedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
name: typeof defines.events;
 
/** The chunks deleted. */
positions: ChunkPosition;
 surface_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when a chunk is generated. */
type OnChunkGeneratedPayload = /** @noSelf **/
{ 
/** Area of the chunk. */
area: BoundingBox;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** Position of the chunk. */
position: ChunkPosition;
 
/** The surface the chunk is on. */
surface: LuaSurface;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when a combat robot expires through a lack of energy, or timeout. */
type OnCombatRobotExpiredPayload = /** @noSelf **/
{ 
/** Identifier of the event */
name: typeof defines.events;
 
/** The entity that owns the robot if any. */
owner: (null | LuaEntity);
 robot: LuaEntity;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when a message is sent to the in-game console, either by a player or through the server interface. */
type OnConsoleChatPayload = /** @noSelf **/
{ 
/** The chat message that was sent. */
message: string;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** The player doing the chatting, if any. */
player_index: (null | number);
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when someone enters a command-like message regardless of it being a valid command. */
type OnConsoleCommandPayload = /** @noSelf **/
{ 
/** The command as typed without the preceding forward slash ('/'). */
command: string;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** The parameters provided if any. */
parameters: string;
 
/** The player if any. */
player_index: (null | number);
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when a cutscene is cancelled by the player or by script. */
type OnCutsceneCancelledPayload = /** @noSelf **/
{ 
/** Identifier of the event */
name: typeof defines.events;
 
/** The player the cutscene was shown to. */
player_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when a cutscene is playing, each time it reaches a waypoint in that cutscene.

This refers to an index in the table previously passed to set_controller which started the cutscene. */
type OnCutsceneWaypointReachedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
name: typeof defines.events;
 
/** The player index of the player viewing the cutscene. */
player_index: number;
 
/** Tick the event was generated. */
tick: number;
 
/** The index of the waypoint we just completed. */
waypoint_index: number;
 }

/** Called when the map difficulty settings are changed. */
type OnDifficultySettingsChangedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
name: typeof defines.events;
 old_recipe_difficulty: number;
 old_technology_difficulty: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when an entity is cloned. Can be filtered for the source entity using [LuaEntityClonedEventFilter](LuaEntityClonedEventFilter). */
type OnEntityClonedPayload = /** @noSelf **/
{ destination: LuaEntity;
 
/** Identifier of the event */
name: typeof defines.events;
 source: LuaEntity;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when an entity is damaged. Can be filtered using [LuaEntityDamagedEventFilter](LuaEntityDamagedEventFilter). */
type OnEntityDamagedPayload = /** @noSelf **/
{ 
/** The entity that did the attacking if available. */
cause: (null | LuaEntity);
 damage_type: LuaDamagePrototype;
 entity: LuaEntity;
 
/** The damage amount after resistances. */
final_damage_amount: number;
 
/** The health of the entity after the damage was applied. */
final_health: number;
 
/** The force that did the attacking if any. */
force: (null | LuaForce);
 
/** Identifier of the event */
name: typeof defines.events;
 
/** The damage amount before resistances. */
original_damage_amount: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called after an entity is destroyed that has been registered with [LuaBootstrap::register_on_entity_destroyed](LuaBootstrap::register_on_entity_destroyed). */
type OnEntityDestroyedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
name: typeof defines.events;
 
/** The number returned by [register_on_entity_destroyed](LuaBootstrap::register_on_entity_destroyed) to uniquely identify this entity during this event. */
registration_number: number;
 
/** Tick the event was generated. */
tick: number;
 
/** The [LuaEntity::unit_number](LuaEntity::unit_number) of the destroyed entity, if it had one. */
unit_number: (null | number);
 }

/** Called when an entity dies. Can be filtered using [LuaEntityDiedEventFilter](LuaEntityDiedEventFilter). */
type OnEntityDiedPayload = /** @noSelf **/
{ 
/** The entity that did the killing if available. */
cause: (null | LuaEntity);
 
/** The damage type if any. */
damage_type: (null | LuaDamagePrototype);
 
/** The entity that died. */
entity: LuaEntity;
 
/** The force that did the killing if any. */
force: (null | LuaForce);
 
/** The loot generated by this entity if any. */
loot: LuaInventory;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when one of an entity's personal logistic slots changes. */
type OnEntityLogisticSlotChangedPayload = /** @noSelf **/
{ 
/** The entity for whom a logistic slot was changed. */
entity: LuaEntity;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** The player who changed the slot, or `nil` if changed by script. */
player_index: (null | number);
 
/** The slot index that was changed. */
slot_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called after an entity has been renamed either by the player or through script. */
type OnEntityRenamedPayload = /** @noSelf **/
{ by_script: boolean;
 entity: LuaEntity;
 
/** Identifier of the event */
name: typeof defines.events;
 old_name: string;
 
/** If by_script is true this will not be included. */
player_index: (null | number);
 
/** Tick the event was generated. */
tick: number;
 }

/** Called after entity copy-paste is done. */
type OnEntitySettingsPastedPayload = /** @noSelf **/
{ 
/** The destination entity settings were copied to. */
destination: LuaEntity;
 
/** Identifier of the event */
name: typeof defines.events;
 player_index: number;
 
/** The source entity settings were copied from. */
source: LuaEntity;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when an entity is spawned by a EnemySpawner */
type OnEntitySpawnedPayload = /** @noSelf **/
{ entity: LuaEntity;
 
/** Identifier of the event */
name: typeof defines.events;
 spawner: LuaEntity;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called after equipment is inserted into an equipment grid. */
type OnEquipmentInsertedPayload = /** @noSelf **/
{ 
/** The equipment inserted. */
equipment: LuaEquipment;
 
/** The equipment grid inserted into. */
grid: LuaEquipmentGrid;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called after equipment is removed from an equipment grid. */
type OnEquipmentRemovedPayload = /** @noSelf **/
{ 
/** The count of equipment removed. */
count: number;
 
/** The equipment removed. */
equipment: string;
 
/** The equipment grid removed from. */
grid: LuaEquipmentGrid;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when the a forces cease fire values change. */
type OnForceCeaseFireChangedPayload = /** @noSelf **/
{ 
/** If the other force was added or removed. */
added: boolean;
 
/** The force who's cease fire changed. */
force: LuaForce;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** Which force was added or removed. */
other_force: LuaForce;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when a new force is created using `game.create_force()` */
type OnForceCreatedPayload = /** @noSelf **/
{ 
/** The newly created force. */
force: LuaForce;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when the a forces friends change. */
type OnForceFriendsChangedPayload = /** @noSelf **/
{ 
/** If the other force was added or removed. */
added: boolean;
 
/** The force who's friends changed. */
force: LuaForce;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** Which force was added or removed. */
other_force: LuaForce;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when [LuaForce::reset](LuaForce::reset) is finished. */
type OnForceResetPayload = /** @noSelf **/
{ force: LuaForce;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called after two forces have been merged using `game.merge_forces()`. */
type OnForcesMergedPayload = /** @noSelf **/
{ 
/** The force entities where reassigned to. */
destination: LuaForce;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** The index of the destroyed force. */
source_index: number;
 
/** The force destroyed. */
source_name: string;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when two forces are about to be merged using `game.merge_forces()`. */
type OnForcesMergingPayload = /** @noSelf **/
{ 
/** The force to reassign entities to. */
destination: LuaForce;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** The force to be destroyed */
source: LuaForce;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when a game is created from a scenario. This is fired for every mod, even when the scenario's save data already includes it. In those cases however, [LuaBootstrap::on_init](LuaBootstrap::on_init) is not fired. */
type OnGameCreatedFromScenarioPayload = /** @noSelf **/
{ 
/** Identifier of the event */
name: typeof defines.events;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when [LuaGuiElement](LuaGuiElement) checked state is changed (related to checkboxes and radio buttons). */
type OnGuiCheckedStateChangedPayload = /** @noSelf **/
{ 
/** The element whose checked state changed. */
element: LuaGuiElement;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** The player who did the change. */
player_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when [LuaGuiElement](LuaGuiElement) is clicked. */
type OnGuiClickPayload = /** @noSelf **/
{ 
/** If alt was pressed. */
alt: boolean;
 
/** The mouse button used if any. */
button: typeof defines.mouse_button_type;
 
/** If control was pressed. */
control: boolean;
 
/** The clicked element. */
element: LuaGuiElement;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** The player who did the clicking. */
player_index: number;
 
/** If shift was pressed. */
shift: boolean;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when the player closes the GUI they have open.

This can only be raised when the GUI's player controller is still valid. If a GUI is thus closed due to the player disconnecting, dying, or becoming a spectator in other ways, it won't cause this event to be raised. */
type OnGuiClosedPayload = /** @noSelf **/
{ 
/** The custom GUI element that was open */
element: (null | LuaGuiElement);
 
/** The entity that was open */
entity: (null | LuaEntity);
 
/** The equipment that was open */
equipment: (null | LuaEquipment);
 
/** The GUI type that was open. */
gui_type: typeof defines.gui_type;
 
/** The script inventory that was open */
inventory: (null | LuaInventory);
 
/** The item that was open */
item: (null | LuaItemStack);
 
/** Identifier of the event */
name: typeof defines.events;
 
/** The other player that was open */
other_player: (null | LuaPlayer);
 
/** The player. */
player_index: number;
 
/** The technology that was automatically selected when opening the research GUI */
technology: (null | LuaTechnology);
 
/** Tick the event was generated. */
tick: number;
 
/** The tile position that was open */
tile_position: (null | TilePosition);
 }

/** Called when a [LuaGuiElement](LuaGuiElement) is confirmed, for example by pressing Enter in a textfield. */
type OnGuiConfirmedPayload = /** @noSelf **/
{ 
/** If alt was pressed. */
alt: boolean;
 
/** If control was pressed. */
control: boolean;
 
/** The confirmed element. */
element: LuaGuiElement;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** The player who did the confirming. */
player_index: number;
 
/** If shift was pressed. */
shift: boolean;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when [LuaGuiElement](LuaGuiElement) element value is changed (related to choose element buttons). */
type OnGuiElemChangedPayload = /** @noSelf **/
{ 
/** The element whose element value changed. */
element: LuaGuiElement;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** The player who did the change. */
player_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when [LuaGuiElement](LuaGuiElement) element location is changed (related to frames in `player.gui.screen`). */
type OnGuiLocationChangedPayload = /** @noSelf **/
{ 
/** The element whose location changed. */
element: LuaGuiElement;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** The player who did the change. */
player_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when the player opens a GUI. */
type OnGuiOpenedPayload = /** @noSelf **/
{ 
/** The custom GUI element that was opened */
element: (null | LuaGuiElement);
 
/** The entity that was opened */
entity: (null | LuaEntity);
 
/** The equipment that was opened */
equipment: (null | LuaEquipment);
 
/** The GUI type that was opened. */
gui_type: typeof defines.gui_type;
 
/** The script inventory that was opened */
inventory: (null | LuaInventory);
 
/** The item that was opened */
item: (null | LuaItemStack);
 
/** Identifier of the event */
name: typeof defines.events;
 
/** The other player that was opened */
other_player: (null | LuaPlayer);
 
/** The player. */
player_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when [LuaGuiElement](LuaGuiElement) selected tab is changed (related to tabbed-panes). */
type OnGuiSelectedTabChangedPayload = /** @noSelf **/
{ 
/** The tabbed pane whose selected tab changed. */
element: LuaGuiElement;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** The player who did the change. */
player_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when [LuaGuiElement](LuaGuiElement) selection state is changed (related to drop-downs and listboxes). */
type OnGuiSelectionStateChangedPayload = /** @noSelf **/
{ 
/** The element whose selection state changed. */
element: LuaGuiElement;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** The player who did the change. */
player_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when [LuaGuiElement](LuaGuiElement) switch state is changed (related to switches). */
type OnGuiSwitchStateChangedPayload = /** @noSelf **/
{ 
/** The switch whose switch state changed. */
element: LuaGuiElement;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** The player who did the change. */
player_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when [LuaGuiElement](LuaGuiElement) text is changed by the player. */
type OnGuiTextChangedPayload = /** @noSelf **/
{ 
/** The edited element. */
element: LuaGuiElement;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** The player who did the edit. */
player_index: number;
 
/** The new text in the element. */
text: string;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when [LuaGuiElement](LuaGuiElement) slider value is changed (related to the slider element). */
type OnGuiValueChangedPayload = /** @noSelf **/
{ 
/** The element whose value changed. */
element: LuaGuiElement;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** The player who did the change. */
player_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when a land mine is armed. */
type OnLandMineArmedPayload = /** @noSelf **/
{ mine: LuaEntity;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when a custom Lua shortcut is pressed. */
type OnLuaShortcutPayload = /** @noSelf **/
{ 
/** Identifier of the event */
name: typeof defines.events;
 player_index: number;
 
/** Shortcut prototype name of the shortcut that was clicked. */
prototype_name: string;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when an entity is marked for deconstruction with the Deconstruction planner or via script. Can be filtered using [LuaEntityMarkedForDeconstructionEventFilter](LuaEntityMarkedForDeconstructionEventFilter). */
type OnMarkedForDeconstructionPayload = /** @noSelf **/
{ entity: LuaEntity;
 
/** Identifier of the event */
name: typeof defines.events;
 player_index: (null | number);
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when an entity is marked for upgrade with the Upgrade planner or via script. Can be filtered using [LuaEntityMarkedForUpgradeEventFilter](LuaEntityMarkedForUpgradeEventFilter). */
type OnMarkedForUpgradePayload = /** @noSelf **/
{ 
/** The new direction (if any) */
direction: (null | typeof defines.direction);
 entity: LuaEntity;
 
/** Identifier of the event */
name: typeof defines.events;
 player_index: (null | number);
 target: LuaEntityPrototype;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called after a player purchases some offer from a `market` entity. */
type OnMarketItemPurchasedPayload = /** @noSelf **/
{ 
/** The amount of offers purchased. */
count: number;
 
/** The market entity. */
market: LuaEntity;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** The index of the offer purchased. */
offer_index: number;
 
/** The player who did the purchasing. */
player_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when the player uses the 'Open item GUI' control on an item defined with the 'mod-openable' flag */
type OnModItemOpenedPayload = /** @noSelf **/
{ 
/** The item clicked on. */
item: LuaItemPrototype;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** The player. */
player_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called directly after a permission group is added. */
type OnPermissionGroupAddedPayload = /** @noSelf **/
{ 
/** The group added. */
group: LuaPermissionGroup;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** The player that added the group. */
player_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called directly after a permission group is deleted. */
type OnPermissionGroupDeletedPayload = /** @noSelf **/
{ 
/** The group that was deleted. */
group_name: string;
 
/** The group id that was deleted. */
id: number;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** The player doing the deletion. */
player_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called directly after a permission group is edited in some way. */
type OnPermissionGroupEditedPayload = /** @noSelf **/
{ 
/** The action when the `type` is "add-permission" or "remove-permission". */
action: typeof defines.input_action;
 
/** The group being edited. */
group: LuaPermissionGroup;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** The new group name when the `type` is "rename". */
new_name: string;
 
/** The old group name when the `type` is "rename". */
old_name: string;
 
/** The other player when the `type` is "add-player" or "remove-player". */
other_player_index: number;
 
/** The player that did the editing. */
player_index: number;
 
/** Tick the event was generated. */
tick: number;
 
/** The edit type: "add-permission", "remove-permission", "enable-all", "disable-all", "add-player", "remove-player", "rename". */
type: string;
 }

/** Called directly after a permission string is imported. */
type OnPermissionStringImportedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
name: typeof defines.events;
 
/** The player that imported the string. */
player_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when a player picks up an item. */
type OnPickedUpItemPayload = /** @noSelf **/
{ item_stack: SimpleItemStack;
 
/** Identifier of the event */
name: typeof defines.events;
 player_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called after a player alt-selects an area with a selection-tool item. */
type OnPlayerAltSelectedAreaPayload = /** @noSelf **/
{ 
/** The area selected. */
area: BoundingBox;
 
/** The entities selected. */
entities: LuaEntity;
 
/** The item used to select the area. */
item: string;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** The player doing the selection. */
player_index: number;
 
/** The surface selected. */
surface: LuaSurface;
 
/** Tick the event was generated. */
tick: number;
 
/** The tiles selected. */
tiles: LuaTile;
 }

/** Called after a players ammo inventory changed in some way. */
type OnPlayerAmmoInventoryChangedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
name: typeof defines.events;
 player_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called after a players armor inventory changed in some way. */
type OnPlayerArmorInventoryChangedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
name: typeof defines.events;
 player_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when a player is banned. */
type OnPlayerBannedPayload = /** @noSelf **/
{ 
/** The player that did the banning if any. */
by_player: (null | number);
 
/** Identifier of the event */
name: typeof defines.events;
 
/** The player banned. */
player_index: (null | number);
 
/** The banned player name. */
player_name: string;
 
/** The reason given if any. */
reason: (null | string);
 
/** Tick the event was generated. */
tick: number;
 }

/** Called after a player builds tiles. */
type OnPlayerBuiltTilePayload = /** @noSelf **/
{ 
/** The item type used to build the tiles */
item: (null | LuaItemPrototype);
 
/** Identifier of the event */
name: typeof defines.events;
 player_index: number;
 
/** The stack used to build the tiles (may be empty if all of the items where used to build the tiles). */
stack: (null | LuaItemStack);
 
/** The surface the tile(s) were built on. */
surface_index: number;
 
/** Tick the event was generated. */
tick: number;
 
/** The tile prototype that was placed. */
tile: LuaTilePrototype;
 
/** The position data. */
tiles: OldTileAndPosition;
 }

/** Called when a player cancels crafting. */
type OnPlayerCancelledCraftingPayload = /** @noSelf **/
{ 
/** The number of crafts that have been cancelled. */
cancel_count: number;
 
/** The crafting items returned to the player's inventory. */
items: LuaInventory;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** The player that did the crafting. */
player_index: number;
 
/** The recipe that has been cancelled. */
recipe: LuaRecipe;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called after a player changes forces. */
type OnPlayerChangedForcePayload = /** @noSelf **/
{ 
/** The old force. */
force: LuaForce;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** The player who changed forces. */
player_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when the tile position a player is located at changes. */
type OnPlayerChangedPositionPayload = /** @noSelf **/
{ 
/** Identifier of the event */
name: typeof defines.events;
 
/** The player. */
player_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called after a player changes surfaces. */
type OnPlayerChangedSurfacePayload = /** @noSelf **/
{ 
/** Identifier of the event */
name: typeof defines.events;
 
/** The player who changed surfaces. */
player_index: number;
 
/** The surface index the player was on. */
surface_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when cheat mode is disabled on a player. */
type OnPlayerCheatModeDisabledPayload = /** @noSelf **/
{ 
/** Identifier of the event */
name: typeof defines.events;
 
/** The player. */
player_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when cheat mode is enabled on a player. */
type OnPlayerCheatModeEnabledPayload = /** @noSelf **/
{ 
/** Identifier of the event */
name: typeof defines.events;
 
/** The player. */
player_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when a player clicks a gps tag */
type OnPlayerClickedGpsTagPayload = /** @noSelf **/
{ 
/** Identifier of the event */
name: typeof defines.events;
 
/** Index of the player */
player_index: number;
 
/** Map position contained in gps tag */
position: MapPosition;
 
/** Surface name contained in gps tag, even when such surface does not exists */
surface: string;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when a player clicks the "confirm" button in the configure Blueprint GUI. */
type OnPlayerConfiguredBlueprintPayload = /** @noSelf **/
{ 
/** Identifier of the event */
name: typeof defines.events;
 
/** The player. */
player_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when a player configures spidertron remote to be connected with a given spidertron */
type OnPlayerConfiguredSpiderRemotePayload = /** @noSelf **/
{ 
/** Identifier of the event */
name: typeof defines.events;
 
/** The player that configured the remote. */
player_index: number;
 
/** Tick the event was generated. */
tick: number;
 
/** Spider vehicle to which remote was connected to. */
vehicle: LuaEntity;
 }

/** Called when the player finishes crafting an item. This event fires just before the results are inserted into the player's inventory, not when the crafting is queued (see [on_pre_player_crafted_item](on_pre_player_crafted_item)). */
type OnPlayerCraftedItemPayload = /** @noSelf **/
{ 
/** The item that has been crafted. */
item_stack: LuaItemStack;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** The player doing the crafting. */
player_index: number;
 
/** The recipe used to craft this item. */
recipe: LuaRecipe;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called after the player was created. */
type OnPlayerCreatedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
name: typeof defines.events;
 player_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called after a players cursorstack changed in some way. */
type OnPlayerCursorStackChangedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
name: typeof defines.events;
 player_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when a player selects an area with a deconstruction planner. */
type OnPlayerDeconstructedAreaPayload = /** @noSelf **/
{ 
/** If normal selection or alt selection was used. */
alt: boolean;
 
/** The area selected. */
area: BoundingBox;
 
/** The item used to select the area. */
item: string;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** The player doing the selection. */
player_index: number;
 
/** The surface selected. */
surface: LuaSurface;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when a player is demoted. */
type OnPlayerDemotedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
name: typeof defines.events;
 
/** The player. */
player_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called after a player dies. */
type OnPlayerDiedPayload = /** @noSelf **/
{ cause: (null | LuaEntity);
 
/** Identifier of the event */
name: typeof defines.events;
 player_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when the display resolution changes for a given player. */
type OnPlayerDisplayResolutionChangedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
name: typeof defines.events;
 
/** The old display resolution */
old_resolution: DisplayResolution;
 
/** The player */
player_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when the display scale changes for a given player. */
type OnPlayerDisplayScaleChangedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
name: typeof defines.events;
 
/** The old display scale */
old_scale: number;
 
/** The player */
player_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when the player's driving state has changed, this means a player has either entered or left a vehicle. */
type OnPlayerDrivingChangedStatePayload = /** @noSelf **/
{ 
/** The vehicle if any. */
entity: (null | LuaEntity);
 
/** Identifier of the event */
name: typeof defines.events;
 player_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when a player drops an item on the ground. */
type OnPlayerDroppedItemPayload = /** @noSelf **/
{ 
/** The item-on-ground entity. */
entity: LuaEntity;
 
/** Identifier of the event */
name: typeof defines.events;
 player_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when a player fast-transfers something to or from an entity. */
type OnPlayerFastTransferredPayload = /** @noSelf **/
{ 
/** The entity transferred from or to. */
entity: LuaEntity;
 
/** Whether the transfer was from player to entity. If `false`, the transfer was from entity to player. */
from_player: boolean;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** The player transferred from or to. */
player_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called after player flushed fluid */
type OnPlayerFlushedFluidPayload = /** @noSelf **/
{ 
/** Amount of fluid that was removed */
amount: number;
 
/** Entity from which flush was performed */
entity: LuaEntity;
 
/** Name of a fluid that was flushed */
fluid: string;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** True if flush was requested only on this entity */
only_this_entity: boolean;
 
/** Index of the player */
player_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called after a players gun inventory changed in some way. */
type OnPlayerGunInventoryChangedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
name: typeof defines.events;
 player_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called after a player joins the game. This is not called when loading a save file in singleplayer, as the player doesn't actually leave the game, and the save is just on pause until they rejoin. */
type OnPlayerJoinedGamePayload = /** @noSelf **/
{ 
/** Identifier of the event */
name: typeof defines.events;
 player_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when a player is kicked. */
type OnPlayerKickedPayload = /** @noSelf **/
{ 
/** The player that did the kicking if any. */
by_player: (null | number);
 
/** Identifier of the event */
name: typeof defines.events;
 
/** The player kicked. */
player_index: number;
 
/** The reason given if any. */
reason: (null | string);
 
/** Tick the event was generated. */
tick: number;
 }

/** Called after a player leaves the game. This is not called when closing a save file in singleplayer, as the player doesn't actually leave the game, and the save is just on pause until they rejoin. */
type OnPlayerLeftGamePayload = /** @noSelf **/
{ 
/** Identifier of the event */
name: typeof defines.events;
 player_index: number;
 reason: typeof defines.disconnect_reason;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called after a players main inventory changed in some way. */
type OnPlayerMainInventoryChangedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
name: typeof defines.events;
 player_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called after the results of an entity being mined are collected just before the entity is destroyed. After this event any items in the buffer will be transferred into the player as if they came from mining the entity. Can be filtered using [LuaPlayerMinedEntityEventFilter](LuaPlayerMinedEntityEventFilter). */
type OnPlayerMinedEntityPayload = /** @noSelf **/
{ 
/** The temporary inventory that holds the result of mining the entity. */
buffer: LuaInventory;
 
/** The entity that has been mined. */
entity: LuaEntity;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** The index of the player doing the mining. */
player_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when the player mines something. */
type OnPlayerMinedItemPayload = /** @noSelf **/
{ 
/** The item given to the player */
item_stack: SimpleItemStack;
 
/** Identifier of the event */
name: typeof defines.events;
 player_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called after a player mines tiles. */
type OnPlayerMinedTilePayload = /** @noSelf **/
{ 
/** Identifier of the event */
name: typeof defines.events;
 player_index: number;
 
/** The surface the tile(s) were mined from. */
surface_index: number;
 
/** Tick the event was generated. */
tick: number;
 
/** The position data. */
tiles: OldTileAndPosition;
 }

/** Called when a player is muted. */
type OnPlayerMutedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
name: typeof defines.events;
 
/** The player. */
player_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when a player invokes the "smart pipette" over an entity. */
type OnPlayerPipettePayload = /** @noSelf **/
{ 
/** The item put in the cursor */
item: LuaItemPrototype;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** The player */
player_index: number;
 
/** Tick the event was generated. */
tick: number;
 
/** If cheat mode was used to give a free stack of the item. */
used_cheat_mode: boolean;
 }

/** Called after the player puts equipment in an equipment grid */
type OnPlayerPlacedEquipmentPayload = /** @noSelf **/
{ 
/** The equipment put in the equipment grid. */
equipment: LuaEquipment;
 
/** The equipment grid the equipment was put in. */
grid: LuaEquipmentGrid;
 
/** Identifier of the event */
name: typeof defines.events;
 player_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when a player is promoted. */
type OnPlayerPromotedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
name: typeof defines.events;
 
/** The player. */
player_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when a player is removed (deleted) from the game. Not to be confused with the player logging of this is different in that the player is deleted as if he never existed in the save file. */
type OnPlayerRemovedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
name: typeof defines.events;
 
/** The player index that was removed */
player_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called after the player removes equipment from an equipment grid */
type OnPlayerRemovedEquipmentPayload = /** @noSelf **/
{ 
/** The count of equipment removed. */
count: number;
 
/** The equipment removed. */
equipment: string;
 
/** The equipment grid removed from. */
grid: LuaEquipmentGrid;
 
/** Identifier of the event */
name: typeof defines.events;
 player_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when a player repairs an entity. Can be filtered using [LuaPlayerRepairedEntityEventFilter](LuaPlayerRepairedEntityEventFilter). */
type OnPlayerRepairedEntityPayload = /** @noSelf **/
{ entity: LuaEntity;
 
/** Identifier of the event */
name: typeof defines.events;
 player_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called after a player respawns. */
type OnPlayerRespawnedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
name: typeof defines.events;
 player_index: number;
 
/** The player port used to respawn if one was used. */
player_port: (null | LuaEntity);
 
/** Tick the event was generated. */
tick: number;
 }

/** Called after a player reverse-selects an area with a selection-tool item. */
type OnPlayerReverseSelectedAreaPayload = /** @noSelf **/
{ 
/** The area selected. */
area: BoundingBox;
 
/** The entities selected. */
entities: LuaEntity;
 
/** The item used to select the area. */
item: string;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** The player doing the selection. */
player_index: number;
 
/** The surface selected. */
surface: LuaSurface;
 
/** Tick the event was generated. */
tick: number;
 
/** The tiles selected. */
tiles: LuaTile;
 }

/** Called when the player rotates an entity. This event is only fired when the entity actually changes its orientation -- pressing the rotate key on an entity that can't be rotated won't fire this event. */
type OnPlayerRotatedEntityPayload = /** @noSelf **/
{ 
/** The rotated entity. */
entity: LuaEntity;
 
/** Identifier of the event */
name: typeof defines.events;
 player_index: number;
 
/** The previous direction */
previous_direction: typeof defines.direction;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called after a player selects an area with a selection-tool item. */
type OnPlayerSelectedAreaPayload = /** @noSelf **/
{ 
/** The area selected. */
area: BoundingBox;
 
/** The entities selected. */
entities: LuaEntity;
 
/** The item used to select the area. */
item: string;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** The player doing the selection. */
player_index: number;
 
/** The surface selected. */
surface: LuaSurface;
 
/** Tick the event was generated. */
tick: number;
 
/** The tiles selected. */
tiles: LuaTile;
 }

/** Called when a player sets a quickbar slot to anything (new value, or set to empty). */
type OnPlayerSetQuickBarSlotPayload = /** @noSelf **/
{ 
/** Identifier of the event */
name: typeof defines.events;
 player_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when a player selects an area with a blueprint. */
type OnPlayerSetupBlueprintPayload = /** @noSelf **/
{ 
/** If normal selection or alt selection was used. */
alt: boolean;
 
/** The area selected. */
area: BoundingBox;
 
/** The item used to select the area. */
item: string;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** The player doing the selection. */
player_index: number;
 
/** The surface selected. */
surface: LuaSurface;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when a player toggles alt mode, also known as "show entity info". */
type OnPlayerToggledAltModePayload = /** @noSelf **/
{ 
/** The new alt mode value. This value is a shortcut for accessing [GameViewSettings::show_entity_info](GameViewSettings::show_entity_info) on the player. */
alt_mode: boolean;
 
/** Identifier of the event */
name: typeof defines.events;
 player_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when a player toggles the map editor on or off. */
type OnPlayerToggledMapEditorPayload = /** @noSelf **/
{ 
/** Identifier of the event */
name: typeof defines.events;
 player_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called after a players trash inventory changed in some way. */
type OnPlayerTrashInventoryChangedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
name: typeof defines.events;
 player_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when a player is un-banned. */
type OnPlayerUnbannedPayload = /** @noSelf **/
{ 
/** The player that did the un-banning if any. */
by_player: (null | number);
 
/** Identifier of the event */
name: typeof defines.events;
 
/** The player un-banned. */
player_index: (null | number);
 
/** The player name un-banned. */
player_name: string;
 
/** The reason the player was banned if any. */
reason: (null | string);
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when a player is unmuted. */
type OnPlayerUnmutedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
name: typeof defines.events;
 
/** The player. */
player_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when a player uses a capsule that results in some game action. */
type OnPlayerUsedCapsulePayload = /** @noSelf **/
{ 
/** The capsule item used. */
item: LuaItemPrototype;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** The player. */
player_index: number;
 
/** The position the capsule was used. */
position: MapPosition;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when a player uses spidertron remote to send a spidertron to a given position */
type OnPlayerUsedSpiderRemotePayload = /** @noSelf **/
{ 
/** Identifier of the event */
name: typeof defines.events;
 
/** The player that used the remote. */
player_index: number;
 
/** Goal position to which spidertron was sent to. */
position: MapPosition;
 
/** If the use was successful. It may fail when spidertron has different driver or when player is on different surface. */
success: boolean;
 
/** Tick the event was generated. */
tick: number;
 
/** Spider vehicle which was requested to move. */
vehicle: LuaEntity;
 }

/** Called after an entity dies. Can be filtered using [LuaPostEntityDiedEventFilter](LuaPostEntityDiedEventFilter). */
type OnPostEntityDiedPayload = /** @noSelf **/
{ 
/** The corpses created by the entity dying if any. */
corpses: LuaEntity;
 
/** The damage type if any. */
damage_type: (null | LuaDamagePrototype);
 
/** The force that did the killing if any. */
force: (null | LuaForce);
 
/** The ghost created by the entity dying if any. */
ghost: (null | LuaEntity);
 
/** Identifier of the event */
name: typeof defines.events;
 
/** Position where the entity died. */
position: MapPosition;
 
/** The entity prototype of the entity that died. */
prototype: LuaEntityPrototype;
 
/** The surface the entity was on. */
surface_index: number;
 
/** Tick the event was generated. */
tick: number;
 
/** The unit number the entity had if any. */
unit_number: (null | number);
 }

/** Called when players uses an item to build something. Called before [on_built_entity](on_built_entity). */
type OnPreBuildPayload = /** @noSelf **/
{ 
/** Item was placed while moving. */
created_by_moving: boolean;
 
/** The direction the item was facing when placed. */
direction: typeof defines.direction;
 
/** If building this blueprint was flipped horizontally. */
flip_horizontal: boolean;
 
/** If building this blueprint was flipped vertically. */
flip_vertical: boolean;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** The player who did the placing. */
player_index: number;
 
/** Where the item was placed. */
position: MapPosition;
 
/** Item was placed using shift building. */
shift_build: boolean;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called before one or more chunks are deleted using [LuaSurface::delete_chunk](LuaSurface::delete_chunk). */
type OnPreChunkDeletedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
name: typeof defines.events;
 
/** The chunks to be deleted. */
positions: ChunkPosition;
 surface_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called before entity copy-paste is done. */
type OnPreEntitySettingsPastedPayload = /** @noSelf **/
{ 
/** The destination entity settings will be copied to. */
destination: LuaEntity;
 
/** Identifier of the event */
name: typeof defines.events;
 player_index: number;
 
/** The source entity settings will be copied from. */
source: LuaEntity;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called before a ghost entity is destroyed as a result of being marked for deconstruction. Can be filtered using [LuaPreGhostDeconstructedEventFilter](LuaPreGhostDeconstructedEventFilter). */
type OnPreGhostDeconstructedPayload = /** @noSelf **/
{ ghost: LuaEntity;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** The player that did the deconstruction if any. */
player_index: (null | number);
 
/** Tick the event was generated. */
tick: number;
 }

/** Called before a ghost entity is upgraded. Can be filtered using [LuaPreGhostUpgradedEventFilter](LuaPreGhostUpgradedEventFilter). */
type OnPreGhostUpgradedPayload = /** @noSelf **/
{ ghost: LuaEntity;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** The player that did the upgrade if any. */
player_index: (null | number);
 target: LuaEntityPrototype;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called directly before a permission group is deleted. */
type OnPrePermissionGroupDeletedPayload = /** @noSelf **/
{ 
/** The group to be deleted. */
group: LuaPermissionGroup;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** The player doing the deletion. */
player_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called directly before a permission string is imported. */
type OnPrePermissionStringImportedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
name: typeof defines.events;
 
/** The player importing the string. */
player_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when a player queues something to be crafted. */
type OnPrePlayerCraftedItemPayload = /** @noSelf **/
{ 
/** The items removed from the players inventory to do the crafting. */
items: LuaInventory;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** The player doing the crafting. */
player_index: number;
 
/** The number of times the recipe is being queued. */
queued_count: number;
 
/** The recipe being queued. */
recipe: LuaRecipe;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called before a players dies. */
type OnPrePlayerDiedPayload = /** @noSelf **/
{ cause: (null | LuaEntity);
 
/** Identifier of the event */
name: typeof defines.events;
 player_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called before a player leaves the game. */
type OnPrePlayerLeftGamePayload = /** @noSelf **/
{ 
/** Identifier of the event */
name: typeof defines.events;
 player_index: number;
 reason: typeof defines.disconnect_reason;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when the player finishes mining an entity, before the entity is removed from map. Can be filtered using [LuaPrePlayerMinedEntityEventFilter](LuaPrePlayerMinedEntityEventFilter). */
type OnPrePlayerMinedItemPayload = /** @noSelf **/
{ 
/** The entity being mined */
entity: LuaEntity;
 
/** Identifier of the event */
name: typeof defines.events;
 player_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called before a player is removed (deleted) from the game. Not to be confused with the player logging of this is different in that the player is deleted as if he never existed in the save file. */
type OnPrePlayerRemovedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
name: typeof defines.events;
 
/** The player index that will be removed */
player_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called before a player toggles the map editor on or off. */
type OnPrePlayerToggledMapEditorPayload = /** @noSelf **/
{ 
/** Identifier of the event */
name: typeof defines.events;
 player_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called directly before a robot explodes cliffs. */
type OnPreRobotExplodedCliffPayload = /** @noSelf **/
{ cliff: LuaEntity;
 
/** The cliff explosive used. */
item: LuaItemPrototype;
 
/** Identifier of the event */
name: typeof defines.events;
 robot: LuaEntity;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called just before a script inventory is resized. */
type OnPreScriptInventoryResizedPayload = /** @noSelf **/
{ inventory: LuaInventory;
 
/** The mod that did the resizing. This will be `"core"` if done by console command or scenario script. */
mod: string;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** The new inventory size. */
new_size: number;
 
/** The old inventory size. */
old_size: number;
 
/** If done by console command; the player who ran the command. */
player_index: (null | number);
 
/** Tick the event was generated. */
tick: number;
 }

/** Called just before a surface is cleared (all entities removed and all chunks deleted). */
type OnPreSurfaceClearedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
name: typeof defines.events;
 surface_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called just before a surface is deleted. */
type OnPreSurfaceDeletedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
name: typeof defines.events;
 surface_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when research is cancelled. */
type OnResearchCancelledPayload = /** @noSelf **/
{ 
/** The force whose research was cancelled. */
force: LuaForce;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** A mapping of technology name to how many times it was cancelled. */
research: Record<string, number>;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when a research finishes. */
type OnResearchFinishedPayload = /** @noSelf **/
{ 
/** If the technology was researched by script. */
by_script: boolean;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** The researched technology */
research: LuaTechnology;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when a research is reversed (unresearched). */
type OnResearchReversedPayload = /** @noSelf **/
{ 
/** If the technology was un-researched by script. */
by_script: boolean;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** The technology un-researched */
research: LuaTechnology;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when a technology research starts. */
type OnResearchStartedPayload = /** @noSelf **/
{ last_research: (null | LuaTechnology);
 
/** Identifier of the event */
name: typeof defines.events;
 
/** The technology being researched */
research: LuaTechnology;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when a resource entity reaches 0 or its minimum yield for infinite resources. */
type OnResourceDepletedPayload = /** @noSelf **/
{ entity: LuaEntity;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when a construction robot builds an entity. Can be filtered using [LuaRobotBuiltEntityEventFilter](LuaRobotBuiltEntityEventFilter). */
type OnRobotBuiltEntityPayload = /** @noSelf **/
{ 
/** The entity built. */
created_entity: LuaEntity;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** The robot that did the building. */
robot: LuaEntity;
 
/** The item used to do the building. */
stack: LuaItemStack;
 
/** The tags associated with this entity if any. */
tags: (null | Tags);
 
/** Tick the event was generated. */
tick: number;
 }

/** Called after a robot builds tiles. */
type OnRobotBuiltTilePayload = /** @noSelf **/
{ 
/** The item type used to build the tiles. */
item: LuaItemPrototype;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** The robot. */
robot: LuaEntity;
 
/** The stack used to build the tiles (may be empty if all of the items where used to build the tiles). */
stack: LuaItemStack;
 
/** The surface the tile(s) are build on. */
surface_index: number;
 
/** Tick the event was generated. */
tick: number;
 
/** The tile prototype that was placed. */
tile: LuaTilePrototype;
 
/** The position data. */
tiles: OldTileAndPosition;
 }

/** Called directly after a robot explodes cliffs. */
type OnRobotExplodedCliffPayload = /** @noSelf **/
{ 
/** The cliff explosive used. */
item: LuaItemPrototype;
 
/** Identifier of the event */
name: typeof defines.events;
 robot: LuaEntity;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when a robot mines an entity. */
type OnRobotMinedPayload = /** @noSelf **/
{ 
/** The entity the robot just picked up. */
item_stack: SimpleItemStack;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** The robot that did the mining. */
robot: LuaEntity;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called after the results of an entity being mined are collected just before the entity is destroyed. After this event any items in the buffer will be transferred into the robot as if they came from mining the entity. Can be filtered using [LuaRobotMinedEntityEventFilter](LuaRobotMinedEntityEventFilter). */
type OnRobotMinedEntityPayload = /** @noSelf **/
{ 
/** The temporary inventory that holds the result of mining the entity. */
buffer: LuaInventory;
 
/** The entity that has been mined. */
entity: LuaEntity;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** The robot doing the mining. */
robot: LuaEntity;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called after a robot mines tiles. */
type OnRobotMinedTilePayload = /** @noSelf **/
{ 
/** Identifier of the event */
name: typeof defines.events;
 
/** The robot. */
robot: LuaEntity;
 
/** The surface the tile(s) were mined on. */
surface_index: number;
 
/** Tick the event was generated. */
tick: number;
 
/** The position data. */
tiles: OldTileAndPosition;
 }

/** Called before a robot mines an entity. Can be filtered using [LuaPreRobotMinedEntityEventFilter](LuaPreRobotMinedEntityEventFilter). */
type OnRobotPreMinedPayload = /** @noSelf **/
{ 
/** The entity which is about to be mined. */
entity: LuaEntity;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** The robot that's about to do the mining. */
robot: LuaEntity;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when a rocket silo is ordered to be launched. */
type OnRocketLaunchOrderedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
name: typeof defines.events;
 
/** The player that is riding the rocket, if any. */
player_index: (null | number);
 rocket: LuaEntity;
 rocket_silo: LuaEntity;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when the rocket is launched. */
type OnRocketLaunchedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
name: typeof defines.events;
 
/** The player that is riding the rocket, if any. */
player_index: (null | number);
 rocket: LuaEntity;
 rocket_silo: (null | LuaEntity);
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when a runtime mod setting is changed by a player. */
type OnRuntimeModSettingChangedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
name: typeof defines.events;
 
/** If the `setting_type` is `"global"` and it was changed through the mod settings GUI, this is the index of the player that changed the global setting. If the `setting_type` is `"runtime-per-user"` and it changed a current setting of the player, this is the index of the player whose setting was changed. In all other cases, this is `nil`. */
player_index: (null | number);
 
/** The prototype name of the setting that was changed. */
setting: string;
 
/** Either "runtime-per-user" or "runtime-global". */
setting_type: string;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called just after a script inventory is resized. */
type OnScriptInventoryResizedPayload = /** @noSelf **/
{ inventory: LuaInventory;
 
/** The mod that did the resizing. This will be `"core"` if done by console command or scenario script. */
mod: string;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** The new inventory size. */
new_size: number;
 
/** The old inventory size. */
old_size: number;
 
/** Any items which didn't fit into the new inventory size. */
overflow_inventory: LuaInventory;
 
/** If done by console command; the player who ran the command. */
player_index: (null | number);
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when a [LuaSurface::request_path](LuaSurface::request_path) call completes. */
type OnScriptPathRequestFinishedPayload = /** @noSelf **/
{ 
/** Handle to associate the callback with a particular call to [LuaSurface::request_path](LuaSurface::request_path). */
id: number;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** The actual path that the pathfinder has determined. `nil` if pathfinding failed. */
path: (null | PathfinderWaypoint);
 
/** Tick the event was generated. */
tick: number;
 
/** Indicates that the pathfinder failed because it is too busy, and that you can retry later. */
try_again_later: boolean;
 }

/** Called when a script trigger effect is triggered. */
type OnScriptTriggerEffectPayload = /** @noSelf **/
{ 
/** The effect_id specified in the trigger effect. */
effect_id: string;
 
/** Identifier of the event */
name: typeof defines.events;
 source_entity: (null | LuaEntity);
 source_position: (null | MapPosition);
 
/** The surface the effect happened on. */
surface_index: number;
 target_entity: (null | LuaEntity);
 target_position: (null | MapPosition);
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when an entity of type `radar` finishes scanning a sector. Can be filtered for the radar using [LuaSectorScannedEventFilter](LuaSectorScannedEventFilter). */
type OnSectorScannedPayload = /** @noSelf **/
{ 
/** Area of the scanned chunk. */
area: BoundingBox;
 
/** The chunk scanned. */
chunk_position: ChunkPosition;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** The radar that did the scanning. */
radar: LuaEntity;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called after the selected entity changes for a given player. */
type OnSelectedEntityChangedPayload = /** @noSelf **/
{ 
/** The last selected entity if it still exists and there was one. */
last_entity: (null | LuaEntity);
 
/** Identifier of the event */
name: typeof defines.events;
 
/** The player whose selected entity changed. */
player_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when a spider finishes moving to its autopilot position. */
type OnSpiderCommandCompletedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
name: typeof defines.events;
 
/** Tick the event was generated. */
tick: number;
 
/** Spider vehicle which was requested to move. */
vehicle: LuaEntity;
 }

/** Called when a translation request generated through [LuaPlayer::request_translation](LuaPlayer::request_translation) is translated. */
type OnStringTranslatedPayload = /** @noSelf **/
{ 
/** The localised string being translated. */
localised_string: LocalisedString;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** The player whose locale was used for the translation. */
player_index: number;
 
/** The translated `localised_string`. */
result: string;
 
/** Tick the event was generated. */
tick: number;
 
/** Whether the requested localised string was valid and could be translated. */
translated: boolean;
 }

/** Called just after a surface is cleared (all entities removed and all chunks deleted). */
type OnSurfaceClearedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
name: typeof defines.events;
 surface_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when a surface is created. */
type OnSurfaceCreatedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
name: typeof defines.events;
 surface_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called after a surface is deleted. */
type OnSurfaceDeletedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
name: typeof defines.events;
 surface_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called after a surface is imported. */
type OnSurfaceImportedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
name: typeof defines.events;
 
/** The original surface name. */
original_name: string;
 surface_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when a surface is renamed. */
type OnSurfaceRenamedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
name: typeof defines.events;
 new_name: string;
 old_name: string;
 surface_index: number;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when [LuaForce::reset_technology_effects](LuaForce::reset_technology_effects) is finished. */
type OnTechnologyEffectsResetPayload = /** @noSelf **/
{ force: LuaForce;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** Tick the event was generated. */
tick: number;
 }

/** It is fired once every tick. Since this event is fired every tick, its handler shouldn't include performance heavy code. */
type OnTickPayload = /** @noSelf **/
{ 
/** Identifier of the event */
name: typeof defines.events;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when a train changes state (started to stopped and vice versa) */
type OnTrainChangedStatePayload = /** @noSelf **/
{ 
/** Identifier of the event */
name: typeof defines.events;
 old_state: typeof defines.train_state;
 
/** Tick the event was generated. */
tick: number;
 train: LuaTrain;
 }

/** Called when a new train is created either through disconnecting/connecting an existing one or building a new one. */
type OnTrainCreatedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
name: typeof defines.events;
 
/** The first old train id when splitting/merging trains. */
old_train_id_1: (null | number);
 
/** The second old train id when splitting/merging trains. */
old_train_id_2: (null | number);
 
/** Tick the event was generated. */
tick: number;
 train: LuaTrain;
 }

/** Called when a trains schedule is changed either by the player or through script. */
type OnTrainScheduleChangedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
name: typeof defines.events;
 
/** The player who made the change if any. */
player_index: (null | number);
 
/** Tick the event was generated. */
tick: number;
 train: LuaTrain;
 }

/** Called when an entity with a trigger prototype (such as capsules) create an entity AND that trigger prototype defined `trigger_created_entity="true"`. */
type OnTriggerCreatedEntityPayload = /** @noSelf **/
{ entity: LuaEntity;
 
/** Identifier of the event */
name: typeof defines.events;
 source: (null | LuaEntity);
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when an entity with a trigger prototype (such as capsules) fire an artillery projectile AND that trigger prototype defined `trigger_fired_artillery="true"`. */
type OnTriggerFiredArtilleryPayload = /** @noSelf **/
{ entity: LuaEntity;
 
/** Identifier of the event */
name: typeof defines.events;
 source: (null | LuaEntity);
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when a unit is added to a unit group. */
type OnUnitAddedToGroupPayload = /** @noSelf **/
{ group: LuaUnitGroup;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** Tick the event was generated. */
tick: number;
 unit: LuaEntity;
 }

/** Called when a new unit group is created, before any members are added to it. */
type OnUnitGroupCreatedPayload = /** @noSelf **/
{ group: LuaUnitGroup;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when a unit group finishes gathering and starts executing its command. */
type OnUnitGroupFinishedGatheringPayload = /** @noSelf **/
{ group: LuaUnitGroup;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** Tick the event was generated. */
tick: number;
 }

/** Called when a unit is removed from a unit group. */
type OnUnitRemovedFromGroupPayload = /** @noSelf **/
{ group: LuaUnitGroup;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** Tick the event was generated. */
tick: number;
 unit: LuaEntity;
 }

/** Called when a worker (construction or logistic) robot expires through a lack of energy. */
type OnWorkerRobotExpiredPayload = /** @noSelf **/
{ 
/** Identifier of the event */
name: typeof defines.events;
 robot: LuaEntity;
 
/** Tick the event was generated. */
tick: number;
 }

/** A static event mods can use to tell other mods they built something by script. This event is only raised if a mod does so with [LuaBootstrap::raise_event](LuaBootstrap::raise_event) or [LuaBootstrap::raise_script_built](LuaBootstrap::raise_script_built), or when `raise_built` is passed to [LuaSurface::create_entity](LuaSurface::create_entity). Can be filtered using [LuaScriptRaisedBuiltEventFilter](LuaScriptRaisedBuiltEventFilter). */
type ScriptRaisedBuiltPayload = /** @noSelf **/
{ 
/** The entity that has been built. */
entity: LuaEntity;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** Tick the event was generated. */
tick: number;
 }

/** A static event mods can use to tell other mods they destroyed something by script. This event is only raised if a mod does so with [LuaBootstrap::raise_event](LuaBootstrap::raise_event) or [LuaBootstrap::raise_script_destroy](LuaBootstrap::raise_script_destroy), or when `raise_destroy` is passed to [LuaEntity::destroy](LuaEntity::destroy). Can be filtered using [LuaScriptRaisedDestroyEventFilter](LuaScriptRaisedDestroyEventFilter). */
type ScriptRaisedDestroyPayload = /** @noSelf **/
{ 
/** The entity that was destroyed. */
entity: LuaEntity;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** Tick the event was generated. */
tick: number;
 }

/** A static event mods can use to tell other mods they revived something by script. This event is only raised if a mod does so with [LuaBootstrap::raise_event](LuaBootstrap::raise_event) or [LuaBootstrap::raise_script_revive](LuaBootstrap::raise_script_revive), or when `raise_revive` is passed to [LuaEntity::revive](LuaEntity::revive). Can be filtered using [LuaScriptRaisedReviveEventFilter](LuaScriptRaisedReviveEventFilter). */
type ScriptRaisedRevivePayload = /** @noSelf **/
{ 
/** The entity that was revived. */
entity: LuaEntity;
 
/** Identifier of the event */
name: typeof defines.events;
 
/** The tags associated with this entity, if any. */
tags: (null | Tags);
 
/** Tick the event was generated. */
tick: number;
 }

/** A static event mods can use to tell other mods they changed tiles on a surface by script. This event is only raised if a mod does so with [LuaBootstrap::raise_event](LuaBootstrap::raise_event) or [LuaBootstrap::raise_script_set_tiles](LuaBootstrap::raise_script_set_tiles), or when `raise_event` is passed to [LuaSurface::set_tiles](LuaSurface::set_tiles). */
type ScriptRaisedSetTilesPayload = /** @noSelf **/
{ 
/** Identifier of the event */
name: typeof defines.events;
 
/** The surface whose tiles were changed. */
surface_index: number;
 
/** Tick the event was generated. */
tick: number;
 
/** The tiles that were changed. */
tiles: Tile;
 }
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