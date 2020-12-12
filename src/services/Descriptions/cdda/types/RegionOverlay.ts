export interface IRegionOverlay {
  type: 'region_overlay';
  regions: string[];
  city?: City;
  field_coverage?: Fieldcoverage;
  '//'?: string;
  map_extras?: Mapextras;
  river_scale?: number;
  overmap_lake_settings?: Overmaplakesettings;
}

interface Overmaplakesettings {
  noise_threshold_lake: number;
}

interface Mapextras {
  forest_water: Forestwater;
}

interface Forestwater {
  chance: number;
  extras: Extras;
}

interface Extras {
  mx_nest_tyrannosaurus: number;
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
  shops: Shops;
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
  afs_augmentation_clinic_1?: number;
  city_block_2?: number;
  urban_35_hospital?: number;
  office_tower_large?: number;
  office_tower_hiddenlab?: number;
  afs_astrobiology_lab?: number;
  mall?: number;
}

interface Houses {
  urban_19_victorian?: number;
  urban_20_duplex?: number;
  urban_21_house?: number;
  urban_22_house_pool?: number;
  urban_40_house?: number;
  house_technomancer?: number;
  wizard_tower_1?: number;
  wizard_tower_2?: number;
}
