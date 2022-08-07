/** @noSelfInFile */
/** defines */
declare const defines: Defines;

/** Factorio constants, persistent handles.
@{see https://lua-api.factorio.com/latest/defines.html}
Factorio does not include types associated with defines :/ */
/** @noSelf **/
interface Defines 
{ "alert_type": /** @noSelf **/
{ "custom": any;
 "entity_destroyed": any;
 "entity_under_attack": any;
 "no_material_for_construction": any;
 "no_storage": any;
 "not_enough_construction_robots": any;
 "not_enough_repair_packs": any;
 "train_out_of_fuel": any;
 "turret_fire": any;
 };
 "behavior_result": /** @noSelf **/
{ "deleted": any;
 "fail": any;
 "in_progress": any;
 "success": any;
 };
 "build_check_type": /** @noSelf **/
{ "blueprint_ghost": any;
 "ghost_revive": any;
 "manual": any;
 "manual_ghost": any;
 "script": any;
 "script_ghost": any;
 };
 "chain_signal_state": /** @noSelf **/
{ "all_open": any;
 "none": any;
 "none_open": any;
 "partially_open": any;
 };
 "chunk_generated_status": /** @noSelf **/
{ "basic_tiles": any;
 "corrected_tiles": any;
 "custom_tiles": any;
 "entities": any;
 "nothing": any;
 "tiles": any;
 };
 "circuit_condition_index": /** @noSelf **/
{ "arithmetic_combinator": any;
 "constant_combinator": any;
 "decider_combinator": any;
 "inserter_circuit": any;
 "inserter_logistic": any;
 "lamp": any;
 "offshore_pump": any;
 "pump": any;
 };
 "circuit_connector_id": /** @noSelf **/
{ "accumulator": any;
 "combinator_input": any;
 "combinator_output": any;
 "constant_combinator": any;
 "container": any;
 "electric_pole": any;
 "inserter": any;
 "lamp": any;
 "linked_container": any;
 "offshore_pump": any;
 "programmable_speaker": any;
 "pump": any;
 "rail_chain_signal": any;
 "rail_signal": any;
 "roboport": any;
 "storage_tank": any;
 "wall": any;
 };
 "command": /** @noSelf **/
{ "attack": any;
 "attack_area": any;
 "build_base": any;
 "compound": any;
 "flee": any;
 "go_to_location": any;
 "group": any;
 "stop": any;
 "wander": any;
 };
 "compound_command": /** @noSelf **/
{ "logical_and": any;
 "logical_or": any;
 "return_last": any;
 };
 "control_behavior": /** @noSelf **/
{ "inserter": /** @noSelf **/
{ "circuit_mode_of_operation": /** @noSelf **/
{ "enable_disable": any;
 "none": any;
 "read_hand_contents": any;
 "set_filters": any;
 "set_stack_size": any;
 };
 "hand_read_mode": /** @noSelf **/
{ "hold": any;
 "pulse": any;
 };
 };
 "lamp": /** @noSelf **/
{ "circuit_mode_of_operation": /** @noSelf **/
{ "use_colors": any;
 };
 };
 "logistic_container": /** @noSelf **/
{ "circuit_mode_of_operation": /** @noSelf **/
{ "send_contents": any;
 "set_requests": any;
 };
 };
 "mining_drill": /** @noSelf **/
{ "resource_read_mode": /** @noSelf **/
{ "entire_patch": any;
 "this_miner": any;
 };
 };
 "transport_belt": /** @noSelf **/
{ "content_read_mode": /** @noSelf **/
{ "hold": any;
 "pulse": any;
 };
 };
 "type": /** @noSelf **/
{ "accumulator": any;
 "arithmetic_combinator": any;
 "constant_combinator": any;
 "container": any;
 "decider_combinator": any;
 "generic_on_off": any;
 "inserter": any;
 "lamp": any;
 "logistic_container": any;
 "mining_drill": any;
 "programmable_speaker": any;
 "rail_chain_signal": any;
 "rail_signal": any;
 "roboport": any;
 "storage_tank": any;
 "train_stop": any;
 "transport_belt": any;
 "wall": any;
 };
 };
 "controllers": /** @noSelf **/
{ "character": any;
 "cutscene": any;
 "editor": any;
 "ghost": any;
 "god": any;
 "spectator": any;
 };
 "deconstruction_item": /** @noSelf **/
{ "entity_filter_mode": /** @noSelf **/
{ "blacklist": any;
 "whitelist": any;
 };
 "tile_filter_mode": /** @noSelf **/
{ "blacklist": any;
 "whitelist": any;
 };
 "tile_selection_mode": /** @noSelf **/
{ "always": any;
 "never": any;
 "normal": any;
 "only": any;
 };
 };
 "difficulty": /** @noSelf **/
{ "easy": any;
 "hard": any;
 "normal": any;
 };
 "difficulty_settings": /** @noSelf **/
{ "recipe_difficulty": /** @noSelf **/
{ "expensive": any;
 "normal": any;
 };
 "technology_difficulty": /** @noSelf **/
{ "expensive": any;
 "normal": any;
 };
 };
 "direction": /** @noSelf **/
{ "east": any;
 "north": any;
 "northeast": any;
 "northwest": any;
 "south": any;
 "southeast": any;
 "southwest": any;
 "west": any;
 };
 "disconnect_reason": /** @noSelf **/
{ "afk": any;
 "banned": any;
 "cannot_keep_up": any;
 "desync_limit_reached": any;
 "dropped": any;
 "kicked": any;
 "kicked_and_deleted": any;
 "quit": any;
 "reconnect": any;
 "switching_servers": any;
 "wrong_input": any;
 };
 "distraction": /** @noSelf **/
{ "by_anything": any;
 "by_damage": any;
 "by_enemy": any;
 "none": any;
 };
 "entity_status": /** @noSelf **/
{ "cant_divide_segments": any;
 "charging": any;
 "closed_by_circuit_network": any;
 "disabled": any;
 "disabled_by_control_behavior": any;
 "disabled_by_script": any;
 "discharging": any;
 "fluid_ingredient_shortage": any;
 "full_output": any;
 "fully_charged": any;
 "item_ingredient_shortage": any;
 "launching_rocket": any;
 "low_input_fluid": any;
 "low_power": any;
 "low_temperature": any;
 "marked_for_deconstruction": any;
 "missing_required_fluid": any;
 "missing_science_packs": any;
 "networks_connected": any;
 "networks_disconnected": any;
 "no_ammo": any;
 "no_fuel": any;
 "no_ingredients": any;
 "no_input_fluid": any;
 "no_minable_resources": any;
 "no_modules_to_transmit": any;
 "no_power": any;
 "no_recipe": any;
 "no_research_in_progress": any;
 "normal": any;
 "not_connected_to_rail": any;
 "not_plugged_in_electric_network": any;
 "opened_by_circuit_network": any;
 "out_of_logistic_network": any;
 "preparing_rocket_for_launch": any;
 "recharging_after_power_outage": any;
 "turned_off_during_daytime": any;
 "waiting_for_source_items": any;
 "waiting_for_space_in_destination": any;
 "waiting_for_target_to_be_built": any;
 "waiting_for_train": any;
 "waiting_to_launch_rocket": any;
 "working": any;
 };
 "events": /** @noSelf **/
{ "on_ai_command_completed": any;
 "on_area_cloned": any;
 "on_biter_base_built": any;
 "on_brush_cloned": any;
 "on_build_base_arrived": any;
 "on_built_entity": any;
 "on_cancelled_deconstruction": any;
 "on_cancelled_upgrade": any;
 "on_character_corpse_expired": any;
 "on_chart_tag_added": any;
 "on_chart_tag_modified": any;
 "on_chart_tag_removed": any;
 "on_chunk_charted": any;
 "on_chunk_deleted": any;
 "on_chunk_generated": any;
 "on_combat_robot_expired": any;
 "on_console_chat": any;
 "on_console_command": any;
 "on_cutscene_cancelled": any;
 "on_cutscene_waypoint_reached": any;
 "on_difficulty_settings_changed": any;
 "on_entity_cloned": any;
 "on_entity_damaged": any;
 "on_entity_destroyed": any;
 "on_entity_died": any;
 "on_entity_logistic_slot_changed": any;
 "on_entity_renamed": any;
 "on_entity_settings_pasted": any;
 "on_entity_spawned": any;
 "on_equipment_inserted": any;
 "on_equipment_removed": any;
 "on_force_cease_fire_changed": any;
 "on_force_created": any;
 "on_force_friends_changed": any;
 "on_force_reset": any;
 "on_forces_merged": any;
 "on_forces_merging": any;
 "on_game_created_from_scenario": any;
 "on_gui_checked_state_changed": any;
 "on_gui_click": any;
 "on_gui_closed": any;
 "on_gui_confirmed": any;
 "on_gui_elem_changed": any;
 "on_gui_location_changed": any;
 "on_gui_opened": any;
 "on_gui_selected_tab_changed": any;
 "on_gui_selection_state_changed": any;
 "on_gui_switch_state_changed": any;
 "on_gui_text_changed": any;
 "on_gui_value_changed": any;
 "on_land_mine_armed": any;
 "on_lua_shortcut": any;
 "on_marked_for_deconstruction": any;
 "on_marked_for_upgrade": any;
 "on_market_item_purchased": any;
 "on_mod_item_opened": any;
 "on_permission_group_added": any;
 "on_permission_group_deleted": any;
 "on_permission_group_edited": any;
 "on_permission_string_imported": any;
 "on_picked_up_item": any;
 "on_player_alt_selected_area": any;
 "on_player_ammo_inventory_changed": any;
 "on_player_armor_inventory_changed": any;
 "on_player_banned": any;
 "on_player_built_tile": any;
 "on_player_cancelled_crafting": any;
 "on_player_changed_force": any;
 "on_player_changed_position": any;
 "on_player_changed_surface": any;
 "on_player_cheat_mode_disabled": any;
 "on_player_cheat_mode_enabled": any;
 "on_player_clicked_gps_tag": any;
 "on_player_configured_blueprint": any;
 "on_player_configured_spider_remote": any;
 "on_player_crafted_item": any;
 "on_player_created": any;
 "on_player_cursor_stack_changed": any;
 "on_player_deconstructed_area": any;
 "on_player_demoted": any;
 "on_player_died": any;
 "on_player_display_resolution_changed": any;
 "on_player_display_scale_changed": any;
 "on_player_driving_changed_state": any;
 "on_player_dropped_item": any;
 "on_player_fast_transferred": any;
 "on_player_flushed_fluid": any;
 "on_player_gun_inventory_changed": any;
 "on_player_joined_game": any;
 "on_player_kicked": any;
 "on_player_left_game": any;
 "on_player_main_inventory_changed": any;
 "on_player_mined_entity": any;
 "on_player_mined_item": any;
 "on_player_mined_tile": any;
 "on_player_muted": any;
 "on_player_pipette": any;
 "on_player_placed_equipment": any;
 "on_player_promoted": any;
 "on_player_removed": any;
 "on_player_removed_equipment": any;
 "on_player_repaired_entity": any;
 "on_player_respawned": any;
 "on_player_reverse_selected_area": any;
 "on_player_rotated_entity": any;
 "on_player_selected_area": any;
 "on_player_set_quick_bar_slot": any;
 "on_player_setup_blueprint": any;
 "on_player_toggled_alt_mode": any;
 "on_player_toggled_map_editor": any;
 "on_player_trash_inventory_changed": any;
 "on_player_unbanned": any;
 "on_player_unmuted": any;
 "on_player_used_capsule": any;
 "on_player_used_spider_remote": any;
 "on_post_entity_died": any;
 "on_pre_build": any;
 "on_pre_chunk_deleted": any;
 "on_pre_entity_settings_pasted": any;
 "on_pre_ghost_deconstructed": any;
 "on_pre_ghost_upgraded": any;
 "on_pre_permission_group_deleted": any;
 "on_pre_permission_string_imported": any;
 "on_pre_player_crafted_item": any;
 "on_pre_player_died": any;
 "on_pre_player_left_game": any;
 "on_pre_player_mined_item": any;
 "on_pre_player_removed": any;
 "on_pre_player_toggled_map_editor": any;
 "on_pre_robot_exploded_cliff": any;
 "on_pre_script_inventory_resized": any;
 "on_pre_surface_cleared": any;
 "on_pre_surface_deleted": any;
 "on_research_cancelled": any;
 "on_research_finished": any;
 "on_research_reversed": any;
 "on_research_started": any;
 "on_resource_depleted": any;
 "on_robot_built_entity": any;
 "on_robot_built_tile": any;
 "on_robot_exploded_cliff": any;
 "on_robot_mined": any;
 "on_robot_mined_entity": any;
 "on_robot_mined_tile": any;
 "on_robot_pre_mined": any;
 "on_rocket_launch_ordered": any;
 "on_rocket_launched": any;
 "on_runtime_mod_setting_changed": any;
 "on_script_inventory_resized": any;
 "on_script_path_request_finished": any;
 "on_script_trigger_effect": any;
 "on_sector_scanned": any;
 "on_selected_entity_changed": any;
 "on_spider_command_completed": any;
 "on_string_translated": any;
 "on_surface_cleared": any;
 "on_surface_created": any;
 "on_surface_deleted": any;
 "on_surface_imported": any;
 "on_surface_renamed": any;
 "on_technology_effects_reset": any;
 "on_tick": any;
 "on_train_changed_state": any;
 "on_train_created": any;
 "on_train_schedule_changed": any;
 "on_trigger_created_entity": any;
 "on_trigger_fired_artillery": any;
 "on_unit_added_to_group": any;
 "on_unit_group_created": any;
 "on_unit_group_finished_gathering": any;
 "on_unit_removed_from_group": any;
 "on_worker_robot_expired": any;
 "script_raised_built": any;
 "script_raised_destroy": any;
 "script_raised_revive": any;
 "script_raised_set_tiles": any;
 };
 "flow_precision_index": /** @noSelf **/
{ "fifty_hours": any;
 "five_seconds": any;
 "one_hour": any;
 "one_minute": any;
 "one_thousand_hours": any;
 "ten_hours": any;
 "ten_minutes": any;
 "two_hundred_fifty_hours": any;
 };
 "group_state": /** @noSelf **/
{ "attacking_distraction": any;
 "attacking_target": any;
 "finished": any;
 "gathering": any;
 "moving": any;
 "pathfinding": any;
 "wander_in_group": any;
 };
 "gui_type": /** @noSelf **/
{ "achievement": any;
 "blueprint_library": any;
 "bonus": any;
 "controller": any;
 "custom": any;
 "entity": any;
 "equipment": any;
 "item": any;
 "logistic": any;
 "none": any;
 "other_player": any;
 "permissions": any;
 "player_management": any;
 "production": any;
 "research": any;
 "script_inventory": any;
 "server_management": any;
 "tile": any;
 "trains": any;
 "tutorials": any;
 };
 "input_action": /** @noSelf **/
{ "activate_copy": any;
 "activate_cut": any;
 "activate_paste": any;
 "add_permission_group": any;
 "add_train_station": any;
 "admin_action": any;
 "alt_select_area": any;
 "alt_select_blueprint_entities": any;
 "alternative_copy": any;
 "begin_mining": any;
 "begin_mining_terrain": any;
 "build": any;
 "build_rail": any;
 "build_terrain": any;
 "cancel_craft": any;
 "cancel_deconstruct": any;
 "cancel_new_blueprint": any;
 "cancel_research": any;
 "cancel_upgrade": any;
 "change_active_character_tab": any;
 "change_active_item_group_for_crafting": any;
 "change_active_item_group_for_filters": any;
 "change_active_quick_bar": any;
 "change_arithmetic_combinator_parameters": any;
 "change_decider_combinator_parameters": any;
 "change_entity_label": any;
 "change_item_description": any;
 "change_item_label": any;
 "change_multiplayer_config": any;
 "change_picking_state": any;
 "change_programmable_speaker_alert_parameters": any;
 "change_programmable_speaker_circuit_parameters": any;
 "change_programmable_speaker_parameters": any;
 "change_riding_state": any;
 "change_shooting_state": any;
 "change_train_stop_station": any;
 "change_train_wait_condition": any;
 "change_train_wait_condition_data": any;
 "clear_cursor": any;
 "connect_rolling_stock": any;
 "copy": any;
 "copy_entity_settings": any;
 "copy_opened_blueprint": any;
 "copy_opened_item": any;
 "craft": any;
 "cursor_split": any;
 "cursor_transfer": any;
 "custom_input": any;
 "cycle_blueprint_book_backwards": any;
 "cycle_blueprint_book_forwards": any;
 "deconstruct": any;
 "delete_blueprint_library": any;
 "delete_blueprint_record": any;
 "delete_custom_tag": any;
 "delete_permission_group": any;
 "destroy_item": any;
 "destroy_opened_item": any;
 "disconnect_rolling_stock": any;
 "drag_train_schedule": any;
 "drag_train_wait_condition": any;
 "drop_blueprint_record": any;
 "drop_item": any;
 "edit_blueprint_tool_preview": any;
 "edit_custom_tag": any;
 "edit_permission_group": any;
 "export_blueprint": any;
 "fast_entity_split": any;
 "fast_entity_transfer": any;
 "flush_opened_entity_fluid": any;
 "flush_opened_entity_specific_fluid": any;
 "go_to_train_station": any;
 "grab_blueprint_record": any;
 "gui_checked_state_changed": any;
 "gui_click": any;
 "gui_confirmed": any;
 "gui_elem_changed": any;
 "gui_location_changed": any;
 "gui_selected_tab_changed": any;
 "gui_selection_state_changed": any;
 "gui_switch_state_changed": any;
 "gui_text_changed": any;
 "gui_value_changed": any;
 "import_blueprint": any;
 "import_blueprint_string": any;
 "import_blueprints_filtered": any;
 "import_permissions_string": any;
 "inventory_split": any;
 "inventory_transfer": any;
 "launch_rocket": any;
 "lua_shortcut": any;
 "map_editor_action": any;
 "market_offer": any;
 "mod_settings_changed": any;
 "open_achievements_gui": any;
 "open_blueprint_library_gui": any;
 "open_blueprint_record": any;
 "open_bonus_gui": any;
 "open_character_gui": any;
 "open_current_vehicle_gui": any;
 "open_equipment": any;
 "open_gui": any;
 "open_item": any;
 "open_logistic_gui": any;
 "open_mod_item": any;
 "open_parent_of_opened_item": any;
 "open_production_gui": any;
 "open_technology_gui": any;
 "open_tips_and_tricks_gui": any;
 "open_train_gui": any;
 "open_train_station_gui": any;
 "open_trains_gui": any;
 "paste_entity_settings": any;
 "place_equipment": any;
 "quick_bar_pick_slot": any;
 "quick_bar_set_selected_page": any;
 "quick_bar_set_slot": any;
 "reassign_blueprint": any;
 "remove_cables": any;
 "remove_train_station": any;
 "reset_assembling_machine": any;
 "reset_item": any;
 "reverse_select_area": any;
 "rotate_entity": any;
 "select_area": any;
 "select_blueprint_entities": any;
 "select_entity_slot": any;
 "select_item": any;
 "select_mapper_slot": any;
 "select_next_valid_gun": any;
 "select_tile_slot": any;
 "send_spidertron": any;
 "set_auto_launch_rocket": any;
 "set_autosort_inventory": any;
 "set_behavior_mode": any;
 "set_car_weapons_control": any;
 "set_circuit_condition": any;
 "set_circuit_mode_of_operation": any;
 "set_controller_logistic_trash_filter_item": any;
 "set_deconstruction_item_tile_selection_mode": any;
 "set_deconstruction_item_trees_and_rocks_only": any;
 "set_entity_color": any;
 "set_entity_energy_property": any;
 "set_entity_logistic_trash_filter_item": any;
 "set_filter": any;
 "set_flat_controller_gui": any;
 "set_heat_interface_mode": any;
 "set_heat_interface_temperature": any;
 "set_infinity_container_filter_item": any;
 "set_infinity_container_remove_unfiltered_items": any;
 "set_infinity_pipe_filter": any;
 "set_inserter_max_stack_size": any;
 "set_inventory_bar": any;
 "set_linked_container_link_i_d": any;
 "set_logistic_filter_item": any;
 "set_logistic_filter_signal": any;
 "set_player_color": any;
 "set_recipe_notifications": any;
 "set_request_from_buffers": any;
 "set_research_finished_stops_game": any;
 "set_signal": any;
 "set_splitter_priority": any;
 "set_train_stopped": any;
 "set_trains_limit": any;
 "set_vehicle_automatic_targeting_parameters": any;
 "setup_assembling_machine": any;
 "setup_blueprint": any;
 "setup_single_blueprint_record": any;
 "smart_pipette": any;
 "spawn_item": any;
 "stack_split": any;
 "stack_transfer": any;
 "start_repair": any;
 "start_research": any;
 "start_walking": any;
 "stop_building_by_moving": any;
 "switch_connect_to_logistic_network": any;
 "switch_constant_combinator_state": any;
 "switch_inserter_filter_mode_state": any;
 "switch_power_switch_state": any;
 "switch_to_rename_stop_gui": any;
 "take_equipment": any;
 "toggle_deconstruction_item_entity_filter_mode": any;
 "toggle_deconstruction_item_tile_filter_mode": any;
 "toggle_driving": any;
 "toggle_enable_vehicle_logistics_while_moving": any;
 "toggle_entity_logistic_requests": any;
 "toggle_equipment_movement_bonus": any;
 "toggle_map_editor": any;
 "toggle_personal_logistic_requests": any;
 "toggle_personal_roboport": any;
 "toggle_show_entity_info": any;
 "translate_string": any;
 "undo": any;
 "upgrade": any;
 "upgrade_opened_blueprint_by_item": any;
 "upgrade_opened_blueprint_by_record": any;
 "use_artillery_remote": any;
 "use_item": any;
 "wire_dragging": any;
 "write_to_console": any;
 };
 "input_method": /** @noSelf **/
{ "game_controller": any;
 "keyboard_and_mouse": any;
 };
 "inventory": /** @noSelf **/
{ "artillery_turret_ammo": any;
 "artillery_wagon_ammo": any;
 "assembling_machine_input": any;
 "assembling_machine_modules": any;
 "assembling_machine_output": any;
 "beacon_modules": any;
 "burnt_result": any;
 "car_ammo": any;
 "car_trunk": any;
 "cargo_wagon": any;
 "character_ammo": any;
 "character_armor": any;
 "character_corpse": any;
 "character_guns": any;
 "character_main": any;
 "character_trash": any;
 "character_vehicle": any;
 "chest": any;
 "editor_ammo": any;
 "editor_armor": any;
 "editor_guns": any;
 "editor_main": any;
 "fuel": any;
 "furnace_modules": any;
 "furnace_result": any;
 "furnace_source": any;
 "god_main": any;
 "item_main": any;
 "lab_input": any;
 "lab_modules": any;
 "mining_drill_modules": any;
 "roboport_material": any;
 "roboport_robot": any;
 "robot_cargo": any;
 "robot_repair": any;
 "rocket": any;
 "rocket_silo_input": any;
 "rocket_silo_modules": any;
 "rocket_silo_output": any;
 "rocket_silo_result": any;
 "rocket_silo_rocket": any;
 "spider_ammo": any;
 "spider_trash": any;
 "spider_trunk": any;
 "turret_ammo": any;
 };
 "logistic_member_index": /** @noSelf **/
{ "character_provider": any;
 "character_requester": any;
 "character_storage": any;
 "generic_on_off_behavior": any;
 "logistic_container": any;
 "vehicle_storage": any;
 };
 "logistic_mode": /** @noSelf **/
{ "active_provider": any;
 "buffer": any;
 "none": any;
 "passive_provider": any;
 "requester": any;
 "storage": any;
 };
 "mouse_button_type": /** @noSelf **/
{ "left": any;
 "middle": any;
 "none": any;
 "right": any;
 };
 "rail_connection_direction": /** @noSelf **/
{ "left": any;
 "none": any;
 "right": any;
 "straight": any;
 };
 "rail_direction": /** @noSelf **/
{ "back": any;
 "front": any;
 };
 "relative_gui_position": /** @noSelf **/
{ "bottom": any;
 "left": any;
 "right": any;
 "top": any;
 };
 "relative_gui_type": /** @noSelf **/
{ "accumulator_gui": any;
 "achievement_gui": any;
 "additional_entity_info_gui": any;
 "admin_gui": any;
 "arithmetic_combinator_gui": any;
 "armor_gui": any;
 "assembling_machine_gui": any;
 "assembling_machine_select_recipe_gui": any;
 "beacon_gui": any;
 "blueprint_book_gui": any;
 "blueprint_library_gui": any;
 "blueprint_setup_gui": any;
 "bonus_gui": any;
 "burner_equipment_gui": any;
 "car_gui": any;
 "constant_combinator_gui": any;
 "container_gui": any;
 "controller_gui": any;
 "decider_combinator_gui": any;
 "deconstruction_item_gui": any;
 "electric_energy_interface_gui": any;
 "electric_network_gui": any;
 "entity_variations_gui": any;
 "entity_with_energy_source_gui": any;
 "equipment_grid_gui": any;
 "furnace_gui": any;
 "generic_on_off_entity_gui": any;
 "heat_interface_gui": any;
 "infinity_pipe_gui": any;
 "inserter_gui": any;
 "item_with_inventory_gui": any;
 "lab_gui": any;
 "lamp_gui": any;
 "linked_container_gui": any;
 "loader_gui": any;
 "logistic_gui": any;
 "market_gui": any;
 "mining_drill_gui": any;
 "other_player_gui": any;
 "permissions_gui": any;
 "pipe_gui": any;
 "power_switch_gui": any;
 "production_gui": any;
 "programmable_speaker_gui": any;
 "rail_chain_signal_gui": any;
 "rail_signal_gui": any;
 "reactor_gui": any;
 "rename_stop_gui": any;
 "resource_entity_gui": any;
 "roboport_gui": any;
 "rocket_silo_gui": any;
 "script_inventory_gui": any;
 "server_config_gui": any;
 "spider_vehicle_gui": any;
 "splitter_gui": any;
 "standalone_character_gui": any;
 "storage_tank_gui": any;
 "tile_variations_gui": any;
 "train_gui": any;
 "train_stop_gui": any;
 "trains_gui": any;
 "transport_belt_gui": any;
 "upgrade_item_gui": any;
 "wall_gui": any;
 };
 "render_mode": /** @noSelf **/
{ "chart": any;
 "chart_zoomed_in": any;
 "game": any;
 };
 "rich_text_setting": /** @noSelf **/
{ "disabled": any;
 "enabled": any;
 "highlight": any;
 };
 "riding": /** @noSelf **/
{ "acceleration": /** @noSelf **/
{ "accelerating": any;
 "braking": any;
 "nothing": any;
 "reversing": any;
 };
 "direction": /** @noSelf **/
{ "left": any;
 "right": any;
 "straight": any;
 };
 };
 "rocket_silo_status": /** @noSelf **/
{ "arms_advance": any;
 "arms_retract": any;
 "building_rocket": any;
 "create_rocket": any;
 "doors_closing": any;
 "doors_opened": any;
 "doors_opening": any;
 "engine_starting": any;
 "launch_started": any;
 "launch_starting": any;
 "lights_blinking_close": any;
 "lights_blinking_open": any;
 "rocket_flying": any;
 "rocket_ready": any;
 "rocket_rising": any;
 };
 "shooting": /** @noSelf **/
{ "not_shooting": any;
 "shooting_enemies": any;
 "shooting_selected": any;
 };
 "signal_state": /** @noSelf **/
{ "closed": any;
 "open": any;
 "reserved": any;
 "reserved_by_circuit_network": any;
 };
 "train_state": /** @noSelf **/
{ "arrive_signal": any;
 "arrive_station": any;
 "destination_full": any;
 "manual_control": any;
 "manual_control_stop": any;
 "no_path": any;
 "no_schedule": any;
 "on_the_path": any;
 "path_lost": any;
 "wait_signal": any;
 "wait_station": any;
 };
 "transport_line": /** @noSelf **/
{ "left_line": any;
 "left_split_line": any;
 "left_underground_line": any;
 "right_line": any;
 "right_split_line": any;
 "right_underground_line": any;
 "secondary_left_line": any;
 "secondary_left_split_line": any;
 "secondary_right_line": any;
 "secondary_right_split_line": any;
 };
 "wire_connection_id": /** @noSelf **/
{ "electric_pole": any;
 "power_switch_left": any;
 "power_switch_right": any;
 };
 "wire_type": /** @noSelf **/
{ "copper": any;
 "green": any;
 "red": any;
 };
 } 
/** concepts */

/** Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following: */
/** @noSelf **/
interface AchievementPrototypeFilter 
{ 
/** The condition to filter on. One of `"allowed-without-fight"`, `"type"`. */
"filter": string;
 
/** Inverts the condition. Default is `false`. */
"invert": (null | boolean);
 
/** How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`. */
"mode": (null | string);
 } 
/** @noSelf **/
interface AdvancedMapGenSettings 
{ "difficulty_settings": DifficultySettings;
 "enemy_evolution": EnemyEvolutionMapSettings;
 "enemy_expansion": EnemyExpansionMapSettings;
 "pollution": PollutionMapSettings;
 } 
/** @noSelf **/
interface Alert 
{ 
/** The SignalID used for a custom alert. Only present for custom alerts. */
"icon": (null | SignalID);
 
/** The message for a custom alert. Only present for custom alerts. */
"message": (null | LocalisedString);
 "position": (null | MapPosition);
 "prototype": (null | LuaEntityPrototype);
 "target": (null | LuaEntity);
 
/** The tick this alert was created. */
"tick": number;
 } 

/** A [string](string) that specifies where a GUI element should be. */
/** @noSelf **/
interface Alignment 
{ 
/** A [string](string) that specifies where a GUI element should be. */
"Alignment": 
/** A [string](string) that specifies where a GUI element should be. */
("top-left" | "middle-left" | "left" | "bottom-left" | "top-center" | "middle-center" | "center" | "bottom-center" | "top-right" | "right" | "bottom-right");
 } 
/** @noSelf **/
interface AmmoType 
{ "action": TriggerItem[];
 
/** Ammo category of this ammo. */
"category": string;
 
/** When `true`, the gun will be able to shoot even when the target is out of range. Only applies when `target_type` is `position`. The gun will fire at the maximum range in the direction of the target position. Defaults to `false`. */
"clamp_position": (null | boolean);
 "consumption_modifier": (null | number);
 "cooldown_modifier": (null | number);
 
/** Energy consumption of a single shot, if applicable. Defaults to `0`. */
"energy_consumption": (null | number);
 "range_modifier": (null | number);
 
/** One of `"entity"` (fires at an entity), `"position"` (fires directly at a position), or `"direction"` (fires in a direction). */
"target_type": string;
 } 

/** Any basic type (string, number, boolean), table, or LuaObject. */
/** @noSelf **/
interface Any 
{ 
/** Any basic type (string, number, boolean), table, or LuaObject. */
"Any": 
/** Any basic type (string, number, boolean), table, or LuaObject. */
(string | boolean | number | any | LuaObject);
 } 

/** Any basic type (string, number, boolean) or table. */
/** @noSelf **/
interface AnyBasic 
{ 
/** Any basic type (string, number, boolean) or table. */
"AnyBasic": 
/** Any basic type (string, number, boolean) or table. */
(string | boolean | number | any);
 } 
/** @noSelf **/
interface ArithmeticCombinatorParameters 
{ 
/** Constant to use as the first argument of the operation. Has no effect when `first_signal` is set. Defaults to `0`. */
"first_constant": (null | number);
 
/** First signal to use in an operation. If not specified, the second argument will be the value of `first_constant`. */
"first_signal": (null | SignalID);
 
/** Must be one of `"*"`, `"/"`, `"+"`, `"-"`, `"%"`, `"^"`, `"<<"`, `">>"`, `"AND"`, `"OR"`, `"XOR"`. When not specified, defaults to `"*"`. */
"operation": (null | string);
 
/** Specifies the signal to output. */
"output_signal": (null | SignalID);
 
/** Constant to use as the second argument of the operation. Has no effect when `second_signal` is set. Defaults to `0`. */
"second_constant": (null | number);
 
/** Second signal to use in an operation. If not specified, the second argument will be the value of `second_constant`. */
"second_signal": (null | SignalID);
 } 
/** @noSelf **/
interface AttackParameterFluid 
{ 
/** Multiplier applied to the damage of an attack. */
"damage_modifier": number;
 
/** Name of the [LuaFluidPrototype](LuaFluidPrototype). */
"type": string;
 } 
/** @noSelf **/
interface AttackParameters 
{ 
/** List of the names of compatible [LuaAmmoCategoryPrototypes](LuaAmmoCategoryPrototype). */
"ammo_categories": 
/** List of the names of compatible [LuaAmmoCategoryPrototypes](LuaAmmoCategoryPrototype). */
string[];
 
/** Multiplier applied to the ammo consumption of an attack. */
"ammo_consumption_modifier": number;
 "ammo_type": (null | AmmoType);
 
/** Minimum amount of ticks between shots. If this is less than `1`, multiple shots can be performed per tick. */
"cooldown": number;
 
/** Multiplier applied to the damage of an attack. */
"damage_modifier": number;
 
/** When searching for the nearest enemy to attack, `fire_penalty` is added to the enemy's distance if they are on fire. */
"fire_penalty": number;
 
/** When searching for an enemy to attack, a higher `health_penalty` will discourage targeting enemies with high health. A negative penalty will do the opposite. */
"health_penalty": number;
 
/** If less than `range`, the entity will choose a random distance between `range` and `min_attack_distance` and attack from that distance. Used for spitters. */
"min_attack_distance": number;
 
/** Minimum range of attack. Used with flamethrower turrets to prevent self-immolation. */
"min_range": number;
 "movement_slow_down_cooldown": number;
 "movement_slow_down_factor": number;
 
/** Maximum range of attack. */
"range": number;
 
/** Defines how the range is determined. Either `'center-to-center'` or `'bounding-box-to-bounding-box'`. */
"range_mode": string;
 
/** When searching for an enemy to attack, a higher `rotate_penalty` will discourage targeting enemies that would take longer to turn to face. */
"rotate_penalty": number;
 
/** The arc that the entity can attack in as a fraction of a circle. A value of `1` means the full 360 degrees. */
"turn_range": number;
 
/** The type of AttackParameter. One of `'projectile'`, `'stream'` or `'beam'`. */
"type": string;
 
/** Number of ticks it takes for the weapon to actually shoot after it has been ordered to do so. */
"warmup": number;
 } 
/** @noSelf **/
interface AutoplaceControl 
{ 
/** For things that are placed as spots such as ores and enemy bases, frequency is generally proportional to number of spots placed per unit area. For continuous features such as forests, frequency is how compressed the probability function is over distance, i.e. the inverse of 'scale' (similar to terrain_segmentation). When the [LuaAutoplaceControlPrototype](LuaAutoplaceControlPrototype) is of the category `"terrain"`, then scale is shown in the map generator GUI instead of frequency. */
"frequency": MapGenSize;
 
/** Has different effects for different things, but generally affects the 'health' or density of a thing that is placed without affecting where it is placed. For trees, richness affects tree health. For ores, richness multiplies the amount of ore at any given tile in a patch. Metadata about autoplace controls (such as whether or not 'richness' does anything for them) can be found in the [LuaAutoplaceControlPrototype](LuaAutoplaceControlPrototype) by looking up `game.autoplace_control_prototypes[(control prototype name)]`, e.g. `game.autoplace_control_prototypes["enemy-base"].richness` is false, because enemy base autoplacement doesn't use richness. */
"richness": MapGenSize;
 
/** For things that are placed as spots, size is proportional to the area of each spot. For continuous features, size affects how much of the map is covered with the thing, and is called 'coverage' in the GUI. */
"size": MapGenSize;
 } 
/** @noSelf **/
interface AutoplaceSettings 
{ "settings": Record<string, AutoplaceControl>;
 
/** Whether missing autoplace names for this type should be default enabled. */
"treat_missing_as_default": boolean;
 } 

/** Specifies how probability and richness are calculated when placing something on the map. Can be specified either using `probability_expression` and `richness_expression` or by using all the other fields. */
/** @noSelf **/
interface AutoplaceSpecification 
{ 
/** Control prototype name. */
"control": (null | string);
 "coverage": number;
 "default_enabled": boolean;
 "force": string;
 "max_probability": number;
 "order": string;
 "peaks": AutoplaceSpecificationPeak[];
 "placement_density": number;
 "probability_expression": NoiseExpression;
 "random_probability_penalty": number;
 "richness_base": number;
 "richness_expression": NoiseExpression;
 "richness_multiplier": number;
 "richness_multiplier_distance_bonus": number;
 "sharpness": number;
 "starting_area_size": number;
 "tile_restriction": AutoplaceSpecificationRestriction[];
 } 
/** @noSelf **/
interface AutoplaceSpecificationPeak 
{ "aux_max_range": number;
 "aux_optimal": number;
 "aux_range": number;
 "aux_top_property_limit": number;
 "distance_max_range": number;
 "distance_optimal": number;
 "distance_range": number;
 "distance_top_property_limit": number;
 "elevation_max_range": number;
 "elevation_optimal": number;
 "elevation_range": number;
 "elevation_top_property_limit": number;
 "influence": number;
 "max_influence": number;
 "min_influence": number;
 "noisePersistence": number;
 
/** Prototype name of the noise layer. */
"noise_layer": (null | string);
 "noise_octaves_difference": number;
 "richness_influence": number;
 "starting_area_weight_max_range": number;
 "starting_area_weight_optimal": number;
 "starting_area_weight_range": number;
 "starting_area_weight_top_property_limit": number;
 "temperature_max_range": number;
 "temperature_optimal": number;
 "temperature_range": number;
 "temperature_top_property_limit": number;
 "tier_from_start_max_range": number;
 "tier_from_start_optimal": number;
 "tier_from_start_range": number;
 "tier_from_start_top_property_limit": number;
 "water_max_range": number;
 "water_optimal": number;
 "water_range": number;
 "water_top_property_limit": number;
 } 
/** @noSelf **/
interface AutoplaceSpecificationRestriction 
{ 
/** Tile prototype name */
"first": (null | string);
 
/** Second prototype name */
"second": (null | string);
 } 
/** @noSelf **/
interface BeamTarget 
{ 
/** The target entity. */
"entity": (null | LuaEntity);
 
/** The target position. */
"position": (null | MapPosition);
 } 

/** The representation of an entity inside of a blueprint. It has at least these fields, but can contain additional ones depending on the kind of entity. */
/** @noSelf **/
interface BlueprintEntity 
{ 
/** The circuit network connections of the entity, if there are any. Only relevant for entities that support circuit connections. */
"connections": (null | BlueprintCircuitConnection);
 
/** The control behavior of the entity, if it has one. The format of the control behavior depends on the entity's type. Only relevant for entities that support control behaviors. */
"control_behavior": (null | BlueprintControlBehavior);
 
/** The direction the entity is facing. Only present for entities that can face in different directions and when the entity is not facing north. */
"direction": (null | typeof defines.direction);
 
/** The entity's unique identifier in the blueprint. */
"entity_number": number;
 
/** The items that the entity will request when revived, if there are any. It's a mapping of prototype names to amounts. Only relevant for entity ghosts. */
"items": 
/** The items that the entity will request when revived, if there are any. It's a mapping of prototype names to amounts. Only relevant for entity ghosts. */
Record<string, number>;
 
/** The prototype name of the entity. */
"name": string;
 
/** The position of the entity. */
"position": MapPosition;
 
/** The schedule of the entity, if it has one. Only relevant for locomotives. */
"schedule": 
/** The schedule of the entity, if it has one. Only relevant for locomotives. */
TrainScheduleRecord[];
 
/** The entity tags of the entity, if there are any. Only relevant for entity ghosts. */
"tags": (null | Tags);
 } 
/** @noSelf **/
interface BlueprintItemIcon 
{ 
/** Index of the icon in the blueprint icons slots. Has to be an integer in the range [1, 4]. */
"index": number;
 
/** Name of the item prototype whose icon should be used. */
"name": string;
 } 
/** @noSelf **/
interface BlueprintSignalIcon 
{ 
/** Index of the icon in the blueprint icons slots. Has to be an integer in the range [1, 4]. */
"index": number;
 
/** The icon to use. It can be any item icon as well as any virtual signal icon. */
"signal": SignalID;
 } 

/** Two positions, specifying the top-left and bottom-right corner of the box respectively. Like with [MapPosition](MapPosition), the names of the members may be omitted. When read from the game, the third member `orientation` is present if it is non-zero, however it is ignored when provided to the game. */
/** @noSelf **/
interface BoundingBox 
{ 
/** Two positions, specifying the top-left and bottom-right corner of the box respectively. Like with [MapPosition](MapPosition), the names of the members may be omitted. When read from the game, the third member `orientation` is present if it is non-zero, however it is ignored when provided to the game. */
"BoundingBox": 
/** Two positions, specifying the top-left and bottom-right corner of the box respectively. Like with [MapPosition](MapPosition), the names of the members may be omitted. When read from the game, the third member `orientation` is present if it is non-zero, however it is ignored when provided to the game. */
(/** @noSelf **/
{ "left_top": MapPosition;
 "orientation": (null | RealOrientation);
 "right_bottom": MapPosition;
 } | ["MapPosition","MapPosition","RealOrientation"]);
 } 
/** @noSelf **/
interface CapsuleAction 
{ 
/** Only present when `type` is `"throw"` or `"use-on-self"`. */
"attack_parameters": (null | AttackParameters);
 
/** Only present when `type` is `"equipment-remote"`. It is the equipment prototype name. */
"equipment": (null | string);
 
/** One of `"throw"`, `"equipment-remote"`, `"use-on-self"`. */
"type": string;
 } 
/** @noSelf **/
interface ChartTagSpec 
{ "icon": (null | SignalID);
 "last_user": (null | PlayerIdentification);
 "position": MapPosition;
 "text": (null | string);
 } 

/** Coordinates of a chunk in a [LuaSurface](LuaSurface) where each integer `x`/`y` represents a different chunk. This uses the same format as [MapPosition](MapPosition), meaning it can be specified either with or without explicit keys. A [MapPosition](MapPosition) can be translated to a ChunkPosition by dividing the `x`/`y` values by 32. */
/** @noSelf **/
interface ChunkPosition 
{ 
/** Coordinates of a chunk in a [LuaSurface](LuaSurface) where each integer `x`/`y` represents a different chunk. This uses the same format as [MapPosition](MapPosition), meaning it can be specified either with or without explicit keys. A [MapPosition](MapPosition) can be translated to a ChunkPosition by dividing the `x`/`y` values by 32. */
"ChunkPosition": 
/** Coordinates of a chunk in a [LuaSurface](LuaSurface) where each integer `x`/`y` represents a different chunk. This uses the same format as [MapPosition](MapPosition), meaning it can be specified either with or without explicit keys. A [MapPosition](MapPosition) can be translated to a ChunkPosition by dividing the `x`/`y` values by 32. */
(/** @noSelf **/
{ "x": number;
 "y": number;
 } | ["int","int"]);
 } 

/** A [ChunkPosition](ChunkPosition) with an added bounding box for the area of the chunk. */
/** @noSelf **/
interface ChunkPositionAndArea 
{ "area": BoundingBox;
 "x": number;
 "y": number;
 } 
/** @noSelf **/
interface CircuitCondition 
{ 
/** Specifies how the inputs should be compared. If not specified, defaults to `"<"`. */
"comparator": (null | ComparatorString);
 
/** Constant to compare `first_signal` to. Has no effect when `second_signal` is set. When neither `second_signal` nor `constant` are specified, the effect is as though `constant` were specified with the value `0`. */
"constant": (null | number);
 
/** Defaults to blank */
"first_signal": (null | SignalID);
 
/** What to compare `first_signal` to. If not specified, `first_signal` will be compared to `constant`. */
"second_signal": (null | SignalID);
 } 
/** @noSelf **/
interface CircuitConditionDefinition 
{ "condition": CircuitCondition;
 
/** Whether the condition is currently fulfilled */
"fulfilled": (null | boolean);
 } 
/** @noSelf **/
interface CircuitConnectionDefinition 
{ "source_circuit_id": typeof defines.circuit_connector_id;
 "target_circuit_id": typeof defines.circuit_connector_id;
 "target_entity": LuaEntity;
 
/** Wire color, either [defines.wire_type.red](defines.wire_type.red) or [defines.wire_type.green](defines.wire_type.green). */
"wire": typeof defines.wire_type;
 } 
/** @noSelf **/
interface CircularParticleCreationSpecification 
{ 
/** This vector is a table with `x` and `y` keys instead of an array. */
"center": Vector;
 "creation_distance": number;
 "creation_distance_orientation": number;
 "direction": number;
 "direction_deviation": number;
 "height": number;
 "height_deviation": number;
 
/** Name of the [LuaEntityPrototype](LuaEntityPrototype) */
"name": string;
 "speed": number;
 "speed_deviation": number;
 "starting_frame_speed": number;
 "starting_frame_speed_deviation": number;
 "use_source_position": boolean;
 "vertical_speed": number;
 "vertical_speed_deviation": number;
 } 
/** @noSelf **/
interface CliffOrientation 
{ "CliffOrientation": ("west-to-east" | "north-to-south" | "east-to-west" | "south-to-north" | "west-to-north" | "north-to-east" | "east-to-south" | "south-to-west" | "west-to-south" | "north-to-west" | "east-to-north" | "south-to-east" | "west-to-none" | "none-to-east" | "east-to-none" | "none-to-west" | "north-to-none" | "none-to-south" | "south-to-none" | "none-to-north");
 } 
/** @noSelf **/
interface CliffPlacementSettings 
{ 
/** Elevation at which the first row of cliffs is placed. The default is `10`, and this cannot be set from the map generation GUI. */
"cliff_elevation_0": number;
 
/** Elevation difference between successive rows of cliffs. This is inversely proportional to 'frequency' in the map generation GUI. Specifically, when set from the GUI the value is `40 / frequency`. */
"cliff_elevation_interval": number;
 
/** Name of the cliff prototype. */
"name": string;
 
/** Corresponds to 'continuity' in the GUI. This value is not used directly, but is used by the 'cliffiness' noise expression, which in combination with elevation and the two cliff elevation properties drives cliff placement (cliffs are placed when elevation crosses the elevation contours defined by `cliff_elevation_0` and `cliff_elevation_interval` when 'cliffiness' is greater than `0.5`). The default 'cliffiness' expression interprets this value such that larger values result in longer unbroken walls of cliffs, and smaller values (between `0` and `1`) result in larger gaps in cliff walls. */
"richness": MapGenSize;
 } 

/** A set of flags. Set flags are in the dictionary as `true`, while unset flags aren't present at all. */
/** @noSelf **/
interface CollisionMask 
{ 
/** A set of flags. Set flags are in the dictionary as `true`, while unset flags aren't present at all. */
"CollisionMask": 
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
"CollisionMaskLayer": 
/** A [string](string) specifying a collision mask layer.

In addition to the listed layers, there is `"layer-13"` through `"layer-55"`. These layers are currently unused by the game but may change. If a mod is going to use one of the unused layers it's recommended to start at the higher layers because the base game will take from the lower ones. */
("ground-tile" | "water-tile" | "resource-layer" | "doodad-layer" | "floor-layer" | "item-layer" | "ghost-layer" | "object-layer" | "player-layer" | "train-layer" | "rail-layer" | "transport-belt-layer" | "not-setup");
 } 

/** A [CollisionMask](CollisionMask) which also includes any flags this mask has. */
/** @noSelf **/
interface CollisionMaskWithFlags 
{ 
/** A [CollisionMask](CollisionMask) which also includes any flags this mask has. */
"CollisionMaskWithFlags": 
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
"Color": 
/** Red, green, blue and alpha values, all in range [0, 1] or all in range [0, 255] if any value is > 1. All values here are optional. Color channels default to `0`, the alpha channel defaults to `1`.

Similar to [MapPosition](MapPosition), Color allows the short-hand notation of passing an array of exactly 3 or 4 numbers. The game usually expects colors to be in pre-multiplied form (color channels are pre-multiplied by alpha). */
(/** @noSelf **/
{ "a": (null | number);
 "b": (null | number);
 "g": (null | number);
 "r": (null | number);
 } | ["float","float","float","float"]);
 } 

/** Same as [Color](Color), but red, green, blue and alpha values can be any floating point number, without any special handling of the range [1, 255]. */
/** @noSelf **/
interface ColorModifier 
{ 
/** Same as [Color](Color), but red, green, blue and alpha values can be any floating point number, without any special handling of the range [1, 255]. */
"ColorModifier": 
/** Same as [Color](Color), but red, green, blue and alpha values can be any floating point number, without any special handling of the range [1, 255]. */
(/** @noSelf **/
{ "a": (null | number);
 "b": (null | number);
 "g": (null | number);
 "r": (null | number);
 } | ["float","float","float","float"]);
 } 

/** Commands can be given to enemies and unit groups. */
/** @noSelf **/
interface Command 
{ 
/** Type of command. The remaining fields depend on the value of this field. */
"type": typeof defines.command;
 } 

/** A string that specifies how the inputs should be compared */
/** @noSelf **/
interface ComparatorString 
{ 
/** A string that specifies how the inputs should be compared */
"ComparatorString": 
/** A string that specifies how the inputs should be compared */
("=" | ">" | "<" | "≥" | ">=" | "≤" | "<=" | "≠" | "!=");
 } 
/** @noSelf **/
interface ConfigurationChangedData 
{ 
/** `true` when mod prototype migrations have been applied since the last time this save was loaded. */
"migration_applied": boolean;
 
/** Dictionary of mod changes. It is indexed by mod name. */
"mod_changes": 
/** Dictionary of mod changes. It is indexed by mod name. */
Record<string, ModChangeData>;
 
/** `true` when mod startup settings have changed since the last time this save was loaded. */
"mod_startup_settings_changed": boolean;
 
/** New version of the map. Present only when loading map version other than the current version. */
"new_version": (null | string);
 
/** Old version of the map. Present only when loading map version other than the current version. */
"old_version": (null | string);
 } 
/** @noSelf **/
interface ConstantCombinatorParameters 
{ 
/** Value of the signal to emit. */
"count": number;
 
/** Index of the constant combinator's slot to set this signal to. */
"index": number;
 
/** Signal to emit. */
"signal": SignalID;
 } 
/** @noSelf **/
interface CraftingQueueItem 
{ 
/** The amount of items being crafted. */
"count": number;
 
/** The index of the item in the crafting queue. */
"index": number;
 
/** The item is a prerequisite for another item in the queue. */
"prerequisite": boolean;
 
/** The recipe being crafted. */
"recipe": string;
 } 
/** @noSelf **/
interface CursorBoxRenderType 
{ "CursorBoxRenderType": ("entity" | "not-allowed" | "electricity" | "pair" | "copy" | "train-visualization" | "logistics" | "blueprint-snap-rectangle");
 } 
/** @noSelf **/
interface CustomCommandData 
{ 
/** The name of the command. */
"name": string;
 
/** The parameter passed after the command, if there is one. */
"parameter": (null | string);
 
/** The player who issued the command, or `nil` if it was issued from the server console. */
"player_index": (null | number);
 
/** The tick the command was used in. */
"tick": number;
 } 
/** @noSelf **/
interface CutsceneWaypoint 
{ 
/** Position to pan the camera to. */
"position": (null | MapPosition);
 
/** Entity or unit group to pan the camera to. */
"target": 
/** Entity or unit group to pan the camera to. */
(LuaEntity | LuaUnitGroup);
 
/** Time in ticks to wait before moving to the next waypoint. */
"time_to_wait": number;
 
/** How many ticks it will take to reach this waypoint from the previous one. */
"transition_time": number;
 
/** Zoom level to be set when the waypoint is reached. When not specified, the previous waypoint's zoom is used. */
"zoom": (null | number);
 } 
/** @noSelf **/
interface DeciderCombinatorParameters 
{ 
/** Specifies how the inputs should be compared. If not specified, defaults to `"<"`. */
"comparator": (null | ComparatorString);
 
/** Constant to use as the second argument of operation. Defaults to `0`. */
"constant": (null | number);
 
/** Defaults to `true`. When `false`, will output a value of `1` for the given `output_signal`. */
"copy_count_from_input": (null | boolean);
 
/** Defaults to blank. */
"first_signal": (null | SignalID);
 
/** Defaults to blank. */
"output_signal": (null | SignalID);
 
/** Second signal to use in an operation, if any. If this is not specified, the second argument to a decider combinator's operation is assumed to be the value of `constant`. */
"second_signal": (null | SignalID);
 } 
/** @noSelf **/
interface Decorative 
{ "amount": number;
 
/** The name of the decorative prototype. */
"name": string;
 "position": TilePosition;
 } 

/** Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following: */
/** @noSelf **/
interface DecorativePrototypeFilter 
{ 
/** The condition to filter on. One of `"decal"`, `"autoplace"`, `"collision-mask"`. */
"filter": string;
 
/** Inverts the condition. Default is `false`. */
"invert": (null | boolean);
 
/** How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`. */
"mode": (null | string);
 } 
/** @noSelf **/
interface DecorativeResult 
{ "amount": number;
 "decorative": LuaDecorativePrototype;
 "position": TilePosition;
 } 

/** Technology and recipe difficulty settings. Updating any of the attributes will immediately take effect in the game engine. */
/** @noSelf **/
interface DifficultySettings 
{ "recipe_difficulty": typeof defines.difficulty_settings.recipe_difficulty;
 
/** Either `"after-victory"`, `"always"` or `"never"`. Changing this to `"always"` or `"after-victory"` does not automatically unlock the research queue. See [LuaForce](LuaForce) for that. */
"research_queue_setting": string;
 "technology_difficulty": typeof defines.difficulty_settings.technology_difficulty;
 
/** A value in range [0.001, 1000]. */
"technology_price_multiplier": number;
 } 
/** @noSelf **/
interface DisplayResolution 
{ "height": number;
 "width": number;
 } 

/** These values represent a percentual increase in evolution. This means a value of `0.1` would increase evolution by 10%. */
/** @noSelf **/
interface EnemyEvolutionMapSettings 
{ 
/** The amount evolution progresses for every destroyed spawner. Defaults to `0.002`. */
"destroy_factor": number;
 
/** Whether enemy evolution is enabled at all. */
"enabled": boolean;
 
/** The amount evolution progresses for every unit of pollution. Defaults to `0.0000009`. */
"pollution_factor": number;
 
/** The amount evolution naturally progresses by every second. Defaults to `0.000004`. */
"time_factor": number;
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
"building_coefficient": number;
 
/** Whether enemy expansion is enabled at all. */
"enabled": boolean;
 
/** Defaults to `2`. */
"enemy_building_influence_radius": number;
 
/** Defaults to `2`. */
"friendly_base_influence_radius": number;
 
/** A chunk has to have at most this high of a percentage of unbuildable tiles for it to be considered a candidate to avoid chunks full of water as candidates. Defaults to `0.9`, or 90%. */
"max_colliding_tiles_coefficient": number;
 
/** The maximum time between expansions in ticks. The actual cooldown is adjusted to the current evolution levels. Defaults to `60*3,600=216,000` ticks. */
"max_expansion_cooldown": number;
 
/** Distance in chunks from the furthest base around to prevent expansions from reaching too far into the player's territory. Defaults to `7`. */
"max_expansion_distance": number;
 
/** The minimum time between expansions in ticks. The actual cooldown is adjusted to the current evolution levels. Defaults to `4*3,600=14,400` ticks. */
"min_expansion_cooldown": number;
 
/** Defaults to `0.4`. */
"neighbouring_base_chunk_coefficient": number;
 
/** Defaults to `0.5`. */
"neighbouring_chunk_coefficient": number;
 
/** Defaults to `2.0`. */
"other_base_coefficient": number;
 
/** The maximum size of a biter group that goes to build a new base. This is multiplied by the evolution factor. Defaults to `20`. */
"settler_group_max_size": number;
 
/** The minimum size of a biter group that goes to build a new base. This is multiplied by the evolution factor. Defaults to `5`. */
"settler_group_min_size": number;
 } 

/** Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following: */
/** @noSelf **/
interface EntityPrototypeFilter 
{ 
/** The condition to filter on. One of `"flying-robot"`, `"robot-with-logistics-interface"`, `"rail"`, `"ghost"`, `"explosion"`, `"vehicle"`, `"crafting-machine"`, `"rolling-stock"`, `"turret"`, `"transport-belt-connectable"`, `"wall-connectable"`, `"buildable"`, `"placable-in-editor"`, `"clonable"`, `"selectable"`, `"hidden"`, `"entity-with-health"`, `"building"`, `"fast-replaceable"`, `"uses-direction"`, `"minable"`, `"circuit-connectable"`, `"autoplace"`, `"blueprintable"`, `"item-to-place"`, `"name"`, `"type"`, `"collision-mask"`, `"flag"`, `"build-base-evolution-requirement"`, `"selection-priority"`, `"emissions"`, `"crafting-category"`. */
"filter": string;
 
/** Inverts the condition. Default is `false`. */
"invert": (null | boolean);
 
/** How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`. */
"mode": (null | string);
 } 

/** A set of flags. Set flags are in the dictionary as `true`, while unset flags aren't present at all.

By default, none of these flags are set. */
/** @noSelf **/
interface EntityPrototypeFlags 
{ 
/** A set of flags. Set flags are in the dictionary as `true`, while unset flags aren't present at all.

By default, none of these flags are set. */
"EntityPrototypeFlags": 
/** A set of flags. Set flags are in the dictionary as `true`, while unset flags aren't present at all.

By default, none of these flags are set. */
Record<("not-rotatable" | "placeable-neutral" | "placeable-player" | "placeable-enemy" | "placeable-off-grid" | "player-creation" | "building-direction-8-way" | "filter-directions" | "fast-replaceable-no-build-while-moving" | "breaths-air" | "not-repairable" | "not-on-map" | "not-deconstructable" | "not-blueprintable" | "hidden" | "hide-alt-info" | "fast-replaceable-no-cross-type-while-moving" | "no-gap-fill-while-building" | "not-flammable" | "no-automated-item-removal" | "no-automated-item-insertion" | "no-copy-paste" | "not-selectable-in-game" | "not-upgradable" | "not-in-kill-statistics" | "not-in-made-in"), true>;
 } 

/** An entity prototype may be specified in one of three ways. */
/** @noSelf **/
interface EntityPrototypeIdentification 
{ 
/** An entity prototype may be specified in one of three ways. */
"EntityPrototypeIdentification": 
/** An entity prototype may be specified in one of three ways. */
(LuaEntity | LuaEntityPrototype | string);
 } 

/** A table used to define a manual shape for a piece of equipment. */
/** @noSelf **/
interface EquipmentPoint 
{ "x": number;
 "y": number;
 } 

/** Position inside an equipment grid. This uses the same format as [MapPosition](MapPosition), meaning it can be specified either with or without explicit keys. */
/** @noSelf **/
interface EquipmentPosition 
{ 
/** Position inside an equipment grid. This uses the same format as [MapPosition](MapPosition), meaning it can be specified either with or without explicit keys. */
"EquipmentPosition": 
/** Position inside an equipment grid. This uses the same format as [MapPosition](MapPosition), meaning it can be specified either with or without explicit keys. */
(/** @noSelf **/
{ "x": number;
 "y": number;
 } | ["int","int"]);
 } 

/** Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following: */
/** @noSelf **/
interface EquipmentPrototypeFilter 
{ 
/** The condition to filter on. One of `"item-to-place"`, `"type"`. */
"filter": string;
 
/** Inverts the condition. Default is `false`. */
"invert": (null | boolean);
 
/** How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`. */
"mode": (null | string);
 } 

/** Information about the event that has been raised. The table can also contain other fields depending on the type of event. See [the list of Factorio events](events.html) for more information on these. */
/** @noSelf **/
interface EventData 
{ 
/** The name of the mod that raised the event if it was raised using [LuaBootstrap::raise_event](LuaBootstrap::raise_event). */
"mod_name": (null | string);
 
/** The identifier of the event this handler was registered to. */
"name": typeof defines.events;
 
/** The tick during which the event happened. */
"tick": number;
 } 

/** Used to filter out irrelevant event callbacks in a performant way. */
/** @noSelf **/
interface EventFilter 
{ 
/** Used to filter out irrelevant event callbacks in a performant way. */
"EventFilter": 
/** Used to filter out irrelevant event callbacks in a performant way. */
(LuaEntityClonedEventFilter | LuaEntityDamagedEventFilter | LuaPlayerMinedEntityEventFilter | LuaPreRobotMinedEntityEventFilter | LuaRobotBuiltEntityEventFilter | LuaPostEntityDiedEventFilter | LuaEntityDiedEventFilter | LuaScriptRaisedReviveEventFilter | LuaPrePlayerMinedEntityEventFilter | LuaEntityMarkedForDeconstructionEventFilter | LuaPreGhostDeconstructedEventFilter | LuaPreGhostUpgradedEventFilter | LuaEntityDeconstructionCancelledEventFilter | LuaEntityMarkedForUpgradeEventFilter | LuaSectorScannedEventFilter | LuaRobotMinedEntityEventFilter | LuaScriptRaisedDestroyEventFilter | LuaUpgradeCancelledEventFilter | LuaScriptRaisedBuiltEventFilter | LuaPlayerBuiltEntityEventFilter | LuaPlayerRepairedEntityEventFilter)[];
 } 
/** @noSelf **/
interface Fluid 
{ 
/** Amount of the fluid. */
"amount": number;
 
/** Fluid prototype name of the fluid. */
"name": string;
 
/** The temperature. When reading from [LuaFluidBox](LuaFluidBox), this field will always be present. It is not necessary to specify it when writing, however. When not specified, the fluid will be set to the fluid's default temperature as specified in the fluid's prototype. */
"temperature": (null | number);
 } 

/** A definition of a fluidbox connection point. */
/** @noSelf **/
interface FluidBoxConnection 
{ 
/** The maximum tile distance this underground connection can connect at if this is an underground pipe. */
"max_underground_distance": (null | number);
 
/** The 4 cardinal direction connection points for this pipe. This vector is a table with `x` and `y` keys instead of an array. */
"positions": 
/** The 4 cardinal direction connection points for this pipe. This vector is a table with `x` and `y` keys instead of an array. */
Vector[];
 
/** The connection type: "input", "output", or "input-output". */
"type": string;
 } 
/** @noSelf **/
interface FluidBoxFilter 
{ 
/** The maximum temperature allowed into the fluidbox. */
"maximum_temperature": number;
 
/** The minimum temperature allowed into the fluidbox. */
"minimum_temperature": number;
 
/** Fluid prototype name of the filtered fluid. */
"name": string;
 } 
/** @noSelf **/
interface FluidBoxFilterSpec 
{ 
/** Force the filter to be set, regardless of current fluid content. */
"force": (null | boolean);
 
/** The maximum temperature allowed into the fluidbox. */
"maximum_temperature": (null | number);
 
/** The minimum temperature allowed into the fluidbox. */
"minimum_temperature": (null | number);
 
/** Fluid prototype name of the filtered fluid. */
"name": string;
 } 

/** A fluid may be specified in one of three ways. */
/** @noSelf **/
interface FluidIdentification 
{ 
/** A fluid may be specified in one of three ways. */
"FluidIdentification": 
/** A fluid may be specified in one of three ways. */
(string | LuaFluidPrototype | Fluid);
 } 

/** Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following: */
/** @noSelf **/
interface FluidPrototypeFilter 
{ 
/** The condition to filter on. One of `"hidden"`, `"name"`, `"subgroup"`, `"default-temperature"`, `"max-temperature"`, `"heat-capacity"`, `"fuel-value"`, `"emissions-multiplier"`, `"gas-temperature"`. */
"filter": string;
 
/** Inverts the condition. Default is `false`. */
"invert": (null | boolean);
 
/** How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`. */
"mode": (null | string);
 } 
/** @noSelf **/
interface ForceCondition 
{ "ForceCondition": ("all" | "enemy" | "ally" | "friend" | "not-friend" | "same" | "not-same");
 } 

/** A force may be specified in one of two ways. */
/** @noSelf **/
interface ForceIdentification 
{ 
/** A force may be specified in one of two ways. */
"ForceIdentification": 
/** A force may be specified in one of two ways. */
(string | LuaForce);
 } 

/** Parameters that affect the look and control of the game. Updating any of the member attributes here will immediately take effect in the game engine. */
/** @noSelf **/
interface GameViewSettings 
{ 
/** Show the flashing alert icons next to the player's toolbar. */
"show_alert_gui": boolean;
 
/** Show the controller GUI elements. This includes the toolbar, the selected tool slot, the armour slot, and the gun and ammunition slots. */
"show_controller_gui": boolean;
 
/** Show overlay icons on entities. Also known as "alt-mode". */
"show_entity_info": boolean;
 
/** Shows or hides the view options when map is opened. */
"show_map_view_options": boolean;
 
/** Show the chart in the upper right-hand corner of the screen. */
"show_minimap": boolean;
 
/** Shows or hides quickbar of shortcuts. */
"show_quickbar": boolean;
 
/** When `true` (`false` is default), the rails will always show the rail block visualisation. */
"show_rail_block_visualisation": boolean;
 
/** Show research progress and name in the upper right-hand corner of the screen. */
"show_research_info": boolean;
 
/** Shows or hides the shortcut bar. */
"show_shortcut_bar": boolean;
 
/** Shows or hides the buttons row. */
"show_side_menu": boolean;
 
/** When `true` (the default), mousing over an entity will select it. Otherwise, moving the mouse won't update entity selection. */
"update_entity_selection": boolean;
 } 
/** @noSelf **/
interface GuiAnchor 
{ "gui": typeof defines.relative_gui_type;
 
/** If provided, only anchors the GUI element when the opened thing matches the name. `name` takes precedence over `names`. */
"name": (null | string);
 
/** If provided, only anchors the GUI element when the opened thing matches one of the names. When reading an anchor, `names` is always populated. */
"names": 
/** If provided, only anchors the GUI element when the opened thing matches one of the names. When reading an anchor, `names` is always populated. */
string[];
 "position": typeof defines.relative_gui_position;
 
/** If provided, only anchors the GUI element when the opened things type matches the type. */
"type": (null | string);
 } 

/** Used for specifying where a GUI arrow should point to. */
/** @noSelf **/
interface GuiArrowSpecification 
{ 
/** This determines which of the following fields will be required. Must be one of `"nowhere"` (will remove the arrow entirely), `"goal"` (will point to the current goal), `"entity_info"`, `"active_window"`, `"entity"`, `"position"`, `"crafting_queue"` or `"item_stack"` (will point to a given item stack in an inventory). Depending on this value, other fields may have to be specified. */
"type": string;
 } 

/** Screen coordinates of a GUI element in a [LuaGui](LuaGui). This uses the same format as [TilePosition](TilePosition), meaning it can be specified either with or without explicit keys. */
/** @noSelf **/
interface GuiLocation 
{ 
/** Screen coordinates of a GUI element in a [LuaGui](LuaGui). This uses the same format as [TilePosition](TilePosition), meaning it can be specified either with or without explicit keys. */
"GuiLocation": 
/** Screen coordinates of a GUI element in a [LuaGui](LuaGui). This uses the same format as [TilePosition](TilePosition), meaning it can be specified either with or without explicit keys. */
(/** @noSelf **/
{ "x": number;
 "y": number;
 } | ["int","int"]);
 } 
/** @noSelf **/
interface HeatConnection 
{ "direction": typeof defines.direction;
 "position": Vector;
 } 

/** The settings used by a heat-interface type entity. */
/** @noSelf **/
interface HeatSetting 
{ 
/** `"at-least"`, `"at-most"`, `"exactly"`, `"add"`, or `"remove"`. Defaults to `"at-least"`. */
"mode": (null | string);
 
/** The target temperature. Defaults to the minimum temperature of the heat buffer. */
"temperature": (null | number);
 } 

/** A single filter used by an infinity-filters instance. */
/** @noSelf **/
interface InfinityInventoryFilter 
{ 
/** The count of the filter. */
"count": (null | number);
 
/** The index of this filter in the filters list. */
"index": number;
 
/** `"at-least"`, `"at-most"`, or `"exactly"`. Defaults to `"at-least"`. */
"mode": (null | string);
 
/** Name of the item. */
"name": string;
 } 

/** A single filter used by an infinity-pipe type entity. */
/** @noSelf **/
interface InfinityPipeFilter 
{ 
/** `"at-least"`, `"at-most"`, `"exactly"`, `"add"`, or `"remove"`. Defaults to `"at-least"`. */
"mode": (null | string);
 
/** Name of the fluid. */
"name": string;
 
/** The fill percentage the pipe (e.g. 0.5 for 50%). Can't be negative. */
"percentage": (null | number);
 
/** The temperature of the fluid. Defaults to the default/minimum temperature of the fluid. */
"temperature": (null | number);
 } 
/** @noSelf **/
interface Ingredient 
{ 
/** Amount of the item or fluid. */
"amount": number;
 
/** How much of this ingredient is a catalyst. */
"catalyst_amount": 
/** How much of this ingredient is a catalyst. */
(number | number);
 
/** Prototype name of the required item or fluid. */
"name": string;
 
/** `"item"` or `"fluid"`. */
"type": string;
 } 
/** @noSelf **/
interface InserterCircuitConditions 
{ "circuit": (null | CircuitCondition);
 "logistics": (null | CircuitCondition);
 } 
/** @noSelf **/
interface InventoryFilter 
{ 
/** Position of the corresponding filter slot. */
"index": number;
 
/** Item prototype name of the item to filter. */
"name": string;
 } 

/** Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following: */
/** @noSelf **/
interface ItemPrototypeFilter 
{ 
/** The condition to filter on. One of `"tool"`, `"mergeable"`, `"item-with-inventory"`, `"selection-tool"`, `"item-with-label"`, `"has-rocket-launch-products"`, `"fuel"`, `"place-result"`, `"burnt-result"`, `"place-as-tile"`, `"placed-as-equipment-result"`, `"name"`, `"type"`, `"flag"`, `"subgroup"`, `"fuel-category"`, `"stack-size"`, `"default-request-amount"`, `"wire-count"`, `"fuel-value"`, `"fuel-acceleration-multiplier"`, `"fuel-top-speed-multiplier"`, `"fuel-emissions-multiplier"`. */
"filter": string;
 
/** Inverts the condition. Default is `false`. */
"invert": (null | boolean);
 
/** How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`. */
"mode": (null | string);
 } 

/** A set of flags. Set flags are in the dictionary as `true`, while unset flags aren't present at all.

By default, none of these flags are set. */
/** @noSelf **/
interface ItemPrototypeFlags 
{ 
/** A set of flags. Set flags are in the dictionary as `true`, while unset flags aren't present at all.

By default, none of these flags are set. */
"ItemPrototypeFlags": 
/** A set of flags. Set flags are in the dictionary as `true`, while unset flags aren't present at all.

By default, none of these flags are set. */
Record<("draw-logistic-overlay" | "hidden" | "always-show" | "hide-from-bonus-gui" | "hide-from-fuel-tooltip" | "not-stackable" | "can-extend-inventory" | "primary-place-result" | "mod-openable" | "only-in-cursor" | "spawnable"), true>;
 } 

/** An item prototype may be specified in one of three ways. */
/** @noSelf **/
interface ItemPrototypeIdentification 
{ 
/** An item prototype may be specified in one of three ways. */
"ItemPrototypeIdentification": 
/** An item prototype may be specified in one of three ways. */
(LuaItemStack | LuaItemPrototype | string);
 } 
/** @noSelf **/
interface ItemStackDefinition 
{ 
/** Amount of ammo in the ammo items in the stack. */
"ammo": (null | number);
 
/** Number of items the stack holds. If not specified, defaults to `1`. */
"count": (null | number);
 
/** Durability of the tool items in the stack. */
"durability": (null | number);
 
/** Health of the items in the stack. Defaults to `1.0`. */
"health": (null | number);
 
/** Prototype name of the item the stack holds. */
"name": string;
 
/** Tags of the items with tags in the stack. */
"tags": 
/** Tags of the items with tags in the stack. */
string[];
 } 

/** An item may be specified in one of two ways. */
/** @noSelf **/
interface ItemStackIdentification 
{ 
/** An item may be specified in one of two ways. */
"ItemStackIdentification": 
/** An item may be specified in one of two ways. */
(SimpleItemStack | LuaItemStack);
 } 
/** @noSelf **/
interface ItemStackLocation 
{ "inventory": typeof defines.inventory;
 "slot": number;
 } 
/** @noSelf **/
interface LogisticFilter 
{ 
/** The count for this filter. */
"count": number;
 
/** The index this filter applies to. */
"index": number;
 
/** The item name for this filter. */
"name": string;
 } 
/** @noSelf **/
interface LogisticParameters 
{ "max": (null | number);
 "min": (null | number);
 
/** The item. `nil` clears the filter. */
"name": (null | string);
 } 
/** @noSelf **/
interface Loot 
{ 
/** Maximum amount of loot to drop. */
"count_max": number;
 
/** Minimum amount of loot to drop. */
"count_min": number;
 
/** Item prototype name of the result. */
"item": string;
 
/** Probability that any loot at all will drop, as a number in range [0, 1]. */
"probability": number;
 } 

/** Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following: */
/** @noSelf **/
interface LuaEntityClonedEventFilter 
{ 
/** The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`. */
"filter": string;
 
/** Inverts the condition. Default is `false`. */
"invert": (null | boolean);
 
/** How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`. */
"mode": (null | string);
 } 

/** Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following: */
/** @noSelf **/
interface LuaEntityDamagedEventFilter 
{ 
/** The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"original-damage-amount"`, `"final-damage-amount"`, `"damage-type"`, `"final-health"`. */
"filter": string;
 
/** Inverts the condition. Default is `false`. */
"invert": (null | boolean);
 
/** How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`. */
"mode": (null | string);
 } 

/** Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following: */
/** @noSelf **/
interface LuaEntityDeconstructionCancelledEventFilter 
{ 
/** The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`. */
"filter": string;
 
/** Inverts the condition. Default is `false`. */
"invert": (null | boolean);
 
/** How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`. */
"mode": (null | string);
 } 

/** Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following: */
/** @noSelf **/
interface LuaEntityDiedEventFilter 
{ 
/** The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`. */
"filter": string;
 
/** Inverts the condition. Default is `false`. */
"invert": (null | boolean);
 
/** How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`. */
"mode": (null | string);
 } 

/** Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following: */
/** @noSelf **/
interface LuaEntityMarkedForDeconstructionEventFilter 
{ 
/** The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`. */
"filter": string;
 
/** Inverts the condition. Default is `false`. */
"invert": (null | boolean);
 
/** How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`. */
"mode": (null | string);
 } 

/** Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following: */
/** @noSelf **/
interface LuaEntityMarkedForUpgradeEventFilter 
{ 
/** The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`. */
"filter": string;
 
/** Inverts the condition. Default is `false`. */
"invert": (null | boolean);
 
/** How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`. */
"mode": (null | string);
 } 

/** Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following: */
/** @noSelf **/
interface LuaPlayerBuiltEntityEventFilter 
{ 
/** The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"force"`. */
"filter": string;
 
/** Inverts the condition. Default is `false`. */
"invert": (null | boolean);
 
/** How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`. */
"mode": (null | string);
 } 

/** Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following: */
/** @noSelf **/
interface LuaPlayerMinedEntityEventFilter 
{ 
/** The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`. */
"filter": string;
 
/** Inverts the condition. Default is `false`. */
"invert": (null | boolean);
 
/** How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`. */
"mode": (null | string);
 } 

/** Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following: */
/** @noSelf **/
interface LuaPlayerRepairedEntityEventFilter 
{ 
/** The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`. */
"filter": string;
 
/** Inverts the condition. Default is `false`. */
"invert": (null | boolean);
 
/** How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`. */
"mode": (null | string);
 } 

/** Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following: */
/** @noSelf **/
interface LuaPostEntityDiedEventFilter 
{ 
/** The condition to filter on. Can only be `"type"`. */
"filter": string;
 
/** Inverts the condition. Default is `false`. */
"invert": (null | boolean);
 
/** How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`. */
"mode": (null | string);
 } 

/** Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following: */
/** @noSelf **/
interface LuaPreGhostDeconstructedEventFilter 
{ 
/** The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`. */
"filter": string;
 
/** Inverts the condition. Default is `false`. */
"invert": (null | boolean);
 
/** How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`. */
"mode": (null | string);
 } 

/** Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following: */
/** @noSelf **/
interface LuaPreGhostUpgradedEventFilter 
{ 
/** The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`. */
"filter": string;
 
/** Inverts the condition. Default is `false`. */
"invert": (null | boolean);
 
/** How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`. */
"mode": (null | string);
 } 

/** Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following: */
/** @noSelf **/
interface LuaPrePlayerMinedEntityEventFilter 
{ 
/** The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`. */
"filter": string;
 
/** Inverts the condition. Default is `false`. */
"invert": (null | boolean);
 
/** How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`. */
"mode": (null | string);
 } 

/** Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following: */
/** @noSelf **/
interface LuaPreRobotMinedEntityEventFilter 
{ 
/** The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`. */
"filter": string;
 
/** Inverts the condition. Default is `false`. */
"invert": (null | boolean);
 
/** How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`. */
"mode": (null | string);
 } 

/** Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following: */
/** @noSelf **/
interface LuaRobotBuiltEntityEventFilter 
{ 
/** The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"force"`. */
"filter": string;
 
/** Inverts the condition. Default is `false`. */
"invert": (null | boolean);
 
/** How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`. */
"mode": (null | string);
 } 

/** Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following: */
/** @noSelf **/
interface LuaRobotMinedEntityEventFilter 
{ 
/** The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`. */
"filter": string;
 
/** Inverts the condition. Default is `false`. */
"invert": (null | boolean);
 
/** How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`. */
"mode": (null | string);
 } 

/** Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following: */
/** @noSelf **/
interface LuaScriptRaisedBuiltEventFilter 
{ 
/** The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`. */
"filter": string;
 
/** Inverts the condition. Default is `false`. */
"invert": (null | boolean);
 
/** How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`. */
"mode": (null | string);
 } 

/** Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following: */
/** @noSelf **/
interface LuaScriptRaisedDestroyEventFilter 
{ 
/** The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`. */
"filter": string;
 
/** Inverts the condition. Default is `false`. */
"invert": (null | boolean);
 
/** How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`. */
"mode": (null | string);
 } 

/** Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following: */
/** @noSelf **/
interface LuaScriptRaisedReviveEventFilter 
{ 
/** The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`. */
"filter": string;
 
/** Inverts the condition. Default is `false`. */
"invert": (null | boolean);
 
/** How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`. */
"mode": (null | string);
 } 

/** Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following: */
/** @noSelf **/
interface LuaSectorScannedEventFilter 
{ 
/** The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`. */
"filter": string;
 
/** Inverts the condition. Default is `false`. */
"invert": (null | boolean);
 
/** How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`. */
"mode": (null | string);
 } 

/** Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following: */
/** @noSelf **/
interface LuaUpgradeCancelledEventFilter 
{ 
/** The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`. */
"filter": string;
 
/** Inverts the condition. Default is `false`. */
"invert": (null | boolean);
 
/** How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`. */
"mode": (null | string);
 } 

/** All regular [MapSettings](MapSettings) plus an additional table that contains the [DifficultySettings](DifficultySettings). */
/** @noSelf **/
interface MapAndDifficultySettings 
{ "difficulty_settings": DifficultySettings;
 "enemy_evolution": EnemyEvolutionMapSettings;
 "enemy_expansion": EnemyExpansionMapSettings;
 
/** If a behavior fails this many times, the enemy (or enemy group) is destroyed. This solves biters getting stuck within their own base. */
"max_failed_behavior_count": number;
 "path_finder": PathFinderMapSettings;
 "pollution": PollutionMapSettings;
 "steering": SteeringMapSettings;
 "unit_group": UnitGroupMapSettings;
 } 

/** The data that can be extracted from a map exchange string, as a plain table. */
/** @noSelf **/
interface MapExchangeStringData 
{ "map_gen_settings": MapGenSettings;
 "map_settings": MapAndDifficultySettings;
 } 
/** @noSelf **/
interface MapGenPreset 
{ "advanced_settings": (null | AdvancedMapGenSettings);
 "basic_settings": (null | MapGenSettings);
 
/** Whether this is the preset that is selected by default. */
"default": (null | boolean);
 
/** The string used to alphabetically sort the presets. It is a simple string that has no additional semantic meaning. */
"order": string;
 } 

/** The 'map type' dropdown in the map generation GUI is actually a selector for elevation generator. The base game sets `property_expression_names.elevation` to `"0_16-elevation"` to reproduce terrain from 0.16 or to `"0_17-island"` for the island preset. If generators are available for other properties, the 'map type' dropdown in the GUI will be renamed to 'elevation' and shown along with selectors for the other selectable properties. */
/** @noSelf **/
interface MapGenSettings 
{ 
/** Indexed by autoplace control prototype name. */
"autoplace_controls": 
/** Indexed by autoplace control prototype name. */
Record<string, AutoplaceControl>;
 
/** Each setting in this dictionary maps the string type to the settings for that type. Valid types are `"entity"`, `"tile"` and `"decorative"`. */
"autoplace_settings": 
/** Each setting in this dictionary maps the string type to the settings for that type. Valid types are `"entity"`, `"tile"` and `"decorative"`. */
Record<string, AutoplaceSettings>;
 
/** Map generation settings for entities of the type "cliff". */
"cliff_settings": CliffPlacementSettings;
 
/** Whether undefined `autoplace_controls` should fall back to the default controls or not. Defaults to `true`. */
"default_enable_all_autoplace_controls": boolean;
 
/** Height in tiles. If `0`, the map has 'infinite' height, with the actual limitation being one million tiles in each direction from the center. */
"height": number;
 
/** Whether peaceful mode is enabled for this map. */
"peaceful_mode": boolean;
 
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
"property_expression_names": 
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
"seed": number;
 
/** Size of the starting area. */
"starting_area": MapGenSize;
 
/** Positions of the starting areas. */
"starting_points": 
/** Positions of the starting areas. */
MapPosition[];
 
/** The inverse of 'water scale' in the map generator GUI. Lower `terrain_segmentation` increases the scale of elevation features (lakes, continents, etc). This behavior can be overridden with alternate elevation generators (see `property_expression_names`, below). */
"terrain_segmentation": MapGenSize;
 
/** The equivalent to 'water coverage' in the map generator GUI. Specifically, when this value is non-zero, `water_level = 10 * log2` (the value of this field), and the elevation generator subtracts water level from elevation before adding starting lakes. If water is set to 'none', elevation is clamped to a small positive value before adding starting lakes. This behavior can be overridden with alternate elevation generators (see `property_expression_names`, below). */
"water": MapGenSize;
 
/** Width in tiles. If `0`, the map has 'infinite' width, with the actual limitation being one million tiles in each direction from the center. */
"width": number;
 } 

/** A floating point number specifying an amount.

For backwards compatibility, MapGenSizes can also be specified as one of the following strings, which will be converted to a number (when queried, a number will always be returned): */
/** @noSelf **/
interface MapGenSize 
{ 
/** A floating point number specifying an amount.

For backwards compatibility, MapGenSizes can also be specified as one of the following strings, which will be converted to a number (when queried, a number will always be returned): */
"MapGenSize": 
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
"MapPosition": 
/** Coordinates on a surface, for example of an entity. MapPositions may be specified either as a dictionary with `x`, `y` as keys, or simply as an array with two elements.

The coordinates are saved as a fixed-size 32 bit integer, with 8 bits reserved for decimal precision, meaning the smallest value step is `1/2^8 = 0.00390625` tiles. */
(/** @noSelf **/
{ "x": number;
 "y": number;
 } | ["double","double"]);
 } 

/** Various game-related settings. Updating any of the attributes will immediately take effect in the game engine. */
/** @noSelf **/
interface MapSettings 
{ "enemy_evolution": EnemyEvolutionMapSettings;
 "enemy_expansion": EnemyExpansionMapSettings;
 
/** If a behavior fails this many times, the enemy (or enemy group) is destroyed. This solves biters getting stuck within their own base. */
"max_failed_behavior_count": number;
 "path_finder": PathFinderMapSettings;
 "pollution": PollutionMapSettings;
 "steering": SteeringMapSettings;
 "unit_group": UnitGroupMapSettings;
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
"new_version": string;
 
/** Old version of the mod. May be `nil` if the mod wasn't previously present (i.e. it was just added). */
"old_version": string;
 } 
/** @noSelf **/
interface ModSetting 
{ 
/** The value of the mod setting. The type depends on the setting. */
"value": 
/** The value of the mod setting. The type depends on the setting. */
(number | number | boolean | string);
 } 

/** Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following: */
/** @noSelf **/
interface ModSettingPrototypeFilter 
{ 
/** The condition to filter on. One of `"type"`, `"mod"`, `"setting-type"`. */
"filter": string;
 
/** Inverts the condition. Default is `false`. */
"invert": (null | boolean);
 
/** How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`. */
"mode": (null | string);
 } 
/** @noSelf **/
interface ModuleEffectValue 
{ 
/** The percentual increase of the attribute. A value of `0.6` means a 60% increase. */
"bonus": number;
 } 
/** @noSelf **/
interface ModuleEffects 
{ "consumption": (null | ModuleEffectValue);
 "pollution": (null | ModuleEffectValue);
 "productivity": (null | ModuleEffectValue);
 "speed": (null | ModuleEffectValue);
 } 

/** A set of flags. Set flags are in the dictionary as `true`, while unset flags aren't present at all.

To write to this, use an array[[string](string)] of the mouse buttons that should be possible to use with on button. The flag `"left-and-right"` can also be set, which will set `"left"` and `"right"` to `true`. */
/** @noSelf **/
interface MouseButtonFlags 
{ 
/** A set of flags. Set flags are in the dictionary as `true`, while unset flags aren't present at all.

To write to this, use an array[[string](string)] of the mouse buttons that should be possible to use with on button. The flag `"left-and-right"` can also be set, which will set `"left"` and `"right"` to `true`. */
"MouseButtonFlags": 
/** A set of flags. Set flags are in the dictionary as `true`, while unset flags aren't present at all.

To write to this, use an array[[string](string)] of the mouse buttons that should be possible to use with on button. The flag `"left-and-right"` can also be set, which will set `"left"` and `"right"` to `true`. */
Record<("left" | "right" | "middle" | "button-4" | "button-5" | "button-6" | "button-7" | "button-8" | "button-9"), true>;
 } 

/** A fragment of a functional program used to generate coherent noise, probably for purposes related to terrain generation. These can only be meaningfully written/modified during the data load phase. More detailed information is found on the [wiki](https://wiki.factorio.com/Types/NoiseExpression). */
/** @noSelf **/
interface NoiseExpression 
{ 
/** Names the type of the expression and determines what other fields are required. */
"type": string;
 } 
/** @noSelf **/
interface NthTickEventData 
{ 
/** The nth tick this handler was registered to. */
"nth_tick": number;
 
/** The tick during which the event happened. */
"tick": number;
 } 

/** A single offer on a market entity. */
/** @noSelf **/
interface Offer 
{ 
/** The action that will take place when a player accepts the offer. Usually a `"give-item"` modifier. */
"offer": TechnologyModifier;
 
/** List of prices. */
"price": 
/** List of prices. */
Ingredient[];
 } 
/** @noSelf **/
interface OldTileAndPosition 
{ "old_tile": LuaTilePrototype;
 "position": TilePosition;
 } 
/** @noSelf **/
interface PathFinderMapSettings 
{ 
/** When looking for a path from cache, make sure it doesn't end too far from the requested end in relative terms. This is typically more lenient than the start ratio since the end target could be moving. Defaults to `0.15`. */
"cache_accept_path_end_distance_ratio": number;
 
/** When looking for a path from cache, make sure it doesn't start too far from the requested start in relative terms. Defaults to `0.2`. */
"cache_accept_path_start_distance_ratio": number;
 
/** When looking for a connection to a cached path, search at most for this number of steps times the original estimate. Defaults to `100`. */
"cache_max_connect_to_cache_steps_multiplier": number;
 
/** When assigning a rating to the best path, this multiplier times end distances is considered. This value is typically higher than the start multiplier as this results in better end path quality. Defaults to `20`. */
"cache_path_end_distance_rating_multiplier": number;
 
/** When assigning a rating to the best path, this multiplier times start distances is considered. Defaults to `10`. */
"cache_path_start_distance_rating_multiplier": number;
 
/** The maximum direct distance in tiles before a request is no longer considered short. Defaults to `100`. */
"direct_distance_to_consider_short_request": number;
 
/** A penalty that is applied for another unit that is too close and either not moving or has a different goal. Defaults to `30`. */
"enemy_with_different_destination_collision_penalty": number;
 
/** The collision penalty for collisions in the extended bounding box but outside the entity's actual bounding box. Defaults to `3`. */
"extended_collision_penalty": number;
 
/** The pathfinder performs a step of the backward search every `fwd2bwd_ratio`'th step. The minimum allowed value is `2`, which means symmetric search. The default value is `5`. */
"fwd2bwd_ratio": number;
 
/** The general collision penalty with other units. Defaults to `10`. */
"general_entity_collision_penalty": number;
 
/** The collision penalty for positions that require the destruction of an entity to get to. Defaults to `3`. */
"general_entity_subsequent_collision_penalty": number;
 
/** When looking at which node to check next, their heuristic value is multiplied by this ratio. The higher it is, the more the search is directed straight at the goal. Defaults to `2`. */
"goal_pressure_ratio": number;
 
/** The distance in tiles after which other moving units are not considered for pathfinding. Defaults to `5`. */
"ignore_moving_enemy_collision_distance": number;
 
/** The minimal distance to the goal in tiles required to be searched in the long path cache. Defaults to `30`. */
"long_cache_min_cacheable_distance": number;
 
/** Number of elements in the long cache. Defaults to `25`. */
"long_cache_size": number;
 
/** The amount of path finder requests accepted per tick regardless of the requested path's length. Defaults to `10`. */
"max_clients_to_accept_any_new_request": number;
 
/** When the `max_clients_to_accept_any_new_request` amount is exhausted, only path finder requests with a short estimate will be accepted until this amount (per tick) is reached. Defaults to `100`. */
"max_clients_to_accept_short_new_request": number;
 
/** The maximum number of nodes that are expanded per tick. Defaults to `1,000`. */
"max_steps_worked_per_tick": number;
 
/** The maximum amount of work each pathfinding job is allowed to do per tick. Defaults to `8,000`. */
"max_work_done_per_tick": number;
 
/** The minimum amount of steps that are guaranteed to be performed for every request. Defaults to `2000`. */
"min_steps_to_check_path_find_termination": number;
 
/** Same principle as `cache_accept_path_end_distance_ratio`, but used for negative cache queries. Defaults to `0.3`. */
"negative_cache_accept_path_end_distance_ratio": number;
 
/** Same principle as `cache_accept_path_start_distance_ratio`, but used for negative cache queries. Defaults to `0.3`. */
"negative_cache_accept_path_start_distance_ratio": number;
 
/** The delay in ticks between decrementing the score of all paths in the negative cache by one. Defaults to `20`. */
"negative_path_cache_delay_interval": number;
 
/** The thresholds of waiting clients after each of which the per-tick work limit will be increased by the corresponding value in `overload_multipliers`. This is to avoid clients having to wait too long. Must have the same number of elements as `overload_multipliers`. Defaults to `{0, 100, 500}`. */
"overload_levels": 
/** The thresholds of waiting clients after each of which the per-tick work limit will be increased by the corresponding value in `overload_multipliers`. This is to avoid clients having to wait too long. Must have the same number of elements as `overload_multipliers`. Defaults to `{0, 100, 500}`. */
number[];
 
/** The multipliers to the amount of per-tick work applied after the corresponding thresholds in `overload_levels` have been reached. Must have the same number of elements as `overload_multipliers`. Defaults to `{2, 3, 4}`. */
"overload_multipliers": 
/** The multipliers to the amount of per-tick work applied after the corresponding thresholds in `overload_levels` have been reached. Must have the same number of elements as `overload_multipliers`. Defaults to `{2, 3, 4}`. */
number[];
 
/** The minimal number of nodes required to be searched in the short path cache. Defaults to `50`. */
"short_cache_min_algo_steps_to_cache": number;
 
/** The minimal distance to the goal in tiles required to be searched in the short path cache. Defaults to `10`. */
"short_cache_min_cacheable_distance": number;
 
/** Number of elements in the short cache. Defaults to `5`. */
"short_cache_size": number;
 
/** The maximum amount of nodes a short request will traverse before being rescheduled as a long request. Defaults to `1000`. */
"short_request_max_steps": number;
 
/** The amount of steps that are allocated to short requests each tick, as a percentage of all available steps. Defaults to `0.5`, or 50%. */
"short_request_ratio": number;
 
/** A penalty that is applied for another unit that is on the way to the goal. This is mainly relevant for situations where a group of units has arrived at the target they are supposed to attack, making units further back circle around to reach the target. Defaults to `30`. */
"stale_enemy_with_same_destination_collision_penalty": number;
 
/** If the actual amount of steps is higher than the initial estimate by this factor, pathfinding is terminated. Defaults to `2000.0`. */
"start_to_goal_cost_multiplier_to_terminate_path_find": number;
 
/** Whether to cache paths at all. Defaults to `true`. */
"use_path_cache": boolean;
 } 
/** @noSelf **/
interface PathfinderFlags 
{ 
/** Allows pathing through friendly entities. Defaults to `false`. */
"allow_destroy_friendly_entities": (null | boolean);
 
/** Allows the pathfinder to path through entities of the same force. Defaults to `false`. */
"allow_paths_through_own_entities": (null | boolean);
 
/** Enables path caching. This can be more efficient, but might fail to respond to changes in the environment. Defaults to `true`. */
"cache": (null | boolean);
 
/** Sets lower priority on the path request, meaning it might take longer to find a path at the expense of speeding up others. Defaults to `false`. */
"low_priority": (null | boolean);
 
/** Makes the pathfinder not break in the middle of processing this pathfind, no matter how much work is needed. Defaults to `false`. */
"no_break": (null | boolean);
 
/** Makes the pathfinder try to path in straight lines. Defaults to `false`. */
"prefer_straight_paths": (null | boolean);
 } 
/** @noSelf **/
interface PathfinderWaypoint 
{ 
/** `true` if the path from the previous waypoint to this one goes through an entity that must be destroyed. */
"needs_destroy_to_reach": boolean;
 
/** The position of the waypoint on its surface. */
"position": MapPosition;
 } 
/** @noSelf **/
interface PlaceAsTileResult 
{ "condition": CollisionMask;
 "condition_size": number;
 
/** The tile prototype. */
"result": LuaTilePrototype;
 } 

/** A player may be specified in one of three ways. */
/** @noSelf **/
interface PlayerIdentification 
{ 
/** A player may be specified in one of three ways. */
"PlayerIdentification": 
/** A player may be specified in one of three ways. */
(number | string | LuaPlayer);
 } 

/** These values are for the time frame of one second (60 ticks). */
/** @noSelf **/
interface PollutionMapSettings 
{ 
/** The amount of pollution eaten by a chunk's tiles as a percentage of 1. Defaults to `1`. */
"aeging": number;
 
/** The amount that is diffused to a neighboring chunk (possibly repeated for other directions as well). Defaults to `0.02`. */
"diffusion_ratio": number;
 
/** Whether pollution is enabled at all. */
"enabled": boolean;
 
/** Defaults to `1`. */
"enemy_attack_pollution_consumption_modifier": number;
 
/** Any amount of pollution larger than this value is visualized as this value instead. Defaults to `150`. */
"expected_max_per_chunk": number;
 
/** Defaults to `20`. */
"max_pollution_to_restore_trees": number;
 
/** Defaults to `60`. */
"min_pollution_to_damage_trees": number;
 
/** The amount of PUs that need to be in a chunk for it to start diffusing. Defaults to `15`. */
"min_to_diffuse": number;
 
/** Any amount of pollution smaller than this value (but bigger than zero) is visualized as this value instead. Defaults to `50`. */
"min_to_show_per_chunk": number;
 
/** Defaults to `50`. */
"pollution_per_tree_damage": number;
 
/** Defaults to `10`. */
"pollution_restored_per_tree_damage": number;
 
/** Defaults to `150`. */
"pollution_with_max_forest_damage": number;
 } 
/** @noSelf **/
interface Product 
{ 
/** Amount of the item or fluid to give. If not specified, `amount_min`, `amount_max` and `probability` must all be specified. */
"amount": (null | number);
 
/** Maximum amount of the item or fluid to give. Has no effect when `amount` is specified. */
"amount_max": 
/** Maximum amount of the item or fluid to give. Has no effect when `amount` is specified. */
(number | number);
 
/** Minimal amount of the item or fluid to give. Has no effect when `amount` is specified. */
"amount_min": 
/** Minimal amount of the item or fluid to give. Has no effect when `amount` is specified. */
(number | number);
 
/** How much of this product is a catalyst. */
"catalyst_amount": 
/** How much of this product is a catalyst. */
(number | number);
 
/** Prototype name of the result. */
"name": string;
 
/** A value in range [0, 1]. Item or fluid is only given with this probability; otherwise no product is produced. */
"probability": (null | number);
 
/** `"item"` or `"fluid"`. */
"type": string;
 } 
/** @noSelf **/
interface ProgrammableSpeakerAlertParameters 
{ "alert_message": string;
 "icon_signal_id": SignalID;
 "show_alert": boolean;
 "show_on_map": boolean;
 } 
/** @noSelf **/
interface ProgrammableSpeakerCircuitParameters 
{ "instrument_id": number;
 "note_id": number;
 "signal_value_is_pitch": boolean;
 } 
/** @noSelf **/
interface ProgrammableSpeakerInstrument 
{ "name": string;
 "notes": string[];
 } 
/** @noSelf **/
interface ProgrammableSpeakerParameters 
{ "allow_polyphony": boolean;
 "playback_globally": boolean;
 "playback_volume": number;
 } 

/** Types `"signal"` and `"item-group"` do not support filters. */
/** @noSelf **/
interface PrototypeFilter 
{ 
/** Types `"signal"` and `"item-group"` do not support filters. */
"PrototypeFilter": 
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
"filter": string;
 
/** Inverts the condition. Default is `false`. */
"invert": (null | boolean);
 
/** How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`. */
"mode": (null | string);
 } 

/** A number between 0 and 255 inclusive, represented by one of the following named strings or the string version of the number. For example `"27"` and `"decals"` are both valid. Higher values are rendered above lower values. */
/** @noSelf **/
interface RenderLayer 
{ 
/** A number between 0 and 255 inclusive, represented by one of the following named strings or the string version of the number. For example `"27"` and `"decals"` are both valid. Higher values are rendered above lower values. */
"RenderLayer": 
/** A number between 0 and 255 inclusive, represented by one of the following named strings or the string version of the number. For example `"27"` and `"decals"` are both valid. Higher values are rendered above lower values. */
(string | "water-tile" | "ground-tile" | "tile-transition" | "decals" | "lower-radius-visualization" | "radius-visualization" | "transport-belt-integration" | "resource" | "building-smoke" | "decorative" | "ground-patch" | "ground-patch-higher" | "ground-patch-higher2" | "remnants" | "floor" | "transport-belt" | "transport-belt-endings" | "floor-mechanics-under-corpse" | "corpse" | "floor-mechanics" | "item" | "lower-object" | "transport-belt-circuit-connector" | "lower-object-above-shadow" | "object" | "higher-object-under" | "higher-object-above" | "item-in-inserter-hand" | "wires" | "wires-above" | "entity-info-icon" | "entity-info-icon-above" | "explosion" | "projectile" | "smoke" | "air-object" | "air-entity-info-icon" | "light-effect" | "selection-box" | "higher-selection-box" | "collision-selection-box" | "arrow" | "cursor");
 } 
/** @noSelf **/
interface Resistance 
{ 
/** Absolute damage decrease */
"decrease": number;
 
/** Percentual damage decrease */
"percent": number;
 } 
/** @noSelf **/
interface RidingState 
{ "acceleration": typeof defines.riding.acceleration;
 "direction": typeof defines.riding.direction;
 } 

/** An area defined using the map editor. */
/** @noSelf **/
interface ScriptArea 
{ "area": BoundingBox;
 "color": Color;
 "id": number;
 "name": string;
 } 

/** A position defined using the map editor. */
/** @noSelf **/
interface ScriptPosition 
{ "color": Color;
 "id": number;
 "name": string;
 "position": MapPosition;
 } 
/** @noSelf **/
interface ScriptRenderTarget 
{ "entity": (null | LuaEntity);
 "entity_offset": (null | Vector);
 "position": (null | MapPosition);
 } 

/** One vertex of a ScriptRenderPolygon. */
/** @noSelf **/
interface ScriptRenderVertexTarget 
{ "target": (MapPosition | LuaEntity);
 
/** Only used if `target` is a LuaEntity. */
"target_offset": (null | Vector);
 } 
/** @noSelf **/
interface SelectedPrototypeData 
{ 
/** E.g. `"entity"`. */
"base_type": string;
 
/** E.g. `"tree"`. */
"derived_type": string;
 
/** E.g. `"tree-05"`. */
"name": string;
 } 

/** A set of flags. Set flags are in the dictionary as `true`, while unset flags aren't present at all. */
/** @noSelf **/
interface SelectionModeFlags 
{ 
/** A set of flags. Set flags are in the dictionary as `true`, while unset flags aren't present at all. */
"SelectionModeFlags": 
/** A set of flags. Set flags are in the dictionary as `true`, while unset flags aren't present at all. */
Record<("blueprint" | "deconstruct" | "cancel-deconstruct" | "item" | "trees" | "buildable-type" | "nothing" | "items-to-place" | "any-entity" | "any-tile" | "same-force" | "not-same-force" | "friend" | "enemy" | "upgrade" | "cancel-upgrade" | "entity-with-health" | "entity-with-force" | "entity-with-owner"), true>;
 } 

/** An actual signal transmitted by the network. */
/** @noSelf **/
interface Signal 
{ 
/** Value of the signal. */
"count": number;
 
/** ID of the signal. */
"signal": SignalID;
 } 
/** @noSelf **/
interface SignalID 
{ 
/** Name of the item, fluid or virtual signal. */
"name": (null | string);
 
/** `"item"`, `"fluid"`, or `"virtual"`. */
"type": string;
 } 

/** An item stack may be specified in one of two ways. */
/** @noSelf **/
interface SimpleItemStack 
{ 
/** An item stack may be specified in one of two ways. */
"SimpleItemStack": 
/** An item stack may be specified in one of two ways. */
(string | ItemStackDefinition);
 } 
/** @noSelf **/
interface SmokeSource 
{ "deviation": (null | MapPosition);
 "east_position": (null | Vector);
 "frequency": number;
 "height": number;
 "height_deviation": number;
 "name": string;
 "north_position": (null | Vector);
 "offset": number;
 "position": (null | Vector);
 "slow_down_factor": number;
 "south_position": (null | Vector);
 "starting_frame": number;
 "starting_frame_deviation": number;
 "starting_frame_speed": number;
 "starting_frame_speed_deviation": number;
 "starting_vertical_speed": number;
 "starting_vertical_speed_deviation": number;
 "vertical_speed_slowdown": number;
 "west_position": (null | Vector);
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
"SoundType": 
/** Defines which slider in the game's sound settings affects the volume of this sound. Furthermore, some sound types are mixed differently than others, e.g. zoom level effects are applied. */
("game-effect" | "gui-effect" | "ambient" | "environment" | "walking" | "alert" | "wind");
 } 
/** @noSelf **/
interface SpawnPointDefinition 
{ 
/** Evolution factor for which this weight applies. */
"evolution_factor": number;
 
/** Probability of spawning this unit at this evolution factor. */
"weight": number;
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
"force_unit_fuzzy_goto_behavior": boolean;
 
/** Does not include the radius of the unit. */
"radius": number;
 "separation_factor": number;
 "separation_force": number;
 } 
/** @noSelf **/
interface SteeringMapSettings 
{ "default": SteeringMapSetting;
 "moving": SteeringMapSetting;
 } 

/** A surface may be specified in one of three ways. */
/** @noSelf **/
interface SurfaceIdentification 
{ 
/** A surface may be specified in one of three ways. */
"SurfaceIdentification": 
/** A surface may be specified in one of three ways. */
(number | string | LuaSurface);
 } 
/** @noSelf **/
interface TabAndContent 
{ "content": LuaGuiElement;
 "tab": LuaGuiElement;
 } 

/** A dictionary of string to the four basic Lua types: `string`, `boolean`, `number`, `table`. */
/** @noSelf **/
interface Tags 
{ 
/** A dictionary of string to the four basic Lua types: `string`, `boolean`, `number`, `table`. */
"Tags": 
/** A dictionary of string to the four basic Lua types: `string`, `boolean`, `number`, `table`. */
Record<string, AnyBasic>;
 } 

/** A technology may be specified in one of three ways. */
/** @noSelf **/
interface TechnologyIdentification 
{ 
/** A technology may be specified in one of three ways. */
"TechnologyIdentification": 
/** A technology may be specified in one of three ways. */
(string | LuaTechnology | LuaTechnologyPrototype);
 } 

/** The effect that is applied when a technology is researched. It is a table that contains at least the field `type`. */
/** @noSelf **/
interface TechnologyModifier 
{ 
/** Modifier type. Specifies which of the other fields will be available. Possible values are: `"inserter-stack-size-bonus"`, `"stack-inserter-capacity-bonus"`, `"laboratory-speed"`, `"character-logistic-trash-slots"`, `"maximum-following-robots-count"`, `"worker-robot-speed"`, `"worker-robot-storage"`, `"ghost-time-to-live"`, `"turret-attack"`, `"ammo-damage"`, `"give-item"`, `"gun-speed"`, `"unlock-recipe"`, `"character-crafting-speed"`, `"character-mining-speed"`, `"character-running-speed"`, `"character-build-distance"`, `"character-item-drop-distance"`, `"character-reach-distance"`, `"character-resource-reach-distance"`, `"character-item-pickup-distance"`, `"character-loot-pickup-distance"`, `"character-inventory-slots-bonus"`, `"deconstruction-time-to-live"`, `"max-failed-attempts-per-tick-per-construction-queue"`, `"max-successful-attempts-per-tick-per-construction-queue"`, `"character-health-bonus"`, `"mining-drill-productivity-bonus"`, `"train-braking-force-bonus"`, `"zoom-to-world-enabled"`, `"zoom-to-world-ghost-building-enabled"`, `"zoom-to-world-blueprint-enabled"`, `"zoom-to-world-deconstruction-planner-enabled"`, `"zoom-to-world-upgrade-planner-enabled"`, `"zoom-to-world-selection-tool-enabled"`, `"worker-robot-battery"`, `"laboratory-productivity"`, `"follower-robot-lifetime"`, `"artillery-range"`, `"nothing"`, `"character-additional-mining-categories"`, `"character-logistic-requests"`. */
"type": string;
 } 

/** Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following: */
/** @noSelf **/
interface TechnologyPrototypeFilter 
{ 
/** The condition to filter on. One of `"enabled"`, `"hidden"`, `"upgrade"`, `"visible-when-disabled"`, `"has-effects"`, `"has-prerequisites"`, `"research-unit-ingredient"`, `"level"`, `"max-level"`, `"time"`. */
"filter": string;
 
/** Inverts the condition. Default is `false`. */
"invert": (null | boolean);
 
/** How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`. */
"mode": (null | string);
 } 
/** @noSelf **/
interface Tile 
{ 
/** The prototype name of the tile. */
"name": string;
 
/** The position of the tile. */
"position": TilePosition;
 } 

/** Coordinates of a tile on a [LuaSurface](LuaSurface) where each integer `x`/`y` represents a different tile. This uses the same format as [MapPosition](MapPosition), except it rounds any non-integer `x`/`y` down to whole numbers. It can be specified either with or without explicit keys. */
/** @noSelf **/
interface TilePosition 
{ 
/** Coordinates of a tile on a [LuaSurface](LuaSurface) where each integer `x`/`y` represents a different tile. This uses the same format as [MapPosition](MapPosition), except it rounds any non-integer `x`/`y` down to whole numbers. It can be specified either with or without explicit keys. */
"TilePosition": 
/** Coordinates of a tile on a [LuaSurface](LuaSurface) where each integer `x`/`y` represents a different tile. This uses the same format as [MapPosition](MapPosition), except it rounds any non-integer `x`/`y` down to whole numbers. It can be specified either with or without explicit keys. */
(/** @noSelf **/
{ "x": number;
 "y": number;
 } | ["int","int"]);
 } 

/** Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following: */
/** @noSelf **/
interface TilePrototypeFilter 
{ 
/** The condition to filter on. One of `"minable"`, `"autoplace"`, `"blueprintable"`, `"item-to-place"`, `"collision-mask"`, `"walking-speed-modifier"`, `"vehicle-friction-modifier"`, `"decorative-removal-probability"`, `"emissions"`. */
"filter": string;
 
/** Inverts the condition. Default is `false`. */
"invert": (null | boolean);
 
/** How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`. */
"mode": (null | string);
 } 
/** @noSelf **/
interface TrainSchedule 
{ 
/** Index of the currently active record */
"current": number;
 "records": TrainScheduleRecord[];
 } 
/** @noSelf **/
interface TrainScheduleRecord 
{ 
/** Rail to path to. Ignored if `station` is present. */
"rail": (null | LuaEntity);
 
/** When a train is allowed to reach rail target from any direction it will be `nil`. If rail has to be reached from specific direction, this value allows to choose the direction. This value corresponds to [LuaEntity::connected_rail_direction](LuaEntity::connected_rail_direction) of a TrainStop. */
"rail_direction": (null | typeof defines.rail_direction);
 
/** Name of the station. */
"station": (null | string);
 
/** Only present when the station is temporary, the value is then always `true`. */
"temporary": (null | boolean);
 "wait_conditions": WaitCondition[];
 } 
/** @noSelf **/
interface TriggerDelivery 
{ "source_effects": TriggerEffectItem[];
 "target_effects": TriggerEffectItem[];
 
/** One of `"instant"`, `"projectile"`, `"flame-thrower"`, `"beam"`, `"stream"`, `"artillery"`. */
"type": string;
 } 
/** @noSelf **/
interface TriggerEffectItem 
{ "affects_target": boolean;
 "repeat_count": number;
 "show_in_tooltip": boolean;
 
/** One of`"damage"`, `"create-entity"`, `"create-explosion"`, `"create-fire"`, `"create-smoke"`, `"create-trivial-smoke"`, `"create-particle"`, `"create-sticker"`, `"nested-result"`, `"play-sound"`, `"push-back"`, `"destroy-cliffs"`, `"show-explosion-on-chart"`, `"insert-item"`, `"script"`. */
"type": string;
 } 
/** @noSelf **/
interface TriggerItem 
{ "action_delivery": TriggerDelivery[];
 
/** The trigger will only affect entities that would collide with given collision mask. */
"collision_mask": CollisionMask;
 
/** The trigger will only affect entities that contain any of these flags. */
"entity_flags": (null | EntityPrototypeFlags);
 
/** If `"enemy"`, the trigger will only affect entities whose force is different from the attacker's and for which there is no cease-fire set. `"ally"` is the opposite of `"enemy"`. */
"force": ForceCondition;
 "ignore_collision_condition": boolean;
 "repeat_count": number;
 "trigger_target_mask": TriggerTargetMask;
 
/** One of `"direct"`, `"area"`, `"line"`, `"cluster"`. */
"type": string;
 } 

/** A set of trigger target masks. */
/** @noSelf **/
interface TriggerTargetMask 
{ 
/** A set of trigger target masks. */
"TriggerTargetMask": 
/** A set of trigger target masks. */
Record<string, boolean>;
 } 
/** @noSelf **/
interface UnitGroupMapSettings 
{ 
/** The maximum number of automatically created unit groups gathering for attack at any time. Defaults to `30`. */
"max_gathering_unit_groups": number;
 
/** The maximum amount of time in ticks a group will spend gathering before setting off. The actual time is a random time between the minimum and maximum times. Defaults to `10*3,600=36,000` ticks. */
"max_group_gathering_time": number;
 
/** When a member of a group falls back more than this factor times the group radius, the group will slow down to its `max_group_slowdown_factor` speed to let them catch up. Defaults to `3`. */
"max_group_member_fallback_factor": number;
 
/** The maximum group radius in tiles. The actual radius is adjusted based on the number of members. Defaults to `30.0`. */
"max_group_radius": number;
 
/** The minimum speed as a percentage of its maximum speed that a group will slow down to so members that fell behind can catch up. Defaults to `0.3`, or 30%. */
"max_group_slowdown_factor": number;
 
/** The minimum speed a percentage of its regular speed that a group member can slow down to when ahead of the group. Defaults to `0.6`, or 60%. */
"max_member_slowdown_when_ahead": number;
 
/** The maximum speed a percentage of its regular speed that a group member can speed up to when catching up with the group. Defaults to `1.4`, or 140%. */
"max_member_speedup_when_behind": number;
 
/** The maximum number of members for an attack unit group. This only affects automatically created unit groups, manual groups created through the API are unaffected. Defaults to `200`. */
"max_unit_group_size": number;
 
/** After gathering has finished, the group is allowed to wait this long in ticks for delayed members. New members are not accepted anymore however. Defaults to `2*3,600=7,200` ticks. */
"max_wait_time_for_late_members": number;
 
/** When a member of a group falls back more than this factor times the group radius, it will be dropped from the group. Defaults to `10`. */
"member_disown_distance": number;
 
/** The minimum amount of time in ticks a group will spend gathering before setting off. The actual time is a random time between the minimum and maximum times. Defaults to `3,600` ticks. */
"min_group_gathering_time": number;
 
/** The minimum group radius in tiles. The actual radius is adjusted based on the number of members. Defaults to `5.0`. */
"min_group_radius": number;
 "tick_tolerance_when_member_arrives": number;
 } 
/** @noSelf **/
interface UnitSpawnDefinition 
{ 
/** The points at which to spawn the unit. */
"spawn_points": 
/** The points at which to spawn the unit. */
SpawnPointDefinition[];
 
/** Prototype name of the unit that would be spawned. */
"unit": string;
 } 
/** @noSelf **/
interface UpgradeFilter 
{ 
/** Name of the item, or entity. */
"name": (null | string);
 
/** `"item"`, or `"entity"`. */
"type": string;
 } 

/** A vector is a two-element array containing the `x` and `y` components. In some specific cases, the vector is a table with `x` and `y` keys instead, which the documentation will point out. */
/** @noSelf **/
interface Vector 
{ 
/** A vector is a two-element array containing the `x` and `y` components. In some specific cases, the vector is a table with `x` and `y` keys instead, which the documentation will point out. */
"Vector": 
/** A vector is a two-element array containing the `x` and `y` components. In some specific cases, the vector is a table with `x` and `y` keys instead, which the documentation will point out. */
(/** @noSelf **/
{ "x": number;
 "y": number;
 } | ["float","float"]);
 } 
/** @noSelf **/
interface VehicleAutomaticTargetingParameters 
{ "auto_target_with_gunner": boolean;
 "auto_target_without_gunner": boolean;
 } 
/** @noSelf **/
interface WaitCondition 
{ 
/** Either `"and"`, or `"or"`. Tells how this condition is to be compared with the preceding conditions in the corresponding `wait_conditions` array. */
"compare_type": string;
 
/** Only present when `type` is `"item_count"`, `"circuit"` or `"fluid_count"`. */
"condition": (null | CircuitCondition);
 
/** Number of ticks to wait or of inactivity. Only present when `type` is `"time"` or `"inactivity"`. */
"ticks": (null | number);
 
/** One of `"time"`, `"inactivity"`, `"full"`, `"empty"`, `"item_count"`, `"circuit"`, `"robots_inactive"`, `"fluid_count"`, `"passenger_present"`, `"passenger_not_present"`. */
"type": string;
 } 
/** @noSelf **/
interface WireConnectionDefinition 
{ 
/** Mandatory if the source entity has more than one circuit connection using circuit wire. */
"source_circuit_id": (null | typeof defines.circuit_connector_id);
 
/** Mandatory if the source entity has more than one wire connection using copper wire. */
"source_wire_id": (null | typeof defines.circuit_connector_id);
 
/** Mandatory if the target entity has more than one circuit connection using circuit wire. */
"target_circuit_id": (null | typeof defines.circuit_connector_id);
 
/** The entity to (dis)connect the source entity with. */
"target_entity": LuaEntity;
 
/** Mandatory if the target entity has more than one wire connection using copper wire. */
"target_wire_id": (null | typeof defines.circuit_connector_id);
 
/** Wire color, either [defines.wire_type.red](defines.wire_type.red) or [defines.wire_type.green](defines.wire_type.green). */
"wire": typeof defines.wire_type;
 } 
/** classes */

/** Collection of settings for overriding default ai behavior. */
/** @noSelf **/
interface LuaAISettings  { 
  
/** If enabled, units that repeatedly fail to succeed at commands will be destroyed. */
"allow_destroy_when_commands_fail": boolean;
 
/** If enabled, units that have nothing else to do will attempt to return to a spawner. */
"allow_try_return_to_spawner": boolean;
 
/** If enabled, units will try to separate themselves from nearby friendly units. */
"do_separation": boolean;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** The pathing resolution modifier, must be between -8 and 8. */
"path_resolution_modifier": number;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** Control behavior for accumulators. */
/** @noSelf **/
interface LuaAccumulatorControlBehavior  extends LuaControlBehavior  { 
  
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 "output_signal": SignalID;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** Prototype of a achievement. */
/** @noSelf **/
interface LuaAchievementPrototype  { 
  "allowed_without_fight": boolean;
 "hidden": boolean;
 "localised_description": LocalisedString;
 "localised_name": LocalisedString;
 
/** Name of this prototype. */
"name": string;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning. */
"order": string;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** Prototype of a ammo category. */
/** @noSelf **/
interface LuaAmmoCategoryPrototype  { 
  "bonus_gui_order": string;
 "localised_description": LocalisedString;
 "localised_name": LocalisedString;
 
/** Name of this prototype. */
"name": string;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning. */
"order": string;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** Control behavior for arithmetic combinators. */
/** @noSelf **/
interface LuaArithmeticCombinatorControlBehavior  extends LuaCombinatorControlBehavior  { 
  
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** This arithmetic combinator's parameters. */
"parameters": ArithmeticCombinatorParameters;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** Prototype of an autoplace control. */
/** @noSelf **/
interface LuaAutoplaceControlPrototype  { 
  "can_be_disabled": boolean;
 
/** Category name of this prototype. */
"category": string;
 "control_order": string;
 "localised_description": LocalisedString;
 "localised_name": LocalisedString;
 
/** Name of this prototype. */
"name": string;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning. */
"order": string;
 "richness": boolean;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** Entry point for registering event handlers. It is accessible through the global object named `script`. */
/** @noSelf **/
interface LuaBootstrap  { 
  
/** A dictionary listing the names of all currently active mods and mapping them to their version. */
"active_mods": Record<string, string>;
 
/** Information about the currently running scenario/campaign/tutorial. */
"level": /** @noSelf **/
{ 
/** The campaign name if any. */
"campaign_name": (null | string);
 
/** Is this level a simulation? (The main menu and 'Tips and tricks' use simulations) */
"is_simulation": (null | boolean);
 
/** Is this level a tutorial? */
"is_tutorial": (null | boolean);
 
/** The level name. */
"level_name": string;
 
/** The mod name if any. */
"mod_name": (null | string);
 };
 
/** The name of the mod from the environment this is used in. */
"mod_name": string;
 
/** This object's name. */
"object_name": string;
 }

/** A reference to the burner energy source owned by a specific [LuaEntity](LuaEntity) or [LuaEquipment](LuaEquipment). */
/** @noSelf **/
interface LuaBurner  { 
  
/** The burnt result inventory. */
"burnt_result_inventory": LuaInventory;
 
/** The currently burning item. */
"currently_burning": (null | LuaItemPrototype);
 
/** The fuel categories this burner uses. */
"fuel_categories": Record<string, boolean>;
 
/** The current heat (energy) stored in this burner. */
"heat": number;
 
/** The maximum heat (maximum energy) that this burner can store. */
"heat_capacity": number;
 
/** The fuel inventory. */
"inventory": LuaInventory;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** The owner of this burner energy source */
"owner": (LuaEntity | LuaEquipment);
 
/** The amount of energy left in the currently-burning fuel item. */
"remaining_burning_fuel": number;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** Prototype of a burner energy source. */
/** @noSelf **/
interface LuaBurnerPrototype  { 
  "burnt_inventory_size": number;
 "effectivity": number;
 "emissions": number;
 "fuel_categories": Record<string, boolean>;
 "fuel_inventory_size": number;
 
/** The light flicker definition for this burner prototype. */
"light_flicker": /** @noSelf **/
{ "border_fix_speed": number;
 "color": Color;
 "derivation_change_deviation": number;
 "derivation_change_frequency": number;
 "light_intensity_to_size_coefficient": number;
 "maximum_intensity": number;
 "minimum_intensity": number;
 "minimum_light_size": number;
 };
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 "render_no_network_icon": boolean;
 "render_no_power_icon": boolean;
 
/** The smoke sources for this burner prototype. */
"smoke": (null | SmokeSource);
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** A chunk iterator can be used for iterating chunks coordinates of a surface.

The returned type is a [ChunkPositionAndArea](ChunkPositionAndArea) containing the chunk coordinates and its area. */
/** @noSelf **/
interface LuaChunkIterator  { 
  
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** A circuit network associated with a given entity, connector, and wire type. */
/** @noSelf **/
interface LuaCircuitNetwork  { 
  
/** The circuit connector ID on the associated entity this network was gotten from. */
"circuit_connector_id": typeof defines.circuit_connector_id;
 
/** The number of circuits connected to this network. */
"connected_circuit_count": number;
 
/** The entity this circuit network reference is associated with. */
"entity": LuaEntity;
 
/** The circuit networks ID. */
"network_id": number;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** The circuit network signals last tick. `nil` if there were no signals last tick. */
"signals": (null | Signal);
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 
/** The wire type this network is associated with. */
"wire_type": typeof defines.wire_type;
 }
/** @noSelf **/
interface LuaCombinatorControlBehavior  extends LuaControlBehavior  { 
  
/** The circuit network signals sent by this combinator last tick. */
"signals_last_tick": Signal;
 }

/** Allows for the registration of custom console commands. Similarly to [event subscriptions](LuaBootstrap::on_event), these don't persist through a save-and-load cycle. */
/** @noSelf **/
interface LuaCommandProcessor  { 
  
/** Lists the custom commands registered by scripts through `LuaCommandProcessor`. */
"commands": Record<string, LocalisedString>;
 
/** Lists the built-in commands of the core game. The [wiki](https://wiki.factorio.com/Console) has an overview of these. */
"game_commands": Record<string, LocalisedString>;
 
/** This object's name. */
"object_name": string;
 }

/** Control behavior for constant combinators. */
/** @noSelf **/
interface LuaConstantCombinatorControlBehavior  extends LuaControlBehavior  { 
  
/** Turns this constant combinator on and off. */
"enabled": boolean;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** This constant combinator's parameters. `nil` if the [item_slot_count](LuaEntityPrototype::item_slot_count) of the combinator's prototype is `0`.

Writing `nil` clears the combinator's parameters. */
"parameters": (null | ConstantCombinatorParameters);
 
/** The number of signals this constant combinator supports */
"signals_count": number;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** Control behavior for container entities. */
/** @noSelf **/
interface LuaContainerControlBehavior  extends LuaControlBehavior  { 
  
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** This is an abstract base class containing the common functionality between [LuaPlayer](LuaPlayer) and entities (see [LuaEntity](LuaEntity)). When accessing player-related functions through a [LuaEntity](LuaEntity), it must refer to a character entity. */
/** @noSelf **/
interface LuaControl  { 
  
/** The build distance of this character or max uint when not a character or player connected to a character. */
"build_distance": number;
 "character_additional_mining_categories": string;
 "character_build_distance_bonus": number;
 "character_crafting_speed_modifier": number;
 "character_health_bonus": number;
 "character_inventory_slots_bonus": number;
 "character_item_drop_distance_bonus": number;
 "character_item_pickup_distance_bonus": number;
 "character_loot_pickup_distance_bonus": number;
 "character_maximum_following_robot_count_bonus": number;
 
/** The current mining progress between 0 and 1 of this character, or 0 if they aren't mining. */
"character_mining_progress": number;
 "character_mining_speed_modifier": number;
 
/** If personal logistic requests are enabled for this character or players character. */
"character_personal_logistic_requests_enabled": boolean;
 "character_reach_distance_bonus": number;
 "character_resource_reach_distance_bonus": number;
 
/** The current movement speed of this character, including effects from exoskeletons, tiles, stickers and shooting. */
"character_running_speed": number;
 
/** Modifies the running speed of this character by the given value as a percentage. Setting the running modifier to `0.5` makes the character run 50% faster. The minimum value of `-1` reduces the movement speed by 100%, resulting in a speed of `0`. */
"character_running_speed_modifier": number;
 "character_trash_slot_count_bonus": number;
 
/** When `true` hand crafting is free and instant. */
"cheat_mode": boolean;
 
/** The current crafting queue items. */
"crafting_queue": any;
 
/** The crafting queue progress in the range `[0-1]`. `0` when no recipe is being crafted. */
"crafting_queue_progress": number;
 
/** Size of the crafting queue. */
"crafting_queue_size": number;
 
/** The ghost prototype in the player's cursor. When read, it will be a [LuaItemPrototype](LuaItemPrototype). */
"cursor_ghost": (null | ItemPrototypeIdentification);
 
/** The player's cursor stack. `nil` if the player controller is a spectator. */
"cursor_stack": (null | LuaItemStack);
 
/** `true` if the player is in a vehicle. Writing to this attribute puts the player in or out of a vehicle. */
"driving": boolean;
 
/** The item drop distance of this character or max uint when not a character or player connected to a character. */
"drop_item_distance": number;
 
/** The current combat robots following the character. */
"following_robots": LuaEntity;
 
/** The force of this entity. Reading will always give a [LuaForce](LuaForce), but it is possible to assign either [string](string) or [LuaForce](LuaForce) to this attribute to change the force. */
"force": ForceIdentification;
 
/** Whether this character entity is in combat. */
"in_combat": boolean;
 
/** The item pickup distance of this character or max double when not a character or player connected to a character. */
"item_pickup_distance": number;
 
/** The loot pickup distance of this character or max double when not a character or player connected to a character. */
"loot_pickup_distance": number;
 
/** Current mining state. */
"mining_state": /** @noSelf **/
{ 
/** Whether the player is mining at all */
"mining": boolean;
 
/** What tiles the player is mining; only used when the player is mining tiles (holding a tile in the cursor). */
"position": (null | MapPosition);
 };
 
/** The GUI the player currently has open.

This is the GUI that will asked to close (by firing the [on_gui_closed](on_gui_closed) event) when the `Esc` or `E` keys are pressed. If this attribute is not `nil`, and a new GUI is written to it, the existing one will be asked to close. */
"opened": ((null | LuaEntity) | (null | LuaItemStack) | (null | LuaEquipment) | (null | LuaEquipmentGrid) | (null | LuaPlayer) | (null | LuaGuiElement) | (null | LuaInventory) | (null | typeof defines.gui_type));
 "opened_gui_type": (null | typeof defines.gui_type);
 
/** Current item-picking state. */
"picking_state": boolean;
 
/** The current position of the entity. */
"position": MapPosition;
 
/** The reach distance of this character or max uint when not a character or player connected to a character. */
"reach_distance": number;
 
/** Current repair state. */
"repair_state": /** @noSelf **/
{ 
/** The position being repaired */
"position": MapPosition;
 
/** The current state */
"repairing": boolean;
 };
 
/** The resource reach distance of this character or max double when not a character or player connected to a character. */
"resource_reach_distance": number;
 
/** Current riding state of this car or the vehicle this player is riding in. */
"riding_state": RidingState;
 
/** The currently selected entity. Assigning an entity will select it if is selectable, otherwise the selection is cleared. */
"selected": (null | LuaEntity);
 
/** Current shooting state. */
"shooting_state": /** @noSelf **/
{ 
/** The position being shot at */
"position": MapPosition;
 
/** The current state */
"state": typeof defines.shooting;
 };
 
/** The surface this entity is currently on. */
"surface": LuaSurface;
 
/** The vehicle the player is currently sitting in. */
"vehicle": (null | LuaEntity);
 
/** If personal logistic requests are enabled for this vehicle (spidertron). */
"vehicle_logistic_requests_enabled": boolean;
 
/** Current walking state. */
"walking_state": /** @noSelf **/
{ 
/** Direction where the player is walking */
"direction": typeof defines.direction;
 
/** If `false`, the player is currently not walking; otherwise it's going somewhere */
"walking": boolean;
 };
 }

/** The control behavior for an entity. Inserters have logistic network and circuit network behavior logic, lamps have circuit logic and so on. This is an abstract base class that concrete control behaviors inherit. */
/** @noSelf **/
interface LuaControlBehavior  { 
  
/** The entity this control behavior belongs to. */
"entity": LuaEntity;
 
/** The concrete type of this control behavior. */
"type": typeof defines.control_behavior.type;
 }

/** A custom tag that shows on the map view. */
/** @noSelf **/
interface LuaCustomChartTag  { 
  
/** The force this tag belongs to. */
"force": LuaForce;
 
/** This tag's icon, if it has one. Writing `nil` removes it. */
"icon": SignalID;
 
/** The player who last edited this tag. */
"last_user": (null | LuaPlayer);
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** The position of this tag. */
"position": MapPosition;
 
/** The surface this tag belongs to. */
"surface": LuaSurface;
 
/** The unique ID for this tag on this force. */
"tag_number": number;
 "text": string;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** Prototype of a custom input. */
/** @noSelf **/
interface LuaCustomInputPrototype  { 
  
/** The action that happens when this custom input is triggered. */
"action": string;
 
/** The default alternative key sequence for this custom input, if any */
"alternative_key_sequence": (null | string);
 
/** The consuming type: `"none"` or `"game-only"`. */
"consuming": string;
 
/** Whether this custom input is enabled. Disabled custom inputs exist but are not used by the game. */
"enabled": boolean;
 
/** Whether this custom input is enabled while using the cutscene controller. */
"enabled_while_in_cutscene": boolean;
 
/** Whether this custom input is enabled while using the spectator controller. */
"enabled_while_spectating": boolean;
 
/** Whether this custom input will include the selected prototype (if any) when triggered. */
"include_selected_prototype": boolean;
 
/** The item that gets spawned when this custom input is fired, if any. */
"item_to_spawn": (null | LuaItemPrototype);
 
/** The default key sequence for this custom input. */
"key_sequence": string;
 
/** The linked game control name, if any. */
"linked_game_control": (null | string);
 "localised_description": LocalisedString;
 "localised_name": LocalisedString;
 
/** Name of this prototype. */
"name": string;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning. */
"order": string;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** Lazily evaluated table. For performance reasons, we sometimes return a custom table-like type instead of a native Lua table. This custom type lazily constructs the necessary Lua wrappers of the corresponding C++ objects, therefore preventing their unnecessary construction in some cases.

There are some notable consequences to the usage of a custom table type rather than the native Lua table type: Iterating a custom table is only possible using the `pairs` Lua function; `ipairs` won't work. Another key difference is that custom tables cannot be serialised into a game save file -- if saving the game would require serialisation of a custom table, an error will be displayed and the game will not be saved. */
/** @noSelf **/
interface LuaCustomTable  { 
  
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** Prototype of a damage. */
/** @noSelf **/
interface LuaDamagePrototype  { 
  
/** Whether this damage type is hidden from entity tooltips. */
"hidden": boolean;
 "localised_description": LocalisedString;
 "localised_name": LocalisedString;
 
/** Name of this prototype. */
"name": string;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning. */
"order": string;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** Control behavior for decider combinators. */
/** @noSelf **/
interface LuaDeciderCombinatorControlBehavior  extends LuaCombinatorControlBehavior  { 
  
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** This decider combinator's parameters. */
"parameters": DeciderCombinatorParameters;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** Prototype of an optimized decorative. */
/** @noSelf **/
interface LuaDecorativePrototype  { 
  
/** Autoplace specification for this decorative prototype, if any. */
"autoplace_specification": (null | AutoplaceSpecification);
 
/** The bounding box used for collision checking. */
"collision_box": BoundingBox;
 
/** The collision masks this decorative uses */
"collision_mask": CollisionMask;
 "collision_mask_with_flags": CollisionMaskWithFlags;
 "localised_description": LocalisedString;
 "localised_name": LocalisedString;
 
/** Name of this prototype. */
"name": string;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning. */
"order": string;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** Prototype of an electric energy source. */
/** @noSelf **/
interface LuaElectricEnergySourcePrototype  { 
  "buffer_capacity": number;
 "drain": number;
 "emissions": number;
 "input_flow_limit": number;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 "output_flow_limit": number;
 "render_no_network_icon": boolean;
 "render_no_power_icon": boolean;
 "usage_priority": string;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** The primary interface for interacting with entities through the Lua API. Entities are everything that exists on the map except for tiles (see [LuaTile](LuaTile)).

Most functions on LuaEntity also work when the entity is contained in a ghost. */
/** @noSelf **/
interface LuaEntity  extends LuaControl  { 
  
/** Deactivating an entity will stop all its operations (car will stop moving, inserters will stop working, fish will stop moving etc). */
"active": boolean;
 
/** The ai settings of this unit. */
"ai_settings": LuaAISettings;
 "alert_parameters": ProgrammableSpeakerAlertParameters;
 
/** Whether this character's personal roboports are allowed to dispatch robots. */
"allow_dispatching_robots": boolean;
 
/** Count of resource units contained. */
"amount": number;
 
/** Whether this land mine is armed. */
"armed": boolean;
 
/** The player this character is associated with, if any. Set to `nil` to clear.

The player will be automatically disassociated when a controller is set on the character. Also, all characters associated to a player will be logged off when the player logs off in multiplayer.

Reading this property will return a [LuaPlayer](LuaPlayer), while [PlayerIdentification](PlayerIdentification) can be used when writing. */
"associated_player": ((null | LuaPlayer) | (null | PlayerIdentification));
 
/** Whether this rocket silo automatically launches the rocket when cargo is inserted. */
"auto_launch": boolean;
 
/** Destination of this spidertron's autopilot, if any. */
"autopilot_destination": (null | MapPosition);
 
/** The queued destination positions of spidertron's autopilot. */
"autopilot_destinations": MapPosition;
 
/** The backer name assigned to this entity. Entities that support backer names are labs, locomotives, radars, roboports, and train stops. `nil` if this entity doesn't support backer names. */
"backer_name": (null | string);
 
/** The belt connectable neighbours of this belt connectable entity. Only entities that input to or are outputs of this entity. Does not contain the other end of an underground belt, see [LuaEntity::neighbours](LuaEntity::neighbours) for that. This is a dictionary with `"inputs"`, `"outputs"` entries that are arrays of transport belt connectable entities, or empty tables if no entities. */
"belt_neighbours": Record<string, LuaEntity>;
 
/** `"input"` or `"output"`, depending on whether this underground belt goes down or up. */
"belt_to_ground_type": string;
 
/** The bonus mining progress for this mining drill. Read yields a number in range [0, mining_target.prototype.mineable_properties.mining_time]. `nil` if this isn't a mining drill. */
"bonus_mining_progress": (null | number);
 
/** The current productivity bonus progress, as a number in range [0, 1]. */
"bonus_progress": number;
 
/** [LuaEntityPrototype::collision_box](LuaEntityPrototype::collision_box) around entity's given position and respecting the current entity orientation. */
"bounding_box": BoundingBox;
 
/** The burner energy source for this entity, if any. */
"burner": (null | LuaBurner);
 
/** The state of this chain signal. */
"chain_signal_state": typeof defines.chain_signal_state;
 
/** The reason this character corpse character died. `""` if there is no reason. */
"character_corpse_death_cause": LocalisedString;
 
/** The player index associated with this character corpse. */
"character_corpse_player_index": number;
 
/** The tick this character corpse died at. */
"character_corpse_tick_of_death": number;
 
/** Entities that are directly connected to this entity via the circuit network. `nil` if this entity can't be connected to the circuit network. */
"circuit_connected_entities": /** @noSelf **/
{ 
/** Entities connected via the green wire. */
"green": 
/** Entities connected via the green wire. */
(null | LuaEntity)[];
 
/** Entities connected via the red wire. */
"red": 
/** Entities connected via the red wire. */
(null | LuaEntity)[];
 };
 
/** The connection definition for entities that are directly connected to this entity via the circuit network. `nil` if this entity can't be connected to the circuit network. */
"circuit_connection_definitions": (null | any);
 
/** The orientation of this cliff. */
"cliff_orientation": CliffOrientation;
 
/** The color of this character, rolling stock, train stop, car, spider-vehicle, flying text, corpse or simple-entity-with-owner. `nil` if this entity doesn't use custom colors. */
"color": (null | Color);
 
/** The owner of this combat robot, if any. */
"combat_robot_owner": (null | LuaEntity);
 
/** The command given to this unit, if any. */
"command": (null | Command);
 
/** The rail entity this train stop is connected to, if any. */
"connected_rail": (null | LuaEntity);
 
/** Rail direction to which this train stop is binding. This returns a value even when no rails are present. */
"connected_rail_direction": typeof defines.rail_direction;
 
/** The consumption bonus of this entity. */
"consumption_bonus": number;
 
/** Multiplies the energy consumption. */
"consumption_modifier": number;
 
/** Whether this corpse will ever fade away. */
"corpse_expires": boolean;
 
/** If true, corpse won't be destroyed when entities are placed over it. If false, whether corpse will be removed or not depends on value of CorpsePrototype::remove_on_entity_placement. */
"corpse_immune_to_entity_placement": boolean;
 
/** The current crafting progress, as a number in range [0, 1]. */
"crafting_progress": number;
 
/** The current crafting speed, including speed bonuses from modules and beacons. */
"crafting_speed": number;
 
/** The damage dealt by this turret, artillery turret, or artillery wagon. */
"damage_dealt": number;
 
/** If set to `false`, this entity can't be damaged and won't be attacked automatically. It can however still be mined. */
"destructible": boolean;
 
/** The current direction this entity is facing. */
"direction": typeof defines.direction;
 
/** The distraction command given to this unit, if any. */
"distraction_command": (null | Command);
 
/** Whether the driver of this car or spidertron is the gunner. If `false`, the passenger is the gunner. `nil` if this is neither a car or a spidertron. */
"driver_is_gunner": (null | boolean);
 
/** Position where the entity puts its stuff. */
"drop_position": MapPosition;
 
/** The entity this entity is putting its items to. If there are multiple possible entities at the drop-off point, writing to this attribute allows a mod to choose which one to drop off items to. The entity needs to collide with the tile box under the drop-off position. `nil` if there is no entity to put items to, or if this is not an entity that puts items somewhere. */
"drop_target": (null | LuaEntity);
 
/** The current speed of this unit in tiles per tick, taking into account any walking speed modifier given by the tile the unit is standing on. `nil` if this is not a unit. */
"effective_speed": (null | number);
 
/** Multiplies the acceleration the vehicle can create for one unit of energy. Defaults to `1`. */
"effectivity_modifier": number;
 
/** The effects being applied to this entity, if any. For beacons, this is the effect the beacon is broadcasting. */
"effects": (null | ModuleEffects);
 
/** The buffer size for the electric energy source. `nil` if the entity doesn't have an electric energy source. */
"electric_buffer_size": (null | number);
 
/** The electric drain for the electric energy source. `nil` if the entity doesn't have an electric energy source. */
"electric_drain": (null | number);
 
/** The emissions for the electric energy source. `nil` if the entity doesn't have an electric energy source. */
"electric_emissions": (null | number);
 
/** The input flow limit for the electric energy source. `nil` if the entity doesn't have an electric energy source. */
"electric_input_flow_limit": (null | number);
 
/** Returns the id of the electric network that this entity is connected to, if any. */
"electric_network_id": (null | number);
 
/** The electric network statistics for this electric pole. */
"electric_network_statistics": LuaFlowStatistics;
 
/** The output flow limit for the electric energy source. `nil` if the entity doesn't have an electric energy source. */
"electric_output_flow_limit": (null | number);
 
/** Whether equipment grid logistics are enabled while this vehicle is moving. */
"enable_logistics_while_moving": boolean;
 
/** Energy stored in the entity (heat in furnace, energy stored in electrical devices etc.). always 0 for entities that don't have the concept of energy stored inside. */
"energy": number;
 
/** How much energy this generator generated in the last tick. */
"energy_generated_last_tick": number;
 
/** The label on this entity, if any. `nil` if this is not a spider-vehicule. */
"entity_label": (null | string);
 
/** The number of filter slots this inserter, loader, or logistic storage container has. 0 if not one of those entities. */
"filter_slot_count": number;
 
/** Fluidboxes of this entity. */
"fluidbox": LuaFluidBox;
 
/** The follow offset of this spidertron, if any entity is being followed. This is randomized each time the follow entity is set. */
"follow_offset": (null | Vector);
 
/** The follow target of this spidertron, if any. */
"follow_target": (null | LuaEntity);
 
/** Multiplies the car friction rate. */
"friction_modifier": number;
 "ghost_localised_description": LocalisedString;
 
/** Localised name of the entity or tile contained in this ghost. */
"ghost_localised_name": LocalisedString;
 
/** Name of the entity or tile contained in this ghost */
"ghost_name": string;
 
/** The prototype of the entity or tile contained in this ghost. */
"ghost_prototype": (LuaEntityPrototype | LuaTilePrototype);
 
/** The prototype type of the entity or tile contained in this ghost. */
"ghost_type": string;
 
/** The [unit_number](LuaEntity::unit_number) of the entity contained in this ghost. It is the same as the unit number of the [EntityWithOwner](https://wiki.factorio.com/Prototype/EntityWithOwner) that was destroyed to create this ghost. If it was created by other means, or if the inner entity does not support unit numbers, this property is `nil`. */
"ghost_unit_number": (null | number);
 
/** The graphics variation for this entity. `nil` if this entity doesn't use graphics variations. */
"graphics_variation": (null | number);
 
/** This entity's equipment grid, if any. */
"grid": (null | LuaEquipmentGrid);
 
/** The current health of the entity, if any. Health is automatically clamped to be between `0` and max health (inclusive). Entities with a health of `0` can not be attacked. */
"health": (null | number);
 
/** The item stack currently held in an inserter's hand. */
"held_stack": LuaItemStack;
 
/** Current position of the inserter's "hand". */
"held_stack_position": MapPosition;
 
/** The blink interval of this highlight box entity. 0 indicates no blink. */
"highlight_box_blink_interval": number;
 
/** The hightlight box type of this highlight box entity. */
"highlight_box_type": string;
 
/** The filters for this infinity container. */
"infinity_container_filters": InfinityInventoryFilter;
 
/** Count of initial resource units contained. `nil` if this is not an infinite resource. */
"initial_amount": (null | number);
 
/** The filter mode for this filter inserter. Either `"whitelist"` or `"blacklist"`. `nil` if this inserter doesn't use filters. */
"inserter_filter_mode": (null | string);
 
/** Sets the stack size limit on this inserter. If the stack size is > than the force stack size limit the value is ignored. */
"inserter_stack_size_override": number;
 
/** (deprecated by 1.1.51) If this entity is a MilitaryTarget. Returns same value as LuaEntity::is_military_target */
"is_entity_with_force": boolean;
 
/** If this entity is EntityWithHealth */
"is_entity_with_health": boolean;
 
/** If this entity is EntityWithOwner */
"is_entity_with_owner": boolean;
 
/** Whether this entity is a MilitaryTarget. Can be written to if [LuaEntityPrototype::allow_run_time_change_of_is_military_target](LuaEntityPrototype::allow_run_time_change_of_is_military_target) returns `true`. */
"is_military_target": boolean;
 
/** Items this ghost will request when revived or items this item request proxy is requesting. Result is a dictionary mapping each item prototype name to the required count. */
"item_requests": Record<string, number>;
 
/** The number of units killed by this turret, artillery turret, or artillery wagon. */
"kills": number;
 
/** The last player that changed any setting on this entity. This includes building the entity, changing its color, or configuring its circuit network. `nil` if the last user is not part of the save anymore.

Reading this property will return a [LuaPlayer](LuaPlayer), while [PlayerIdentification](PlayerIdentification) can be used when writing. */
"last_user": ((null | LuaPlayer) | (null | PlayerIdentification));
 
/** The link ID this linked container is using. */
"link_id": number;
 
/** Neighbour to which this linked belt is connected to, if any. */
"linked_belt_neighbour": (null | LuaEntity);
 
/** Type of linked belt: it is either `"input"` or `"output"`. Changing type will also flip direction so the belt is out of the same side */
"linked_belt_type": string;
 
/** The container entity this loader is pointing at/pulling from depending on the [LuaEntity::loader_type](LuaEntity::loader_type), if any. */
"loader_container": (null | LuaEntity);
 
/** `"input"` or `"output"`, depending on whether this loader puts to or gets from a container. */
"loader_type": string;
 "localised_description": LocalisedString;
 
/** Localised name of the entity. */
"localised_name": LocalisedString;
 
/** The logistic cell this entity is a part of. Will be `nil` if this entity is not a part of any logistic cell. */
"logistic_cell": LuaLogisticCell;
 
/** The logistic network this entity is a part of, or `nil` if this entity is not a part of any logistic network. */
"logistic_network": LuaLogisticNetwork;
 "minable": boolean;
 
/** The mining progress for this mining drill. Is a number in range [0, mining_target.prototype.mineable_properties.mining_time]. `nil` if this isn't a mining drill. */
"mining_progress": (null | number);
 
/** The mining target, if any. */
"mining_target": (null | LuaEntity);
 
/** Returns true if this unit is moving. */
"moving": boolean;
 
/** Name of the entity prototype. E.g. "inserter" or "filter-inserter". */
"name": string;
 
/** The current total neighbour bonus of this reactor. */
"neighbour_bonus": number;
 
/** A list of neighbours for certain types of entities. Applies to electric poles, power switches, underground belts, walls, gates, reactors, cliffs, and pipe-connectable entities.

- When called on an electric pole, this is a dictionary of all connections, indexed by the strings `"copper"`, `"red"`, and `"green"`.
- When called on a pipe-connectable entity, this is an array of entity arrays of all entities a given fluidbox is connected to.
- When called on an underground transport belt, this is the other end of the underground belt connection, or `nil` if none.
- When called on a wall-connectable entity or reactor, this is a dictionary of all connections indexed by the connection direction "north", "south", "east", and "west".
- When called on a cliff entity, this is a dictionary of all connections indexed by the connection direction "north", "south", "east", and "west". */
"neighbours": (Record<string, LuaEntity> | LuaEntity | LuaEntity);
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** Player can't open gui of this entity and he can't quick insert/input stuff in to the entity when it is not operable. */
"operable": boolean;
 
/** The smooth orientation of this entity. */
"orientation": RealOrientation;
 "parameters": ProgrammableSpeakerParameters;
 
/** Where the inserter will pick up items from. */
"pickup_position": MapPosition;
 
/** The entity this inserter will attempt to pick up items from. If there are multiple possible entities at the pick-up point, writing to this attribute allows a mod to choose which one to pick up items from. The entity needs to collide with the tile box under the pick-up position. `nil` if there is no entity to pull items from. */
"pickup_target": (null | LuaEntity);
 
/** The player connected to this character, if any. */
"player": (null | LuaPlayer);
 
/** The pollution bonus of this entity. */
"pollution_bonus": number;
 
/** The power production specific to the ElectricEnergyInterface entity type. */
"power_production": number;
 
/** The state of this power switch. */
"power_switch_state": boolean;
 
/** The power usage specific to the ElectricEnergyInterface entity type. */
"power_usage": number;
 
/** The previous recipe this furnace was using, if any. */
"previous_recipe": (null | LuaRecipe);
 
/** The productivity bonus of this entity. */
"productivity_bonus": number;
 
/** The number of products this machine finished crafting in its lifetime. */
"products_finished": number;
 
/** The entity prototype of this entity. */
"prototype": LuaEntityPrototype;
 
/** The target entity for this item-request-proxy, if any. */
"proxy_target": (null | LuaEntity);
 
/** The rail target of this pump, if any. */
"pump_rail_target": (null | LuaEntity);
 
/** The current radar scan progress, as a number in range [0, 1]. */
"radar_scan_progress": number;
 
/** When locked; the recipe in this assembling machine can't be changed by the player. */
"recipe_locked": boolean;
 
/** The relative orientation of the vehicle turret, artillery turret, artillery wagon. `nil` if this entity isn't a vehicle with a vehicle turret or artillery turret/wagon. */
"relative_turret_orientation": (null | RealOrientation);
 
/** Whether items not included in this infinity container filters should be removed from the container. */
"remove_unfiltered_items": boolean;
 
/** The player that this `simple-entity-with-owner`, `simple-entity-with-force`, `flying-text`, or `highlight-box` is visible to. `nil` when this entity is rendered for all players.

Reading this property will return a [LuaPlayer](LuaPlayer), while [PlayerIdentification](PlayerIdentification) can be used when writing. */
"render_player": ((null | LuaPlayer) | (null | PlayerIdentification));
 
/** The forces that this `simple-entity-with-owner`, `simple-entity-with-force`, or `flying-text` is visible to. `nil` or an empty array when this entity is rendered for all forces. */
"render_to_forces": (null | ForceIdentification);
 
/** Whether this requester chest is set to also request from buffer chests. */
"request_from_buffers": boolean;
 
/** The index of the configured request with the highest index for this entity. This means 0 if no requests are set and e.g. 20 if the 20th request slot is configured. */
"request_slot_count": number;
 
/** Number of rocket parts in the silo. */
"rocket_parts": number;
 
/** The status of this rocket silo entity. */
"rocket_silo_status": typeof defines.rocket_silo_status;
 
/** When entity is not to be rotatable (inserter, transport belt etc), it can't be rotated by player using the R key. */
"rotatable": boolean;
 
/** The secondary bounding box of this entity or `nil` if it doesn't have one. This only exists for curved rails, and is automatically determined by the game. */
"secondary_bounding_box": (null | BoundingBox);
 
/** The secondary selection box of this entity or `nil` if it doesn't have one. This only exists for curved rails, and is automatically determined by the game. */
"secondary_selection_box": (null | BoundingBox);
 
/** Index of the currently selected weapon slot of this character, car, or spidertron. `nil` if this entity doesn't have guns. */
"selected_gun_index": (null | number);
 
/** [LuaEntityPrototype::selection_box](LuaEntityPrototype::selection_box) around entity's given position and respecting the current entity orientation. */
"selection_box": BoundingBox;
 
/** The shooting target for this turret, if any. */
"shooting_target": (null | LuaEntity);
 
/** The state of this rail signal. */
"signal_state": typeof defines.signal_state;
 
/** The spawner associated with this unit entity, if any. */
"spawner": (null | LuaEntity);
 
/** The current speed if this is a car, rolling stock, projectile or spidertron, or the maximum speed if this is a unit. The speed is in tiles per tick. `nil` if this is not a car, rolling stock, unit, projectile or spidertron.

Only the speed of units, cars, and projectiles are writable. */
"speed": (null | number);
 
/** The speed bonus of this entity. */
"speed_bonus": number;
 
/** The filter for this splitter, if any is set. */
"splitter_filter": (null | LuaItemPrototype);
 
/** The input priority for this splitter. Either `"left"`, `"none"`, or `"right"`. */
"splitter_input_priority": string;
 
/** The output priority for this splitter. Either `"left"`, `"none"`, or `"right"`. */
"splitter_output_priority": string;
 "stack": LuaItemStack;
 
/** The status of this entity, if any. */
"status": (null | typeof defines.entity_status);
 
/** The entity this sticker is sticked to. */
"sticked_to": LuaEntity;
 
/** The sticker entities attached to this entity, if any. */
"stickers": (null | LuaEntity);
 
/** The storage filter for this logistic storage container. */
"storage_filter": LuaItemPrototype;
 
/** Whether the entity has direction. When it is false for this entity, it will always return north direction when asked for. */
"supports_direction": boolean;
 
/** The tags associated with this entity ghost. `nil` if this is not an entity ghost. */
"tags": (null | Tags);
 
/** The temperature of this entity's heat energy source. `nil` if this entity does not use a heat energy source. */
"temperature": (null | number);
 
/** The text of this flying-text entity. */
"text": LocalisedString;
 
/** The last tick this character entity was attacked. */
"tick_of_last_attack": number;
 
/** The last tick this character entity was damaged. */
"tick_of_last_damage": number;
 
/** Specifies the tiling size of the entity, is used to decide, if the center should be in the center of the tile (odd tile size dimension) or on the tile border (even tile size dimension). Uses the current direction of the entity. */
"tile_height": number;
 
/** Specifies the tiling size of the entity, is used to decide, if the center should be in the center of the tile (odd tile size dimension) or on the tile border (even tile size dimension). Uses the current direction of the entity. */
"tile_width": number;
 
/** The ticks left before a ghost, combat robot, highlight box or smoke with trigger is destroyed.

- for ghosts set to uint32 max (4,294,967,295) to never expire.
- for ghosts Cannot be set higher than [LuaForce::ghost_time_to_live](LuaForce::ghost_time_to_live) of the entity's force. */
"time_to_live": number;
 
/** The ticks until the next trigger effect of this smoke-with-trigger. */
"time_to_next_effect": number;
 
/** The timeout that's left on this landmine in ticks. It describes the time between the landmine being placed and it being armed. */
"timeout": number;
 
/** Will this entity be picked up automatically when the player walks over it? */
"to_be_looted": boolean;
 
/** The torso orientation of this spider vehicle. */
"torso_orientation": RealOrientation;
 
/** The train this rolling stock belongs to, if any. `nil` if this is not a rolling stock. */
"train": (null | LuaTrain);
 
/** Amount of trains related to this particular train stop. Includes train stopped at this train stop (until it finds a path to next target) and trains having this train stop as goal or waypoint. Writing nil will disable the limit (will set a maximum possible value). */
"trains_count": number;
 
/** The number of trains in this rail block for this rail entity. */
"trains_in_block": number;
 
/** Amount of trains above which no new trains will be sent to this train stop. */
"trains_limit": number;
 
/** Index of the tree color. */
"tree_color_index": number;
 
/** Maximum index of the tree colors. */
"tree_color_index_max": number;
 
/** Index of the tree gray stage */
"tree_gray_stage_index": number;
 
/** Maximum index of the tree gray stages. */
"tree_gray_stage_index_max": number;
 
/** Index of the tree stage. */
"tree_stage_index": number;
 
/** Maximum index of the tree stages. */
"tree_stage_index_max": number;
 
/** The entity prototype type of this entity. */
"type": string;
 
/** The unit group this unit is a member of, if any. */
"unit_group": (null | LuaUnitGroup);
 
/** A universally unique number identifying this entity for the lifetime of the save. Only entities inheriting from [EntityWithOwner](https://wiki.factorio.com/Prototype/EntityWithOwner), as well as [ItemRequestProxy](https://wiki.factorio.com/Prototype/ItemRequestProxy) and [EntityGhost](https://wiki.factorio.com/Prototype/EntityGhost) are assigned a unit number. `nil` if this entity doesn't have a unit number. */
"unit_number": (null | number);
 
/** The units associated with this spawner entity. */
"units": LuaEntity;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 
/** Read when this spidertron auto-targets enemies */
"vehicle_automatic_targeting_parameters": VehicleAutomaticTargetingParameters;
 }

/** Prototype of an entity. */
/** @noSelf **/
interface LuaEntityPrototype  { 
  
/** The active energy usage of this rocket silo or combinator prototype. */
"active_energy_usage": (null | number);
 
/** Entities this entity can be pasted onto in addition to the normal allowed ones. */
"additional_pastable_entities": LuaEntityPrototype;
 
/** The bounding box that specifies which tiles adjacent to the offshore pump should be checked. */
"adjacent_tile_collision_box": (null | BoundingBox);
 
/** Tiles adjacent to the offshore pump must not collide with this collision mask. */
"adjacent_tile_collision_mask": (null | CollisionMask);
 
/** If this mask is not empty, tiles adjacent to the offshore pump must not collide with this collision mask. */
"adjacent_tile_collision_test": (null | CollisionMask);
 
/** Whether this unit prototype is affected by tile walking speed modifiers. */
"affected_by_tiles": (null | boolean);
 
/** The air resistance of this rolling stock prototype. */
"air_resistance": (null | number);
 
/** The alert icon shift of this entity prototype. */
"alert_icon_shift": Vector;
 
/** Whether this turret raises an alert when attacking */
"alert_when_attacking": (null | boolean);
 
/** Whether this entity raises an alert when damaged. */
"alert_when_damaged": (null | boolean);
 
/** Whether this market allows access to all forces or just friendly ones. */
"allow_access_to_all_forces": (null | boolean);
 
/** Whether this inserter allows burner leeching. */
"allow_burner_leech": (null | boolean);
 
/** When false copy-paste is not allowed for this entity. */
"allow_copy_paste": boolean;
 
/** Whether this inserter allows custom pickup and drop vectors. */
"allow_custom_vectors": (null | boolean);
 
/** Whether this vehicle allows passengers. */
"allow_passengers": (null | boolean);
 
/** True if this entity-with-owner's is_military_target can be changed run-time (on the entity, not on the prototype itself) */
"allow_run_time_change_of_is_military_target": (null | boolean);
 
/** The allowed module effects for this entity, if any. */
"allowed_effects": Record<(null | string), (null | boolean)>;
 
/** Whether the lamp is always on (except when out of power or turned off by the circuit network). */
"always_on": (null | boolean);
 
/** The animation speed coefficient of this belt connectable prototype. */
"animation_speed_coefficient": (null | number);
 
/** The attack parameters for this entity, if any. */
"attack_parameters": (null | AttackParameters);
 
/** The attack result of this entity, if any. */
"attack_result": (null | TriggerItem);
 
/** The amount of ammo that inserters automatically insert into this ammo-turret or artillery-turret. */
"automated_ammo_count": (null | number);
 
/** Whether this spider vehicle prototoype automatically cycles weapons. */
"automatic_weapon_cycling": (null | boolean);
 
/** Autoplace specification for this entity prototype, if any. */
"autoplace_specification": (null | AutoplaceSpecification);
 
/** The base productivity of this crafting machine, lab, or mining drill. */
"base_productivity": (null | number);
 "belt_distance": (null | number);
 "belt_length": (null | number);
 
/** The speed of this transport belt. */
"belt_speed": (null | number);
 
/** The braking force of this vehicle prototype. */
"braking_force": (null | number);
 
/** The evolution requirement to build this entity as a base when expanding enemy bases. */
"build_base_evolution_requirement": number;
 "build_distance": (null | number);
 
/** The log2 of grid size of the building */
"building_grid_bit_shift": number;
 
/** The burner energy source prototype this entity uses, if any. */
"burner_prototype": (null | LuaBurnerPrototype);
 
/** Whether this generator prototype burns fluid. */
"burns_fluid": (null | boolean);
 "call_for_help_radius": (null | number);
 
/** Whether this unit prototype can open gates. */
"can_open_gates": (null | boolean);
 
/** The collision mask used only for collision test with tile directly at offshore pump position. */
"center_collision_mask": (null | CollisionMask);
 
/** The chain shooting cooldown modifier of this spider vehicle prototype. */
"chain_shooting_cooldown_modifier": (null | number);
 "character_corpse": (null | LuaEntityPrototype);
 
/** The chunk exploration radius of this spider vehicle prototype. */
"chunk_exploration_radius": (null | number);
 
/** The item prototype name used to destroy this cliff. */
"cliff_explosive_prototype": (null | string);
 
/** The bounding box used for collision checking. */
"collision_box": BoundingBox;
 
/** The collision masks this entity uses */
"collision_mask": CollisionMask;
 
/** Does this prototype collision mask collide with itself? */
"collision_mask_collides_with_self": boolean;
 
/** Does this prototype collision mask collide with tiles only? */
"collision_mask_collides_with_tiles_only": boolean;
 
/** Does this prototype collision mask consider tile transitions? */
"collision_mask_considers_tile_transitions": boolean;
 "collision_mask_with_flags": CollisionMaskWithFlags;
 
/** The color of the prototype, if any. */
"color": (null | Color);
 
/** The construction radius for this roboport prototype. */
"construction_radius": (null | number);
 
/** The energy consumption of this car prototype. */
"consumption": (null | number);
 "container_distance": (null | number);
 
/** Corpses used when this entity is destroyed. It is a dictionary indexed by the corpse's prototype name. */
"corpses": Record<(null | string), (null | LuaEntityPrototype)>;
 
/** If this simple-entity is counted as a rock for the deconstruction planner "trees and rocks only" filter. */
"count_as_rock_for_filtered_deconstruction": (null | boolean);
 
/** The crafting categories this entity prototype supports. */
"crafting_categories": Record<(null | string), (null | boolean)>;
 
/** The crafting speed.. */
"crafting_speed": (null | number);
 
/** If this prototype will attempt to create a ghost of itself on death. */
"create_ghost_on_death": boolean;
 
/** The trigger to run when this entity is created, if any. */
"created_effect": (null | TriggerItem);
 
/** The smoke trigger run when this entity is built, if any. */
"created_smoke": /** @noSelf **/
{ "initial_height": number;
 "max_radius": (null | number);
 "offset_deviation": BoundingBox;
 "offsets": (null | Vector)[];
 "smoke_name": string;
 "speed": Vector;
 "speed_from_center": number;
 "speed_from_center_deviation": number;
 "speed_multiplier": number;
 "speed_multiplier_deviation": number;
 "starting_frame": number;
 "starting_frame_deviation": number;
 "starting_frame_speed": number;
 "starting_frame_speed_deviation": number;
 };
 "damage_hit_tint": (null | Color);
 
/** Value between 0 and 1 darkness where all lamps of this lamp prototype are off. */
"darkness_for_all_lamps_off": (null | number);
 
/** Value between 0 and 1 darkness where all lamps of this lamp prototype are on. */
"darkness_for_all_lamps_on": (null | number);
 
/** The hardcoded default collision mask (with flags) for this entity prototype type. */
"default_collision_mask_with_flags": CollisionMaskWithFlags;
 
/** Whether this generator prototype destroys non-fuel fluids. */
"destroy_non_fuel_fluid": (null | boolean);
 
/** The distraction cooldown of this unit prototype. */
"distraction_cooldown": (null | number);
 
/** The distribution effectivity for this beacon prototype. */
"distribution_effectivity": (null | number);
 
/** The door opening speed for this rocket silo prototype. */
"door_opening_speed": (null | number);
 
/** Whether this logistics or construction robot renders its cargo when flying. */
"draw_cargo": (null | boolean);
 
/** The bounding box used for drawing the entity icon. */
"drawing_box": BoundingBox;
 "drop_item_distance": (null | number);
 
/** The dying time of this corpse prototype. */
"dying_speed": (null | number);
 
/** The effectivity of this car prototype, generator prototype. */
"effectivity": (null | number);
 
/** The electric energy source prototype this entity uses, if any. */
"electric_energy_source_prototype": (null | LuaElectricEnergySourcePrototype);
 
/** Amount of pollution emissions per second this entity will create. */
"emissions_per_second": number;
 
/** The enemy map color used when charting this entity. */
"enemy_map_color": Color;
 
/** The energy used per hitpoint taken for this vehicle during collisions. */
"energy_per_hit_point": (null | number);
 
/** The energy consumed per tile moved for this flying robot. */
"energy_per_move": (null | number);
 
/** The energy consumed per tick for this flying robot. */
"energy_per_tick": (null | number);
 
/** The direct energy usage of this entity, if any. */
"energy_usage": (null | number);
 
/** The engine starting speed for this rocket silo rocket prototype. */
"engine_starting_speed": (null | number);
 "enter_vehicle_distance": (null | number);
 
/** Whether this explosion has a beam. */
"explosion_beam": (null | number);
 
/** Whether this explosion rotates. */
"explosion_rotate": (null | number);
 
/** The group of mutually fast-replaceable entities, if any. */
"fast_replaceable_group": (null | string);
 
/** The filter count of this inserter, loader, or logistic chest. For logistic containers, `nil` means no limit. */
"filter_count": (null | number);
 
/** The final attack result for this projectile. */
"final_attack_result": (null | TriggerItem);
 
/** The fixed recipe name for this assembling machine prototype, if any. */
"fixed_recipe": (null | string);
 
/** The flags for this entity prototype. */
"flags": EntityPrototypeFlags;
 
/** The fluid this offshore pump produces. */
"fluid": (null | LuaFluidPrototype);
 
/** The fluid capacity of this entity or 0 if this entity doesn't support fluids. */
"fluid_capacity": number;
 
/** The fluid energy source prototype this entity uses, if any. */
"fluid_energy_source_prototype": (null | LuaFluidEnergySourcePrototype);
 
/** The fluid usage of this generator prototype. */
"fluid_usage_per_tick": (null | number);
 
/** The fluidbox prototypes for this entity. */
"fluidbox_prototypes": LuaFluidBoxPrototype;
 
/** The flying acceleration for this rocket silo rocket prototype. */
"flying_acceleration": (null | number);
 
/** The flying speed for this rocket silo rocket prototype. */
"flying_speed": (null | number);
 
/** The friction of this vehicle prototype. */
"friction_force": (null | number);
 
/** The friendly map color used when charting this entity. */
"friendly_map_color": Color;
 
/** The equipment grid prototype for this entity, if any. */
"grid_prototype": (null | LuaEquipmentGridPrototype);
 
/** Group of this entity. */
"group": LuaGroup;
 
/** A mapping of the gun name to the gun prototype this prototype uses. `nil` if this entity prototype doesn't use guns. */
"guns": Record<(null | string), (null | LuaItemPrototype)>;
 
/** Whether this unit, car, or character prototype has belt immunity. */
"has_belt_immunity": (null | boolean);
 
/** Amount this entity can heal per tick, if any. */
"healing_per_tick": (null | number);
 
/** The heat buffer prototype this entity uses, if any. */
"heat_buffer_prototype": (null | LuaHeatBufferPrototype);
 
/** The heat energy source prototype this entity uses, if any. */
"heat_energy_source_prototype": (null | LuaHeatEnergySourcePrototype);
 
/** The height of this spider vehicle prototype. */
"height": (null | number);
 
/** The idle energy usage of this rocket silo prototype. */
"idle_energy_usage": (null | number);
 
/** A vector of the gun prototypes of this car, spider vehicule, or artillery wagon or turret. */
"indexed_guns": (null | LuaItemPrototype);
 
/** Every time this infinite resource 'ticks' down, it is reduced by this amount. Meaningless if this isn't an infinite resource. */
"infinite_depletion_resource_amount": (null | number);
 
/** Whether this resource is infinite. */
"infinite_resource": (null | boolean);
 
/** The max number of ingredients this crafting machine prototype supports. */
"ingredient_count": (null | number);
 
/** True if this inserter chases items on belts for pickup. */
"inserter_chases_belt_items": (null | boolean);
 
/** The drop position for this inserter. */
"inserter_drop_position": (null | Vector);
 
/** The extension speed of this inserter. */
"inserter_extension_speed": (null | number);
 
/** The pickup position for this inserter. */
"inserter_pickup_position": (null | Vector);
 
/** The rotation speed of this inserter. */
"inserter_rotation_speed": (null | number);
 
/** The built-in stack size bonus of this inserter prototype. */
"inserter_stack_size_bonus": (null | number);
 
/** The instruments for this programmable speaker. */
"instruments": (null | ProgrammableSpeakerInstrument);
 "is_building": boolean;
 
/** True if this is entity-with-owner */
"is_entity_with_owner": boolean;
 
/** True if this entity-with-owner is military target */
"is_military_target": (null | boolean);
 "item_pickup_distance": (null | number);
 
/** The item slot count of this constant combinator prototype. */
"item_slot_count": (null | number);
 
/** Items that when placed will produce this entity, if any. Construction bots will always choose the first item in this list to build this entity. */
"items_to_place_this": (null | SimpleItemStack);
 
/** The item prototype names that are the inputs of this lab prototype. */
"lab_inputs": (null | string);
 
/** The lamp energy usage of this rocket silo prototype. */
"lamp_energy_usage": (null | number);
 
/** The rocket launch delay for this rocket silo prototype. */
"launch_wait_time": (null | number);
 
/** The light blinking speed for this rocket silo prototype. */
"light_blinking_speed": (null | number);
 "localised_description": LocalisedString;
 "localised_name": LocalisedString;
 
/** The logistic mode of this logistic container. One of `"requester"`, `"active-provider"`, `"passive-provider"`, `"buffer"`, `"storage"`, `"none"`. */
"logistic_mode": (null | string);
 
/** The logistic parameters for this roboport. */
"logistic_parameters": /** @noSelf **/
{ "charge_approach_distance": number;
 "charging_distance": number;
 "charging_energy": number;
 "charging_station_count": number;
 "charging_station_shift": Vector;
 "charging_threshold_distance": number;
 "construction_radius": number;
 "logistic_radius": number;
 "logistics_connection_distance": number;
 "robot_limit": number;
 "robot_vertical_acceleration": number;
 "robots_shrink_when_entering_and_exiting": boolean;
 "spawn_and_station_height": number;
 "spawn_and_station_shadow_height_offset": number;
 "stationing_offset": Vector;
 };
 
/** The logistic radius for this roboport prototype. */
"logistic_radius": (null | number);
 
/** Loot that will be dropped when this entity is killed, if any. */
"loot": (null | Loot);
 "loot_pickup_distance": (null | number);
 
/** The manual range modifier for this artillery turret or wagon prototype.

subclass(ArtilleryWagon, ArtilleryTurret) */
"manual_range_modifier": (null | number);
 
/** The map color used when charting this entity if a friendly or enemy color isn't defined, if any. */
"map_color": (null | Color);
 
/** The bounding box used for map generator collision checking. */
"map_generator_bounding_box": BoundingBox;
 
/** The maximum circuit wire distance for this entity. 0 if the entity doesn't support circuit wires. */
"max_circuit_wire_distance": number;
 
/** Count of enemies this spawner can sustain. */
"max_count_of_owned_units": (null | number);
 
/** The maximum darkness at which this unit spawner can spawn entities. */
"max_darkness_to_spawn": (null | number);
 
/** The radius of the area constantly revealed by this radar, in chunks. */
"max_distance_of_nearby_sector_revealed": (null | number);
 
/** The radius of the area this radar can chart, in chunks. */
"max_distance_of_sector_revealed": (null | number);
 
/** The max energy for this flying robot. */
"max_energy": (null | number);
 
/** The theoretical maximum energy production for this this entity. */
"max_energy_production": number;
 
/** The theoretical maximum energy usage for this entity. */
"max_energy_usage": number;
 
/** How many friendly units are required within the spawning_radius of this spawner for it to stop producing more units. */
"max_friends_around_to_spawn": (null | number);
 
/** Max health of this entity. Will be `0` if this is not an entity with health. */
"max_health": number;
 
/** The max payload size of this logistics or construction robot. */
"max_payload_size": (null | number);
 
/** The maximum polyphony for this programmable speaker. */
"max_polyphony": (null | number);
 
/** The default maximum power output of this generator prototype. */
"max_power_output": (null | number);
 
/** The maximum pursue distance of this unit prototype. */
"max_pursue_distance": (null | number);
 
/** The max speed of this projectile or flying robot prototype. */
"max_speed": (null | number);
 
/** The maximum energy for this flying robot above which it won't try to recharge when stationing. */
"max_to_charge": (null | number);
 
/** The max underground distance for underground belts and underground pipes. */
"max_underground_distance": (null | number);
 
/** The maximum wire distance for this entity. 0 if the entity doesn't support wires. */
"max_wire_distance": number;
 "maximum_corner_sliding_distance": (null | number);
 
/** The maximum fluid temperature of this generator prototype. */
"maximum_temperature": (null | number);
 
/** The minimum darkness at which this unit spawner can spawn entities. */
"min_darkness_to_spawn": (null | number);
 
/** The minimum pursue time of this unit prototype. */
"min_pursue_time": (null | number);
 
/** The minimum energy for this flying robot before it tries to recharge. */
"min_to_charge": (null | number);
 
/** Whether this entity is minable and what can be obtained by mining it. */
"mineable_properties": /** @noSelf **/
{ 
/** The required fluid amount if any. */
"fluid_amount": (null | number);
 
/** Is this entity mineable at all? */
"minable": boolean;
 
/** Prototype name of the particle produced when mining this entity. Will only be present if this entity produces any particle during mining. */
"mining_particle": (null | string);
 
/** Energy required to mine an entity. */
"mining_time": number;
 
/** The mining trigger if any. */
"mining_trigger": 
/** The mining trigger if any. */
TriggerItem[];
 
/** Products obtained by mining this entity. */
"products": 
/** Products obtained by mining this entity. */
Product[];
 
/** The prototype name of the required fluid if any. */
"required_fluid": (null | string);
 };
 
/** Minimum amount of this resource. */
"minimum_resource_amount": (null | number);
 
/** The mining radius of this mining drill prototype. */
"mining_drill_radius": (null | number);
 
/** The mining speed of this mining drill/character prototype. */
"mining_speed": (null | number);
 
/** The module inventory size. `nil` if this entity doesn't support modules. */
"module_inventory_size": (null | number);
 
/** Whether this unit prototype can move while shooting. */
"move_while_shooting": (null | boolean);
 
/** Name of this prototype. */
"name": string;
 "neighbour_bonus": (null | number);
 
/** The next upgrade for this entity, if any. */
"next_upgrade": (null | LuaEntityPrototype);
 
/** The normal amount for this resource. */
"normal_resource_amount": (null | number);
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning. */
"order": string;
 
/** The amount of pollution that has to be absorbed by the unit's spawner before the unit will leave the spawner and attack the source of the pollution. */
"pollution_to_join_attack": (null | number);
 
/** True if this entity prototype should be included during tile collision checks with [LuaTilePrototype::check_collision_with_entities](LuaTilePrototype::check_collision_with_entities) enabled. */
"protected_from_tile_building": boolean;
 
/** The pumping speed of this offshore or normal pump. */
"pumping_speed": (null | number);
 
/** The radar range of this unit prototype. */
"radar_range": (null | number);
 
/** The radius of this entity prototype. */
"radius": number;
 "reach_distance": (null | number);
 "reach_resource_distance": (null | number);
 "related_underground_belt": (null | LuaEntityPrototype);
 
/** The remains left behind when this entity is mined. */
"remains_when_mined": LuaEntityPrototype;
 "remove_decoratives": string;
 
/** Repair-speed modifier for this entity, if any. Actual repair speed will be `tool_repair_speed * entity_repair_speed_modifier`. */
"repair_speed_modifier": (null | number);
 
/** The base researching speed of this lab prototype. */
"researching_speed": (null | number);
 
/** List of resistances towards each damage type. It is a dictionary indexed by damage type names (see `data/base/prototypes/damage-type.lua`). */
"resistances": Record<(null | string), (null | Resistance)>;
 
/** The resource categories this character or mining drill supports. */
"resource_categories": Record<(null | string), (null | boolean)>;
 
/** Name of the category of this resource. */
"resource_category": (null | string);
 "respawn_time": (null | number);
 
/** The result units and spawn points with weight and evolution factor for a biter spawner entity. */
"result_units": (null | any);
 
/** The rising speed for this rocket silo rocket prototype. */
"rising_speed": (null | number);
 
/** The rocket entity prototype associated with this rocket silo prototype. */
"rocket_entity_prototype": (null | LuaEntityPrototype);
 
/** The rocket parts required for this rocket silo prototype. */
"rocket_parts_required": (null | number);
 
/** The rocket rising delay for this rocket silo prototype. */
"rocket_rising_delay": (null | number);
 
/** The rotation speed of this car prototype. */
"rotation_speed": (null | number);
 
/** The current movement speed of this character, including effects from exoskeletons, tiles, stickers and shooting. */
"running_speed": (null | number);
 
/** Whether this generator prototype scales fluid usage. */
"scale_fluid_usage": (null | boolean);
 
/** The secondary bounding box used for collision checking, if any. This is only used in rails and rail remnants. */
"secondary_collision_box": (null | BoundingBox);
 
/** Is this entity selectable? */
"selectable_in_game": boolean;
 
/** The bounding box used for drawing selection. */
"selection_box": BoundingBox;
 
/** The selection priority of this entity - a value between 0 and 255 */
"selection_priority": number;
 
/** The cursor size used when shooting at this entity. */
"shooting_cursor_size": number;
 
/** The spawning cooldown for this enemy spawner prototype. */
"spawn_cooldown": /** @noSelf **/
{ "max": number;
 "min": number;
 };
 
/** How far from the spawner can the units be spawned. */
"spawning_radius": (null | number);
 
/** What spaces should be between the spawned units. */
"spawning_spacing": (null | number);
 
/** The spawning time modifier of this unit prototype. */
"spawning_time_modifier": (null | number);
 
/** The default speed of this flying robot, rolling stock or unit. For rolling stocks, this is their `max_speed`. */
"speed": (null | number);
 
/** The speed multiplier when this flying robot is out of energy. */
"speed_multiplier_when_out_of_energy": (null | number);
 
/** Whether this inserter is a stack-type. */
"stack": (null | boolean);
 
/** The bounding box used to attach sticker type entities. */
"sticker_box": BoundingBox;
 
/** Subgroup of this entity. */
"subgroup": LuaGroup;
 
/** The supply area of this electric pole or beacon prototype. */
"supply_area_distance": (null | number);
 
/** Whether this entity prototype could possibly ever be rotated. */
"supports_direction": boolean;
 
/** If this car prototype uses tank controls to drive. */
"tank_driving": (null | boolean);
 
/** The target temperature of this boiler prototype. */
"target_temperature": (null | number);
 
/** The terrain friction modifier for this vehicle. */
"terrain_friction_modifier": (null | number);
 "ticks_to_keep_aiming_direction": (null | number);
 "ticks_to_keep_gun": (null | number);
 "ticks_to_stay_in_combat": (null | number);
 
/** Specifies the tiling size of the entity, is used to decide, if the center should be in the center of the tile (odd tile size dimension) or on the tile border (even tile size dimension) */
"tile_height": number;
 
/** Specifies the tiling size of the entity, is used to decide, if the center should be in the center of the tile (odd tile size dimension) or on the tile border (even tile size dimension) */
"tile_width": number;
 
/** The time to live for this prototype or `0` if prototype doesn't have time_to_live or time_before_removed. */
"time_to_live": number;
 
/** The time it takes this land mine to arm. */
"timeout": (null | number);
 
/** The torso rotation speed of this spider vehicle prototype. */
"torso_rotation_speed": (null | number);
 
/** If it is a tree, return the number of colors it supports. */
"tree_color_count": (null | number);
 
/** The collision mask entities must collide with to make this landmine blow up. */
"trigger_collision_mask": (null | CollisionMaskWithFlags);
 
/** The range of this turret. */
"turret_range": (null | number);
 
/** The turret rotation speed of this car prototype. */
"turret_rotation_speed": (null | number);
 
/** Type of this prototype. */
"type": string;
 
/** Whether this logistic container prototype uses exact mode */
"use_exact_mode": (null | boolean);
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 
/** The vision distance of this unit prototype. */
"vision_distance": (null | number);
 
/** The void energy source prototype this entity uses, if any. */
"void_energy_source_prototype": (null | LuaVoidEnergySourcePrototype);
 
/** The weight of this vehicle prototype. */
"weight": (null | number);
 }

/** An item in a [LuaEquipmentGrid](LuaEquipmentGrid), for example a fusion reactor placed in one's power armor.

An equipment reference becomes invalid once the equipment is removed or the equipment grid it resides in is destroyed. */
/** @noSelf **/
interface LuaEquipment  { 
  
/** The burner energy source for this equipment, if any. */
"burner": (null | LuaBurner);
 
/** Current available energy. */
"energy": number;
 
/** Energy generated per tick. */
"generator_power": number;
 
/** Maximum amount of energy that can be stored in this equipment. */
"max_energy": number;
 
/** Maximum shield value. */
"max_shield": number;
 
/** Maximum solar power generated. */
"max_solar_power": number;
 
/** Movement speed bonus. */
"movement_bonus": number;
 
/** Name of this equipment. */
"name": string;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** Position of this equipment in the equipment grid. */
"position": EquipmentPosition;
 "prototype": LuaEquipmentPrototype;
 
/** Shape of this equipment. */
"shape": /** @noSelf **/
{ "height": number;
 "width": number;
 };
 
/** Current shield value of the equipment. */
"shield": number;
 
/** Type of this equipment. */
"type": string;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** Prototype of an equipment category. */
/** @noSelf **/
interface LuaEquipmentCategoryPrototype  { 
  "localised_description": LocalisedString;
 "localised_name": LocalisedString;
 
/** Name of this prototype. */
"name": string;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning. */
"order": string;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** An equipment grid is for example the inside of a power armor. */
/** @noSelf **/
interface LuaEquipmentGrid  { 
  
/** The total energy stored in all batteries in the equipment grid. */
"available_in_batteries": number;
 
/** Total energy storage capacity of all batteries in the equipment grid. */
"battery_capacity": number;
 
/** All the equipment in this grid. */
"equipment": LuaEquipment;
 
/** Total energy per tick generated by the equipment inside this grid. */
"generator_energy": number;
 
/** Height of the equipment grid. */
"height": number;
 
/** True if this movement bonus equipment is turned off, otherwise false. */
"inhibit_movement_bonus": boolean;
 
/** The maximum amount of shields this equipment grid has. */
"max_shield": number;
 
/** Maximum energy per tick that can be created by any solar panels in the equipment grid. Actual generated energy varies depending on the daylight levels. */
"max_solar_energy": number;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 "prototype": LuaEquipmentGridPrototype;
 
/** The amount of shields this equipment grid has. */
"shield": number;
 
/** Unique identifier of this equipment grid. */
"unique_id": number;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 
/** Width of the equipment grid. */
"width": number;
 }

/** Prototype of an equipment grid. */
/** @noSelf **/
interface LuaEquipmentGridPrototype  { 
  
/** Equipment category names for the [categories](LuaEquipmentPrototype::equipment_categories) that may be inserted into this equipment grid. The grid will accept any equipment that has at least one category in this list. */
"equipment_categories": string;
 "height": number;
 "localised_description": LocalisedString;
 "localised_name": LocalisedString;
 
/** If the player can move equipment into or out of this grid. */
"locked": boolean;
 
/** Name of this prototype. */
"name": string;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning. */
"order": string;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 "width": number;
 }

/** Prototype of a modular equipment. */
/** @noSelf **/
interface LuaEquipmentPrototype  { 
  
/** The equipment attack parameters. */
"attack_parameters": (null | AttackParameters);
 
/** Whether this active defense equipment is automatic. Returns false if not active defense equipment. */
"automatic": boolean;
 
/** The background color of this equipment prototype. */
"background_color": Color;
 
/** The burner energy source prototype this equipment uses, if any. */
"burner_prototype": (null | LuaBurnerPrototype);
 
/** The electric energy source prototype this equipment uses, if any. */
"electric_energy_source_prototype": (null | LuaElectricEnergySourcePrototype);
 "energy_consumption": number;
 
/** The energy per shield point restored. 0 for non-shield equipment. */
"energy_per_shield": number;
 
/** The max power generated by this equipment. */
"energy_production": number;
 
/** The energy source prototype for the equipment. */
"energy_source": LuaElectricEnergySourcePrototype;
 
/** Category names for this equipment. These [categories](LuaEquipmentGridPrototype::equipment_categories) will be used to determine whether this equipment is allowed in a particular equipment grid. */
"equipment_categories": string;
 "localised_description": LocalisedString;
 "localised_name": LocalisedString;
 
/** The logistic parameters for this roboport equipment. */
"logistic_parameters": /** @noSelf **/
{ "charge_approach_distance": number;
 "charging_distance": number;
 "charging_energy": number;
 "charging_station_count": number;
 "charging_station_shift": Vector;
 "charging_threshold_distance": number;
 "construction_radius": number;
 "logistic_radius": number;
 "logistics_connection_distance": number;
 "robot_limit": number;
 "robot_vertical_acceleration": number;
 "robots_shrink_when_entering_and_exiting": boolean;
 "spawn_and_station_height": number;
 "spawn_and_station_shadow_height_offset": number;
 "stationing_offset": Vector;
 };
 "movement_bonus": number;
 
/** Name of this prototype. */
"name": string;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning. */
"order": string;
 
/** Shape of this equipment prototype. */
"shape": /** @noSelf **/
{ "height": number;
 
/** Only set when the shape is "manual" */
"points": 
/** Only set when the shape is "manual" */
EquipmentPoint[];
 "width": number;
 };
 
/** The shield value of this equipment. 0 for non-shield equipment. */
"shield": number;
 
/** The result item when taking this equipment out of an equipment grid, if any. */
"take_result": (null | LuaItemPrototype);
 
/** Type of this equipment prototype. */
"type": string;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** Encapsulates statistic data for different parts of the game. In the context of flow statistics, `input` and `output` describe on which side of the associated GUI the values are shown. Input values are shown on the left side, output values on the right side.

Examples:
- The item production GUI shows "consumption" on the right, thus `output` describes the item consumption numbers. The same goes for fluid consumption.
- The kills GUI shows "losses" on the right, so `output` describes how many of the force's entities were killed by enemies.
- The electric network GUI shows "power consumption" on the left side, so in this case `input` describes the power consumption numbers. */
/** @noSelf **/
interface LuaFlowStatistics  { 
  
/** The force these statistics belong to. `nil` for pollution statistics. */
"force": (null | LuaForce);
 
/** List of input counts indexed by prototype name. Represents the data that is shown on the left side of the GUI for the given statistics. */
"input_counts": Record<string, (number | number)>;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** List of output counts indexed by prototype name. Represents the data that is shown on the right side of the GUI for the given statistics. */
"output_counts": Record<string, (number | number)>;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** An array of fluid boxes of an entity. Entities may contain more than one fluid box, and some can change the number of fluid boxes -- for instance, an assembling machine will change its number of fluid boxes depending on its active recipe. See [Fluid](Fluid).

Do note that reading from a [LuaFluidBox](LuaFluidBox) creates a new table and writing will copy the given fields from the table into the engine's own fluid box structure. Therefore, the correct way to update a fluidbox of an entity is to read it first, modify the table, then write the modified table back. Directly accessing the returned table's attributes won't have the desired effect. */
/** @noSelf **/
interface LuaFluidBox  { 
  
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** The entity that owns this fluidbox. */
"owner": LuaEntity;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** A prototype of a fluidbox owned by some [LuaEntityPrototype](LuaEntityPrototype). */
/** @noSelf **/
interface LuaFluidBoxPrototype  { 
  "base_area": number;
 "base_level": number;
 
/** The entity that this belongs to. */
"entity": LuaEntityPrototype;
 
/** The filter, if any is set. */
"filter": (null | LuaFluidPrototype);
 "height": number;
 
/** The index of this fluidbox prototype in the owning entity. */
"index": number;
 
/** The maximum temperature, if any is set. */
"maximum_temperature": (null | number);
 
/** The minimum temperature, if any is set. */
"minimum_temperature": (null | number);
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** The pipe connection points. */
"pipe_connections": FluidBoxConnection;
 
/** The production type. "input", "output", "input-output", or "none". */
"production_type": string;
 
/** The render layer. */
"render_layer": string;
 
/** The secondary draw orders for the 4 possible connection directions. */
"secondary_draw_orders": number;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 "volume": number;
 }

/** Prototype of a fluid energy source. */
/** @noSelf **/
interface LuaFluidEnergySourcePrototype  { 
  "burns_fluid": boolean;
 "destroy_non_fuel_fluid": boolean;
 "effectivity": number;
 "emissions": number;
 
/** The fluid box for this energy source. */
"fluid_box": LuaFluidBoxPrototype;
 "fluid_usage_per_tick": number;
 "maximum_temperature": number;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 "render_no_network_icon": boolean;
 "render_no_power_icon": boolean;
 "scale_fluid_usage": boolean;
 
/** The smoke sources for this prototype, if any. */
"smoke": SmokeSource;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** Prototype of a fluid. */
/** @noSelf **/
interface LuaFluidPrototype  { 
  "base_color": Color;
 
/** Default temperature of this fluid. */
"default_temperature": number;
 
/** A multiplier on the amount of emissions produced when this fluid is burnt in a generator. A value above `1.0` increases emissions and vice versa. The multiplier can't be negative. */
"emissions_multiplier": number;
 "flow_color": Color;
 
/** The amount of energy in Joules one unit of this fluid will produce when burnt in a generator. A value of `0` means this fluid can't be used for energy generation. The value can't be negative. */
"fuel_value": number;
 
/** The temperature above which this fluid will be shown as gaseous inside tanks and pipes. */
"gas_temperature": number;
 
/** Group of this prototype. */
"group": LuaGroup;
 
/** The amount of energy in Joules required to heat one unit of this fluid by 1°C. */
"heat_capacity": number;
 
/** Whether this fluid is hidden from the fluid and signal selectors. */
"hidden": boolean;
 "localised_description": LocalisedString;
 "localised_name": LocalisedString;
 
/** Maximum temperature this fluid can reach. */
"max_temperature": number;
 
/** Name of this prototype. */
"name": string;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning. */
"order": string;
 
/** Subgroup of this prototype. */
"subgroup": LuaGroup;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** Prototype of a font. */
/** @noSelf **/
interface LuaFontPrototype  { 
  "border": boolean;
 
/** The border color, if any. */
"border_color": (null | Color);
 "filtered": boolean;
 "from": string;
 
/** Name of this prototype. */
"name": string;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 "size": number;
 "spacing": number;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** `LuaForce` encapsulates data local to each "force" or "faction" of the game. Default forces are player, enemy and neutral. Players and mods can create additional forces (up to 64 total). */
/** @noSelf **/
interface LuaForce  { 
  
/** Enables some higher-level AI behaviour for this force. When set to `true`, biters belonging to this force will automatically expand into new territories, build new spawners, and form unit groups. By default, this value is `true` for the enemy force and `false` for all others. */
"ai_controllable": boolean;
 "artillery_range_modifier": number;
 "character_build_distance_bonus": number;
 "character_health_bonus": number;
 
/** the number of additional inventory slots the character main inventory has. */
"character_inventory_slots_bonus": number;
 "character_item_drop_distance_bonus": number;
 "character_item_pickup_distance_bonus": number;
 
/** `true` if character requester logistics is enabled. */
"character_logistic_requests": boolean;
 "character_loot_pickup_distance_bonus": number;
 "character_reach_distance_bonus": number;
 "character_resource_reach_distance_bonus": number;
 
/** Modifies the running speed of all characters in this force by the given value as a percentage. Setting the running modifier to `0.5` makes the character run 50% faster. The minimum value of `-1` reduces the movement speed by 100%, resulting in a speed of `0`. */
"character_running_speed_modifier": number;
 
/** Number of character trash slots. */
"character_trash_slot_count": number;
 
/** Effective color of this force. */
"color": Color;
 
/** The connected players belonging to this force.

This is primarily useful when you want to do some action against all online players of this force. */
"connected_players": LuaPlayer;
 
/** The currently ongoing technology research, if any. */
"current_research": (null | LuaTechnology);
 
/** Custom color for this force. If specified, will take priority over other sources of the force color. Writing nil clears custom color. Will return nil if it was not specified or if was set to {0,0,0,0} */
"custom_color": (null | Color);
 
/** The time, in ticks, before a deconstruction order is removed. */
"deconstruction_time_to_live": number;
 
/** The entity build statistics for this force (built and mined) */
"entity_build_count_statistics": LuaFlowStatistics;
 
/** Evolution factor of this force. */
"evolution_factor": number;
 "evolution_factor_by_killing_spawners": number;
 "evolution_factor_by_pollution": number;
 "evolution_factor_by_time": number;
 
/** The fluid production statistics for this force. */
"fluid_production_statistics": LuaFlowStatistics;
 
/** Additional lifetime for following robots. */
"following_robots_lifetime_modifier": number;
 
/** If friendly fire is enabled for this force. */
"friendly_fire": boolean;
 
/** The time, in ticks, before a placed ghost disappears. */
"ghost_time_to_live": number;
 
/** Unique ID associated with this force. */
"index": number;
 
/** The inserter stack size bonus for non stack inserters */
"inserter_stack_size_bonus": number;
 
/** The item production statistics for this force. */
"item_production_statistics": LuaFlowStatistics;
 
/** All of the items that have been launched in rockets. The attribute is a dictionary mapping the item prototype names to the launched amounts. */
"items_launched": Record<string, number>;
 
/** The kill counter statistics for this force. */
"kill_count_statistics": LuaFlowStatistics;
 "laboratory_productivity_bonus": number;
 "laboratory_speed_modifier": number;
 
/** List of logistic networks, grouped by surface. */
"logistic_networks": Record<string, LuaLogisticNetwork>;
 
/** Multiplier of the manual crafting speed. Default value is `0`. The actual crafting speed will be multiplied by `1 + manual_crafting_speed_modifier`. */
"manual_crafting_speed_modifier": number;
 
/** Multiplier of the manual mining speed. Default value is `0`. The actual mining speed will be multiplied by `1 + manual_mining_speed_modifier`. */
"manual_mining_speed_modifier": number;
 "max_failed_attempts_per_tick_per_construction_queue": number;
 "max_successful_attempts_per_tick_per_construction_queue": number;
 
/** Maximum number of follower robots. */
"maximum_following_robot_count": number;
 "mining_drill_productivity_bonus": number;
 
/** Name of the force. */
"name": string;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** Players belonging to this force. */
"players": LuaPlayer;
 
/** The previous research, if any. */
"previous_research": (null | LuaTechnology);
 
/** Whether research is enabled for this force, see [LuaForce::enable_research](LuaForce::enable_research) and [LuaForce::disable_research](LuaForce::disable_research) */
"research_enabled": boolean;
 
/** Progress of current research, as a number in range [0, 1]. */
"research_progress": number;
 
/** The research queue of this force. The first technology in the array is the currently active one. Reading this attribute gives an array of [LuaTechnology](LuaTechnology).

To write to this, the entire table must be written. Providing an empty table or `nil` will empty the research queue and cancel the current research. Writing to this when the research queue is disabled will simply set the last research in the table as the current research. */
"research_queue": TechnologyIdentification;
 
/** Whether the research queue is available for this force. */
"research_queue_enabled": boolean;
 
/** The number of rockets launched. */
"rockets_launched": number;
 
/** If sharing chart data is enabled for this force. */
"share_chart": boolean;
 
/** Number of items that can be transferred by stack inserters. When writing to this value, it must be >= 0 and <= 254. */
"stack_inserter_capacity_bonus": number;
 "train_braking_force_bonus": number;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 "worker_robots_battery_modifier": number;
 "worker_robots_speed_modifier": number;
 "worker_robots_storage_bonus": number;
 
/** Ability to create new blueprints using empty blueprint item when using zoom-to-world. */
"zoom_to_world_blueprint_enabled": boolean;
 
/** Ability to use deconstruction planner when using zoom-to-world. */
"zoom_to_world_deconstruction_planner_enabled": boolean;
 
/** Ability to use zoom-to-world on map. */
"zoom_to_world_enabled": boolean;
 
/** Ability to build ghosts through blueprint or direct ghost placement, or "mine" ghosts when using zoom-to-world. */
"zoom_to_world_ghost_building_enabled": boolean;
 
/** Ability to use custom selection tools when using zoom-to-world. */
"zoom_to_world_selection_tool_enabled": boolean;
 }

/** Prototype of a fuel category. */
/** @noSelf **/
interface LuaFuelCategoryPrototype  { 
  "localised_description": LocalisedString;
 "localised_name": LocalisedString;
 
/** Name of this prototype. */
"name": string;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning. */
"order": string;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** Main toplevel type, provides access to most of the API though its members. An instance of LuaGameScript is available as the global object named `game`. */
/** @noSelf **/
interface LuaGameScript  { 
  
/** The active mods versions. The keys are mod names, the values are the versions. */
"active_mods": Record<string, string>;
 
/** True by default. Can be used to disable autosaving. Make sure to turn it back on soon after. */
"autosave_enabled": boolean;
 
/** The players that are currently online.

This is primarily useful when you want to do some action against all online players. */
"connected_players": LuaPlayer;
 
/** The default map gen settings for this save. */
"default_map_gen_settings": MapGenSettings;
 
/** Current scenario difficulty. */
"difficulty": typeof defines.difficulty;
 
/** The currently active set of difficulty settings. Even though this property is marked as read-only, the members of the dictionary that is returned can be modified mid-game. This is however not recommended as different difficulties can have differing technology and recipe trees, which can cause problems for players. */
"difficulty_settings": DifficultySettings;
 
/** True by default. Can be used to disable the highlighting of resource patches when they are hovered on the map. */
"draw_resource_selection": boolean;
 
/** Determines if enemy land mines are completely invisible or not. */
"enemy_has_vision_on_land_mines": boolean;
 
/** True while the victory screen is shown. */
"finished": boolean;
 
/** True after players finished the game and clicked "continue". */
"finished_but_continuing": boolean;
 
/** The currently active set of map settings. Even though this property is marked as read-only, the members of the dictionary that is returned can be modified mid-game. */
"map_settings": MapSettings;
 "max_beacon_supply_area_distance": number;
 "max_electric_pole_connection_distance": number;
 "max_electric_pole_supply_area_distance": number;
 "max_force_distraction_chunk_distance": number;
 "max_force_distraction_distance": number;
 "max_gate_activation_distance": number;
 "max_inserter_reach_distance": number;
 "max_pipe_to_ground_distance": number;
 "max_underground_belt_distance": number;
 
/** This object's name. */
"object_name": string;
 "permissions": LuaPermissionGroups;
 
/** This property is only populated inside [custom command](LuaCommandProcessor) handlers and when writing [Lua console commands](https://wiki.factorio.com/Console#Scripting_and_cheat_commands). Returns the player that is typing the command, `nil` in all other instances.

See [LuaGameScript::players](LuaGameScript::players) for accessing all players. */
"player": (null | LuaPlayer);
 
/** The pollution statistics for this map. */
"pollution_statistics": LuaFlowStatistics;
 
/** Speed to update the map at. 1.0 is normal speed -- 60 UPS. */
"speed": number;
 
/** Current map tick. */
"tick": number;
 
/** If the tick has been paused. This means that entity update has been paused. */
"tick_paused": boolean;
 
/** The number of ticks since this game was 'created'. A game is 'created' either by using "new game" or "new game from scenario". */
"ticks_played": number;
 
/** The number of ticks to be run while the tick is paused. When [LuaGameScript::tick_paused](LuaGameScript::tick_paused) is true, ticks_to_run behaves the following way: While this is > 0, the entity update is running normally and this value is decremented every tick. When this reaches 0, the game will pause again. */
"ticks_to_run": number;
 }

/** An abstract base class for behaviors that support switching the entity on or off based on some condition. */
/** @noSelf **/
interface LuaGenericOnOffControlBehavior  extends LuaControlBehavior  { 
  
/** The circuit condition. Writing `nil` clears the circuit condition. */
"circuit_condition": CircuitConditionDefinition;
 
/** `true` if this should connect to the logistic network. */
"connect_to_logistic_network": boolean;
 
/** If the entity is currently disabled because of the control behavior. */
"disabled": boolean;
 
/** The logistic condition. Writing `nil` clears the logistic condition. */
"logistic_condition": CircuitConditionDefinition;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** Item group or subgroup. */
/** @noSelf **/
interface LuaGroup  { 
  
/** The parent group, if any. */
"group": (null | LuaGroup);
 
/** Localised name of the group. */
"localised_name": (null | LocalisedString);
 "name": (null | string);
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning. */
"order": string;
 
/** The additional order value used in recipe ordering. */
"order_in_recipe": string;
 
/** Subgroups of this group. */
"subgroups": LuaGroup;
 "type": (null | string);
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** The root of the GUI. This type houses the root elements, `top`, `left`, `center`, `goal`, and `screen`, to which other elements can be added to be displayed on screen. */
/** @noSelf **/
interface LuaGui  { 
  
/** The center part of the GUI. It is a flow element. */
"center": LuaGuiElement;
 
/** The children GUI elements mapped by name <> element. */
"children": Record<string, LuaGuiElement>;
 
/** The flow used in the objectives window. It is a flow element. The objectives window is only visible when the flow is not empty or the objective text is set. */
"goal": LuaGuiElement;
 
/** The left part of the GUI. It is a flow element inside a scroll pane element. */
"left": LuaGuiElement;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** The player who owns this gui. */
"player": LuaPlayer;
 
/** For showing a GUI somewhere relative to one of the game GUIs. It is an empty-widget element. */
"relative": LuaGuiElement;
 
/** For showing a GUI somewhere on the entire screen. It is an empty-widget element. */
"screen": LuaGuiElement;
 
/** The top part of the GUI. It is a flow element inside a scroll pane element. */
"top": LuaGuiElement;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** An element of a custom GUI. This type is used to represent any kind of a GUI element - labels, buttons and frames are all instances of this type. Just like [LuaEntity](LuaEntity), different kinds of elements support different attributes; attempting to access an attribute on an element that doesn't support it (for instance, trying to access the `column_count` of a `textfield`) will result in a runtime error.

The following types of GUI element are supported:

- `"button"`: A clickable element. Relevant event: [on_gui_click](on_gui_click)
- `"sprite-button"`: A `button` that displays a sprite rather than text. Relevant event: [on_gui_click](on_gui_click)
- `"checkbox"`: A clickable element with a check mark that can be turned off or on. Relevant event: [on_gui_checked_state_changed](on_gui_checked_state_changed)
- `"flow"`: An invisible container that lays out its children either horizontally or vertically.
- `"frame"`: A non-transparent box that contains other elements. It can have a title (set via the `caption` attribute). Just like a `flow`, it lays out its children either horizontally or vertically. Relevant event: [on_gui_location_changed](on_gui_location_changed)
- `"label"`: A piece of text.
- `"line"`: A horizontal or vertical separation line.
- `"progressbar"`: A partially filled bar that can be used to indicate progress.
- `"table"`: An invisible container that lays out its children in a specific number of columns. The width of each column is determined by the widest element it contains.
- `"textfield"`: A single-line box the user can type into. Relevant events: [on_gui_text_changed](on_gui_text_changed), [on_gui_confirmed](on_gui_confirmed)
- `"radiobutton"`: A clickable element that is functionally identical to a `checkbox`, but has a circular appearance. Relevant event: [on_gui_checked_state_changed](on_gui_checked_state_changed)
- `"sprite"`: An element that shows an image.
- `"scroll-pane"`: An invisible element that is similar to a `flow`, but has the ability to show and use scroll bars.
- `"drop-down"`: A drop-down containing strings of text. Relevant event: [on_gui_selection_state_changed](on_gui_selection_state_changed)
- `"list-box"`: A list of strings, only one of which can be selected at a time. Shows a scroll bar if necessary. Relevant event: [on_gui_selection_state_changed](on_gui_selection_state_changed)
- `"camera"`: A camera that shows the game at the given position on the given surface. It can visually track an [entity](LuaGuiElement::entity) that is set after the element has been created.
- `"choose-elem-button"`: A button that lets the player pick from a certain kind of prototype, with optional filtering. Relevant event: [on_gui_elem_changed](on_gui_elem_changed)
- `"text-box"`: A multi-line `textfield`. Relevant event: [on_gui_text_changed](on_gui_text_changed)
- `"slider"`: A horizontal number line which can be used to choose a number. Relevant event: [on_gui_value_changed](on_gui_value_changed)
- `"minimap"`: A minimap preview, similar to the normal player minimap. It can visually track an [entity](LuaGuiElement::entity) that is set after the element has been created.
- `"entity-preview"`: A preview of an entity. The [entity](LuaGuiElement::entity) has to be set after the element has been created.
- `"empty-widget"`: An empty element that just exists. The root GUI elements `screen` and `relative` are `empty-widget`s.
- `"tabbed-pane"`: A collection of `tab`s and their contents. Relevant event: [on_gui_selected_tab_changed](on_gui_selected_tab_changed)
- `"tab"`: A tab for use in a `tabbed-pane`.
- `"switch"`: A switch with three possible states. Can have labels attached to either side. Relevant event: [on_gui_switch_state_changed](on_gui_switch_state_changed)

Each GUI element allows access to its children by having them as attributes. Thus, one can use the `parent.child` syntax to refer to children. Lua also supports the `parent["child"]` syntax to refer to the same element. This can be used in cases where the child has a name that isn't a valid Lua identifier. */
/** @noSelf **/
interface LuaGuiElement  { 
  
/** Whether this textfield (when in numeric mode) allows decimal numbers. */
"allow_decimal": boolean;
 
/** Whether this textfield (when in numeric mode) allows negative numbers. */
"allow_negative": boolean;
 
/** Whether the `"none"` state is allowed for this switch. */
"allow_none_state": boolean;
 
/** The anchor for this relative widget, if any. Setting `nil` clears the anchor. */
"anchor": (null | GuiAnchor);
 
/** Whether this frame auto-centers on window resize when stored in [LuaGui::screen](LuaGui::screen). */
"auto_center": boolean;
 
/** The text to display after the normal tab text (designed to work with numbers) */
"badge_text": LocalisedString;
 
/** The text displayed on this element. For frames, this is the "heading". For other elements, like buttons or labels, this is the content. */
"caption": LocalisedString;
 
/** The child-elements of this GUI element. */
"children": LuaGuiElement;
 
/** Names of all the children of this element. These are the identifiers that can be used to access the child as an attribute of this element. */
"children_names": string;
 
/** Makes it so right-clicking on this textfield clears and focuses it. */
"clear_and_focus_on_right_click": boolean;
 
/** The image to display on this sprite-button when it is clicked. */
"clicked_sprite": SpritePath;
 
/** The number of columns in this table. */
"column_count": number;
 
/** Direction of this element's layout. May be either `"horizontal"` or `"vertical"`. */
"direction": string;
 
/** The `frame` that is being moved when dragging this GUI element, if any. This element needs to be a child of the `drag_target` at some level. */
"drag_target": (null | LuaGuiElement);
 
/** Whether this table should draw a horizontal grid line below the first table row. */
"draw_horizontal_line_after_headers": boolean;
 
/** Whether this table should draw horizontal grid lines. */
"draw_horizontal_lines": boolean;
 
/** Whether this table should draw vertical grid lines. */
"draw_vertical_lines": boolean;
 
/** The elem filters of this choose-elem-button, if any. The compatible type of filter is determined by `elem_type`. */
"elem_filters": (null | PrototypeFilter);
 
/** The elem type of this choose-elem-button. */
"elem_type": string;
 
/** The elem value of this choose-elem-button, if any. */
"elem_value": ((null | string) | (null | SignalID));
 
/** Whether this GUI element is enabled. Disabled GUI elements don't trigger events when clicked. */
"enabled": boolean;
 
/** The entity associated with this entity-preview, camera, minimap, if any. */
"entity": (null | LuaEntity);
 
/** The force this minimap is using, if any. */
"force": (null | string);
 
/** The GUI this element is a child of. */
"gui": LuaGui;
 
/** Policy of the horizontal scroll bar. Possible values are `"auto"`, `"never"`, `"always"`, `"auto-and-reserve-space"`, `"dont-show-but-allow-scrolling"`. */
"horizontal_scroll_policy": string;
 
/** The image to display on this sprite-button when it is hovered. */
"hovered_sprite": SpritePath;
 
/** Whether this GUI element is ignored by interaction. This makes clicks on this element 'go through' to the GUI element or even the game surface below it. */
"ignored_by_interaction": boolean;
 
/** The index of this GUI element (unique amongst the GUI elements of a LuaPlayer). */
"index": number;
 
/** Whether this textfield displays as a password field, which renders all characters as `*`. */
"is_password": boolean;
 
/** The items in this dropdown or listbox. */
"items": LocalisedString;
 
/** The text shown for the left switch label. */
"left_label_caption": LocalisedString;
 
/** The tooltip shown on the left switch label. */
"left_label_tooltip": LocalisedString;
 
/** The location of this widget when stored in [LuaGui::screen](LuaGui::screen). `nil` if not set or not in [LuaGui::screen](LuaGui::screen). */
"location": (null | GuiLocation);
 
/** Whether this choose-elem-button can be changed by the player. */
"locked": boolean;
 
/** Whether this textfield loses focus after [defines.events.on_gui_confirmed](defines.events.on_gui_confirmed) is fired. */
"lose_focus_on_confirm": boolean;
 
/** The player index this minimap is using. */
"minimap_player_index": number;
 
/** The mouse button filters for this button or sprite-button. */
"mouse_button_filter": MouseButtonFlags;
 
/** The name of this element. `""` if no name was set. */
"name": string;
 
/** The number to be shown in the bottom right corner of this sprite-button. Set this to `nil` to show nothing. */
"number": number;
 
/** Whether this textfield is limited to only numberic characters. */
"numeric": boolean;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** The direct parent of this element. `nil` if this is a top-level element. */
"parent": (null | LuaGuiElement);
 
/** Index into [LuaGameScript::players](LuaGameScript::players) specifying the player who owns this element. */
"player_index": number;
 
/** The position this camera or minimap is focused on, if any. */
"position": MapPosition;
 
/** Whether this text-box is read-only. Defaults to `false`. */
"read_only": boolean;
 
/** Whether the image widget should resize according to the sprite in it. Defaults to `true`. */
"resize_to_sprite": boolean;
 
/** The text shown for the right switch label. */
"right_label_caption": LocalisedString;
 
/** The tooltip shown on the right switch label. */
"right_label_tooltip": LocalisedString;
 
/** Whether the contents of this text-box are selectable. Defaults to `true`. */
"selectable": boolean;
 
/** The selected index for this dropdown or listbox. Returns `0` if none is selected. */
"selected_index": number;
 
/** The selected tab index for this tabbed pane, if any. */
"selected_tab_index": (null | number);
 
/** Related to the number to be shown in the bottom right corner of this sprite-button. When set to `true`, numbers that are non-zero and smaller than one are shown as a percentage rather than the value. For example, `0.5` will be shown as `50%` instead. */
"show_percent_for_small_numbers": boolean;
 
/** The value of this slider element. */
"slider_value": number;
 
/** The image to display on this sprite-button or sprite in the default state. */
"sprite": SpritePath;
 
/** Is this checkbox or radiobutton checked? */
"state": boolean;
 
/** The style of this element. When read, this evaluates to a [LuaStyle](LuaStyle). For writing, it only accepts a string that specifies the textual identifier (prototype name) of the desired style. */
"style": (LuaStyle | string);
 
/** The surface index this camera or minimap is using. */
"surface_index": number;
 
/** The switch state (left, none, right) for this switch. */
"switch_state": string;
 
/** The tabs and contents being shown in this tabbed-pane. */
"tabs": any;
 
/** The tags associated with this LuaGuiElement. */
"tags": Tags;
 
/** The text contained in this textfield or text-box. */
"text": string;
 "tooltip": LocalisedString;
 
/** The type of this GUI element. */
"type": string;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 
/** How much this progress bar is filled. It is a value in the range [0, 1]. */
"value": number;
 
/** Whether the content of this table should be vertically centered. Overrides [LuaStyle::column_alignments](LuaStyle::column_alignments). Defaults to `true`. */
"vertical_centering": boolean;
 
/** Policy of the vertical scroll bar. Possible values are `"auto"`, `"never"`, `"always"`, `"auto-and-reserve-space"`, `"dont-show-but-allow-scrolling"`. */
"vertical_scroll_policy": string;
 
/** Sets whether this GUI element is visible or completely hidden, taking no space in the layout. */
"visible": boolean;
 
/** Whether this text-box will word-wrap automatically. Defaults to `false`. */
"word_wrap": boolean;
 
/** The zoom this camera or minimap is using. This value must be positive. */
"zoom": number;
 }

/** Prototype of a heat buffer. */
/** @noSelf **/
interface LuaHeatBufferPrototype  { 
  "connections": HeatConnection;
 "default_temperature": number;
 "max_temperature": number;
 "max_transfer": number;
 "min_temperature_gradient": number;
 "min_working_temperature": number;
 "minimum_glow_temperature": number;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 "specific_heat": number;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** Prototype of a heat energy source. */
/** @noSelf **/
interface LuaHeatEnergySourcePrototype  { 
  "connections": HeatConnection;
 "default_temperature": number;
 "emissions": number;
 "heat_buffer_prototype": LuaHeatBufferPrototype;
 "max_temperature": number;
 "max_transfer": number;
 "min_temperature_gradient": number;
 "min_working_temperature": number;
 "minimum_glow_temperature": number;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 "render_no_network_icon": boolean;
 "render_no_power_icon": boolean;
 "specific_heat": number;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** Control behavior for inserters. */
/** @noSelf **/
interface LuaInserterControlBehavior  extends LuaGenericOnOffControlBehavior  { 
  
/** The hand read mode for the inserter. */
"circuit_hand_read_mode": typeof defines.control_behavior.inserter.hand_read_mode;
 
/** The circuit mode of operations for the inserter. */
"circuit_mode_of_operation": typeof defines.control_behavior.inserter.circuit_mode_of_operation;
 
/** `true` if the contents of the inserter hand should be sent to the circuit network */
"circuit_read_hand_contents": boolean;
 
/** If the stack size of the inserter is set through the circuit network or not. */
"circuit_set_stack_size": boolean;
 
/** The signal used to set the stack size of the inserter. */
"circuit_stack_control_signal": SignalID;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** A storage of item stacks. */
/** @noSelf **/
interface LuaInventory  { 
  
/** The entity that owns this inventory, if any. */
"entity_owner": (null | LuaEntity);
 
/** The equipment that owns this inventory, if any. */
"equipment_owner": (null | LuaEquipment);
 
/** The inventory index this inventory uses, if any. */
"index": (null | typeof defines.inventory);
 
/** The mod that owns this inventory, if any. */
"mod_owner": (null | string);
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** The player that owns this inventory, if any. */
"player_owner": (null | LuaPlayer);
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** Prototype of an item. */
/** @noSelf **/
interface LuaItemPrototype  { 
  
/** The alt entity filter mode used by this selection tool. */
"alt_entity_filter_mode": (null | string);
 
/** The alt entity filters used by this selection tool indexed by entity name. */
"alt_entity_filters": Record<(null | string), (null | LuaEntityPrototype)>;
 
/** The alt entity type filters used by this selection tool indexed by entity type. */
"alt_entity_type_filters": Record<(null | string), (null | boolean)>;
 
/** The color used when doing alt selection with this selection tool prototype. */
"alt_selection_border_color": (null | Color);
 "alt_selection_cursor_box_type": (null | string);
 
/** Flags that affect which entities will be selected during alternate selection. */
"alt_selection_mode_flags": (null | SelectionModeFlags);
 
/** The alt tile filter mode used by this selection tool. */
"alt_tile_filter_mode": (null | string);
 
/** The alt tile filters used by this selection tool indexed by tile name. */
"alt_tile_filters": Record<(null | string), (null | LuaTilePrototype)>;
 
/** If tiles area always included when doing selection with this selection tool prototype. */
"always_include_tiles": (null | boolean);
 
/** The gun attack parameters. */
"attack_parameters": (null | AttackParameters);
 
/** The result of burning this item as fuel, if any. */
"burnt_result": (null | LuaItemPrototype);
 
/** If this item can be mod-opened. */
"can_be_mod_opened": boolean;
 
/** The capsule action for this capsule item prototype. */
"capsule_action": (null | CapsuleAction);
 
/** The name of a [LuaModuleCategoryPrototype](LuaModuleCategoryPrototype). Used when upgrading modules: Ctrl + click modules into an entity and it will replace lower tier modules of the same category with higher tier modules. */
"category": (null | string);
 
/** The curved rail prototype used for this rail planner prototype. */
"curved_rail": (null | LuaEntityPrototype);
 
/** The default label color used for this item with label, if any. */
"default_label_color": (null | Color);
 
/** The default request value. */
"default_request_amount": number;
 
/** If true, and this item with label has a label it is drawn in place of the normal number when held in the cursor. */
"draw_label_for_cursor_render": (null | boolean);
 
/** The durability of this tool item. */
"durability": (null | number);
 
/** The durability message key used when displaying the durability of this tool. */
"durability_description_key": (null | string);
 
/** The entity filter mode used by this selection tool. */
"entity_filter_mode": (null | string);
 
/** The number of entity filters this deconstruction item has. */
"entity_filter_slots": (null | number);
 
/** The entity filters used by this selection tool indexed by entity name. */
"entity_filters": Record<(null | string), (null | LuaEntityPrototype)>;
 
/** The entity type filters used by this selection tool indexed by entity type. */
"entity_type_filters": Record<(null | string), (null | boolean)>;
 
/** The prototype of this armor equipment grid, if any. */
"equipment_grid": (null | LuaEquipmentGridPrototype);
 
/** If this item with inventory extends the inventory it resides in by default. */
"extend_inventory_by_default": (null | boolean);
 
/** The filter mode used by this item with inventory. */
"filter_mode": (null | string);
 
/** The flags for this item prototype. */
"flags": ItemPrototypeFlags;
 
/** The acceleration multiplier when this item is used as fuel in a vehicle. */
"fuel_acceleration_multiplier": number;
 
/** The fuel category of this item prototype, if any. */
"fuel_category": (null | string);
 
/** The emissions multiplier if this is used as fuel. */
"fuel_emissions_multiplier": number;
 
/** The fuel top speed multiplier when this item is used as fuel in a vehicle. */
"fuel_top_speed_multiplier": number;
 
/** Fuel value when burned. */
"fuel_value": number;
 
/** The group this prototype belongs to. */
"group": LuaGroup;
 
/** If this tool item has infinite durability. */
"infinite": (null | boolean);
 
/** The insertion priority mode used by this item with inventory. */
"insertion_priority_mode": (null | string);
 
/** The main inventory size for item-with-inventory-prototype. */
"inventory_size": (null | number);
 
/** The inventory size bonus for this armor prototype. */
"inventory_size_bonus": (null | number);
 "item_filters": Record<(null | string), (null | LuaItemPrototype)>;
 "item_group_filters": Record<(null | string), (null | LuaGroup)>;
 "item_subgroup_filters": Record<(null | string), (null | LuaGroup)>;
 
/** The limitation message key used when the player attempts to use this modules in some place it's not allowed. */
"limitation_message_key": (null | string);
 
/** An array of recipe names this module is allowed to work with. Empty when all recipes are allowed. */
"limitations": (null | string);
 "localised_description": LocalisedString;
 
/** The localised string used when the player attempts to put items into this item with inventory that aren't allowed. */
"localised_filter_message": (null | LocalisedString);
 "localised_name": LocalisedString;
 
/** Size of full magazine. */
"magazine_size": (null | number);
 
/** How many filters an upgrade item has. */
"mapper_count": (null | number);
 
/** Effects of this module. */
"module_effects": (null | ModuleEffects);
 
/** Name of this prototype. */
"name": string;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning. */
"order": string;
 
/** Prototype of the equipment that will be created by placing this item in an equipment grid, if any. */
"place_as_equipment_result": (null | LuaEquipmentPrototype);
 
/** The place-as-tile result if one is defined, if any. */
"place_as_tile_result": (null | PlaceAsTileResult);
 
/** Prototype of the entity that will be created by placing this item, if any. */
"place_result": (null | LuaEntityPrototype);
 
/** Amount of extra time (in ticks) it takes to reload the weapon after depleting the magazine. */
"reload_time": (null | number);
 
/** The repair result of this repair tool prototype. */
"repair_result": (null | TriggerItem);
 
/** Resistances of this armor item, if any, indexed by damage type name. */
"resistances": Record<(null | string), (null | Resistance)>;
 
/** The reverse entity filter mode used by this selection tool. */
"reverse_alt_entity_filter_mode": (null | string);
 
/** The reverse entity filters used by this selection tool indexed by entity name. */
"reverse_entity_filters": Record<(null | string), (null | LuaEntityPrototype)>;
 
/** The reverse entity type filters used by this selection tool indexed by entity type. */
"reverse_entity_type_filters": Record<(null | string), (null | boolean)>;
 
/** The color used when doing reverse selection with this selection tool prototype. */
"reverse_selection_border_color": (null | Color);
 "reverse_selection_cursor_box_type": (null | string);
 
/** Flags that affect which entities will be selected during reverse selection. */
"reverse_selection_mode_flags": (null | SelectionModeFlags);
 
/** The reverse tile filter mode used by this selection tool. */
"reverse_tile_filter_mode": (null | string);
 
/** The reverse tile filters used by this selection tool indexed by tile name. */
"reverse_tile_filters": Record<(null | string), (null | LuaTilePrototype)>;
 
/** The results of launching this item in a rocket. */
"rocket_launch_products": Product;
 
/** The color used when doing normal selection with this selection tool prototype. */
"selection_border_color": (null | Color);
 "selection_cursor_box_type": (null | string);
 
/** Flags that affect which entities will be selected. */
"selection_mode_flags": (null | SelectionModeFlags);
 
/** The repairing speed if this is a repairing tool. */
"speed": (null | number);
 
/** Maximum stack size of the item specified by this prototype. */
"stack_size": number;
 
/** Is this item allowed to stack at all? */
"stackable": boolean;
 
/** The straight rail prototype used for this rail planner prototype. */
"straight_rail": (null | LuaEntityPrototype);
 
/** The subgroup this prototype belongs to. */
"subgroup": LuaGroup;
 
/** Tier of the module inside its category. Used when upgrading modules: Ctrl + click modules into an entity and it will replace lower tier modules with higher tier modules if they have the same category. */
"tier": (null | number);
 
/** The tile filter mode used by this selection tool. */
"tile_filter_mode": (null | string);
 
/** The number of tile filters this deconstruction item has. */
"tile_filter_slots": (null | number);
 
/** The tile filters used by this selection tool indexed by tile name. */
"tile_filters": Record<(null | string), (null | LuaTilePrototype)>;
 
/** Type of this prototype. E.g. `"gun"` or `"mining-tool"`. */
"type": string;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 
/** The number of items needed to connect two entities with this as wire. */
"wire_count": number;
 }

/** A reference to an item and count owned by some external entity. */
/** @noSelf **/
interface LuaItemStack  { 
  
/** The active blueprint index for this blueprint book. `nil` if this blueprint book is empty. */
"active_index": (null | number);
 
/** Whether the label for this item can be manually changed. When false the label can only be changed through the API. */
"allow_manual_label_change": boolean;
 
/** Number of bullets left in the magazine. */
"ammo": number;
 
/** If absolute snapping is enabled on this blueprint item. */
"blueprint_absolute_snapping": boolean;
 
/** Icons of this blueprint item, blueprint book, deconstruction item or upgrade planner. An item that doesn't have icons returns `nil` on read and throws error on write. */
"blueprint_icons": (null | BlueprintSignalIcon);
 
/** The offset from the absolute grid. `nil` if absolute snapping is not enabled. */
"blueprint_position_relative_to_grid": (null | TilePosition);
 
/** The snapping grid size in this blueprint item. `nil` if snapping is not enabled. */
"blueprint_snap_to_grid": (null | TilePosition);
 
/** If this item is a spidertron remote that has a spidertron bound to it, it returns the connected spider-vehicle entity. */
"connected_entity": (null | LuaEntity);
 
/** Raw materials required to build this blueprint. Result is a dictionary mapping each item prototype name to the required count. */
"cost_to_build": Record<string, number>;
 
/** Number of items in this stack. */
"count": number;
 
/** The custom description this item-with-tags. This is shown over the normal item description if this is set to a non-empty value. */
"custom_description": LocalisedString;
 
/** The default icons for a blueprint item. */
"default_icons": BlueprintItemIcon;
 
/** Durability of the contained item. Automatically capped at the item's maximum durability. */
"durability": (null | number);
 
/** The number of entity filters this deconstruction item supports. */
"entity_filter_count": number;
 
/** The blacklist/whitelist entity filter mode for this deconstruction item. */
"entity_filter_mode": typeof defines.deconstruction_item.entity_filter_mode;
 
/** The entity filters for this deconstruction item. The attribute is a sparse array with the keys representing the index of the filter. All strings in this array must be entity prototype names that don't have the `"not-deconstructable"` flag set and are either a `cliff` or marked as `minable`. */
"entity_filters": string;
 
/** If this item extends the inventory it resides in (provides its contents for counts, crafting, insertion). Only callable on items with inventories. */
"extends_inventory": boolean;
 
/** The equipment grid of this item, if any. */
"grid": (null | LuaEquipmentGrid);
 
/** How much health the item has, as a number in range [0, 1]. */
"health": number;
 
/** If this is an armor item. */
"is_armor": boolean;
 
/** If this is a blueprint item. */
"is_blueprint": boolean;
 
/** If this is a blueprint book item. */
"is_blueprint_book": boolean;
 
/** If this is a deconstruction tool item. */
"is_deconstruction_item": boolean;
 
/** If this is an item with entity data item. */
"is_item_with_entity_data": boolean;
 
/** If this is an item with inventory item. */
"is_item_with_inventory": boolean;
 
/** If this is an item with label item. */
"is_item_with_label": boolean;
 
/** If this is an item with tags item. */
"is_item_with_tags": boolean;
 
/** If this is a mining tool item. */
"is_mining_tool": boolean;
 
/** If this is a module item. */
"is_module": boolean;
 
/** If this is a repair tool item. */
"is_repair_tool": boolean;
 
/** If this is a selection tool item. */
"is_selection_tool": boolean;
 
/** If this is a tool item. */
"is_tool": boolean;
 
/** If this is a upgrade item. */
"is_upgrade_item": boolean;
 
/** The unique identifier for this item , if any. Note that this ID stays the same no matter where the item is moved to.

Only these types of items have unique IDs:
- `"armor"`
- `"spidertron-remote"`
- `"selection-tool"`
- `"copy-paste-tool"`
- `"upgrade-item"`
- `"deconstruction-item"`
- `"blueprint"`
- `"blueprint-book"`
- `"item-with-entity-data"`
- `"item-with-inventory"`
- `"item-with-tags"` */
"item_number": (null | number);
 
/** The current label for this item, if any. */
"label": (null | string);
 
/** The current label color for this item, if any. */
"label_color": (null | Color);
 
/** Prototype name of the item held in this stack. */
"name": string;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** The insertion mode priority this ItemWithInventory uses when items are inserted into an inventory it resides in. Only callable on items with inventories. */
"prioritize_insertion_mode": string;
 
/** Prototype of the item held in this stack. */
"prototype": LuaItemPrototype;
 "tags": Tags;
 
/** The number of tile filters this deconstruction item supports. */
"tile_filter_count": number;
 
/** The blacklist/whitelist tile filter mode for this deconstruction item. */
"tile_filter_mode": typeof defines.deconstruction_item.tile_filter_mode;
 
/** The tile filters for this deconstruction item. The attribute is a sparse array with the keys representing the index of the filter. All strings in this array must be tile prototype names. */
"tile_filters": string;
 
/** The tile selection mode for this deconstruction item. */
"tile_selection_mode": typeof defines.deconstruction_item.tile_selection_mode;
 
/** If this deconstruction item is set to allow trees and rocks only. */
"trees_and_rocks_only": boolean;
 
/** Type of the item prototype. */
"type": string;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 
/** Is this valid for reading? Differs from the usual `valid` in that `valid` will be `true` even if the item stack is blank but the entity that holds it is still valid. */
"valid_for_read": boolean;
 }

/** Control behavior for lamps. */
/** @noSelf **/
interface LuaLampControlBehavior  extends LuaGenericOnOffControlBehavior  { 
  
/** The color the lamp is showing, if any. */
"color": (null | Color);
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** `true` if the lamp should set the color from the circuit network signals. */
"use_colors": boolean;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** A lazily loaded value. For performance reasons, we sometimes return a custom lazily-loaded value type instead of the native Lua value. This custom type lazily constructs the necessary value when [LuaLazyLoadedValue::get](LuaLazyLoadedValue::get) is called, therefore preventing its unnecessary construction in some cases.

An instance of LuaLazyLoadedValue is only valid during the event it was created from and cannot be saved. */
/** @noSelf **/
interface LuaLazyLoadedValue  { 
  
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** Logistic cell of a particular [LuaEntity](LuaEntity). A "Logistic Cell" is the given name for settings and properties used by what would normally be seen as a "Roboport". A logistic cell however doesn't have to be attached to the roboport entity (the character has one for the personal roboport). */
/** @noSelf **/
interface LuaLogisticCell  { 
  
/** Radius at which the robots hover when waiting to be charged. */
"charge_approach_distance": number;
 
/** Number of robots currently charging. */
"charging_robot_count": number;
 
/** Robots currently being charged. */
"charging_robots": LuaEntity;
 
/** Construction radius of this cell. */
"construction_radius": number;
 
/** The network that owns this cell, if any. */
"logistic_network": (null | LuaLogisticNetwork);
 
/** Logistic radius of this cell. */
"logistic_radius": number;
 
/** Logistic connection distance of this cell. */
"logistics_connection_distance": number;
 
/** `true` if this is a mobile cell. In vanilla, only the logistic cell created by a character's personal roboport is mobile. */
"mobile": boolean;
 
/** Neighbouring cells. */
"neighbours": LuaLogisticCell;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** This cell's owner. */
"owner": LuaEntity;
 
/** Number of stationed construction robots in this cell. */
"stationed_construction_robot_count": number;
 
/** Number of stationed logistic robots in this cell. */
"stationed_logistic_robot_count": number;
 
/** Number of robots waiting to charge. */
"to_charge_robot_count": number;
 
/** Robots waiting to charge. */
"to_charge_robots": LuaEntity;
 
/** `true` if this cell is active. */
"transmitting": boolean;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** Control behavior for logistic chests. */
/** @noSelf **/
interface LuaLogisticContainerControlBehavior  extends LuaControlBehavior  { 
  
/** The circuit mode of operations for the logistic container. */
"circuit_mode_of_operation": typeof defines.control_behavior.logistic_container.circuit_mode_of_operation;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** A single logistic network of a given force on a given surface. */
/** @noSelf **/
interface LuaLogisticNetwork  { 
  
/** All active provider points in this network. */
"active_provider_points": LuaLogisticPoint;
 
/** The total number of construction robots in the network (idle and active + in roboports). */
"all_construction_robots": number;
 
/** The total number of logistic robots in the network (idle and active + in roboports). */
"all_logistic_robots": number;
 
/** Number of construction robots available for a job. */
"available_construction_robots": number;
 
/** Number of logistic robots available for a job. */
"available_logistic_robots": number;
 
/** All cells in this network. */
"cells": LuaLogisticCell;
 
/** All construction robots in this logistic network. */
"construction_robots": LuaEntity;
 
/** All things that have empty provider points in this network. */
"empty_provider_points": LuaLogisticPoint;
 
/** All entities that have empty logistic provider points in this network. */
"empty_providers": LuaEntity;
 
/** The force this logistic network belongs to. */
"force": LuaForce;
 
/** All other entities that have logistic points in this network (inserters mostly). */
"logistic_members": LuaEntity;
 
/** All logistic robots in this logistic network. */
"logistic_robots": LuaEntity;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** All passive provider points in this network. */
"passive_provider_points": LuaLogisticPoint;
 
/** All things that have provider points in this network. */
"provider_points": LuaLogisticPoint;
 
/** All entities that have logistic provider points in this network. */
"providers": LuaEntity;
 
/** All things that have requester points in this network. */
"requester_points": LuaLogisticPoint;
 
/** All entities that have logistic requester points in this network. */
"requesters": LuaEntity;
 
/** Maximum number of robots the network can work with. Currently only used for the personal roboport. */
"robot_limit": number;
 
/** All robots in this logistic network. */
"robots": LuaEntity;
 
/** All things that have storage points in this network. */
"storage_points": LuaLogisticPoint;
 
/** All entities that have logistic storage points in this network. */
"storages": LuaEntity;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** Logistic point of a particular [LuaEntity](LuaEntity). A "Logistic point" is the name given for settings and properties used by requester, provider, and storage points in a given logistic network. These "points" don't have to be a logistic container but often are. One other entity that can own several points is the "character" character type entity. */
/** @noSelf **/
interface LuaLogisticPoint  { 
  
/** If this logistic point is using the exact mode. In exact mode robots never over-deliver requests. */
"exact": boolean;
 
/** The logistic filters for this logistic point, if this uses any. */
"filters": (null | LogisticFilter);
 
/** The force of this logistic point. */
"force": LuaForce;
 
/** The Logistic member index of this logistic point. */
"logistic_member_index": number;
 "logistic_network": LuaLogisticNetwork;
 
/** The logistic mode. */
"mode": typeof defines.logistic_mode;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** The [LuaEntity](LuaEntity) owner of this [LuaLogisticPoint](LuaLogisticPoint). */
"owner": LuaEntity;
 
/** Items targeted to be dropped off into this logistic point by robots. The attribute is a dictionary mapping the item prototype names to their item counts. */
"targeted_items_deliver": Record<string, number>;
 
/** Items targeted to be picked up from this logistic point by robots. The attribute is a dictionary mapping the item prototype names to their item counts. */
"targeted_items_pickup": Record<string, number>;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** Control behavior for mining drills. */
/** @noSelf **/
interface LuaMiningDrillControlBehavior  extends LuaGenericOnOffControlBehavior  { 
  
/** `true` if this drill is enabled or disabled using the logistics or circuit condition. */
"circuit_enable_disable": boolean;
 
/** `true` if this drill should send the resources in the field to the circuit network. Which resources depends on [LuaMiningDrillControlBehavior::resource_read_mode](LuaMiningDrillControlBehavior::resource_read_mode) */
"circuit_read_resources": boolean;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** If the mining drill should send just the resources in its area or the entire field it's on to the circuit network. */
"resource_read_mode": typeof defines.control_behavior.mining_drill.resource_read_mode;
 
/** The resource entities that the mining drill will send information about to the circuit network or an empty array. */
"resource_read_targets": LuaEntity;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** Prototype of a mod setting. */
/** @noSelf **/
interface LuaModSettingPrototype  { 
  
/** Whether this string setting allows blank values. `nil` if not a string setting. */
"allow_blank": (null | boolean);
 
/** The allowed values for this setting. `nil` if this setting doesn't use the a fixed set of values. */
"allowed_values": ((null | string) | (null | number) | (null | number));
 
/** Whether this string setting auto-trims values. `nil` if not a string setting */
"auto_trim": (null | boolean);
 
/** The default value of this setting. */
"default_value": (boolean | number | number | string);
 
/** Whether this setting is hidden from the GUI. */
"hidden": boolean;
 "localised_description": LocalisedString;
 "localised_name": LocalisedString;
 
/** The maximum value for this setting. `nil` if this setting type doesn't support a maximum. */
"maximum_value": ((null | number) | (null | number));
 
/** The minimum value for this setting. `nil` if this setting type doesn't support a minimum. */
"minimum_value": ((null | number) | (null | number));
 
/** The mod that owns this setting. */
"mod": string;
 
/** Name of this prototype. */
"name": string;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning. */
"order": string;
 "setting_type": string;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** Prototype of a module category. */
/** @noSelf **/
interface LuaModuleCategoryPrototype  { 
  "localised_description": LocalisedString;
 "localised_name": LocalisedString;
 
/** Name of this prototype. */
"name": string;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning. */
"order": string;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** Prototype of a named noise expression. */
/** @noSelf **/
interface LuaNamedNoiseExpression  { 
  
/** The expression itself. */
"expression": NoiseExpression;
 
/** Name of the property that this expression is intended to provide a value for, if any. */
"intended_property": string;
 "localised_description": LocalisedString;
 "localised_name": LocalisedString;
 
/** Name of this prototype. */
"name": string;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning. */
"order": string;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** Prototype of a noise layer. */
/** @noSelf **/
interface LuaNoiseLayerPrototype  { 
  "localised_description": LocalisedString;
 "localised_name": LocalisedString;
 
/** Name of this prototype. */
"name": string;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning. */
"order": string;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** Prototype of an optimized particle. */
/** @noSelf **/
interface LuaParticlePrototype  { 
  "ended_in_water_trigger_effect": TriggerEffectItem;
 "life_time": number;
 "localised_description": LocalisedString;
 "localised_name": LocalisedString;
 "mining_particle_frame_speed": number;
 "movement_modifier": number;
 "movement_modifier_when_on_ground": number;
 
/** Name of this prototype. */
"name": string;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning. */
"order": string;
 "regular_trigger_effect": TriggerEffectItem;
 "regular_trigger_effect_frequency": number;
 "render_layer": RenderLayer;
 "render_layer_when_on_ground": RenderLayer;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** A permission group that defines what players in this group are allowed to do. */
/** @noSelf **/
interface LuaPermissionGroup  { 
  
/** The group ID */
"group_id": number;
 
/** The name of this group. */
"name": string;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** The players in this group. */
"players": LuaPlayer;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** All permission groups. */
/** @noSelf **/
interface LuaPermissionGroups  { 
  
/** All of the permission groups. */
"groups": LuaPermissionGroup;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** A player in the game. Pay attention that a player may or may not have a character, which is the [LuaEntity](LuaEntity) of the little guy running around the world doing things. */
/** @noSelf **/
interface LuaPlayer  extends LuaControl  { 
  
/** `true` if the player is an admin. */
"admin": boolean;
 
/** How many ticks since the last action of this player */
"afk_time": number;
 
/** If the main inventory will be auto sorted. */
"auto_sort_main_inventory": boolean;
 
/** The item stack containing a blueprint to be setup. */
"blueprint_to_setup": LuaItemStack;
 
/** The character attached to this player, if any. Returns `nil` when the player is disconnected (see [LuaPlayer::connected](LuaPlayer::connected)). */
"character": (null | LuaEntity);
 
/** The color used when this player talks in game. */
"chat_color": Color;
 
/** The color associated with the player. This will be used to tint the player's character as well as their buildings and vehicles. */
"color": Color;
 
/** `true` if the player is currently connected to the game. */
"connected": boolean;
 "controller_type": typeof defines.controllers;
 
/** When in a cutscene; the character this player would be using once the cutscene is over, if any. Returns `nil` when the player is disconnected (see [LuaPlayer::connected](LuaPlayer::connected)). */
"cutscene_character": (null | LuaEntity);
 
/** The display resolution for this player. */
"display_resolution": DisplayResolution;
 
/** The display scale for this player. */
"display_scale": number;
 
/** The source entity used during entity settings copy-paste, if any. */
"entity_copy_source": (null | LuaEntity);
 
/** The player's game view settings. */
"game_view_settings": GameViewSettings;
 "gui": LuaGui;
 
/** The original location of the item in the cursor, marked with a hand. `nil` if the cursor stack is empty. When writing, the specified inventory slot must be empty and the cursor stack must not be empty. */
"hand_location": (null | ItemStackLocation);
 
/** This player's unique index in [LuaGameScript::players](LuaGameScript::players). It is given to them when they are [created](on_player_created) and remains assigned to them until they are [removed](on_player_removed). */
"index": number;
 
/** The filters for this map editor infinity inventory settings. */
"infinity_inventory_filters": InfinityInventoryFilter;
 
/** At what tick this player was last online. */
"last_online": number;
 
/** The player's map view settings. To write to this, use a table containing the fields that should be changed. */
"map_view_settings": MapViewSettings;
 
/** `true` if the minimap is visible. */
"minimap_enabled": boolean;
 
/** The player's username. */
"name": string;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** How many ticks did this player spend playing this save (all sessions combined) */
"online_time": number;
 
/** `true` if the player opened itself. I.e. if they opened the character or god-controller GUI. */
"opened_self": boolean;
 
/** The permission group this player is part of, if any. */
"permission_group": (null | LuaPermissionGroup);
 
/** If items not included in this map editor infinity inventory filters should be removed. */
"remove_unfiltered_items": boolean;
 
/** The render mode of the player, like map or zoom to world. The render mode can be set using [LuaPlayer::open_map](LuaPlayer::open_map), [LuaPlayer::zoom_to_world](LuaPlayer::zoom_to_world) and [LuaPlayer::close_map](LuaPlayer::close_map). */
"render_mode": typeof defines.render_mode;
 
/** If `true`, circle and name of given player is rendered on the map/chart. */
"show_on_map": boolean;
 
/** If `true`, zoom-to-world noise effect will be disabled and environmental sounds will be based on zoom-to-world view instead of position of player's character. */
"spectator": boolean;
 
/** The stashed controller type, if any. */
"stashed_controller_type": (null | typeof defines.controllers);
 
/** The tag that is shown after the player in chat and on the map. */
"tag": string;
 
/** The number of ticks until this player will respawn. `nil` if this player is not waiting to respawn.

Set to `nil` to immediately respawn the player. */
"ticks_to_respawn": (null | number);
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 
/** The player's zoom-level. */
"zoom": number;
 }

/** An object used to measure script performance. */
/** @noSelf **/
interface LuaProfiler  { 
  
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** Control behavior for programmable speakers. */
/** @noSelf **/
interface LuaProgrammableSpeakerControlBehavior  extends LuaControlBehavior  { 
  "circuit_condition": CircuitConditionDefinition;
 "circuit_parameters": ProgrammableSpeakerCircuitParameters;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** An interface to send messages to the calling RCON interface. */
/** @noSelf **/
interface LuaRCON  { 
  
/** This object's name. */
"object_name": string;
 }

/** Control behavior for rail chain signals. */
/** @noSelf **/
interface LuaRailChainSignalControlBehavior  extends LuaControlBehavior  { 
  "blue_signal": SignalID;
 "green_signal": SignalID;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 "orange_signal": SignalID;
 "red_signal": SignalID;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** A rail path. */
/** @noSelf **/
interface LuaRailPath  { 
  
/** The current rail index. */
"current": number;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** The total number of rails in this path. */
"size": number;
 
/** The total path distance. */
"total_distance": number;
 
/** The total distance travelled. */
"travelled_distance": number;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** Control behavior for rail signals. */
/** @noSelf **/
interface LuaRailSignalControlBehavior  extends LuaControlBehavior  { 
  
/** The circuit condition when controlling the signal through the circuit network. */
"circuit_condition": CircuitConditionDefinition;
 
/** If this will close the rail signal based off the circuit condition. */
"close_signal": boolean;
 "green_signal": SignalID;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 "orange_signal": SignalID;
 
/** If this will read the rail signal state. */
"read_signal": boolean;
 "red_signal": SignalID;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** A deterministic random generator independent from the core games random generator that can be seeded and re-seeded at will. This random generator can be saved and loaded and will maintain its state. Note this is entirely different from calling [math.random](Libraries.html#math.random)() and you should be sure you actually want to use this over calling `math.random()`. If you aren't sure if you need to use this over calling `math.random()` then you probably don't need to use this. */
/** @noSelf **/
interface LuaRandomGenerator  { 
  
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** A crafting recipe. Recipes belong to forces (see [LuaForce](LuaForce)) because some recipes are unlocked by research, and researches are per-force. */
/** @noSelf **/
interface LuaRecipe  { 
  
/** Category of the recipe. */
"category": string;
 
/** Can the recipe be used? */
"enabled": boolean;
 
/** Energy required to execute this recipe. This directly affects the crafting time: Recipe's energy is exactly its crafting time in seconds, when crafted in an assembling machine with crafting speed exactly equal to one. */
"energy": number;
 
/** The force that owns this recipe. */
"force": LuaForce;
 
/** Group of this recipe. */
"group": LuaGroup;
 
/** Is the recipe hidden? Hidden recipe don't show up in the crafting menu. */
"hidden": boolean;
 
/** Is the recipe hidden from flow statistics? */
"hidden_from_flow_stats": boolean;
 
/** Ingredients for this recipe. */
"ingredients": Ingredient;
 "localised_description": LocalisedString;
 
/** Localised name of the recipe. */
"localised_name": LocalisedString;
 
/** Name of the recipe. This can be different than the name of the result items as there could be more recipes to make the same item. */
"name": string;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning. */
"order": string;
 
/** The results of this recipe. */
"products": Product;
 
/** The prototype for this recipe. */
"prototype": LuaRecipePrototype;
 
/** Subgroup of this recipe. */
"subgroup": LuaGroup;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** Prototype of a recipe category. */
/** @noSelf **/
interface LuaRecipeCategoryPrototype  { 
  "localised_description": LocalisedString;
 "localised_name": LocalisedString;
 
/** Name of this prototype. */
"name": string;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning. */
"order": string;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** A crafting recipe prototype. */
/** @noSelf **/
interface LuaRecipePrototype  { 
  
/** If this recipe is enabled for the purpose of intermediate hand-crafting. */
"allow_as_intermediate": boolean;
 
/** Is this recipe allowed to be broken down for the recipe tooltip "Total raw" calculations? */
"allow_decomposition": boolean;
 
/** If the recipe is allowed to have the extra inserter overload bonus applied (4 * stack inserter stack size). */
"allow_inserter_overload": boolean;
 
/** If this recipe is allowed to use intermediate recipes when hand-crafting. */
"allow_intermediates": boolean;
 
/** Should this recipe always show "Made in" in the tooltip? */
"always_show_made_in": boolean;
 
/** If the products are always shown in the recipe tooltip. */
"always_show_products": boolean;
 
/** Category of the recipe. */
"category": string;
 
/** The emissions multiplier for this recipe. */
"emissions_multiplier": number;
 
/** If this recipe prototype is enabled by default (enabled at the beginning of a game). */
"enabled": boolean;
 
/** Energy required to execute this recipe. This directly affects the crafting time: Recipe's energy is exactly its crafting time in seconds, when crafted in an assembling machine with crafting speed exactly equal to one. */
"energy": number;
 
/** Group of this recipe. */
"group": LuaGroup;
 
/** Is the recipe hidden? Hidden recipe don't show up in the crafting menu. */
"hidden": boolean;
 
/** Is the recipe hidden from flow statistics (item/fluid production statistics)? */
"hidden_from_flow_stats": boolean;
 
/** Is the recipe hidden from player crafting? The recipe will still show up for selection in machines. */
"hidden_from_player_crafting": boolean;
 
/** Ingredients for this recipe. */
"ingredients": Ingredient;
 "localised_description": LocalisedString;
 
/** Localised name of the recipe. */
"localised_name": LocalisedString;
 
/** The main product of this recipe, if any. */
"main_product": (null | Product);
 
/** Name of the recipe. This can be different than the name of the result items as there could be more recipes to make the same item. */
"name": string;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning. */
"order": string;
 
/** Used to determine how many extra items are put into an assembling machine before it's considered "full enough". */
"overload_multiplier": number;
 
/** The results of this recipe. */
"products": Product;
 
/** The multiplier used when this recipe is copied from an assembling machine to a requester chest. For each item in the recipe the item count * this value is set in the requester chest. */
"request_paste_multiplier": number;
 
/** If the amount is shown in the recipe tooltip title when the recipe produces more than 1 product. */
"show_amount_in_title": boolean;
 
/** Subgroup of this recipe. */
"subgroup": LuaGroup;
 
/** Is this recipe unlocks the result item(s) so they're shown in filter-select GUIs. */
"unlock_results": boolean;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** Registry of interfaces between scripts. An interface is simply a dictionary mapping names to functions. A script or mod can then register an interface with [LuaRemote](LuaRemote), after that any script can call the registered functions, provided it knows the interface name and the desired function name. An instance of LuaRemote is available through the global object named `remote`. */
/** @noSelf **/
interface LuaRemote  { 
  
/** List of all registered interfaces. For each interface name, `remote.interfaces[name]` is a dictionary mapping the interface's registered functions to the value `true`. */
"interfaces": Record<string, Record<string, boolean>>;
 
/** This object's name. */
"object_name": string;
 }

/** Allows rendering of geometric shapes, text and sprites in the game world. Each render object is identified by an id that is universally unique for the lifetime of a whole game. */
/** @noSelf **/
interface LuaRendering  { 
  
/** This object's name. */
"object_name": string;
 }

/** Prototype of a resource category. */
/** @noSelf **/
interface LuaResourceCategoryPrototype  { 
  "localised_description": LocalisedString;
 "localised_name": LocalisedString;
 
/** Name of this prototype. */
"name": string;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning. */
"order": string;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** Control behavior for roboports. */
/** @noSelf **/
interface LuaRoboportControlBehavior  extends LuaControlBehavior  { 
  "available_construction_output_signal": SignalID;
 "available_logistic_output_signal": SignalID;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** `true` if the roboport should report the logistics network content to the circuit network. */
"read_logistics": boolean;
 
/** `true` if the roboport should report the robot statistics to the circuit network. */
"read_robot_stats": boolean;
 "total_construction_output_signal": SignalID;
 "total_logistic_output_signal": SignalID;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** Object containing mod settings of three distinct types: `startup`, `global`, and `player`. An instance of LuaSettings is available through the global object named `settings`. */
/** @noSelf **/
interface LuaSettings  { 
  
/** This object's name. */
"object_name": string;
 }

/** Prototype of a shortcut. */
/** @noSelf **/
interface LuaShortcutPrototype  { 
  "action": string;
 
/** The control input that is associated with this shortcut, if any. */
"associated_control_input": (null | string);
 
/** The item to create when this shortcut is used, if any. */
"item_to_spawn": (null | LuaItemPrototype);
 "localised_description": LocalisedString;
 "localised_name": LocalisedString;
 
/** Name of this prototype. */
"name": string;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning. */
"order": string;
 
/** The technology to unlock when this shortcut is used, if any. */
"technology_to_unlock": (null | LuaTechnologyPrototype);
 "toggleable": boolean;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** Control behavior for storage tanks. */
/** @noSelf **/
interface LuaStorageTankControlBehavior  extends LuaControlBehavior  { 
  
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** Style of a GUI element. All of the attributes listed here may be `nil` if not available for a particular GUI element. */
/** @noSelf **/
interface LuaStyle  { 
  "badge_font": string;
 "badge_horizontal_spacing": number;
 "bar_width": number;
 
/** Space between the table cell contents bottom and border. */
"bottom_cell_padding": number;
 "bottom_margin": number;
 "bottom_padding": number;
 
/** Space between the table cell contents and border. Sets top/right/bottom/left cell paddings to this value. */
"cell_padding": number;
 "clicked_font_color": Color;
 "clicked_vertical_offset": number;
 "color": Color;
 "default_badge_font_color": Color;
 "disabled_badge_font_color": Color;
 "disabled_font_color": Color;
 "extra_bottom_margin_when_activated": number;
 "extra_bottom_padding_when_activated": number;
 "extra_left_margin_when_activated": number;
 "extra_left_padding_when_activated": number;
 
/** Sets `extra_top/right/bottom/left_margin_when_activated` to this value. An array with two values sets top/bottom margin to the first value and left/right margin to the second value. An array with four values sets top, right, bottom, left margin respectively. */
"extra_margin_when_activated": (number | number);
 
/** Sets `extra_top/right/bottom/left_padding_when_activated` to this value. An array with two values sets top/bottom padding to the first value and left/right padding to the second value. An array with four values sets top, right, bottom, left padding respectively. */
"extra_padding_when_activated": (number | number);
 "extra_right_margin_when_activated": number;
 "extra_right_padding_when_activated": number;
 "extra_top_margin_when_activated": number;
 "extra_top_padding_when_activated": number;
 "font": string;
 "font_color": Color;
 
/** Gui of the [LuaGuiElement](LuaGuiElement) of this style. */
"gui": LuaGui;
 
/** Sets both minimal and maximal height to the given value. */
"height": number;
 
/** Horizontal align of the inner content of the widget, if any. Possible values are "left", "center" or "right". */
"horizontal_align": (null | string);
 
/** Horizontal space between individual cells. */
"horizontal_spacing": number;
 
/** Whether the GUI element can be squashed (by maximal width of some parent element) horizontally. `nil` if this element does not support squashing. This is mainly meant to be used for scroll-pane The default value is false. */
"horizontally_squashable": (null | boolean);
 
/** Whether the GUI element stretches its size horizontally to other elements. `nil` if this element does not support stretching. */
"horizontally_stretchable": (null | boolean);
 "hovered_font_color": Color;
 
/** Space between the table cell contents left and border. */
"left_cell_padding": number;
 "left_margin": number;
 "left_padding": number;
 
/** Sets top/right/bottom/left margins to this value. An array with two values sets top/bottom margin to the first value and left/right margin to the second value. An array with four values sets top, right, bottom, left margin respectively. */
"margin": (number | number);
 
/** Maximal height ensures, that the widget will never be bigger than than that size. It can't be stretched to be bigger. */
"maximal_height": number;
 
/** Maximal width ensures, that the widget will never be bigger than than that size. It can't be stretched to be bigger. */
"maximal_width": number;
 
/** Minimal height ensures, that the widget will never be smaller than than that size. It can't be squashed to be smaller. */
"minimal_height": number;
 
/** Minimal width ensures, that the widget will never be smaller than than that size. It can't be squashed to be smaller. */
"minimal_width": number;
 
/** Name of this style. */
"name": string;
 
/** Natural height specifies the height of the element tries to have, but it can still be squashed/stretched to have a smaller or bigger size. */
"natural_height": number;
 
/** Natural width specifies the width of the element tries to have, but it can still be squashed/stretched to have a smaller or bigger size. */
"natural_width": number;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** Sets top/right/bottom/left paddings to this value. An array with two values sets top/bottom padding to the first value and left/right padding to the second value. An array with four values sets top, right, bottom, left padding respectively. */
"padding": (number | number);
 "pie_progress_color": Color;
 
/** How this GUI element handles rich text. */
"rich_text_setting": typeof defines.rich_text_setting;
 
/** Space between the table cell contents right and border. */
"right_cell_padding": number;
 "right_margin": number;
 "right_padding": number;
 "selected_badge_font_color": Color;
 "selected_clicked_font_color": Color;
 "selected_font_color": Color;
 "selected_hovered_font_color": Color;
 "single_line": boolean;
 
/** Sets both width and height to the given value. Also accepts an array with two values, setting width to the first and height to the second one. */
"size": (number | number);
 "stretch_image_to_widget_size": boolean;
 "strikethrough_color": Color;
 
/** Space between the table cell contents top and border. */
"top_cell_padding": number;
 "top_margin": number;
 "top_padding": number;
 "use_header_filler": boolean;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 
/** Vertical align of the inner content of the widget, if any. Possible values are "top", "center" or "bottom". */
"vertical_align": (null | string);
 
/** Vertical space between individual cells. */
"vertical_spacing": number;
 
/** Whether the GUI element can be squashed (by maximal height of some parent element) vertically. `nil` if this element does not support squashing. This is mainly meant to be used for scroll-pane The default (parent) value for scroll pane is true, false otherwise. */
"vertically_squashable": (null | boolean);
 
/** Whether the GUI element stretches its size vertically to other elements. `nil` if this element does not support stretching. */
"vertically_stretchable": (null | boolean);
 
/** Sets both minimal and maximal width to the given value. */
"width": number;
 }

/** A "domain" of the world. Surfaces can only be created and deleted through the API. Surfaces are uniquely identified by their name. Every game contains at least the surface "nauvis". */
/** @noSelf **/
interface LuaSurface  { 
  
/** When set to true, the sun will always shine. */
"always_day": boolean;
 
/** Defines how surface daytime brightness influences each color channel of the current color lookup table (LUT).

The LUT is multiplied by `((1 - weight) + brightness * weight)` and result is clamped to range [0, 1].

Default is `{0, 0, 0}`, which means no influence. */
"brightness_visual_weights": ColorModifier;
 
/** Amount of darkness at the current time, as a number in range [0, 1]. */
"darkness": number;
 
/** The daytime when dawn starts. */
"dawn": number;
 
/** Current time of day, as a number in range [0, 1). */
"daytime": number;
 
/** The daytime when dusk starts. */
"dusk": number;
 
/** The daytime when evening starts. */
"evening": number;
 
/** True if daytime is currently frozen. */
"freeze_daytime": boolean;
 
/** When set to true, new chunks will be generated with lab tiles, instead of using the surface's map generation settings. */
"generate_with_lab_tiles": boolean;
 
/** Unique ID associated with this surface. */
"index": number;
 
/** The generation settings for this surface. These can be modified to after surface generation, but note that this will not retroactively update the surface. To manually adjust it, [LuaSurface::regenerate_entity](LuaSurface::regenerate_entity), [LuaSurface::regenerate_decorative](LuaSurface::regenerate_decorative) and [LuaSurface::delete_chunk](LuaSurface::delete_chunk) can be used. */
"map_gen_settings": MapGenSettings;
 
/** The minimal brightness during the night. Default is `0.15`. The value has an effect on the game simalution only, it doesn't have any effect on rendering. */
"min_brightness": number;
 
/** The daytime when morning starts. */
"morning": number;
 
/** The name of this surface. Names are unique among surfaces. */
"name": string;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** Is peaceful mode enabled on this surface? */
"peaceful_mode": boolean;
 
/** If clouds are shown on this surface. */
"show_clouds": boolean;
 
/** The multiplier of solar power on this surface. Cannot be less than 0. */
"solar_power_multiplier": number;
 
/** The number of ticks per day for this surface. */
"ticks_per_day": number;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 
/** Current wind direction. */
"wind_orientation": RealOrientation;
 
/** Change in wind orientation per tick. */
"wind_orientation_change": number;
 
/** Current wind speed. */
"wind_speed": number;
 }

/** One research item. */
/** @noSelf **/
interface LuaTechnology  { 
  
/** Effects applied when this technology is researched. */
"effects": TechnologyModifier;
 
/** Can this technology be researched? */
"enabled": boolean;
 
/** The force this technology belongs to. */
"force": LuaForce;
 
/** The current level of this technology. For level-based technology writing to this is the same as researching the technology to the previous level. Writing the level will set [LuaTechnology::enabled](LuaTechnology::enabled) to `true`. */
"level": number;
 "localised_description": LocalisedString;
 
/** Localised name of this technology. */
"localised_name": LocalisedString;
 
/** Name of this technology. */
"name": string;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning. */
"order": string;
 
/** Prerequisites of this technology. The result maps technology name to the [LuaTechnology](LuaTechnology) object. */
"prerequisites": Record<string, LuaTechnology>;
 
/** The prototype of this technology. */
"prototype": LuaTechnologyPrototype;
 
/** The number of research units required for this technology. */
"research_unit_count": number;
 
/** The count formula used for this infinite research. `nil` if this research isn't infinite. */
"research_unit_count_formula": (null | string);
 
/** Amount of energy required to finish a unit of research. */
"research_unit_energy": number;
 
/** The types of ingredients that labs will require to research this technology. */
"research_unit_ingredients": Ingredient;
 
/** Has this technology been researched? Switching from `false` to `true` will trigger the technology advancement perks; switching from `true` to `false` will reverse them. */
"researched": boolean;
 
/** Is this an upgrade-type research? */
"upgrade": boolean;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 
/** If this technology will be visible in the research GUI even though it is disabled. */
"visible_when_disabled": boolean;
 }

/** A Technology prototype. */
/** @noSelf **/
interface LuaTechnologyPrototype  { 
  
/** Effects applied when this technology is researched. */
"effects": TechnologyModifier;
 
/** If this technology prototype is enabled by default (enabled at the beginning of a game). */
"enabled": boolean;
 
/** If this technology prototype is hidden. */
"hidden": boolean;
 
/** If this technology ignores the technology cost multiplier setting. */
"ignore_tech_cost_multiplier": boolean;
 
/** The level of this research. */
"level": number;
 "localised_description": LocalisedString;
 
/** Localised name of this technology. */
"localised_name": LocalisedString;
 
/** The max level of this research. */
"max_level": number;
 
/** Name of this technology. */
"name": string;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning. */
"order": string;
 
/** Prerequisites of this technology. The result maps technology name to the [LuaTechnologyPrototype](LuaTechnologyPrototype) object. */
"prerequisites": Record<string, LuaTechnologyPrototype>;
 
/** The number of research units required for this technology. */
"research_unit_count": number;
 
/** The count formula used for this infinite research. `nil` if this research isn't infinite. */
"research_unit_count_formula": (null | string);
 
/** Amount of energy required to finish a unit of research. */
"research_unit_energy": number;
 
/** The types of ingredients that labs will require to research this technology. */
"research_unit_ingredients": Ingredient;
 
/** If the is technology prototype is an upgrade to some other technology. */
"upgrade": boolean;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 
/** If this technology will be visible in the research GUI even though it is disabled. */
"visible_when_disabled": boolean;
 }

/** A single "square" on the map. */
/** @noSelf **/
interface LuaTile  { 
  
/** The name of the [LuaTilePrototype](LuaTilePrototype) hidden under this tile, if any. During normal gameplay, only [non-mineable](LuaTilePrototype::mineable_properties) tiles can become hidden. This can however be circumvented with [LuaSurface::set_hidden_tile](LuaSurface::set_hidden_tile). */
"hidden_tile": (null | string);
 
/** Prototype name of this tile. E.g. `"sand-3"` or `"grass-2"`. */
"name": string;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** The position this tile references. */
"position": TilePosition;
 "prototype": LuaTilePrototype;
 
/** The surface this tile is on. */
"surface": LuaSurface;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** Prototype of a tile. */
/** @noSelf **/
interface LuaTilePrototype  { 
  "allowed_neighbors": Record<string, LuaTilePrototype>;
 "automatic_neighbors": boolean;
 
/** Autoplace specification for this prototype, if any. */
"autoplace_specification": (null | AutoplaceSpecification);
 
/** False if this tile is not allowed in blueprints regardless of the ability to build it. */
"can_be_part_of_blueprint": boolean;
 
/** True if building this tile should check for colliding entities above and prevent building if such are found. Also during mining tiles above this tile checks for entities colliding with this tile and prevents mining if such are found. */
"check_collision_with_entities": boolean;
 
/** The collision mask this tile uses */
"collision_mask": CollisionMask;
 "collision_mask_with_flags": CollisionMaskWithFlags;
 
/** The probability that decorative entities will be removed from on top of this tile when this tile is generated. */
"decorative_removal_probability": number;
 
/** Amount of pollution emissions per second this tile will absorb. */
"emissions_per_second": number;
 
/** Items that when placed will produce this tile. It is a dictionary indexed by the item prototype name. `nil` (instead of an empty table) if no items can place this tile. */
"items_to_place_this": SimpleItemStack;
 "layer": number;
 "localised_description": LocalisedString;
 "localised_name": LocalisedString;
 "map_color": Color;
 "mineable_properties": /** @noSelf **/
{ 
/** Is this tile mineable at all? */
"minable": boolean;
 
/** Prototype name of the particle produced when mining this tile. Will only be present if this tile produces any particle during mining. */
"mining_particle": (null | string);
 
/** Energy required to mine a tile. */
"mining_time": number;
 
/** Products obtained by mining this tile. */
"products": 
/** Products obtained by mining this tile. */
Product[];
 };
 
/** Name of this prototype. */
"name": string;
 
/** If this tile needs correction logic applied when it's generated in the world.. */
"needs_correction": boolean;
 
/** The next direction of this tile, if any. Used when a tile has multiple directions (such as hazard concrete) */
"next_direction": (null | LuaTilePrototype);
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning. */
"order": string;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 "vehicle_friction_modifier": number;
 "walking_speed_modifier": number;
 }

/** A train. Trains are a sequence of connected rolling stocks -- locomotives and wagons. */
/** @noSelf **/
interface LuaTrain  { 
  
/** The rail at the back end of the train, if any. */
"back_rail": (null | LuaEntity);
 
/** The back stock of this train, if any. The back of the train is at the opposite end of the [front](LuaTrain::front_stock). */
"back_stock": (null | LuaEntity);
 
/** The cargo carriages the train contains. */
"cargo_wagons": LuaEntity;
 
/** The rolling stocks this train is composed of, with the numbering starting at the [front](LuaTrain::front_stock) of the train. */
"carriages": LuaEntity;
 
/** The fluid carriages the train contains. */
"fluid_wagons": LuaEntity;
 
/** The rail at the front end of the train, if any. */
"front_rail": (null | LuaEntity);
 
/** The front stock of this train, if any. The front of the train is in the direction that a majority of locomotives are pointing in. If it's a tie, the North and West directions take precedence. */
"front_stock": (null | LuaEntity);
 
/** If this train has a path. */
"has_path": boolean;
 
/** The unique train ID. */
"id": number;
 
/** The total number of kills by this train. */
"kill_count": number;
 
/** The players killed by this train.

The keys are the player indices, the values are how often this train killed that player. */
"killed_players": Record<number, number>;
 
/** Arrays of locomotives. The result is two arrays, indexed by `"front_movers"` and `"back_movers"` containing the locomotives. E.g. `{front_movers={loco1, loco2}, back_movers={loco3}}`. */
"locomotives": Record<string, LuaEntity>;
 
/** When `true`, the train is explicitly controlled by the player or script. When `false`, the train moves autonomously according to its schedule. */
"manual_mode": boolean;
 
/** Current max speed when moving backwards, depends on locomotive prototype and fuel. */
"max_backward_speed": number;
 
/** Current max speed when moving forward, depends on locomotive prototype and fuel. */
"max_forward_speed": number;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** The player passengers on the train */
"passengers": LuaPlayer;
 
/** The path this train is using, if any. */
"path": (null | LuaRailPath);
 
/** The destination rail this train is currently pathing to, if any. */
"path_end_rail": (null | LuaEntity);
 
/** The destination train stop this train is currently pathing to, if any. */
"path_end_stop": (null | LuaEntity);
 "rail_direction_from_back_rail": typeof defines.rail_direction;
 "rail_direction_from_front_rail": typeof defines.rail_direction;
 
/** The riding state of this train. */
"riding_state": RidingState;
 
/** This train's current schedule, if any. Set to `nil` to clear. */
"schedule": (null | TrainSchedule);
 
/** The signal this train is arriving or waiting at, if any. */
"signal": (null | LuaEntity);
 
/** Current speed. */
"speed": number;
 
/** This train's current state. */
"state": typeof defines.train_state;
 
/** The train stop this train is stopped at, if any. */
"station": (null | LuaEntity);
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 
/** The weight of this train. */
"weight": number;
 }

/** Control behavior for train stops. */
/** @noSelf **/
interface LuaTrainStopControlBehavior  extends LuaGenericOnOffControlBehavior  { 
  
/** `true` if the train stop is enabled/disabled through the circuit network. */
"enable_disable": boolean;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** `true` if the train stop should send the train contents to the circuit network. */
"read_from_train": boolean;
 
/** `true` if the train stop should send the stopped train id to the circuit network. */
"read_stopped_train": boolean;
 
/** `true` if the train stop should send amount of incoming trains to the circuit network. */
"read_trains_count": boolean;
 
/** `true` if the train stop should send the circuit network contents to the train to use. */
"send_to_train": boolean;
 
/** `true` if the trains_limit_signal is used to set a limit of trains incoming for train stop. */
"set_trains_limit": boolean;
 
/** The signal that will be sent when using the send-train-id option. */
"stopped_train_signal": SignalID;
 
/** The signal that will be sent when using the read-trains-count option. */
"trains_count_signal": SignalID;
 
/** The signal to be used by set-trains-limit to limit amount of incoming trains */
"trains_limit_signal": SignalID;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** Control behavior for transport belts. */
/** @noSelf **/
interface LuaTransportBeltControlBehavior  extends LuaGenericOnOffControlBehavior  { 
  
/** If the belt will be enabled/disabled based off the circuit network. */
"enable_disable": boolean;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** If the belt will read the contents and send them to the circuit network. */
"read_contents": boolean;
 
/** The read mode for the belt. */
"read_contents_mode": typeof defines.control_behavior.transport_belt.content_read_mode;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** One line on a transport belt. */
/** @noSelf **/
interface LuaTransportLine  { 
  
/** The transport lines that this transport line is fed by or an empty table if none. */
"input_lines": LuaTransportLine;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** The transport lines that this transport line outputs items to or an empty table if none. */
"output_lines": LuaTransportLine;
 
/** The entity this transport line belongs to. */
"owner": LuaEntity;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** Prototype of a trivial smoke. */
/** @noSelf **/
interface LuaTrivialSmokePrototype  { 
  "affected_by_wind": boolean;
 "color": Color;
 "cyclic": boolean;
 "duration": number;
 "end_scale": number;
 "fade_away_duration": number;
 "fade_in_duration": number;
 "glow_animation": boolean;
 "glow_fade_away_duration": number;
 "localised_description": LocalisedString;
 "localised_name": LocalisedString;
 "movement_slow_down_factor": number;
 
/** Name of this prototype. */
"name": string;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning. */
"order": string;
 "render_layer": RenderLayer;
 "show_when_smoke_off": boolean;
 "spread_duration": number;
 "start_scale": number;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** A collection of units moving and attacking together. The engine creates autonomous unit groups to attack polluted areas. The script can create and control such groups as well. Groups can accept commands in the same manner as regular units. */
/** @noSelf **/
interface LuaUnitGroup  { 
  
/** The command given to this group, if any. */
"command": (null | Command);
 
/** The distraction command given to this group, if any. */
"distraction_command": (null | Command);
 
/** The force of this unit group. */
"force": LuaForce;
 
/** The group number for this unit group. */
"group_number": number;
 
/** Whether this unit group is controlled by a script or by the game engine. This can be changed using [LuaUnitGroup::set_autonomous](LuaUnitGroup::set_autonomous). */
"is_script_driven": boolean;
 
/** Members of this group. */
"members": LuaEntity;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** Group position. This can have different meanings depending on the group state. When the group is gathering, the position is the place of gathering. When the group is moving, the position is the expected position of its members along the path. When the group is attacking, it is the average position of its members. */
"position": MapPosition;
 
/** Whether this group is gathering, moving or attacking. */
"state": typeof defines.group_state;
 
/** The surface of this unit group. */
"surface": LuaSurface;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** Prototype of a virtual signal. */
/** @noSelf **/
interface LuaVirtualSignalPrototype  { 
  "localised_description": LocalisedString;
 "localised_name": LocalisedString;
 
/** Name of this prototype. */
"name": string;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 
/** The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning. */
"order": string;
 
/** If this is a special signal */
"special": boolean;
 "subgroup": LuaGroup;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** Prototype of a void energy source. */
/** @noSelf **/
interface LuaVoidEnergySourcePrototype  { 
  "emissions": number;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 "render_no_network_icon": boolean;
 "render_no_power_icon": boolean;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }

/** Control behavior for walls. */
/** @noSelf **/
interface LuaWallControlBehavior  extends LuaControlBehavior  { 
  
/** The circuit condition. */
"circuit_condition": CircuitConditionDefinition;
 
/** The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct. */
"object_name": string;
 "open_gate": boolean;
 "output_signal": SignalID;
 "read_sensor": boolean;
 
/** Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access. */
"valid": boolean;
 }
/** events */

/** Called when a [CustomInput](https://wiki.factorio.com/Prototype/CustomInput) is activated. */
type CustomInputEventPayload = /** @noSelf **/
{ 
/** The mouse cursor position when the custom input was activated. */
"cursor_position": MapPosition;
 
/** The prototype name of the custom input that was activated. */
"input_name": string;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The player that activated the custom input. */
"player_index": number;
 
/** Information about the prototype that is selected when the custom input is used. Needs to be enabled on the custom input's prototype. `nil` if none is selected. */
"selected_prototype": (null | SelectedPrototypeData);
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when a unit/group completes a command. */
type OnAiCommandCompletedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
"name": typeof defines.events;
 "result": typeof defines.behavior_result;
 
/** Tick the event was generated. */
"tick": number;
 
/** unit_number/group_number of the unit/group which just completed a command. */
"unit_number": number;
 
/** Was this command generated by a distraction. */
"was_distracted": boolean;
 }

/** Called when an area of the map is cloned. */
type OnAreaClonedPayload = /** @noSelf **/
{ "clear_destination_decoratives": boolean;
 "clear_destination_entities": boolean;
 "clone_decoratives": boolean;
 "clone_entities": boolean;
 "clone_tiles": boolean;
 "destination_area": BoundingBox;
 "destination_force": (null | LuaForce);
 "destination_surface": LuaSurface;
 
/** Identifier of the event */
"name": typeof defines.events;
 "source_area": BoundingBox;
 "source_surface": LuaSurface;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when a biter migration builds a base. */
type OnBiterBaseBuiltPayload = /** @noSelf **/
{ 
/** The entity that was built. */
"entity": LuaEntity;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when a set of positions on the map is cloned. */
type OnBrushClonedPayload = /** @noSelf **/
{ "clear_destination_decoratives": boolean;
 "clear_destination_entities": boolean;
 "clone_decoratives": boolean;
 "clone_entities": boolean;
 "clone_tiles": boolean;
 "destination_force": (null | LuaForce);
 "destination_offset": TilePosition;
 "destination_surface": LuaSurface;
 
/** Identifier of the event */
"name": typeof defines.events;
 "source_offset": TilePosition;
 "source_positions": TilePosition;
 "source_surface": LuaSurface;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when a [defines.command.build_base](defines.command.build_base) command reaches its destination, and before building starts. */
type OnBuildBaseArrivedPayload = /** @noSelf **/
{ 
/** The unit group the command was assigned to. */
"group": (null | LuaUnitGroup);
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** Tick the event was generated. */
"tick": number;
 
/** The unit the command was assigned to. */
"unit": (null | LuaEntity);
 }

/** Called when player builds something. Can be filtered using [LuaPlayerBuiltEntityEventFilter](LuaPlayerBuiltEntityEventFilter). */
type OnBuiltEntityPayload = /** @noSelf **/
{ "created_entity": LuaEntity;
 
/** The item prototype used to build the entity. Note this won't exist in some situations (built from blueprint, undo, etc). */
"item": (null | LuaItemPrototype);
 
/** Identifier of the event */
"name": typeof defines.events;
 "player_index": number;
 "stack": LuaItemStack;
 
/** The tags associated with this entity if any. */
"tags": (null | Tags);
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when the deconstruction of an entity is canceled. Can be filtered using [LuaEntityDeconstructionCancelledEventFilter](LuaEntityDeconstructionCancelledEventFilter). */
type OnCancelledDeconstructionPayload = /** @noSelf **/
{ "entity": LuaEntity;
 
/** Identifier of the event */
"name": typeof defines.events;
 "player_index": (null | number);
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when the upgrade of an entity is canceled. Can be filtered using [LuaUpgradeCancelledEventFilter](LuaUpgradeCancelledEventFilter). */
type OnCancelledUpgradePayload = /** @noSelf **/
{ "direction": (null | typeof defines.direction);
 "entity": LuaEntity;
 
/** Identifier of the event */
"name": typeof defines.events;
 "player_index": (null | number);
 "target": LuaEntityPrototype;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when a character corpse expires due to timeout or all of the items being removed from it. */
type OnCharacterCorpseExpiredPayload = /** @noSelf **/
{ 
/** The corpse. */
"corpse": LuaEntity;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when a chart tag is created. */
type OnChartTagAddedPayload = /** @noSelf **/
{ "force": LuaForce;
 
/** Identifier of the event */
"name": typeof defines.events;
 "player_index": (null | number);
 "tag": LuaCustomChartTag;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when a chart tag is modified by a player. */
type OnChartTagModifiedPayload = /** @noSelf **/
{ "force": LuaForce;
 
/** Identifier of the event */
"name": typeof defines.events;
 "old_icon": (null | SignalID);
 "old_player": (null | number);
 "old_text": string;
 "player_index": (null | number);
 "tag": LuaCustomChartTag;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called just before a chart tag is deleted. */
type OnChartTagRemovedPayload = /** @noSelf **/
{ "force": LuaForce;
 
/** Identifier of the event */
"name": typeof defines.events;
 "player_index": (null | number);
 "tag": LuaCustomChartTag;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when a chunk is charted or re-charted. */
type OnChunkChartedPayload = /** @noSelf **/
{ 
/** Area of the chunk. */
"area": BoundingBox;
 "force": LuaForce;
 
/** Identifier of the event */
"name": typeof defines.events;
 "position": ChunkPosition;
 "surface_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when one or more chunks are deleted using [LuaSurface::delete_chunk](LuaSurface::delete_chunk). */
type OnChunkDeletedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The chunks deleted. */
"positions": ChunkPosition;
 "surface_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when a chunk is generated. */
type OnChunkGeneratedPayload = /** @noSelf **/
{ 
/** Area of the chunk. */
"area": BoundingBox;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** Position of the chunk. */
"position": ChunkPosition;
 
/** The surface the chunk is on. */
"surface": LuaSurface;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when a combat robot expires through a lack of energy, or timeout. */
type OnCombatRobotExpiredPayload = /** @noSelf **/
{ 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The entity that owns the robot if any. */
"owner": (null | LuaEntity);
 "robot": LuaEntity;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when a message is sent to the in-game console, either by a player or through the server interface. */
type OnConsoleChatPayload = /** @noSelf **/
{ 
/** The chat message that was sent. */
"message": string;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The player doing the chatting, if any. */
"player_index": (null | number);
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when someone enters a command-like message regardless of it being a valid command. */
type OnConsoleCommandPayload = /** @noSelf **/
{ 
/** The command as typed without the preceding forward slash ('/'). */
"command": string;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The parameters provided if any. */
"parameters": string;
 
/** The player if any. */
"player_index": (null | number);
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when a cutscene is cancelled by the player or by script. */
type OnCutsceneCancelledPayload = /** @noSelf **/
{ 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The player the cutscene was shown to. */
"player_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when a cutscene is playing, each time it reaches a waypoint in that cutscene.

This refers to an index in the table previously passed to set_controller which started the cutscene. */
type OnCutsceneWaypointReachedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The player index of the player viewing the cutscene. */
"player_index": number;
 
/** Tick the event was generated. */
"tick": number;
 
/** The index of the waypoint we just completed. */
"waypoint_index": number;
 }

/** Called when the map difficulty settings are changed. */
type OnDifficultySettingsChangedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
"name": typeof defines.events;
 "old_recipe_difficulty": number;
 "old_technology_difficulty": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when an entity is cloned. Can be filtered for the source entity using [LuaEntityClonedEventFilter](LuaEntityClonedEventFilter). */
type OnEntityClonedPayload = /** @noSelf **/
{ "destination": LuaEntity;
 
/** Identifier of the event */
"name": typeof defines.events;
 "source": LuaEntity;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when an entity is damaged. Can be filtered using [LuaEntityDamagedEventFilter](LuaEntityDamagedEventFilter). */
type OnEntityDamagedPayload = /** @noSelf **/
{ 
/** The entity that did the attacking if available. */
"cause": (null | LuaEntity);
 "damage_type": LuaDamagePrototype;
 "entity": LuaEntity;
 
/** The damage amount after resistances. */
"final_damage_amount": number;
 
/** The health of the entity after the damage was applied. */
"final_health": number;
 
/** The force that did the attacking if any. */
"force": (null | LuaForce);
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The damage amount before resistances. */
"original_damage_amount": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called after an entity is destroyed that has been registered with [LuaBootstrap::register_on_entity_destroyed](LuaBootstrap::register_on_entity_destroyed). */
type OnEntityDestroyedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The number returned by [register_on_entity_destroyed](LuaBootstrap::register_on_entity_destroyed) to uniquely identify this entity during this event. */
"registration_number": number;
 
/** Tick the event was generated. */
"tick": number;
 
/** The [LuaEntity::unit_number](LuaEntity::unit_number) of the destroyed entity, if it had one. */
"unit_number": (null | number);
 }

/** Called when an entity dies. Can be filtered using [LuaEntityDiedEventFilter](LuaEntityDiedEventFilter). */
type OnEntityDiedPayload = /** @noSelf **/
{ 
/** The entity that did the killing if available. */
"cause": (null | LuaEntity);
 
/** The damage type if any. */
"damage_type": (null | LuaDamagePrototype);
 
/** The entity that died. */
"entity": LuaEntity;
 
/** The force that did the killing if any. */
"force": (null | LuaForce);
 
/** The loot generated by this entity if any. */
"loot": LuaInventory;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when one of an entity's personal logistic slots changes. */
type OnEntityLogisticSlotChangedPayload = /** @noSelf **/
{ 
/** The entity for whom a logistic slot was changed. */
"entity": LuaEntity;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The player who changed the slot, or `nil` if changed by script. */
"player_index": (null | number);
 
/** The slot index that was changed. */
"slot_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called after an entity has been renamed either by the player or through script. */
type OnEntityRenamedPayload = /** @noSelf **/
{ "by_script": boolean;
 "entity": LuaEntity;
 
/** Identifier of the event */
"name": typeof defines.events;
 "old_name": string;
 
/** If by_script is true this will not be included. */
"player_index": (null | number);
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called after entity copy-paste is done. */
type OnEntitySettingsPastedPayload = /** @noSelf **/
{ 
/** The destination entity settings were copied to. */
"destination": LuaEntity;
 
/** Identifier of the event */
"name": typeof defines.events;
 "player_index": number;
 
/** The source entity settings were copied from. */
"source": LuaEntity;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when an entity is spawned by a EnemySpawner */
type OnEntitySpawnedPayload = /** @noSelf **/
{ "entity": LuaEntity;
 
/** Identifier of the event */
"name": typeof defines.events;
 "spawner": LuaEntity;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called after equipment is inserted into an equipment grid. */
type OnEquipmentInsertedPayload = /** @noSelf **/
{ 
/** The equipment inserted. */
"equipment": LuaEquipment;
 
/** The equipment grid inserted into. */
"grid": LuaEquipmentGrid;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called after equipment is removed from an equipment grid. */
type OnEquipmentRemovedPayload = /** @noSelf **/
{ 
/** The count of equipment removed. */
"count": number;
 
/** The equipment removed. */
"equipment": string;
 
/** The equipment grid removed from. */
"grid": LuaEquipmentGrid;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when the a forces cease fire values change. */
type OnForceCeaseFireChangedPayload = /** @noSelf **/
{ 
/** If the other force was added or removed. */
"added": boolean;
 
/** The force who's cease fire changed. */
"force": LuaForce;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** Which force was added or removed. */
"other_force": LuaForce;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when a new force is created using `game.create_force()` */
type OnForceCreatedPayload = /** @noSelf **/
{ 
/** The newly created force. */
"force": LuaForce;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when the a forces friends change. */
type OnForceFriendsChangedPayload = /** @noSelf **/
{ 
/** If the other force was added or removed. */
"added": boolean;
 
/** The force who's friends changed. */
"force": LuaForce;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** Which force was added or removed. */
"other_force": LuaForce;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when [LuaForce::reset](LuaForce::reset) is finished. */
type OnForceResetPayload = /** @noSelf **/
{ "force": LuaForce;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called after two forces have been merged using `game.merge_forces()`. */
type OnForcesMergedPayload = /** @noSelf **/
{ 
/** The force entities where reassigned to. */
"destination": LuaForce;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The index of the destroyed force. */
"source_index": number;
 
/** The force destroyed. */
"source_name": string;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when two forces are about to be merged using `game.merge_forces()`. */
type OnForcesMergingPayload = /** @noSelf **/
{ 
/** The force to reassign entities to. */
"destination": LuaForce;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The force to be destroyed */
"source": LuaForce;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when a game is created from a scenario. This is fired for every mod, even when the scenario's save data already includes it. In those cases however, [LuaBootstrap::on_init](LuaBootstrap::on_init) is not fired. */
type OnGameCreatedFromScenarioPayload = /** @noSelf **/
{ 
/** Identifier of the event */
"name": typeof defines.events;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when [LuaGuiElement](LuaGuiElement) checked state is changed (related to checkboxes and radio buttons). */
type OnGuiCheckedStateChangedPayload = /** @noSelf **/
{ 
/** The element whose checked state changed. */
"element": LuaGuiElement;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The player who did the change. */
"player_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when [LuaGuiElement](LuaGuiElement) is clicked. */
type OnGuiClickPayload = /** @noSelf **/
{ 
/** If alt was pressed. */
"alt": boolean;
 
/** The mouse button used if any. */
"button": typeof defines.mouse_button_type;
 
/** If control was pressed. */
"control": boolean;
 
/** The clicked element. */
"element": LuaGuiElement;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The player who did the clicking. */
"player_index": number;
 
/** If shift was pressed. */
"shift": boolean;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when the player closes the GUI they have open.

This can only be raised when the GUI's player controller is still valid. If a GUI is thus closed due to the player disconnecting, dying, or becoming a spectator in other ways, it won't cause this event to be raised. */
type OnGuiClosedPayload = /** @noSelf **/
{ 
/** The custom GUI element that was open */
"element": (null | LuaGuiElement);
 
/** The entity that was open */
"entity": (null | LuaEntity);
 
/** The equipment that was open */
"equipment": (null | LuaEquipment);
 
/** The GUI type that was open. */
"gui_type": typeof defines.gui_type;
 
/** The script inventory that was open */
"inventory": (null | LuaInventory);
 
/** The item that was open */
"item": (null | LuaItemStack);
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The other player that was open */
"other_player": (null | LuaPlayer);
 
/** The player. */
"player_index": number;
 
/** The technology that was automatically selected when opening the research GUI */
"technology": (null | LuaTechnology);
 
/** Tick the event was generated. */
"tick": number;
 
/** The tile position that was open */
"tile_position": (null | TilePosition);
 }

/** Called when a [LuaGuiElement](LuaGuiElement) is confirmed, for example by pressing Enter in a textfield. */
type OnGuiConfirmedPayload = /** @noSelf **/
{ 
/** If alt was pressed. */
"alt": boolean;
 
/** If control was pressed. */
"control": boolean;
 
/** The confirmed element. */
"element": LuaGuiElement;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The player who did the confirming. */
"player_index": number;
 
/** If shift was pressed. */
"shift": boolean;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when [LuaGuiElement](LuaGuiElement) element value is changed (related to choose element buttons). */
type OnGuiElemChangedPayload = /** @noSelf **/
{ 
/** The element whose element value changed. */
"element": LuaGuiElement;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The player who did the change. */
"player_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when [LuaGuiElement](LuaGuiElement) element location is changed (related to frames in `player.gui.screen`). */
type OnGuiLocationChangedPayload = /** @noSelf **/
{ 
/** The element whose location changed. */
"element": LuaGuiElement;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The player who did the change. */
"player_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when the player opens a GUI. */
type OnGuiOpenedPayload = /** @noSelf **/
{ 
/** The custom GUI element that was opened */
"element": (null | LuaGuiElement);
 
/** The entity that was opened */
"entity": (null | LuaEntity);
 
/** The equipment that was opened */
"equipment": (null | LuaEquipment);
 
/** The GUI type that was opened. */
"gui_type": typeof defines.gui_type;
 
/** The script inventory that was opened */
"inventory": (null | LuaInventory);
 
/** The item that was opened */
"item": (null | LuaItemStack);
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The other player that was opened */
"other_player": (null | LuaPlayer);
 
/** The player. */
"player_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when [LuaGuiElement](LuaGuiElement) selected tab is changed (related to tabbed-panes). */
type OnGuiSelectedTabChangedPayload = /** @noSelf **/
{ 
/** The tabbed pane whose selected tab changed. */
"element": LuaGuiElement;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The player who did the change. */
"player_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when [LuaGuiElement](LuaGuiElement) selection state is changed (related to drop-downs and listboxes). */
type OnGuiSelectionStateChangedPayload = /** @noSelf **/
{ 
/** The element whose selection state changed. */
"element": LuaGuiElement;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The player who did the change. */
"player_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when [LuaGuiElement](LuaGuiElement) switch state is changed (related to switches). */
type OnGuiSwitchStateChangedPayload = /** @noSelf **/
{ 
/** The switch whose switch state changed. */
"element": LuaGuiElement;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The player who did the change. */
"player_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when [LuaGuiElement](LuaGuiElement) text is changed by the player. */
type OnGuiTextChangedPayload = /** @noSelf **/
{ 
/** The edited element. */
"element": LuaGuiElement;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The player who did the edit. */
"player_index": number;
 
/** The new text in the element. */
"text": string;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when [LuaGuiElement](LuaGuiElement) slider value is changed (related to the slider element). */
type OnGuiValueChangedPayload = /** @noSelf **/
{ 
/** The element whose value changed. */
"element": LuaGuiElement;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The player who did the change. */
"player_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when a land mine is armed. */
type OnLandMineArmedPayload = /** @noSelf **/
{ "mine": LuaEntity;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when a custom Lua shortcut is pressed. */
type OnLuaShortcutPayload = /** @noSelf **/
{ 
/** Identifier of the event */
"name": typeof defines.events;
 "player_index": number;
 
/** Shortcut prototype name of the shortcut that was clicked. */
"prototype_name": string;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when an entity is marked for deconstruction with the Deconstruction planner or via script. Can be filtered using [LuaEntityMarkedForDeconstructionEventFilter](LuaEntityMarkedForDeconstructionEventFilter). */
type OnMarkedForDeconstructionPayload = /** @noSelf **/
{ "entity": LuaEntity;
 
/** Identifier of the event */
"name": typeof defines.events;
 "player_index": (null | number);
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when an entity is marked for upgrade with the Upgrade planner or via script. Can be filtered using [LuaEntityMarkedForUpgradeEventFilter](LuaEntityMarkedForUpgradeEventFilter). */
type OnMarkedForUpgradePayload = /** @noSelf **/
{ 
/** The new direction (if any) */
"direction": (null | typeof defines.direction);
 "entity": LuaEntity;
 
/** Identifier of the event */
"name": typeof defines.events;
 "player_index": (null | number);
 "target": LuaEntityPrototype;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called after a player purchases some offer from a `market` entity. */
type OnMarketItemPurchasedPayload = /** @noSelf **/
{ 
/** The amount of offers purchased. */
"count": number;
 
/** The market entity. */
"market": LuaEntity;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The index of the offer purchased. */
"offer_index": number;
 
/** The player who did the purchasing. */
"player_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when the player uses the 'Open item GUI' control on an item defined with the 'mod-openable' flag */
type OnModItemOpenedPayload = /** @noSelf **/
{ 
/** The item clicked on. */
"item": LuaItemPrototype;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The player. */
"player_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called directly after a permission group is added. */
type OnPermissionGroupAddedPayload = /** @noSelf **/
{ 
/** The group added. */
"group": LuaPermissionGroup;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The player that added the group. */
"player_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called directly after a permission group is deleted. */
type OnPermissionGroupDeletedPayload = /** @noSelf **/
{ 
/** The group that was deleted. */
"group_name": string;
 
/** The group id that was deleted. */
"id": number;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The player doing the deletion. */
"player_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called directly after a permission group is edited in some way. */
type OnPermissionGroupEditedPayload = /** @noSelf **/
{ 
/** The action when the `type` is "add-permission" or "remove-permission". */
"action": typeof defines.input_action;
 
/** The group being edited. */
"group": LuaPermissionGroup;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The new group name when the `type` is "rename". */
"new_name": string;
 
/** The old group name when the `type` is "rename". */
"old_name": string;
 
/** The other player when the `type` is "add-player" or "remove-player". */
"other_player_index": number;
 
/** The player that did the editing. */
"player_index": number;
 
/** Tick the event was generated. */
"tick": number;
 
/** The edit type: "add-permission", "remove-permission", "enable-all", "disable-all", "add-player", "remove-player", "rename". */
"type": string;
 }

/** Called directly after a permission string is imported. */
type OnPermissionStringImportedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The player that imported the string. */
"player_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when a player picks up an item. */
type OnPickedUpItemPayload = /** @noSelf **/
{ "item_stack": SimpleItemStack;
 
/** Identifier of the event */
"name": typeof defines.events;
 "player_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called after a player alt-selects an area with a selection-tool item. */
type OnPlayerAltSelectedAreaPayload = /** @noSelf **/
{ 
/** The area selected. */
"area": BoundingBox;
 
/** The entities selected. */
"entities": LuaEntity;
 
/** The item used to select the area. */
"item": string;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The player doing the selection. */
"player_index": number;
 
/** The surface selected. */
"surface": LuaSurface;
 
/** Tick the event was generated. */
"tick": number;
 
/** The tiles selected. */
"tiles": LuaTile;
 }

/** Called after a players ammo inventory changed in some way. */
type OnPlayerAmmoInventoryChangedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
"name": typeof defines.events;
 "player_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called after a players armor inventory changed in some way. */
type OnPlayerArmorInventoryChangedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
"name": typeof defines.events;
 "player_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when a player is banned. */
type OnPlayerBannedPayload = /** @noSelf **/
{ 
/** The player that did the banning if any. */
"by_player": (null | number);
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The player banned. */
"player_index": (null | number);
 
/** The banned player name. */
"player_name": string;
 
/** The reason given if any. */
"reason": (null | string);
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called after a player builds tiles. */
type OnPlayerBuiltTilePayload = /** @noSelf **/
{ 
/** The item type used to build the tiles */
"item": (null | LuaItemPrototype);
 
/** Identifier of the event */
"name": typeof defines.events;
 "player_index": number;
 
/** The stack used to build the tiles (may be empty if all of the items where used to build the tiles). */
"stack": (null | LuaItemStack);
 
/** The surface the tile(s) were built on. */
"surface_index": number;
 
/** Tick the event was generated. */
"tick": number;
 
/** The tile prototype that was placed. */
"tile": LuaTilePrototype;
 
/** The position data. */
"tiles": OldTileAndPosition;
 }

/** Called when a player cancels crafting. */
type OnPlayerCancelledCraftingPayload = /** @noSelf **/
{ 
/** The number of crafts that have been cancelled. */
"cancel_count": number;
 
/** The crafting items returned to the player's inventory. */
"items": LuaInventory;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The player that did the crafting. */
"player_index": number;
 
/** The recipe that has been cancelled. */
"recipe": LuaRecipe;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called after a player changes forces. */
type OnPlayerChangedForcePayload = /** @noSelf **/
{ 
/** The old force. */
"force": LuaForce;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The player who changed forces. */
"player_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when the tile position a player is located at changes. */
type OnPlayerChangedPositionPayload = /** @noSelf **/
{ 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The player. */
"player_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called after a player changes surfaces. */
type OnPlayerChangedSurfacePayload = /** @noSelf **/
{ 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The player who changed surfaces. */
"player_index": number;
 
/** The surface index the player was on. */
"surface_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when cheat mode is disabled on a player. */
type OnPlayerCheatModeDisabledPayload = /** @noSelf **/
{ 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The player. */
"player_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when cheat mode is enabled on a player. */
type OnPlayerCheatModeEnabledPayload = /** @noSelf **/
{ 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The player. */
"player_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when a player clicks a gps tag */
type OnPlayerClickedGpsTagPayload = /** @noSelf **/
{ 
/** Identifier of the event */
"name": typeof defines.events;
 
/** Index of the player */
"player_index": number;
 
/** Map position contained in gps tag */
"position": MapPosition;
 
/** Surface name contained in gps tag, even when such surface does not exists */
"surface": string;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when a player clicks the "confirm" button in the configure Blueprint GUI. */
type OnPlayerConfiguredBlueprintPayload = /** @noSelf **/
{ 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The player. */
"player_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when a player configures spidertron remote to be connected with a given spidertron */
type OnPlayerConfiguredSpiderRemotePayload = /** @noSelf **/
{ 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The player that configured the remote. */
"player_index": number;
 
/** Tick the event was generated. */
"tick": number;
 
/** Spider vehicle to which remote was connected to. */
"vehicle": LuaEntity;
 }

/** Called when the player finishes crafting an item. This event fires just before the results are inserted into the player's inventory, not when the crafting is queued (see [on_pre_player_crafted_item](on_pre_player_crafted_item)). */
type OnPlayerCraftedItemPayload = /** @noSelf **/
{ 
/** The item that has been crafted. */
"item_stack": LuaItemStack;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The player doing the crafting. */
"player_index": number;
 
/** The recipe used to craft this item. */
"recipe": LuaRecipe;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called after the player was created. */
type OnPlayerCreatedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
"name": typeof defines.events;
 "player_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called after a players cursorstack changed in some way. */
type OnPlayerCursorStackChangedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
"name": typeof defines.events;
 "player_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when a player selects an area with a deconstruction planner. */
type OnPlayerDeconstructedAreaPayload = /** @noSelf **/
{ 
/** If normal selection or alt selection was used. */
"alt": boolean;
 
/** The area selected. */
"area": BoundingBox;
 
/** The item used to select the area. */
"item": string;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The player doing the selection. */
"player_index": number;
 
/** The surface selected. */
"surface": LuaSurface;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when a player is demoted. */
type OnPlayerDemotedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The player. */
"player_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called after a player dies. */
type OnPlayerDiedPayload = /** @noSelf **/
{ "cause": (null | LuaEntity);
 
/** Identifier of the event */
"name": typeof defines.events;
 "player_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when the display resolution changes for a given player. */
type OnPlayerDisplayResolutionChangedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The old display resolution */
"old_resolution": DisplayResolution;
 
/** The player */
"player_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when the display scale changes for a given player. */
type OnPlayerDisplayScaleChangedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The old display scale */
"old_scale": number;
 
/** The player */
"player_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when the player's driving state has changed, this means a player has either entered or left a vehicle. */
type OnPlayerDrivingChangedStatePayload = /** @noSelf **/
{ 
/** The vehicle if any. */
"entity": (null | LuaEntity);
 
/** Identifier of the event */
"name": typeof defines.events;
 "player_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when a player drops an item on the ground. */
type OnPlayerDroppedItemPayload = /** @noSelf **/
{ 
/** The item-on-ground entity. */
"entity": LuaEntity;
 
/** Identifier of the event */
"name": typeof defines.events;
 "player_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when a player fast-transfers something to or from an entity. */
type OnPlayerFastTransferredPayload = /** @noSelf **/
{ 
/** The entity transferred from or to. */
"entity": LuaEntity;
 
/** Whether the transfer was from player to entity. If `false`, the transfer was from entity to player. */
"from_player": boolean;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The player transferred from or to. */
"player_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called after player flushed fluid */
type OnPlayerFlushedFluidPayload = /** @noSelf **/
{ 
/** Amount of fluid that was removed */
"amount": number;
 
/** Entity from which flush was performed */
"entity": LuaEntity;
 
/** Name of a fluid that was flushed */
"fluid": string;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** True if flush was requested only on this entity */
"only_this_entity": boolean;
 
/** Index of the player */
"player_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called after a players gun inventory changed in some way. */
type OnPlayerGunInventoryChangedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
"name": typeof defines.events;
 "player_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called after a player joins the game. This is not called when loading a save file in singleplayer, as the player doesn't actually leave the game, and the save is just on pause until they rejoin. */
type OnPlayerJoinedGamePayload = /** @noSelf **/
{ 
/** Identifier of the event */
"name": typeof defines.events;
 "player_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when a player is kicked. */
type OnPlayerKickedPayload = /** @noSelf **/
{ 
/** The player that did the kicking if any. */
"by_player": (null | number);
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The player kicked. */
"player_index": number;
 
/** The reason given if any. */
"reason": (null | string);
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called after a player leaves the game. This is not called when closing a save file in singleplayer, as the player doesn't actually leave the game, and the save is just on pause until they rejoin. */
type OnPlayerLeftGamePayload = /** @noSelf **/
{ 
/** Identifier of the event */
"name": typeof defines.events;
 "player_index": number;
 "reason": typeof defines.disconnect_reason;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called after a players main inventory changed in some way. */
type OnPlayerMainInventoryChangedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
"name": typeof defines.events;
 "player_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called after the results of an entity being mined are collected just before the entity is destroyed. After this event any items in the buffer will be transferred into the player as if they came from mining the entity. Can be filtered using [LuaPlayerMinedEntityEventFilter](LuaPlayerMinedEntityEventFilter). */
type OnPlayerMinedEntityPayload = /** @noSelf **/
{ 
/** The temporary inventory that holds the result of mining the entity. */
"buffer": LuaInventory;
 
/** The entity that has been mined. */
"entity": LuaEntity;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The index of the player doing the mining. */
"player_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when the player mines something. */
type OnPlayerMinedItemPayload = /** @noSelf **/
{ 
/** The item given to the player */
"item_stack": SimpleItemStack;
 
/** Identifier of the event */
"name": typeof defines.events;
 "player_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called after a player mines tiles. */
type OnPlayerMinedTilePayload = /** @noSelf **/
{ 
/** Identifier of the event */
"name": typeof defines.events;
 "player_index": number;
 
/** The surface the tile(s) were mined from. */
"surface_index": number;
 
/** Tick the event was generated. */
"tick": number;
 
/** The position data. */
"tiles": OldTileAndPosition;
 }

/** Called when a player is muted. */
type OnPlayerMutedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The player. */
"player_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when a player invokes the "smart pipette" over an entity. */
type OnPlayerPipettePayload = /** @noSelf **/
{ 
/** The item put in the cursor */
"item": LuaItemPrototype;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The player */
"player_index": number;
 
/** Tick the event was generated. */
"tick": number;
 
/** If cheat mode was used to give a free stack of the item. */
"used_cheat_mode": boolean;
 }

/** Called after the player puts equipment in an equipment grid */
type OnPlayerPlacedEquipmentPayload = /** @noSelf **/
{ 
/** The equipment put in the equipment grid. */
"equipment": LuaEquipment;
 
/** The equipment grid the equipment was put in. */
"grid": LuaEquipmentGrid;
 
/** Identifier of the event */
"name": typeof defines.events;
 "player_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when a player is promoted. */
type OnPlayerPromotedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The player. */
"player_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when a player is removed (deleted) from the game. Not to be confused with the player logging of this is different in that the player is deleted as if he never existed in the save file. */
type OnPlayerRemovedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The player index that was removed */
"player_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called after the player removes equipment from an equipment grid */
type OnPlayerRemovedEquipmentPayload = /** @noSelf **/
{ 
/** The count of equipment removed. */
"count": number;
 
/** The equipment removed. */
"equipment": string;
 
/** The equipment grid removed from. */
"grid": LuaEquipmentGrid;
 
/** Identifier of the event */
"name": typeof defines.events;
 "player_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when a player repairs an entity. Can be filtered using [LuaPlayerRepairedEntityEventFilter](LuaPlayerRepairedEntityEventFilter). */
type OnPlayerRepairedEntityPayload = /** @noSelf **/
{ "entity": LuaEntity;
 
/** Identifier of the event */
"name": typeof defines.events;
 "player_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called after a player respawns. */
type OnPlayerRespawnedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
"name": typeof defines.events;
 "player_index": number;
 
/** The player port used to respawn if one was used. */
"player_port": (null | LuaEntity);
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called after a player reverse-selects an area with a selection-tool item. */
type OnPlayerReverseSelectedAreaPayload = /** @noSelf **/
{ 
/** The area selected. */
"area": BoundingBox;
 
/** The entities selected. */
"entities": LuaEntity;
 
/** The item used to select the area. */
"item": string;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The player doing the selection. */
"player_index": number;
 
/** The surface selected. */
"surface": LuaSurface;
 
/** Tick the event was generated. */
"tick": number;
 
/** The tiles selected. */
"tiles": LuaTile;
 }

/** Called when the player rotates an entity. This event is only fired when the entity actually changes its orientation -- pressing the rotate key on an entity that can't be rotated won't fire this event. */
type OnPlayerRotatedEntityPayload = /** @noSelf **/
{ 
/** The rotated entity. */
"entity": LuaEntity;
 
/** Identifier of the event */
"name": typeof defines.events;
 "player_index": number;
 
/** The previous direction */
"previous_direction": typeof defines.direction;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called after a player selects an area with a selection-tool item. */
type OnPlayerSelectedAreaPayload = /** @noSelf **/
{ 
/** The area selected. */
"area": BoundingBox;
 
/** The entities selected. */
"entities": LuaEntity;
 
/** The item used to select the area. */
"item": string;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The player doing the selection. */
"player_index": number;
 
/** The surface selected. */
"surface": LuaSurface;
 
/** Tick the event was generated. */
"tick": number;
 
/** The tiles selected. */
"tiles": LuaTile;
 }

/** Called when a player sets a quickbar slot to anything (new value, or set to empty). */
type OnPlayerSetQuickBarSlotPayload = /** @noSelf **/
{ 
/** Identifier of the event */
"name": typeof defines.events;
 "player_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when a player selects an area with a blueprint. */
type OnPlayerSetupBlueprintPayload = /** @noSelf **/
{ 
/** If normal selection or alt selection was used. */
"alt": boolean;
 
/** The area selected. */
"area": BoundingBox;
 
/** The item used to select the area. */
"item": string;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The player doing the selection. */
"player_index": number;
 
/** The surface selected. */
"surface": LuaSurface;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when a player toggles alt mode, also known as "show entity info". */
type OnPlayerToggledAltModePayload = /** @noSelf **/
{ 
/** The new alt mode value. This value is a shortcut for accessing [GameViewSettings::show_entity_info](GameViewSettings::show_entity_info) on the player. */
"alt_mode": boolean;
 
/** Identifier of the event */
"name": typeof defines.events;
 "player_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when a player toggles the map editor on or off. */
type OnPlayerToggledMapEditorPayload = /** @noSelf **/
{ 
/** Identifier of the event */
"name": typeof defines.events;
 "player_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called after a players trash inventory changed in some way. */
type OnPlayerTrashInventoryChangedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
"name": typeof defines.events;
 "player_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when a player is un-banned. */
type OnPlayerUnbannedPayload = /** @noSelf **/
{ 
/** The player that did the un-banning if any. */
"by_player": (null | number);
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The player un-banned. */
"player_index": (null | number);
 
/** The player name un-banned. */
"player_name": string;
 
/** The reason the player was banned if any. */
"reason": (null | string);
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when a player is unmuted. */
type OnPlayerUnmutedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The player. */
"player_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when a player uses a capsule that results in some game action. */
type OnPlayerUsedCapsulePayload = /** @noSelf **/
{ 
/** The capsule item used. */
"item": LuaItemPrototype;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The player. */
"player_index": number;
 
/** The position the capsule was used. */
"position": MapPosition;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when a player uses spidertron remote to send a spidertron to a given position */
type OnPlayerUsedSpiderRemotePayload = /** @noSelf **/
{ 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The player that used the remote. */
"player_index": number;
 
/** Goal position to which spidertron was sent to. */
"position": MapPosition;
 
/** If the use was successful. It may fail when spidertron has different driver or when player is on different surface. */
"success": boolean;
 
/** Tick the event was generated. */
"tick": number;
 
/** Spider vehicle which was requested to move. */
"vehicle": LuaEntity;
 }

/** Called after an entity dies. Can be filtered using [LuaPostEntityDiedEventFilter](LuaPostEntityDiedEventFilter). */
type OnPostEntityDiedPayload = /** @noSelf **/
{ 
/** The corpses created by the entity dying if any. */
"corpses": LuaEntity;
 
/** The damage type if any. */
"damage_type": (null | LuaDamagePrototype);
 
/** The force that did the killing if any. */
"force": (null | LuaForce);
 
/** The ghost created by the entity dying if any. */
"ghost": (null | LuaEntity);
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** Position where the entity died. */
"position": MapPosition;
 
/** The entity prototype of the entity that died. */
"prototype": LuaEntityPrototype;
 
/** The surface the entity was on. */
"surface_index": number;
 
/** Tick the event was generated. */
"tick": number;
 
/** The unit number the entity had if any. */
"unit_number": (null | number);
 }

/** Called when players uses an item to build something. Called before [on_built_entity](on_built_entity). */
type OnPreBuildPayload = /** @noSelf **/
{ 
/** Item was placed while moving. */
"created_by_moving": boolean;
 
/** The direction the item was facing when placed. */
"direction": typeof defines.direction;
 
/** If building this blueprint was flipped horizontally. */
"flip_horizontal": boolean;
 
/** If building this blueprint was flipped vertically. */
"flip_vertical": boolean;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The player who did the placing. */
"player_index": number;
 
/** Where the item was placed. */
"position": MapPosition;
 
/** Item was placed using shift building. */
"shift_build": boolean;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called before one or more chunks are deleted using [LuaSurface::delete_chunk](LuaSurface::delete_chunk). */
type OnPreChunkDeletedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The chunks to be deleted. */
"positions": ChunkPosition;
 "surface_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called before entity copy-paste is done. */
type OnPreEntitySettingsPastedPayload = /** @noSelf **/
{ 
/** The destination entity settings will be copied to. */
"destination": LuaEntity;
 
/** Identifier of the event */
"name": typeof defines.events;
 "player_index": number;
 
/** The source entity settings will be copied from. */
"source": LuaEntity;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called before a ghost entity is destroyed as a result of being marked for deconstruction. Can be filtered using [LuaPreGhostDeconstructedEventFilter](LuaPreGhostDeconstructedEventFilter). */
type OnPreGhostDeconstructedPayload = /** @noSelf **/
{ "ghost": LuaEntity;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The player that did the deconstruction if any. */
"player_index": (null | number);
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called before a ghost entity is upgraded. Can be filtered using [LuaPreGhostUpgradedEventFilter](LuaPreGhostUpgradedEventFilter). */
type OnPreGhostUpgradedPayload = /** @noSelf **/
{ "ghost": LuaEntity;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The player that did the upgrade if any. */
"player_index": (null | number);
 "target": LuaEntityPrototype;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called directly before a permission group is deleted. */
type OnPrePermissionGroupDeletedPayload = /** @noSelf **/
{ 
/** The group to be deleted. */
"group": LuaPermissionGroup;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The player doing the deletion. */
"player_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called directly before a permission string is imported. */
type OnPrePermissionStringImportedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The player importing the string. */
"player_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when a player queues something to be crafted. */
type OnPrePlayerCraftedItemPayload = /** @noSelf **/
{ 
/** The items removed from the players inventory to do the crafting. */
"items": LuaInventory;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The player doing the crafting. */
"player_index": number;
 
/** The number of times the recipe is being queued. */
"queued_count": number;
 
/** The recipe being queued. */
"recipe": LuaRecipe;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called before a players dies. */
type OnPrePlayerDiedPayload = /** @noSelf **/
{ "cause": (null | LuaEntity);
 
/** Identifier of the event */
"name": typeof defines.events;
 "player_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called before a player leaves the game. */
type OnPrePlayerLeftGamePayload = /** @noSelf **/
{ 
/** Identifier of the event */
"name": typeof defines.events;
 "player_index": number;
 "reason": typeof defines.disconnect_reason;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when the player finishes mining an entity, before the entity is removed from map. Can be filtered using [LuaPrePlayerMinedEntityEventFilter](LuaPrePlayerMinedEntityEventFilter). */
type OnPrePlayerMinedItemPayload = /** @noSelf **/
{ 
/** The entity being mined */
"entity": LuaEntity;
 
/** Identifier of the event */
"name": typeof defines.events;
 "player_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called before a player is removed (deleted) from the game. Not to be confused with the player logging of this is different in that the player is deleted as if he never existed in the save file. */
type OnPrePlayerRemovedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The player index that will be removed */
"player_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called before a player toggles the map editor on or off. */
type OnPrePlayerToggledMapEditorPayload = /** @noSelf **/
{ 
/** Identifier of the event */
"name": typeof defines.events;
 "player_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called directly before a robot explodes cliffs. */
type OnPreRobotExplodedCliffPayload = /** @noSelf **/
{ "cliff": LuaEntity;
 
/** The cliff explosive used. */
"item": LuaItemPrototype;
 
/** Identifier of the event */
"name": typeof defines.events;
 "robot": LuaEntity;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called just before a script inventory is resized. */
type OnPreScriptInventoryResizedPayload = /** @noSelf **/
{ "inventory": LuaInventory;
 
/** The mod that did the resizing. This will be `"core"` if done by console command or scenario script. */
"mod": string;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The new inventory size. */
"new_size": number;
 
/** The old inventory size. */
"old_size": number;
 
/** If done by console command; the player who ran the command. */
"player_index": (null | number);
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called just before a surface is cleared (all entities removed and all chunks deleted). */
type OnPreSurfaceClearedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
"name": typeof defines.events;
 "surface_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called just before a surface is deleted. */
type OnPreSurfaceDeletedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
"name": typeof defines.events;
 "surface_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when research is cancelled. */
type OnResearchCancelledPayload = /** @noSelf **/
{ 
/** The force whose research was cancelled. */
"force": LuaForce;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** A mapping of technology name to how many times it was cancelled. */
"research": Record<string, number>;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when a research finishes. */
type OnResearchFinishedPayload = /** @noSelf **/
{ 
/** If the technology was researched by script. */
"by_script": boolean;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The researched technology */
"research": LuaTechnology;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when a research is reversed (unresearched). */
type OnResearchReversedPayload = /** @noSelf **/
{ 
/** If the technology was un-researched by script. */
"by_script": boolean;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The technology un-researched */
"research": LuaTechnology;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when a technology research starts. */
type OnResearchStartedPayload = /** @noSelf **/
{ "last_research": (null | LuaTechnology);
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The technology being researched */
"research": LuaTechnology;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when a resource entity reaches 0 or its minimum yield for infinite resources. */
type OnResourceDepletedPayload = /** @noSelf **/
{ "entity": LuaEntity;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when a construction robot builds an entity. Can be filtered using [LuaRobotBuiltEntityEventFilter](LuaRobotBuiltEntityEventFilter). */
type OnRobotBuiltEntityPayload = /** @noSelf **/
{ 
/** The entity built. */
"created_entity": LuaEntity;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The robot that did the building. */
"robot": LuaEntity;
 
/** The item used to do the building. */
"stack": LuaItemStack;
 
/** The tags associated with this entity if any. */
"tags": (null | Tags);
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called after a robot builds tiles. */
type OnRobotBuiltTilePayload = /** @noSelf **/
{ 
/** The item type used to build the tiles. */
"item": LuaItemPrototype;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The robot. */
"robot": LuaEntity;
 
/** The stack used to build the tiles (may be empty if all of the items where used to build the tiles). */
"stack": LuaItemStack;
 
/** The surface the tile(s) are build on. */
"surface_index": number;
 
/** Tick the event was generated. */
"tick": number;
 
/** The tile prototype that was placed. */
"tile": LuaTilePrototype;
 
/** The position data. */
"tiles": OldTileAndPosition;
 }

/** Called directly after a robot explodes cliffs. */
type OnRobotExplodedCliffPayload = /** @noSelf **/
{ 
/** The cliff explosive used. */
"item": LuaItemPrototype;
 
/** Identifier of the event */
"name": typeof defines.events;
 "robot": LuaEntity;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when a robot mines an entity. */
type OnRobotMinedPayload = /** @noSelf **/
{ 
/** The entity the robot just picked up. */
"item_stack": SimpleItemStack;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The robot that did the mining. */
"robot": LuaEntity;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called after the results of an entity being mined are collected just before the entity is destroyed. After this event any items in the buffer will be transferred into the robot as if they came from mining the entity. Can be filtered using [LuaRobotMinedEntityEventFilter](LuaRobotMinedEntityEventFilter). */
type OnRobotMinedEntityPayload = /** @noSelf **/
{ 
/** The temporary inventory that holds the result of mining the entity. */
"buffer": LuaInventory;
 
/** The entity that has been mined. */
"entity": LuaEntity;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The robot doing the mining. */
"robot": LuaEntity;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called after a robot mines tiles. */
type OnRobotMinedTilePayload = /** @noSelf **/
{ 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The robot. */
"robot": LuaEntity;
 
/** The surface the tile(s) were mined on. */
"surface_index": number;
 
/** Tick the event was generated. */
"tick": number;
 
/** The position data. */
"tiles": OldTileAndPosition;
 }

/** Called before a robot mines an entity. Can be filtered using [LuaPreRobotMinedEntityEventFilter](LuaPreRobotMinedEntityEventFilter). */
type OnRobotPreMinedPayload = /** @noSelf **/
{ 
/** The entity which is about to be mined. */
"entity": LuaEntity;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The robot that's about to do the mining. */
"robot": LuaEntity;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when a rocket silo is ordered to be launched. */
type OnRocketLaunchOrderedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The player that is riding the rocket, if any. */
"player_index": (null | number);
 "rocket": LuaEntity;
 "rocket_silo": LuaEntity;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when the rocket is launched. */
type OnRocketLaunchedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The player that is riding the rocket, if any. */
"player_index": (null | number);
 "rocket": LuaEntity;
 "rocket_silo": (null | LuaEntity);
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when a runtime mod setting is changed by a player. */
type OnRuntimeModSettingChangedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
"name": typeof defines.events;
 
/** If the `setting_type` is `"global"` and it was changed through the mod settings GUI, this is the index of the player that changed the global setting. If the `setting_type` is `"runtime-per-user"` and it changed a current setting of the player, this is the index of the player whose setting was changed. In all other cases, this is `nil`. */
"player_index": (null | number);
 
/** The prototype name of the setting that was changed. */
"setting": string;
 
/** Either "runtime-per-user" or "runtime-global". */
"setting_type": string;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called just after a script inventory is resized. */
type OnScriptInventoryResizedPayload = /** @noSelf **/
{ "inventory": LuaInventory;
 
/** The mod that did the resizing. This will be `"core"` if done by console command or scenario script. */
"mod": string;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The new inventory size. */
"new_size": number;
 
/** The old inventory size. */
"old_size": number;
 
/** Any items which didn't fit into the new inventory size. */
"overflow_inventory": LuaInventory;
 
/** If done by console command; the player who ran the command. */
"player_index": (null | number);
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when a [LuaSurface::request_path](LuaSurface::request_path) call completes. */
type OnScriptPathRequestFinishedPayload = /** @noSelf **/
{ 
/** Handle to associate the callback with a particular call to [LuaSurface::request_path](LuaSurface::request_path). */
"id": number;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The actual path that the pathfinder has determined. `nil` if pathfinding failed. */
"path": (null | PathfinderWaypoint);
 
/** Tick the event was generated. */
"tick": number;
 
/** Indicates that the pathfinder failed because it is too busy, and that you can retry later. */
"try_again_later": boolean;
 }

/** Called when a script trigger effect is triggered. */
type OnScriptTriggerEffectPayload = /** @noSelf **/
{ 
/** The effect_id specified in the trigger effect. */
"effect_id": string;
 
/** Identifier of the event */
"name": typeof defines.events;
 "source_entity": (null | LuaEntity);
 "source_position": (null | MapPosition);
 
/** The surface the effect happened on. */
"surface_index": number;
 "target_entity": (null | LuaEntity);
 "target_position": (null | MapPosition);
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when an entity of type `radar` finishes scanning a sector. Can be filtered for the radar using [LuaSectorScannedEventFilter](LuaSectorScannedEventFilter). */
type OnSectorScannedPayload = /** @noSelf **/
{ 
/** Area of the scanned chunk. */
"area": BoundingBox;
 
/** The chunk scanned. */
"chunk_position": ChunkPosition;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The radar that did the scanning. */
"radar": LuaEntity;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called after the selected entity changes for a given player. */
type OnSelectedEntityChangedPayload = /** @noSelf **/
{ 
/** The last selected entity if it still exists and there was one. */
"last_entity": (null | LuaEntity);
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The player whose selected entity changed. */
"player_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when a spider finishes moving to its autopilot position. */
type OnSpiderCommandCompletedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
"name": typeof defines.events;
 
/** Tick the event was generated. */
"tick": number;
 
/** Spider vehicle which was requested to move. */
"vehicle": LuaEntity;
 }

/** Called when a translation request generated through [LuaPlayer::request_translation](LuaPlayer::request_translation) is translated. */
type OnStringTranslatedPayload = /** @noSelf **/
{ 
/** The localised string being translated. */
"localised_string": LocalisedString;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The player whose locale was used for the translation. */
"player_index": number;
 
/** The translated `localised_string`. */
"result": string;
 
/** Tick the event was generated. */
"tick": number;
 
/** Whether the requested localised string was valid and could be translated. */
"translated": boolean;
 }

/** Called just after a surface is cleared (all entities removed and all chunks deleted). */
type OnSurfaceClearedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
"name": typeof defines.events;
 "surface_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when a surface is created. */
type OnSurfaceCreatedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
"name": typeof defines.events;
 "surface_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called after a surface is deleted. */
type OnSurfaceDeletedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
"name": typeof defines.events;
 "surface_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called after a surface is imported. */
type OnSurfaceImportedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The original surface name. */
"original_name": string;
 "surface_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when a surface is renamed. */
type OnSurfaceRenamedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
"name": typeof defines.events;
 "new_name": string;
 "old_name": string;
 "surface_index": number;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when [LuaForce::reset_technology_effects](LuaForce::reset_technology_effects) is finished. */
type OnTechnologyEffectsResetPayload = /** @noSelf **/
{ "force": LuaForce;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** Tick the event was generated. */
"tick": number;
 }

/** It is fired once every tick. Since this event is fired every tick, its handler shouldn't include performance heavy code. */
type OnTickPayload = /** @noSelf **/
{ 
/** Identifier of the event */
"name": typeof defines.events;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when a train changes state (started to stopped and vice versa) */
type OnTrainChangedStatePayload = /** @noSelf **/
{ 
/** Identifier of the event */
"name": typeof defines.events;
 "old_state": typeof defines.train_state;
 
/** Tick the event was generated. */
"tick": number;
 "train": LuaTrain;
 }

/** Called when a new train is created either through disconnecting/connecting an existing one or building a new one. */
type OnTrainCreatedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The first old train id when splitting/merging trains. */
"old_train_id_1": (null | number);
 
/** The second old train id when splitting/merging trains. */
"old_train_id_2": (null | number);
 
/** Tick the event was generated. */
"tick": number;
 "train": LuaTrain;
 }

/** Called when a trains schedule is changed either by the player or through script. */
type OnTrainScheduleChangedPayload = /** @noSelf **/
{ 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The player who made the change if any. */
"player_index": (null | number);
 
/** Tick the event was generated. */
"tick": number;
 "train": LuaTrain;
 }

/** Called when an entity with a trigger prototype (such as capsules) create an entity AND that trigger prototype defined `trigger_created_entity="true"`. */
type OnTriggerCreatedEntityPayload = /** @noSelf **/
{ "entity": LuaEntity;
 
/** Identifier of the event */
"name": typeof defines.events;
 "source": (null | LuaEntity);
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when an entity with a trigger prototype (such as capsules) fire an artillery projectile AND that trigger prototype defined `trigger_fired_artillery="true"`. */
type OnTriggerFiredArtilleryPayload = /** @noSelf **/
{ "entity": LuaEntity;
 
/** Identifier of the event */
"name": typeof defines.events;
 "source": (null | LuaEntity);
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when a unit is added to a unit group. */
type OnUnitAddedToGroupPayload = /** @noSelf **/
{ "group": LuaUnitGroup;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** Tick the event was generated. */
"tick": number;
 "unit": LuaEntity;
 }

/** Called when a new unit group is created, before any members are added to it. */
type OnUnitGroupCreatedPayload = /** @noSelf **/
{ "group": LuaUnitGroup;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when a unit group finishes gathering and starts executing its command. */
type OnUnitGroupFinishedGatheringPayload = /** @noSelf **/
{ "group": LuaUnitGroup;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** Tick the event was generated. */
"tick": number;
 }

/** Called when a unit is removed from a unit group. */
type OnUnitRemovedFromGroupPayload = /** @noSelf **/
{ "group": LuaUnitGroup;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** Tick the event was generated. */
"tick": number;
 "unit": LuaEntity;
 }

/** Called when a worker (construction or logistic) robot expires through a lack of energy. */
type OnWorkerRobotExpiredPayload = /** @noSelf **/
{ 
/** Identifier of the event */
"name": typeof defines.events;
 "robot": LuaEntity;
 
/** Tick the event was generated. */
"tick": number;
 }

/** A static event mods can use to tell other mods they built something by script. This event is only raised if a mod does so with [LuaBootstrap::raise_event](LuaBootstrap::raise_event) or [LuaBootstrap::raise_script_built](LuaBootstrap::raise_script_built), or when `raise_built` is passed to [LuaSurface::create_entity](LuaSurface::create_entity). Can be filtered using [LuaScriptRaisedBuiltEventFilter](LuaScriptRaisedBuiltEventFilter). */
type ScriptRaisedBuiltPayload = /** @noSelf **/
{ 
/** The entity that has been built. */
"entity": LuaEntity;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** Tick the event was generated. */
"tick": number;
 }

/** A static event mods can use to tell other mods they destroyed something by script. This event is only raised if a mod does so with [LuaBootstrap::raise_event](LuaBootstrap::raise_event) or [LuaBootstrap::raise_script_destroy](LuaBootstrap::raise_script_destroy), or when `raise_destroy` is passed to [LuaEntity::destroy](LuaEntity::destroy). Can be filtered using [LuaScriptRaisedDestroyEventFilter](LuaScriptRaisedDestroyEventFilter). */
type ScriptRaisedDestroyPayload = /** @noSelf **/
{ 
/** The entity that was destroyed. */
"entity": LuaEntity;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** Tick the event was generated. */
"tick": number;
 }

/** A static event mods can use to tell other mods they revived something by script. This event is only raised if a mod does so with [LuaBootstrap::raise_event](LuaBootstrap::raise_event) or [LuaBootstrap::raise_script_revive](LuaBootstrap::raise_script_revive), or when `raise_revive` is passed to [LuaEntity::revive](LuaEntity::revive). Can be filtered using [LuaScriptRaisedReviveEventFilter](LuaScriptRaisedReviveEventFilter). */
type ScriptRaisedRevivePayload = /** @noSelf **/
{ 
/** The entity that was revived. */
"entity": LuaEntity;
 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The tags associated with this entity, if any. */
"tags": (null | Tags);
 
/** Tick the event was generated. */
"tick": number;
 }

/** A static event mods can use to tell other mods they changed tiles on a surface by script. This event is only raised if a mod does so with [LuaBootstrap::raise_event](LuaBootstrap::raise_event) or [LuaBootstrap::raise_script_set_tiles](LuaBootstrap::raise_script_set_tiles), or when `raise_event` is passed to [LuaSurface::set_tiles](LuaSurface::set_tiles). */
type ScriptRaisedSetTilesPayload = /** @noSelf **/
{ 
/** Identifier of the event */
"name": typeof defines.events;
 
/** The surface whose tiles were changed. */
"surface_index": number;
 
/** Tick the event was generated. */
"tick": number;
 
/** The tiles that were changed. */
"tiles": Tile;
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