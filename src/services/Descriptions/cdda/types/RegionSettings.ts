export interface IRegionSettings {
  type: 'region_settings';
  id: string;
  default_oter?: string;
  default_groundcover?: Array<Array<number | string>>;
  region_terrain_and_furniture?: Regionterrainandfurniture;
  river_scale?: number;
  field_coverage?: Fieldcoverage;
  overmap_lake_settings?: Overmaplakesettings;
  overmap_ravine_settings?: Overmapravinesettings;
  overmap_forest_settings?: Overmapforestsettings;
  forest_mapgen_settings?: Forestmapgensettings;
  forest_trail_settings?: Foresttrailsettings;
  map_extras?: Mapextras;
  city?: City;
  weather?: Weather;
  overmap_feature_flag_settings?: Overmapfeatureflagsettings;
}

interface Overmapfeatureflagsettings {
  clear_blacklist: boolean;
  blacklist: any[];
  clear_whitelist: boolean;
  whitelist: any[];
}

interface Weather {
  base_temperature: number;
  base_humidity: number;
  base_pressure: number;
  base_wind?: number;
  base_wind_distrib_peaks?: number;
  base_wind_season_variation?: number;
  weather_types: string[];
}

interface City {
  shop_radius: number;
  shop_sigma: number;
  park_radius: number;
  park_sigma: number;
  houses: Houses;
  parks: Parks;
  shops: Shops;
}

interface Shops {
  bus_station?: number;
  city_block_2?: number;
  s_apt?: number;
  s_apt_2?: number;
  urban_13_dense_house_apt_house?: number;
  urban_14_dense_house_mart_food?: number;
  urban_25_dense_diner_apt?: number;
  urban_29_dense_row?: number;
  town_hall?: number;
  craft_shop?: number;
  craft_shop_1?: number;
  craft_shop_2?: number;
  s_gas: number;
  s_gas_1?: number;
  s_pharm?: number;
  s_pharm_1?: number;
  s_grocery?: number;
  s_grocery_1?: number;
  s_hardware: number;
  s_hardware_1?: number;
  s_hardware_2?: number;
  s_hardware_3?: number;
  s_hunting?: number;
  s_sports?: number;
  dojo?: number;
  dojo_1?: number;
  gym?: number;
  gym_fitness?: number;
  gym_fitness_1?: number;
  s_liquor: number;
  s_gun: number;
  s_gun_1?: number;
  s_gun_2?: number;
  s_gun_3?: number;
  s_gun_4?: number;
  s_gunstore?: number;
  s_clothes?: number;
  s_clothes_1?: number;
  s_clothes_2?: number;
  s_clothes_3?: number;
  s_clothes_4?: number;
  s_clothes_5?: number;
  s_clothes_6?: number;
  s_library?: number;
  s_library_1?: number;
  s_library_2?: number;
  s_bookstore?: number;
  s_bookstore_1?: number;
  s_bookstore_2?: number;
  s_restaurant?: number;
  s_restaurant_foodplace?: number;
  s_restaurant_1?: number;
  s_restaurant_2?: number;
  s_restaurant_3?: number;
  s_diner?: number;
  sub_station?: number;
  bank?: number;
  bank_1?: number;
  s_pizza_parlor?: number;
  s_pizza_parlor_1?: number;
  bar?: number;
  bar_1?: number;
  s_electronics?: number;
  s_electronics_1?: number;
  s_electronicstore?: number;
  pawn?: number;
  pawn_1?: number;
  pawn_pf?: number;
  mil_surplus?: number;
  mil_surplus_1?: number;
  mil_surplus_2?: number;
  s_garage?: number;
  s_garage_1?: number;
  s_garage_2?: number;
  station_radio: number;
  station_radio_1?: number;
  office_doctor: number;
  office_doctor_1?: number;
  office_doctor_2?: number;
  office_tower_collapsed?: number;
  s_restaurant_fast?: number;
  s_restaurant_fast_1?: number;
  s_restaurant_coffee?: number;
  s_restaurant_coffee_1?: number;
  s_restaurant_coffee_2?: number;
  s_teashop?: number;
  s_teashop_1?: number;
  bowling_alley?: number;
  church?: number;
  church_1?: number;
  office_cubical?: number;
  office_cubical_1?: number;
  furniture?: number;
  abstorefront: number;
  abstorefront_1?: number;
  abstorefront_2?: number;
  police: number;
  police_1?: number;
  police_2?: number;
  fire_station?: number;
  fire_station_1?: number;
  home_improvement?: number;
  s_lot: number;
  s_arcade?: number;
  s_games?: number;
  s_jewelry?: number;
  s_antique?: number;
  s_gardening?: number;
  museum?: number;
  s_music?: number;
  s_laundromat?: number;
  s_laundromat_1?: number;
  veterinarian?: number;
  animalpound?: number;
  animalshelter?: number;
  mortuary?: number;
  smallscrapyard?: number;
  stripclub?: number;
  stripclub_1?: number;
  stripclub_2?: number;
  orchard?: number;
  dispensary?: number;
  dispensary_1?: number;
  dispensary_2?: number;
  headshop?: number;
  small_office?: number;
  art_gallery?: number;
  small_storage_units?: number;
  small_storage_units_1?: number;
  construction_site?: number;
  post_office?: number;
  post_office_1?: number;
  candy_shop?: number;
  candy_shop_1?: number;
  bakery?: number;
  icecream_shop?: number;
  s_butcher?: number;
  s_butcher_1?: number;
  s_butcher_2?: number;
  s_bike_shop?: number;
  s_bike_shop_1?: number;
  paintball_field?: number;
  paintball_field_1?: number;
  smoke_lounge?: number;
  smoke_lounge_1?: number;
  gambling_hall?: number;
  gambling_hall_1?: number;
  music_venue?: number;
  music_venue_1?: number;
  dump?: number;
  recyclecenter?: number;
  recyclecenter_1?: number;
  recyclecenter_2?: number;
  landfill?: number;
  warehouse?: number;
  abandonedwarehouse?: number;
  abandonedwarehouse_1?: number;
  abandonedwarehouse_2?: number;
  abandonedwarehouse_3?: number;
  abandonedwarehouse_4?: number;
  emptycommerciallot?: number;
  lancenter?: number;
  lancenter_1?: number;
  dollarstore?: number;
  dollarstore_1?: number;
  s_vfw?: number;
  s_daycare?: number;
  s_thrift?: number;
  s_petstore?: number;
  s_petstore_1?: number;
  s_petstore_2?: number;
  megastore?: number;
  hotel_1?: number;
  hotel_2?: number;
  hotel_3?: number;
  hospital?: number;
  urban_35_hospital?: number;
  public_works?: number;
  office_tower?: number;
  office_tower_2?: number;
  office_tower_large?: number;
  office_tower_hiddenlab?: number;
  mall?: number;
  home_improvement_superstore_new?: number;
  lumberyard?: number;
  landscaping_supply_co?: number;
  storage_units_large?: number;
  storage_units_medium?: number;
  shopping_plaza?: number;
  movie_theater?: number;
  garage_gas_city?: number;
  '2fmotel_city'?: number;
  cs_car_dealership?: number;
  cs_car_showroom?: number;
  s_cardealer?: number;
  s_camping?: number;
  cs_gardening_allotment?: number;
  cs_internet_cafe?: number;
  cs_market_small?: number;
  cs_sex_shop?: number;
  cs_tire_shop?: number;
  homeless_shelter?: number;
  parking_garage?: number;
  s_restaurant_deserted_test?: number;
}

interface Parks {
  park: number;
  pool: number;
  pool_1?: number;
  pool_2?: number;
  pool_3?: number;
  pool_4?: number;
  pool_5?: number;
  pool_6?: number;
  skate_park?: number;
  park_maze?: number;
  small_wooded_trail?: number;
  pavilion?: number;
  pavilion_1?: number;
  cemetery_small?: number;
  Pond?: number;
  communitygarden?: number;
  publicgarden?: number;
  cathedral?: number;
  football_field?: number;
  baseball_field?: number;
  botanical_garden?: number;
  zoo?: number;
  stadium?: number;
  cemetery_city?: number;
  public_pond_city?: number;
  cemetery_religious_city?: number;
  cs_private_park?: number;
  cs_public_art_piece?: number;
  cs_public_space?: number;
  cs_city_dump_small?: number;
  cs_open_sewer?: number;
}

interface Houses {
  '2storyModern01'?: number;
  house_w_1: number;
  house_two_story_basement?: number;
  house_crack1?: number;
  house_crack2?: number;
  house_crack3?: number;
  house_wooded?: number;
  house_prepper?: number;
  house_prepper2?: number;
  house_fortified?: number;
  duplex: number;
  house_duplex2?: number;
  house_duplex3?: number;
  house_duplex4?: number;
  house_duplex5?: number;
  house_duplex6?: number;
  house_duplex7?: number;
  house_duplex8?: number;
  house_duplex9?: number;
  house_duplex10?: number;
  house_duplex11?: number;
  house_w_2?: number;
  house_w_3?: number;
  house_w_4?: number;
  house_w_5?: number;
  house_w_6?: number;
  house_01?: number;
  house_02?: number;
  house_03?: number;
  house_04?: number;
  house_05?: number;
  house_05ab?: number;
  house_06?: number;
  house_07?: number;
  house_08?: number;
  house_09?: number;
  house_09b?: number;
  house_10?: number;
  house_11?: number;
  house_12?: number;
  house_13?: number;
  house_14?: number;
  house_15?: number;
  house_16?: number;
  house_17?: number;
  house_18?: number;
  house_19?: number;
  house_20?: number;
  house_21?: number;
  house_22?: number;
  house_23?: number;
  house_24?: number;
  house_25?: number;
  house_26?: number;
  house_27?: number;
  house_28?: number;
  house_29?: number;
  house_30?: number;
  house_31?: number;
  house_32?: number;
  house_33?: number;
  house_34?: number;
  house_35?: number;
  house_36?: number;
  house_37?: number;
  house_38?: number;
  house_39?: number;
  house_40?: number;
  house_41?: number;
  house_42?: number;
  house_garage?: number;
  house_garage2?: number;
  house_garage3?: number;
  house_garage4?: number;
  house_garage5?: number;
  house_garage6?: number;
  house_garage7?: number;
  house_garage8?: number;
  rural_house1?: number;
  rural_house2?: number;
  house_toolshed?: number;
  house_suicide?: number;
  house_quiverfull?: number;
  house_rv?: number;
  house_porch?: number;
  house_patio?: number;
  house_modern_1?: number;
  house_library?: number;
  house_detatched1?: number;
  house_detatched2?: number;
  house_detatched3?: number;
  house_detatched4?: number;
  house_detatched5?: number;
  house_detatched6?: number;
  house_detatched7?: number;
  house_detatched8?: number;
  house_detatched9?: number;
  house_detatched10?: number;
  house_dogs?: number;
  house_gardener?: number;
  house_inner_garden?: number;
  urban_1_house?: number;
  urban_2_house?: number;
  urban_3_house?: number;
  urban_4_house_basement?: number;
  urban_5_house?: number;
  urban_6_house?: number;
  urban_7_house_garden?: number;
  urban_8_house_brick_garden?: number;
  urban_9_house_garage_loft?: number;
  urban_10_house_brick_pool?: number;
  urban_11_house_brick?: number;
  urban_12_house?: number;
  urban_15_house?: number;
  urban_16_house_ranch?: number;
  urban_17_house_ranch?: number;
  urban_18_victorian?: number;
  emptyresidentiallot?: number;
  house_vacant?: number;
  house_vacant2?: number;
  apartments_con_new?: number;
  apartments_mod_new?: number;
  s_apt?: number;
  s_apt_2?: number;
  school?: number;
  motel_city?: number;
  fishing_pond_city?: number;
  trailerpark_city?: number;
  railroad_city?: number;
}

interface Mapextras {
  forest: Forest2;
  forest_thick: Forestthick2;
  forest_water: Forestwater2;
  field: Field;
  road: Road;
  bridgehead_ground: Bridgeheadground;
  road_nesw_manhole: Roadneswmanhole;
  build: Build;
  marloss: Marloss;
  subway: Subway;
  research_facility_lot: Researchfacilitylot;
  research_facility_interior: Researchfacilityinterior;
  river: River;
  lake_shore: River;
  sewer: Sewer;
}

interface Sewer {
  chance: number;
  extras: Extras14;
}

interface Extras14 {
  mx_sewer_round: number;
  mx_sewer_grid: number;
  mx_sewer_grid2: number;
  mx_sewer_mntE: number;
  mx_sewer_mntW: number;
  mx_sewer_mntN: number;
  mx_sewer_mntS: number;
  mx_sewer_grateE: number;
  mx_sewer_grateW: number;
  mx_sewer_grateN: number;
  mx_sewer_grateS: number;
  mx_sewer_pipesA: number;
  mx_sewer_pipesB: number;
  mx_sewer_pipesC: number;
  mx_sewer_pipesD: number;
  mx_sewer_pipesE: number;
  mx_sewer_pipesF: number;
  mx_sewer_pipesG: number;
  mx_sewer_pipesH: number;
  mx_sewer_pipesI: number;
  mx_sewer_pipesJ: number;
}

interface River {
  chance: number;
  extras: Extras13;
}

interface Extras13 {
  mx_reed: number;
}

interface Researchfacilityinterior {
  chance: number;
  extras: Extras12;
}

interface Extras12 {
  mx_jabberwock: number;
  mx_military: number;
  mx_portal: number;
  mx_crater: number;
  mx_portal_in: number;
  mx_point_burned_ground: number;
  mx_casings: number;
}

interface Researchfacilitylot {
  chance: number;
  extras: Extras11;
}

interface Extras11 {
  mx_helicopter: number;
  mx_military: number;
  mx_collegekids: number;
  mx_portal: number;
  mx_crater: number;
  mx_portal_in: number;
  mx_point_burned_ground: number;
  mx_casings: number;
}

interface Subway {
  chance: number;
  extras: Extras10;
}

interface Extras10 {
  mx_military: number;
  mx_science: number;
  mx_collegekids: number;
  mx_portal: number;
  mx_portal_in: number;
  mx_casings: number;
}

interface Marloss {
  chance: number;
  extras: Extras9;
}

interface Extras9 {
  mx_marloss_pilgrimage: number;
}

interface Build {
  chance: number;
  extras: Extras8;
}

interface Extras8 {
  mx_house_spider: number;
  mx_house_wasp: number;
  mx_military: number;
  mx_science: number;
  mx_collegekids: number;
  mx_portal: number;
  mx_crater: number;
  mx_portal_in: number;
  mx_point_burned_ground: number;
  mx_casings: number;
  mx_looters: number;
  mx_corpses: number;
}

interface Roadneswmanhole {
  chance: number;
  extras: Extras7;
}

interface Extras7 {
  mx_city_trap: number;
}

interface Bridgeheadground {
  chance: number;
  extras: Extras6;
}

interface Extras6 {
  mx_minefield: number;
}

interface Road {
  chance: number;
  extras: Extras5;
}

interface Extras5 {
  mx_helicopter: number;
  mx_military: number;
  mx_science: number;
  mx_collegekids: number;
  mx_roadblock: number;
  mx_bandits_block: number;
  mx_drugdeal: number;
  mx_supplydrop: number;
  mx_portal: number;
  mx_crater: number;
  mx_portal_in: number;
  mx_roadworks: number;
  mx_mayhem: number;
  mx_casings: number;
  mx_corpses: number;
  mx_prison_bus: number;
}

interface Field {
  chance: number;
  extras: Extras4;
}

interface Extras4 {
  mx_helicopter: number;
  mx_military: number;
  mx_science: number;
  mx_collegekids: number;
  mx_drugdeal: number;
  mx_supplydrop: number;
  mx_portal: number;
  mx_crater: number;
  mx_portal_in: number;
  mx_point_dead_vegetation: number;
  mx_grass: number;
  mx_trees: number;
  mx_fallen_shed: number;
  mx_pond: number;
  mx_point_burned_ground: number;
  mx_casings: number;
  mx_corpses: number;
  mx_nest_wasp: number;
  mx_mass_grave: number;
  mx_grave: number;
}

interface Forestwater2 {
  chance: number;
  extras: Extras3;
}

interface Extras3 {
  mx_helicopter: number;
  mx_military: number;
  mx_science: number;
  mx_collegekids: number;
  mx_drugdeal: number;
  mx_supplydrop: number;
  mx_portal: number;
  mx_crater: number;
  mx_portal_in: number;
  mx_grass: number;
  mx_fallen_shed: number;
  mx_spider: number;
  mx_grove: number;
  mx_shrubbery: number;
  mx_clearcut: number;
  mx_pond: number;
  mx_clay_deposit: number;
  mx_point_dead_vegetation: number;
  mx_point_burned_ground: number;
  mx_casings: number;
  mx_corpses: number;
  mx_nest_dermatik: number;
  mx_mass_grave: number;
}

interface Forestthick2 {
  chance: number;
  extras: Extras2;
}

interface Extras2 {
  mx_helicopter: number;
  mx_military: number;
  mx_science: number;
  mx_collegekids: number;
  mx_drugdeal: number;
  mx_supplydrop: number;
  mx_portal: number;
  mx_crater: number;
  mx_portal_in: number;
  mx_grass: number;
  mx_fallen_shed: number;
  mx_shia: number;
  mx_spider: number;
  mx_jabberwock: number;
  mx_grove: number;
  mx_shrubbery: number;
  mx_clearcut: number;
  mx_pond: number;
  mx_clay_deposit: number;
  mx_point_dead_vegetation: number;
  mx_point_burned_ground: number;
  mx_casings: number;
  mx_corpses: number;
  mx_mass_grave: number;
}

interface Forest2 {
  chance: number;
  extras: Extras;
}

interface Extras {
  mx_helicopter: number;
  mx_military: number;
  mx_science: number;
  mx_collegekids: number;
  mx_drugdeal: number;
  mx_supplydrop: number;
  mx_portal: number;
  mx_crater: number;
  mx_portal_in: number;
  mx_grass: number;
  mx_fallen_shed: number;
  mx_spider: number;
  mx_grove: number;
  mx_shrubbery: number;
  mx_clearcut: number;
  mx_pond: number;
  mx_clay_deposit: number;
  mx_point_dead_vegetation: number;
  mx_point_burned_ground: number;
  mx_casings: number;
  mx_corpses: number;
  mx_mass_grave: number;
}

interface Foresttrailsettings {
  chance: number;
  border_point_chance: number;
  minimum_forest_size: number;
  random_point_min: number;
  random_point_max: number;
  random_point_size_scalar: number;
  trailhead_chance: number;
  trailhead_road_distance: number;
  trail_center_variance: number;
  trail_width_offset_min: number;
  trail_width_offset_max: number;
  clear_trail_terrain: boolean;
  trail_terrain: Tregionsoil;
  trailheads: Trailheads;
}

interface Trailheads {
  trailhead_basic: number;
  trailhead_outhouse: number;
  trailhead_shack: number;
}

interface Forestmapgensettings {
  forest: Forest;
  forest_thick: Forestthick;
  forest_water: Forestwater;
}

interface Forestwater {
  sparseness_adjacency_factor: number;
  item_group: string;
  item_group_chance: number;
  item_spawn_iterations: number;
  clear_groundcover: boolean;
  groundcover: Groundcover2;
  clear_components: boolean;
  components: Components3;
  clear_terrain_furniture: boolean;
  terrain_furniture: Terrainfurniture2;
}

interface Terrainfurniture2 {
  t_water_sh?: Twatersh;
}

interface Twatersh {
  chance: number;
  clear_furniture: boolean;
  furniture: Furniture2;
}

interface Furniture2 {
  f_region_water_plant: number;
}

interface Components3 {
  trees: Trees3;
  shrubs_and_flowers?: Shrubsandflowers;
  clutter?: Clutter2;
  water: Water2;
  other?: Other4;
}

interface Other4 {
  sequence: number;
  chance: number;
  clear_types: boolean;
  types: Types11;
}

interface Types11 {
  t_grass: number;
  t_shrub: number;
  t_dirt: number;
}

interface Water2 {
  sequence: number;
  chance: number;
  clear_types: boolean;
  types: Types10;
}

interface Types10 {
  t_swater_sh?: number;
  t_swater_dp?: number;
  t_water_sh: number;
}

interface Clutter2 {
  sequence: number;
  chance: number;
  clear_types: boolean;
  types: Types9;
}

interface Types9 {
  t_trunk: number;
  f_boulder_small: number;
  f_boulder_medium: number;
}

interface Trees3 {
  sequence: number;
  chance: number;
  clear_types: boolean;
  types: Types8;
}

interface Types8 {
  t_tree?: number;
  t_tree_young?: number;
  t_tree_pine?: number;
  t_tree_birch?: number;
  t_tree_elm?: number;
  t_tree_cottonwood?: number;
  t_tree_alder?: number;
  t_tree_maple?: number;
  t_tree_willow: number;
  t_tree_walnut?: number;
  t_tree_chestnut?: number;
  t_tree_hazelnut?: number;
  t_tree_beech?: number;
  t_tree_hickory?: number;
  t_tree_apple?: number;
  t_tree_cherry?: number;
  t_tree_juniper?: number;
  t_tree_peach?: number;
  t_tree_pear?: number;
  t_tree_plum?: number;
  t_tree_elderberry?: number;
  t_tree_mulberry?: number;
  t_tree_deadpine?: number;
  t_tree_hickory_dead?: number;
  t_tree_dead: number;
}

interface Groundcover2 {
  t_region_groundcover_swamp?: number;
}

interface Forestthick {
  sparseness_adjacency_factor: number;
  item_group: string;
  item_group_chance: number;
  item_spawn_iterations: number;
  clear_groundcover: boolean;
  groundcover: Groundcover;
  clear_components: boolean;
  components: Components2;
  clear_terrain_furniture: boolean;
  terrain_furniture: Terrainfurniture;
}

interface Components2 {
  trees: Trees2;
  shrubs_and_flowers?: Shrubsandflowers;
  clutter?: Clutter;
  water: Water;
  other?: Other3;
}

interface Other3 {
  sequence: number;
  chance: number;
  clear_types: boolean;
  types: Types7;
}

interface Types7 {
  t_shrub: number;
  t_pit: number;
}

interface Trees2 {
  sequence: number;
  chance: number;
  clear_types: boolean;
  types: Types6;
}

interface Types6 {
  t_region_tree?: number;
  f_mutcactus_test?: number;
  t_tree_dead?: number;
}

interface Forest {
  sparseness_adjacency_factor: number;
  item_group: string;
  item_group_chance: number;
  item_spawn_iterations: number;
  clear_groundcover: boolean;
  groundcover: Groundcover;
  clear_components: boolean;
  components: Components;
  clear_terrain_furniture: boolean;
  terrain_furniture: Terrainfurniture;
}

interface Terrainfurniture {}

interface Components {
  trees: Trees;
  shrubs_and_flowers?: Shrubsandflowers;
  clutter?: Clutter;
  water: Water;
  other?: Other2;
}

interface Other2 {
  sequence: number;
  chance: number;
  clear_types: boolean;
  types: Types5;
}

interface Types5 {
  t_shrub: number;
}

interface Water {
  sequence: number;
  chance: number;
  clear_types: boolean;
  types: Types4;
}

interface Types4 {
  t_water_sh?: number;
}

interface Clutter {
  sequence: number;
  chance: number;
  clear_types: boolean;
  types: Types3;
}

interface Types3 {
  t_trunk: number;
  t_dirtmound: number;
  f_boulder_small: number;
  f_rubble_rock: number;
  f_boulder_medium: number;
  f_boulder_large: number;
  t_pit: number;
  t_pit_shallow: number;
}

interface Shrubsandflowers {
  sequence: number;
  chance: number;
  clear_types: boolean;
  types: Types2;
}

interface Types2 {
  t_region_shrub: number;
  f_region_weed: number;
}

interface Trees {
  sequence: number;
  chance: number;
  clear_types: boolean;
  types: Types;
}

interface Types {
  t_region_tree?: number;
  t_tree_willow?: number;
  t_tree_dead?: number;
  f_mutcactus_test?: number;
}

interface Groundcover {
  t_region_groundcover_forest?: number;
}

interface Overmapforestsettings {
  noise_threshold_forest: number;
  noise_threshold_forest_thick: number;
  noise_threshold_swamp_adjacent_water: number;
  noise_threshold_swamp_isolated: number;
  river_floodplain_buffer_distance_min: number;
  river_floodplain_buffer_distance_max: number;
}

interface Overmapravinesettings {
  num_ravines: number;
  ravine_width: number;
  ravine_range: number;
  ravine_depth: number;
}

interface Overmaplakesettings {
  noise_threshold_lake: number;
  lake_size_min: number;
  lake_depth: number;
  shore_extendable_overmap_terrain: string[];
  shore_extendable_overmap_terrain_aliases: Shoreextendableovermapterrainalias[];
}

interface Shoreextendableovermapterrainalias {
  om_terrain: string;
  om_terrain_match_type: string;
  alias: string;
}

interface Fieldcoverage {
  percent_coverage: number;
  default_ter: string;
  other: Other;
  boost_chance: number;
  boosted_percent_coverage: number;
  boosted_other: Boostedother;
  boosted_other_percent: number;
}

interface Boostedother {
  t_tree_young?: number;
  t_tree?: number;
  t_tree_birch?: number;
  t_tree_elm?: number;
  t_tree_cottonwood?: number;
  t_tree_alder?: number;
  t_tree_pine?: number;
  t_tree_maple?: number;
  t_tree_willow?: number;
  t_tree_hickory?: number;
  t_tree_walnut?: number;
  t_tree_chestnut?: number;
  t_tree_hazelnut?: number;
  t_tree_beech?: number;
  t_tree_blackjack?: number;
  t_tree_coffee?: number;
  t_tree_apple?: number;
  t_tree_apricot?: number;
  t_tree_cherry?: number;
  t_tree_peach?: number;
  t_tree_juniper?: number;
  t_tree_pear?: number;
  t_tree_plum?: number;
  t_tree_elderberry?: number;
  t_tree_mulberry?: number;
  t_tree_deadpine?: number;
  t_tree_hickory_dead?: number;
  t_tree_dead?: number;
  t_shrub_blueberry: number;
  t_shrub_strawberry?: number;
  t_shrub_blackberry?: number;
  t_shrub_raspberry?: number;
  t_shrub_huckleberry?: number;
  t_shrub_grape?: number;
  t_shrub_rose?: number;
  t_shrub_hydrangea?: number;
  t_shrub_lilac?: number;
  f_black_eyed_susan?: number;
  f_lily?: number;
  f_flower_tulip?: number;
  f_flower_spurge?: number;
  f_chicory?: number;
  f_mutpoppy?: number;
  f_bluebell?: number;
  f_dahlia?: number;
  f_datura?: number;
  f_dandelion?: number;
  f_sunflower?: number;
  f_mustard?: number;
  t_shrub?: number;
  f_mutcactus_test?: number;
}

interface Other {
  t_region_tree?: number;
  t_region_shrub?: number;
  f_region_weed?: number;
  f_region_flower?: number;
  f_boulder_small?: number;
  f_boulder_medium?: number;
  f_boulder_large?: number;
  t_shrub?: number;
  f_mutpoppy?: number;
  f_mutcactus_test?: number;
}

interface Regionterrainandfurniture {
  terrain: Terrain;
  furniture: Furniture;
}

interface Furniture {
  f_region_flower: Fregionflower;
  f_region_flower_decorative?: Fregionflowerdecorative;
  f_region_weed?: Fregionweed;
  f_region_water_plant?: Fregionwaterplant;
}

interface Fregionwaterplant {
  f_cattails: number;
  f_lilypad: number;
  f_lotus: number;
}

interface Fregionweed {
  f_dandelion: number;
  f_flower_spurge: number;
  f_chamomile: number;
  f_datura: number;
  f_bluebell: number;
  f_burdock: number;
  f_dahlia: number;
  f_black_eyed_susan: number;
  f_lily: number;
  f_flower_tulip: number;
  f_mutpoppy: number;
  f_sunflower: number;
  f_mustard: number;
}

interface Fregionflowerdecorative {
  f_lily: number;
  f_flower_tulip: number;
  f_black_eyed_susan: number;
  f_dahlia: number;
  f_bluebell: number;
  f_flower_spurge: number;
  f_chicory: number;
  f_sunflower: number;
}

interface Fregionflower {
  f_black_eyed_susan?: number;
  f_lily?: number;
  f_flower_tulip?: number;
  f_flower_spurge?: number;
  f_burdock?: number;
  f_chamomile?: number;
  f_dandelion?: number;
  f_datura?: number;
  f_dahlia?: number;
  f_chicory?: number;
  f_bluebell?: number;
  f_sunflower?: number;
  f_mutcactus_test?: number;
}

interface Terrain {
  t_region_groundcover: Tregiongroundcover;
  t_region_groundcover_urban?: Tregiongroundcoverurban;
  t_region_groundcover_forest?: Tregiongroundcoverforest;
  t_region_groundcover_swamp?: Tregiongroundcoverswamp;
  t_region_groundcover_barren?: Tregiongroundcoverbarren;
  t_region_grass?: Tregiongrass;
  t_region_soil?: Tregionsoil;
  t_region_shrub: Tregionshrub;
  t_region_shrub_fruit?: Tregionshrubfruit;
  t_region_shrub_decorative?: Tregionshrubdecorative;
  t_region_tree: Tregiontree;
  t_region_tree_shade?: Tregiontreeshade;
  t_region_tree_fruit?: Tregiontreefruit;
  t_region_tree_nut?: Tregiontreenut;
  t_region_tree_evergreen?: Tregiontreeevergreen;
}

interface Tregiontreeevergreen {
  t_tree_pine: number;
  t_tree_juniper: number;
  t_tree_deadpine: number;
}

interface Tregiontreenut {
  t_tree_young: number;
  t_tree_hickory: number;
  t_tree_beech: number;
  t_tree_walnut: number;
  t_tree_chestnut: number;
  t_tree_hazelnut: number;
  t_tree_coffee: number;
  t_tree_hickory_dead: number;
  t_tree_dead: number;
}

interface Tregiontreefruit {
  t_tree_young: number;
  t_tree_apple: number;
  t_tree_apricot: number;
  t_tree_cherry: number;
  t_tree_peach: number;
  t_tree_pear: number;
  t_tree_plum: number;
  t_tree_elderberry: number;
  t_tree_mulberry: number;
  t_tree_dead: number;
}

interface Tregiontreeshade {
  t_tree: number;
  t_tree_young: number;
  t_tree_birch: number;
  t_tree_elm: number;
  t_tree_cottonwood: number;
  t_tree_alder: number;
  t_tree_maple: number;
  t_tree_willow: number;
  t_tree_hickory: number;
  t_tree_chestnut: number;
  t_tree_blackjack: number;
  t_tree_coffee: number;
  t_tree_elderberry: number;
  t_tree_mulberry: number;
  t_tree_dead: number;
}

interface Tregiontree {
  t_tree?: number;
  t_tree_young?: number;
  t_tree_birch?: number;
  t_tree_elm?: number;
  t_tree_cottonwood?: number;
  t_tree_alder?: number;
  t_tree_pine?: number;
  t_tree_maple?: number;
  t_tree_willow: number;
  t_tree_hickory?: number;
  t_tree_walnut?: number;
  t_tree_chestnut?: number;
  t_tree_hazelnut?: number;
  t_tree_beech?: number;
  t_tree_blackjack?: number;
  t_tree_coffee?: number;
  t_tree_apple?: number;
  t_tree_apricot?: number;
  t_tree_cherry?: number;
  t_tree_juniper?: number;
  t_tree_peach?: number;
  t_tree_pear?: number;
  t_tree_plum?: number;
  t_tree_elderberry?: number;
  t_tree_mulberry?: number;
  t_tree_deadpine?: number;
  t_tree_hickory_dead?: number;
  t_tree_dead: number;
}

interface Tregionshrubdecorative {
  t_shrub: number;
  t_fern: number;
  t_shrub_rose: number;
  t_shrub_hydrangea: number;
  t_shrub_lilac: number;
}

interface Tregionshrubfruit {
  t_shrub_blueberry: number;
  t_shrub_strawberry: number;
  t_shrub_raspberry: number;
  t_shrub_grape: number;
  t_shrub_blackberry: number;
  t_shrub_huckleberry: number;
  t_shrub_peanut: number;
}

interface Tregionshrub {
  t_underbrush?: number;
  t_shrub: number;
  t_fern?: number;
  t_shrub_blueberry?: number;
  t_shrub_strawberry?: number;
  t_shrub_blackberry?: number;
  t_shrub_raspberry?: number;
  t_shrub_huckleberry?: number;
  t_shrub_grape?: number;
  t_shrub_rose?: number;
  t_shrub_hydrangea?: number;
  t_shrub_lilac?: number;
  t_shrub_peanut?: number;
}

interface Tregionsoil {
  t_dirt: number;
}

interface Tregiongrass {
  t_grass: number;
}

interface Tregiongroundcoverbarren {
  t_dirt: number;
  t_grass_dead: number;
  t_railroad_rubble: number;
}

interface Tregiongroundcoverswamp {
  t_grass_long: number;
  t_grass_tall: number;
  t_moss: number;
  t_dirt: number;
}

interface Tregiongroundcoverforest {
  t_grass_long: number;
  t_grass_tall: number;
  t_moss: number;
  t_grass_dead: number;
}

interface Tregiongroundcoverurban {
  t_grass: number;
  t_grass_dead: number;
}

interface Tregiongroundcover {
  t_grass?: number;
  t_grass_dead?: number;
  t_dirt?: number;
  t_searth_test?: number;
  t_sand?: number;
}
