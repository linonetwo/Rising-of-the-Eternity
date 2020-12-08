export interface IRegionOverlay {
  type: 'region_overlay';
  regions: string[];
  overmap_feature_flag_settings?: Overmapfeatureflagsettings;
  map_extras?: Mapextras;
  city?: City;
  field_coverage?: Fieldcoverage;
  '//'?: string;
  river_scale?: number;
  overmap_lake_settings?: Overmaplakesettings;
}

interface Overmaplakesettings {
  noise_threshold_lake: number;
}

interface Fieldcoverage {
  other: Other;
}

interface Other {
  f_boulder_large: number;
  f_glow_boulder: number;
}

interface City {
  houses?: Houses;
  shops?: Shops;
  shop_radius?: number;
  shop_sigma?: number;
}

interface Shops {
  urban_23_dense_office_theater?: number;
  urban_24_dense_bank_house?: number;
  urban_26_dense_club?: number;
  urban_27_dense_barber_apt?: number;
  urban_28_dense_cafe_laundry?: number;
  urban_30_dense_subway?: number;
  urban_31_police_station?: number;
  urban_32_fire_station?: number;
  urban_33_hotel?: number;
  urban_34_school?: number;
  urban_36_projects?: number;
  urban_37_office_tower_beehive?: number;
  urban_38_bar_hardware_house?: number;
  urban_39_market_subway_newspaper?: number;
  urban_41_library?: number;
  magic_shop?: number;
  used_bookstore?: number;
  magic_academy?: number;
  office_tower_hiddenlab?: number;
  office_tower_collapsed?: number;
  afs_augmentation_clinic_1?: number;
  city_block_2?: number;
  urban_35_hospital?: number;
  office_tower_large?: number;
  afs_astrobiology_lab?: number;
  mall?: number;
}

interface Houses {
  urban_19_victorian?: number;
  urban_20_duplex?: number;
  urban_21_house?: number;
  urban_22_house_pool?: number;
  urban_40_house?: number;
  railroad_city?: number;
  house_technomancer?: number;
  wizard_tower_1?: number;
  wizard_tower_2?: number;
}

interface Mapextras {
  forest?: Forest;
  forest_thick?: Forestthick;
  forest_water: Forestwater;
  field?: Field;
  road?: Road;
  build?: Build;
  marloss?: Marloss;
  subway?: Subway;
}

interface Subway {
  chance?: number;
  extras: Extras8;
}

interface Extras8 {
  mx_portal: number;
  mx_portal_in: number;
  mx_military?: number;
  mx_science?: number;
  mx_collegekids?: number;
  mx_corpses?: number;
  mx_casings?: number;
}

interface Marloss {
  chance: number;
  extras: Extras7;
}

interface Extras7 {
  mx_marloss_pilgrimage: number;
}

interface Build {
  chance: number;
  extras: Extras6;
}

interface Extras6 {
  mx_house_spider: number;
  mx_house_wasp: number;
  mx_portal: number;
  mx_portal_in: number;
  mx_military?: number;
  mx_science?: number;
  mx_collegekids?: number;
  mx_crater?: number;
  mx_point_burned_ground?: number;
  mx_casings?: number;
  mx_looters?: number;
  mx_corpses?: number;
}

interface Road {
  chance?: number;
  extras: Extras5;
}

interface Extras5 {
  mx_portal: number;
  mx_portal_in: number;
  mx_mayhem?: number;
  mx_helicopter?: number;
  mx_military?: number;
  mx_science?: number;
  mx_collegekids?: number;
  mx_roadblock?: number;
  mx_bandits_block?: number;
  mx_drugdeal?: number;
  mx_supplydrop?: number;
  mx_minefield?: number;
  mx_crater?: number;
  mx_roadworks?: number;
  mx_casings?: number;
  mx_corpses?: number;
  mx_prison_bus?: number;
}

interface Field {
  chance?: number;
  extras: Extras4;
}

interface Extras4 {
  mx_portal: number;
  mx_portal_in: number;
  mx_nest_wasp?: number;
  mx_helicopter?: number;
  mx_military?: number;
  mx_science?: number;
  mx_crater?: number;
  mx_trees?: number;
  mx_casings?: number;
  mx_corpses?: number;
}

interface Forestwater {
  chance?: number;
  extras: Extras3;
}

interface Extras3 {
  mx_portal?: number;
  mx_portal_in?: number;
  mx_spider?: number;
  mx_nest_tyrannosaurus?: number;
  mx_nest_dermatik?: number;
}

interface Forestthick {
  chance?: number;
  extras: Extras2;
}

interface Extras2 {
  mx_portal: number;
  mx_portal_in: number;
  mx_shia: number;
  mx_spider: number;
  mx_jabberwock: number;
}

interface Forest {
  chance?: number;
  extras: Extras;
}

interface Extras {
  mx_portal: number;
  mx_portal_in: number;
  mx_spider: number;
}

interface Overmapfeatureflagsettings {
  whitelist?: string[];
  blacklist?: string[];
  clear_blacklist?: boolean;
  clear_whitelist?: boolean;
}
