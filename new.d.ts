/** @noSelfInFile */
/** defines */
declare const defines: Defines;

/** @noSelf **/
interface Defines {
    alert_type: /** @noSelf **/
        {
            custom: any;
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
        {
            deleted: any;
            fail: any;
            in_progress: any;
            success: any;
        };
    build_check_type: /** @noSelf **/
        {
            blueprint_ghost: any;
            ghost_revive: any;
            manual: any;
            manual_ghost: any;
            script: any;
            script_ghost: any;
        };
    chain_signal_state: /** @noSelf **/
        {
            all_open: any;
            none: any;
            none_open: any;
            partially_open: any;
        };
    chunk_generated_status: /** @noSelf **/
        {
            basic_tiles: any;
            corrected_tiles: any;
            custom_tiles: any;
            entities: any;
            nothing: any;
            tiles: any;
        };
    circuit_condition_index: /** @noSelf **/
        {
            arithmetic_combinator: any;
            constant_combinator: any;
            decider_combinator: any;
            inserter_circuit: any;
            inserter_logistic: any;
            lamp: any;
            offshore_pump: any;
            pump: any;
        };
    circuit_connector_id: /** @noSelf **/
        {
            accumulator: any;
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
        {
            attack: any;
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
        {
            logical_and: any;
            logical_or: any;
            return_last: any;
        };
    control_behavior: /** @noSelf **/
        {
            inserter: /** @noSelf **/
                {
                    circuit_mode_of_operation: /** @noSelf **/
                        {
                            enable_disable: any;
                            none: any;
                            read_hand_contents: any;
                            set_filters: any;
                            set_stack_size: any;
                        };
                    hand_read_mode: /** @noSelf **/
                        {
                            hold: any;
                            pulse: any;
                        };
                };
            lamp: /** @noSelf **/
                {
                    circuit_mode_of_operation: /** @noSelf **/
                        {
                            use_colors: any;
                        };
                };
            logistic_container: /** @noSelf **/
                {
                    circuit_mode_of_operation: /** @noSelf **/
                        {
                            send_contents: any;
                            set_requests: any;
                        };
                };
            mining_drill: /** @noSelf **/
                {
                    resource_read_mode: /** @noSelf **/
                        {
                            entire_patch: any;
                            this_miner: any;
                        };
                };
            transport_belt: /** @noSelf **/
                {
                    content_read_mode: /** @noSelf **/
                        {
                            hold: any;
                            pulse: any;
                        };
                };
            type: /** @noSelf **/
                {
                    accumulator: any;
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
        {
            character: any;
            cutscene: any;
            editor: any;
            ghost: any;
            god: any;
            spectator: any;
        };
    deconstruction_item: /** @noSelf **/
        {
            entity_filter_mode: /** @noSelf **/
                {
                    blacklist: any;
                    whitelist: any;
                };
            tile_filter_mode: /** @noSelf **/
                {
                    blacklist: any;
                    whitelist: any;
                };
            tile_selection_mode: /** @noSelf **/
                {
                    always: any;
                    never: any;
                    normal: any;
                    only: any;
                };
        };
    difficulty: /** @noSelf **/
        {
            easy: any;
            hard: any;
            normal: any;
        };
    difficulty_settings: /** @noSelf **/
        {
            recipe_difficulty: /** @noSelf **/
                {
                    expensive: any;
                    normal: any;
                };
            technology_difficulty: /** @noSelf **/
                {
                    expensive: any;
                    normal: any;
                };
        };
    direction: /** @noSelf **/
        {
            east: any;
            north: any;
            northeast: any;
            northwest: any;
            south: any;
            southeast: any;
            southwest: any;
            west: any;
        };
    disconnect_reason: /** @noSelf **/
        {
            afk: any;
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
        {
            by_anything: any;
            by_damage: any;
            by_enemy: any;
            none: any;
        };
    entity_status: /** @noSelf **/
        {
            cant_divide_segments: any;
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
        {
            on_ai_command_completed: any;
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
        {
            fifty_hours: any;
            five_seconds: any;
            one_hour: any;
            one_minute: any;
            one_thousand_hours: any;
            ten_hours: any;
            ten_minutes: any;
            two_hundred_fifty_hours: any;
        };
    group_state: /** @noSelf **/
        {
            attacking_distraction: any;
            attacking_target: any;
            finished: any;
            gathering: any;
            moving: any;
            pathfinding: any;
            wander_in_group: any;
        };
    gui_type: /** @noSelf **/
        {
            achievement: any;
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
        {
            activate_copy: any;
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
        {
            game_controller: any;
            keyboard_and_mouse: any;
        };
    inventory: /** @noSelf **/
        {
            artillery_turret_ammo: any;
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
        {
            character_provider: any;
            character_requester: any;
            character_storage: any;
            generic_on_off_behavior: any;
            logistic_container: any;
            vehicle_storage: any;
        };
    logistic_mode: /** @noSelf **/
        {
            active_provider: any;
            buffer: any;
            none: any;
            passive_provider: any;
            requester: any;
            storage: any;
        };
    mouse_button_type: /** @noSelf **/
        {
            left: any;
            middle: any;
            none: any;
            right: any;
        };
    rail_connection_direction: /** @noSelf **/
        {
            left: any;
            none: any;
            right: any;
            straight: any;
        };
    rail_direction: /** @noSelf **/
        {
            back: any;
            front: any;
        };
    relative_gui_position: /** @noSelf **/
        {
            bottom: any;
            left: any;
            right: any;
            top: any;
        };
    relative_gui_type: /** @noSelf **/
        {
            accumulator_gui: any;
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
        {
            chart: any;
            chart_zoomed_in: any;
            game: any;
        };
    rich_text_setting: /** @noSelf **/
        {
            disabled: any;
            enabled: any;
            highlight: any;
        };
    riding: /** @noSelf **/
        {
            acceleration: /** @noSelf **/
                {
                    accelerating: any;
                    braking: any;
                    nothing: any;
                    reversing: any;
                };
            direction: /** @noSelf **/
                {
                    left: any;
                    right: any;
                    straight: any;
                };
        };
    rocket_silo_status: /** @noSelf **/
        {
            arms_advance: any;
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
        {
            not_shooting: any;
            shooting_enemies: any;
            shooting_selected: any;
        };
    signal_state: /** @noSelf **/
        {
            closed: any;
            open: any;
            reserved: any;
            reserved_by_circuit_network: any;
        };
    train_state: /** @noSelf **/
        {
            arrive_signal: any;
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
        {
            left_line: any;
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
        {
            electric_pole: any;
            power_switch_left: any;
            power_switch_right: any;
        };
    wire_type: /** @noSelf **/
        {
            copper: any;
            green: any;
            red: any;
        };
}

/** concepts */
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