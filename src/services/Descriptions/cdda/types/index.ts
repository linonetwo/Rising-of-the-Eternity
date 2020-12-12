import { IAchievement } from './Achievement';
import { IActivityType } from './ActivityType';
import { IAmmo } from './Ammo';
import { IAmmoEffect } from './AmmoEffect';
import { IAmmunitionType } from './AmmunitionType';
import { IAnatomy } from './Anatomy';
import { IArmor } from './Armor';
import { IAsciiArt } from './AsciiArt';
import { IBattery } from './Battery';
import { IBehavior } from './Behavior';
import { IBionic } from './Bionic';
import { IBionicItem } from './BionicItem';
import { IBodyPart } from './BodyPart';
import { IBook } from './Book';
import { IButcheryRequirement } from './ButcheryRequirement';
import { IChargeRemovalBlacklist } from './ChargeRemovalBlacklist';
import { ICityBuilding } from './CityBuilding';
import { IClothingMod } from './ClothingMod';
import { IColordef } from './Colordef';
import { IComestible } from './Comestible';
import { IConduct } from './Conduct';
import { IConstruction } from './Construction';
import { IConstructionCategory } from './ConstructionCategory';
import { IConstructionGroup } from './ConstructionGroup';
import { IDiseaseType } from './DiseaseType';
import { IDream } from './Dream';
import { IEffectType } from './EffectType';
import { IEmit } from './Emit';
import { IEnchantment } from './Enchantment';
import { IEngine } from './Engine';
import { IEventStatistic } from './EventStatistic';
import { IEventTransformation } from './EventTransformation';
import { IExternalOption } from './ExternalOption';
import { IFaction } from './Faction';
import { IFault } from './Fault';
import { IFieldType } from './FieldType';
import { IFurniture } from './Furniture';
import { IGate } from './Gate';
import { IGeneric } from './Generic';
import { IGun } from './Gun';
import { IGunmod } from './Gunmod';
import { IHarvest } from './Harvest';
import { IHitRange } from './HitRange';
import { IItemAction } from './ItemAction';
import { IItemBlacklist } from './ItemBlacklist';
import { IItemCategory } from './ItemCategory';
import { IItemGroup } from './ItemGroup';
import { IJsonFlag } from './JsonFlag';
import { ILootZone } from './LootZone';
import { IMagazine } from './Magazine';
import { IMapExtra } from './MapExtra';
import { IMapgen } from './Mapgen';
import { IMartialArt } from './MartialArt';
import { IMaterial } from './Material';
import { IMigration } from './Migration';
import { IMissionDefinition } from './MissionDefinition';
import { IModInfo } from './ModInfo';
import { IModTileset } from './ModTileset';
import { IMonster } from './Monster';
import { IMonsterAdjustment } from './MonsterAdjustment';
import { IMonsterAttack } from './MonsterAttack';
import { IMonsterBlacklist } from './MonsterBlacklist';
import { IMonsterFaction } from './MonsterFaction';
import { IMonsterWhitelist } from './MonsterWhitelist';
import { IMonstergroup } from './Monstergroup';
import { IMoraleType } from './MoraleType';
import { IMovementMode } from './MovementMode';
import { IMutation } from './Mutation';
import { IMutationCategory } from './MutationCategory';
import { IMutationType } from './MutationType';
import { INpc } from './Npc';
import { INpcClass } from './NpcClass';
import { IObsoleteTerrain } from './ObsoleteTerrain';
import { IOverlayOrder } from './OverlayOrder';
import { IOvermapConnection } from './OvermapConnection';
import { IOvermapLandUseCode } from './OvermapLandUseCode';
import { IOvermapLocation } from './OvermapLocation';
import { IOvermapSpecial } from './OvermapSpecial';
import { IOvermapTerrain } from './OvermapTerrain';
import { IPalette } from './Palette';
import { IPetArmor } from './PetArmor';
import { IProfession } from './Profession';
import { IProfessionItemSubstitutions } from './ProfessionItemSubstitutions';
import { IProficiency } from './Proficiency';
import { IRecipe } from './Recipe';
import { IRecipeCategory } from './RecipeCategory';
import { IRecipeGroup } from './RecipeGroup';
import { IRegionOverlay } from './RegionOverlay';
import { IRegionSettings } from './RegionSettings';
import { IRelicProcgenData } from './RelicProcgenData';
import { IRequirement } from './Requirement';
import { IRotatableSymbol } from './RotatableSymbol';
import { IScenario } from './Scenario';
import { IScenarioBlacklist } from './ScenarioBlacklist';
import { IScentType } from './ScentType';
import { IScore } from './Score';
import { ISkill } from './Skill';
import { ISkillBoost } from './SkillBoost';
import { ISkillDisplayType } from './SkillDisplayType';
import { ISnippet } from './Snippet';
import { ISpecies } from './Species';
import { ISpeech } from './Speech';
import { ISpell } from './Spell';
import { IStartLocation } from './StartLocation';
import { ITalkTopic } from './TalkTopic';
import { ITechnique } from './Technique';
import { ITerFurnTransform } from './TerFurnTransform';
import { ITerrain } from './Terrain';
import { ITool } from './Tool';
import { IToolArmor } from './ToolArmor';
import { IToolQuality } from './ToolQuality';
import { IToolmod } from './Toolmod';
import { ITraitBlacklist } from './TraitBlacklist';
import { ITraitGroup } from './TraitGroup';
import { ITrap } from './Trap';
import { IUncraft } from './Uncraft';
import { IVehicle } from './Vehicle';
import { IVehicleGroup } from './VehicleGroup';
import { IVehiclePart } from './VehiclePart';
import { IVehiclePartCategory } from './VehiclePartCategory';
import { IVehiclePlacement } from './VehiclePlacement';
import { IVehicleSpawn } from './VehicleSpawn';
import { IVitamin } from './Vitamin';
import { IWeatherType } from './WeatherType';
import { IWheel } from './Wheel';
import { CDDA_JSON_TYPES } from './names';

export { CDDA_JSON_TYPES };
export type ICDDAJSONWithComments = ICDDAJSON & { '//'?: string | string[] };
export type ICDDAJSON =
  | IAchievement
  | IActivityType
  | IAmmo
  | IAmmoEffect
  | IAmmunitionType
  | IAnatomy
  | IArmor
  | IAsciiArt
  | IBattery
  | IBehavior
  | IBionic
  | IBionicItem
  | IBodyPart
  | IBook
  | IButcheryRequirement
  | IChargeRemovalBlacklist
  | ICityBuilding
  | IClothingMod
  | IColordef
  | IComestible
  | IConduct
  | IConstruction
  | IConstructionCategory
  | IConstructionGroup
  | IDiseaseType
  | IDream
  | IEffectType
  | IEmit
  | IEnchantment
  | IEngine
  | IEventStatistic
  | IEventTransformation
  | IExternalOption
  | IFaction
  | IFault
  | IFieldType
  | IFurniture
  | IGate
  | IGeneric
  | IGun
  | IGunmod
  | IHarvest
  | IHitRange
  | IItemAction
  | IItemBlacklist
  | IItemCategory
  | IItemGroup
  | IJsonFlag
  | ILootZone
  | IMagazine
  | IMapExtra
  | IMapgen
  | IMartialArt
  | IMaterial
  | IMigration
  | IMissionDefinition
  | IModInfo
  | IModTileset
  | IMonster
  | IMonsterAdjustment
  | IMonsterAttack
  | IMonsterBlacklist
  | IMonsterFaction
  | IMonsterWhitelist
  | IMonstergroup
  | IMoraleType
  | IMovementMode
  | IMutation
  | IMutationCategory
  | IMutationType
  | INpc
  | INpcClass
  | IObsoleteTerrain
  | IOverlayOrder
  | IOvermapConnection
  | IOvermapLandUseCode
  | IOvermapLocation
  | IOvermapSpecial
  | IOvermapTerrain
  | IPalette
  | IPetArmor
  | IProfession
  | IProfessionItemSubstitutions
  | IProficiency
  | IRecipe
  | IRecipeCategory
  | IRecipeGroup
  | IRegionOverlay
  | IRegionSettings
  | IRelicProcgenData
  | IRequirement
  | IRotatableSymbol
  | IScenario
  | IScenarioBlacklist
  | IScentType
  | IScore
  | ISkill
  | ISkillBoost
  | ISkillDisplayType
  | ISnippet
  | ISpecies
  | ISpeech
  | ISpell
  | IStartLocation
  | ITalkTopic
  | ITechnique
  | ITerFurnTransform
  | ITerrain
  | ITool
  | IToolArmor
  | IToolQuality
  | IToolmod
  | ITraitBlacklist
  | ITraitGroup
  | ITrap
  | IUncraft
  | IVehicle
  | IVehicleGroup
  | IVehiclePart
  | IVehiclePartCategory
  | IVehiclePlacement
  | IVehicleSpawn
  | IVitamin
  | IWeatherType
  | IWheel;

export interface IProcessors<CONTEXT> extends Record<CDDA_JSON_TYPES, (item: never, round: number, context: CONTEXT) => void> {
  achievement: (item: IAchievement, round: number, context: CONTEXT) => void;
  activity_type: (item: IActivityType, round: number, context: CONTEXT) => void;
  AMMO: (item: IAmmo, round: number, context: CONTEXT) => void;
  ammo_effect: (item: IAmmoEffect, round: number, context: CONTEXT) => void;
  ammunition_type: (item: IAmmunitionType, round: number, context: CONTEXT) => void;
  anatomy: (item: IAnatomy, round: number, context: CONTEXT) => void;
  ARMOR: (item: IArmor, round: number, context: CONTEXT) => void;
  ascii_art: (item: IAsciiArt, round: number, context: CONTEXT) => void;
  BATTERY: (item: IBattery, round: number, context: CONTEXT) => void;
  behavior: (item: IBehavior, round: number, context: CONTEXT) => void;
  bionic: (item: IBionic, round: number, context: CONTEXT) => void;
  BIONIC_ITEM: (item: IBionicItem, round: number, context: CONTEXT) => void;
  body_part: (item: IBodyPart, round: number, context: CONTEXT) => void;
  BOOK: (item: IBook, round: number, context: CONTEXT) => void;
  butchery_requirement: (item: IButcheryRequirement, round: number, context: CONTEXT) => void;
  charge_removal_blacklist: (item: IChargeRemovalBlacklist, round: number, context: CONTEXT) => void;
  city_building: (item: ICityBuilding, round: number, context: CONTEXT) => void;
  clothing_mod: (item: IClothingMod, round: number, context: CONTEXT) => void;
  colordef: (item: IColordef, round: number, context: CONTEXT) => void;
  COMESTIBLE: (item: IComestible, round: number, context: CONTEXT) => void;
  conduct: (item: IConduct, round: number, context: CONTEXT) => void;
  construction: (item: IConstruction, round: number, context: CONTEXT) => void;
  construction_category: (item: IConstructionCategory, round: number, context: CONTEXT) => void;
  construction_group: (item: IConstructionGroup, round: number, context: CONTEXT) => void;
  disease_type: (item: IDiseaseType, round: number, context: CONTEXT) => void;
  dream: (item: IDream, round: number, context: CONTEXT) => void;
  effect_type: (item: IEffectType, round: number, context: CONTEXT) => void;
  emit: (item: IEmit, round: number, context: CONTEXT) => void;
  enchantment: (item: IEnchantment, round: number, context: CONTEXT) => void;
  ENGINE: (item: IEngine, round: number, context: CONTEXT) => void;
  event_statistic: (item: IEventStatistic, round: number, context: CONTEXT) => void;
  event_transformation: (item: IEventTransformation, round: number, context: CONTEXT) => void;
  EXTERNAL_OPTION: (item: IExternalOption, round: number, context: CONTEXT) => void;
  faction: (item: IFaction, round: number, context: CONTEXT) => void;
  fault: (item: IFault, round: number, context: CONTEXT) => void;
  field_type: (item: IFieldType, round: number, context: CONTEXT) => void;
  furniture: (item: IFurniture, round: number, context: CONTEXT) => void;
  gate: (item: IGate, round: number, context: CONTEXT) => void;
  GENERIC: (item: IGeneric, round: number, context: CONTEXT) => void;
  GUN: (item: IGun, round: number, context: CONTEXT) => void;
  GUNMOD: (item: IGunmod, round: number, context: CONTEXT) => void;
  harvest: (item: IHarvest, round: number, context: CONTEXT) => void;
  hit_range: (item: IHitRange, round: number, context: CONTEXT) => void;
  item_action: (item: IItemAction, round: number, context: CONTEXT) => void;
  ITEM_BLACKLIST: (item: IItemBlacklist, round: number, context: CONTEXT) => void;
  ITEM_CATEGORY: (item: IItemCategory, round: number, context: CONTEXT) => void;
  item_group: (item: IItemGroup, round: number, context: CONTEXT) => void;
  json_flag: (item: IJsonFlag, round: number, context: CONTEXT) => void;
  LOOT_ZONE: (item: ILootZone, round: number, context: CONTEXT) => void;
  MAGAZINE: (item: IMagazine, round: number, context: CONTEXT) => void;
  map_extra: (item: IMapExtra, round: number, context: CONTEXT) => void;
  mapgen: (item: IMapgen, round: number, context: CONTEXT) => void;
  martial_art: (item: IMartialArt, round: number, context: CONTEXT) => void;
  material: (item: IMaterial, round: number, context: CONTEXT) => void;
  MIGRATION: (item: IMigration, round: number, context: CONTEXT) => void;
  mission_definition: (item: IMissionDefinition, round: number, context: CONTEXT) => void;
  MOD_INFO: (item: IModInfo, round: number, context: CONTEXT) => void;
  mod_tileset: (item: IModTileset, round: number, context: CONTEXT) => void;
  MONSTER: (item: IMonster, round: number, context: CONTEXT) => void;
  monster_adjustment: (item: IMonsterAdjustment, round: number, context: CONTEXT) => void;
  monster_attack: (item: IMonsterAttack, round: number, context: CONTEXT) => void;
  MONSTER_BLACKLIST: (item: IMonsterBlacklist, round: number, context: CONTEXT) => void;
  MONSTER_FACTION: (item: IMonsterFaction, round: number, context: CONTEXT) => void;
  MONSTER_WHITELIST: (item: IMonsterWhitelist, round: number, context: CONTEXT) => void;
  monstergroup: (item: IMonstergroup, round: number, context: CONTEXT) => void;
  morale_type: (item: IMoraleType, round: number, context: CONTEXT) => void;
  movement_mode: (item: IMovementMode, round: number, context: CONTEXT) => void;
  mutation: (item: IMutation, round: number, context: CONTEXT) => void;
  mutation_category: (item: IMutationCategory, round: number, context: CONTEXT) => void;
  mutation_type: (item: IMutationType, round: number, context: CONTEXT) => void;
  npc: (item: INpc, round: number, context: CONTEXT) => void;
  npc_class: (item: INpcClass, round: number, context: CONTEXT) => void;
  obsolete_terrain: (item: IObsoleteTerrain, round: number, context: CONTEXT) => void;
  overlay_order: (item: IOverlayOrder, round: number, context: CONTEXT) => void;
  overmap_connection: (item: IOvermapConnection, round: number, context: CONTEXT) => void;
  overmap_land_use_code: (item: IOvermapLandUseCode, round: number, context: CONTEXT) => void;
  overmap_location: (item: IOvermapLocation, round: number, context: CONTEXT) => void;
  overmap_special: (item: IOvermapSpecial, round: number, context: CONTEXT) => void;
  overmap_terrain: (item: IOvermapTerrain, round: number, context: CONTEXT) => void;
  palette: (item: IPalette, round: number, context: CONTEXT) => void;
  PET_ARMOR: (item: IPetArmor, round: number, context: CONTEXT) => void;
  profession: (item: IProfession, round: number, context: CONTEXT) => void;
  profession_item_substitutions: (item: IProfessionItemSubstitutions, round: number, context: CONTEXT) => void;
  proficiency: (item: IProficiency, round: number, context: CONTEXT) => void;
  recipe: (item: IRecipe, round: number, context: CONTEXT) => void;
  recipe_category: (item: IRecipeCategory, round: number, context: CONTEXT) => void;
  recipe_group: (item: IRecipeGroup, round: number, context: CONTEXT) => void;
  region_overlay: (item: IRegionOverlay, round: number, context: CONTEXT) => void;
  region_settings: (item: IRegionSettings, round: number, context: CONTEXT) => void;
  relic_procgen_data: (item: IRelicProcgenData, round: number, context: CONTEXT) => void;
  requirement: (item: IRequirement, round: number, context: CONTEXT) => void;
  rotatable_symbol: (item: IRotatableSymbol, round: number, context: CONTEXT) => void;
  scenario: (item: IScenario, round: number, context: CONTEXT) => void;
  SCENARIO_BLACKLIST: (item: IScenarioBlacklist, round: number, context: CONTEXT) => void;
  scent_type: (item: IScentType, round: number, context: CONTEXT) => void;
  score: (item: IScore, round: number, context: CONTEXT) => void;
  skill: (item: ISkill, round: number, context: CONTEXT) => void;
  skill_boost: (item: ISkillBoost, round: number, context: CONTEXT) => void;
  skill_display_type: (item: ISkillDisplayType, round: number, context: CONTEXT) => void;
  snippet: (item: ISnippet, round: number, context: CONTEXT) => void;
  SPECIES: (item: ISpecies, round: number, context: CONTEXT) => void;
  speech: (item: ISpeech, round: number, context: CONTEXT) => void;
  SPELL: (item: ISpell, round: number, context: CONTEXT) => void;
  start_location: (item: IStartLocation, round: number, context: CONTEXT) => void;
  talk_topic: (item: ITalkTopic, round: number, context: CONTEXT) => void;
  technique: (item: ITechnique, round: number, context: CONTEXT) => void;
  ter_furn_transform: (item: ITerFurnTransform, round: number, context: CONTEXT) => void;
  terrain: (item: ITerrain, round: number, context: CONTEXT) => void;
  TOOL: (item: ITool, round: number, context: CONTEXT) => void;
  TOOL_ARMOR: (item: IToolArmor, round: number, context: CONTEXT) => void;
  tool_quality: (item: IToolQuality, round: number, context: CONTEXT) => void;
  TOOLMOD: (item: IToolmod, round: number, context: CONTEXT) => void;
  TRAIT_BLACKLIST: (item: ITraitBlacklist, round: number, context: CONTEXT) => void;
  trait_group: (item: ITraitGroup, round: number, context: CONTEXT) => void;
  trap: (item: ITrap, round: number, context: CONTEXT) => void;
  uncraft: (item: IUncraft, round: number, context: CONTEXT) => void;
  vehicle: (item: IVehicle, round: number, context: CONTEXT) => void;
  vehicle_group: (item: IVehicleGroup, round: number, context: CONTEXT) => void;
  vehicle_part: (item: IVehiclePart, round: number, context: CONTEXT) => void;
  vehicle_part_category: (item: IVehiclePartCategory, round: number, context: CONTEXT) => void;
  vehicle_placement: (item: IVehiclePlacement, round: number, context: CONTEXT) => void;
  vehicle_spawn: (item: IVehicleSpawn, round: number, context: CONTEXT) => void;
  vitamin: (item: IVitamin, round: number, context: CONTEXT) => void;
  weather_type: (item: IWeatherType, round: number, context: CONTEXT) => void;
  WHEEL: (item: IWheel, round: number, context: CONTEXT) => void;
}

export interface ICDDATypeMap {
  achievement: IAchievement;
  activity_type: IActivityType;
  AMMO: IAmmo;
  ammo_effect: IAmmoEffect;
  ammunition_type: IAmmunitionType;
  anatomy: IAnatomy;
  ARMOR: IArmor;
  ascii_art: IAsciiArt;
  BATTERY: IBattery;
  behavior: IBehavior;
  bionic: IBionic;
  BIONIC_ITEM: IBionicItem;
  body_part: IBodyPart;
  BOOK: IBook;
  butchery_requirement: IButcheryRequirement;
  charge_removal_blacklist: IChargeRemovalBlacklist;
  city_building: ICityBuilding;
  clothing_mod: IClothingMod;
  colordef: IColordef;
  COMESTIBLE: IComestible;
  conduct: IConduct;
  construction: IConstruction;
  construction_category: IConstructionCategory;
  construction_group: IConstructionGroup;
  disease_type: IDiseaseType;
  dream: IDream;
  effect_type: IEffectType;
  emit: IEmit;
  enchantment: IEnchantment;
  ENGINE: IEngine;
  event_statistic: IEventStatistic;
  event_transformation: IEventTransformation;
  EXTERNAL_OPTION: IExternalOption;
  faction: IFaction;
  fault: IFault;
  field_type: IFieldType;
  furniture: IFurniture;
  gate: IGate;
  GENERIC: IGeneric;
  GUN: IGun;
  GUNMOD: IGunmod;
  harvest: IHarvest;
  hit_range: IHitRange;
  item_action: IItemAction;
  ITEM_BLACKLIST: IItemBlacklist;
  ITEM_CATEGORY: IItemCategory;
  item_group: IItemGroup;
  json_flag: IJsonFlag;
  LOOT_ZONE: ILootZone;
  MAGAZINE: IMagazine;
  map_extra: IMapExtra;
  mapgen: IMapgen;
  martial_art: IMartialArt;
  material: IMaterial;
  MIGRATION: IMigration;
  mission_definition: IMissionDefinition;
  MOD_INFO: IModInfo;
  mod_tileset: IModTileset;
  MONSTER: IMonster;
  monster_adjustment: IMonsterAdjustment;
  monster_attack: IMonsterAttack;
  MONSTER_BLACKLIST: IMonsterBlacklist;
  MONSTER_FACTION: IMonsterFaction;
  MONSTER_WHITELIST: IMonsterWhitelist;
  monstergroup: IMonstergroup;
  morale_type: IMoraleType;
  movement_mode: IMovementMode;
  mutation: IMutation;
  mutation_category: IMutationCategory;
  mutation_type: IMutationType;
  npc: INpc;
  npc_class: INpcClass;
  obsolete_terrain: IObsoleteTerrain;
  overlay_order: IOverlayOrder;
  overmap_connection: IOvermapConnection;
  overmap_land_use_code: IOvermapLandUseCode;
  overmap_location: IOvermapLocation;
  overmap_special: IOvermapSpecial;
  overmap_terrain: IOvermapTerrain;
  palette: IPalette;
  PET_ARMOR: IPetArmor;
  profession: IProfession;
  profession_item_substitutions: IProfessionItemSubstitutions;
  proficiency: IProficiency;
  recipe: IRecipe;
  recipe_category: IRecipeCategory;
  recipe_group: IRecipeGroup;
  region_overlay: IRegionOverlay;
  region_settings: IRegionSettings;
  relic_procgen_data: IRelicProcgenData;
  requirement: IRequirement;
  rotatable_symbol: IRotatableSymbol;
  scenario: IScenario;
  SCENARIO_BLACKLIST: IScenarioBlacklist;
  scent_type: IScentType;
  score: IScore;
  skill: ISkill;
  skill_boost: ISkillBoost;
  skill_display_type: ISkillDisplayType;
  snippet: ISnippet;
  SPECIES: ISpecies;
  speech: ISpeech;
  SPELL: ISpell;
  start_location: IStartLocation;
  talk_topic: ITalkTopic;
  technique: ITechnique;
  ter_furn_transform: ITerFurnTransform;
  terrain: ITerrain;
  TOOL: ITool;
  TOOL_ARMOR: IToolArmor;
  tool_quality: IToolQuality;
  TOOLMOD: IToolmod;
  TRAIT_BLACKLIST: ITraitBlacklist;
  trait_group: ITraitGroup;
  trap: ITrap;
  uncraft: IUncraft;
  vehicle: IVehicle;
  vehicle_group: IVehicleGroup;
  vehicle_part: IVehiclePart;
  vehicle_part_category: IVehiclePartCategory;
  vehicle_placement: IVehiclePlacement;
  vehicle_spawn: IVehicleSpawn;
  vitamin: IVitamin;
  weather_type: IWeatherType;
  WHEEL: IWheel;
}
