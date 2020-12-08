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

export interface IProcessors<CONTEXT> extends Record<CDDA_JSON_TYPES, (item: never, context: CONTEXT) => void> {
  achievement: (item: IAchievement, context: CONTEXT) => void;
  activity_type: (item: IActivityType, context: CONTEXT) => void;
  AMMO: (item: IAmmo, context: CONTEXT) => void;
  ammo_effect: (item: IAmmoEffect, context: CONTEXT) => void;
  ammunition_type: (item: IAmmunitionType, context: CONTEXT) => void;
  anatomy: (item: IAnatomy, context: CONTEXT) => void;
  ARMOR: (item: IArmor, context: CONTEXT) => void;
  ascii_art: (item: IAsciiArt, context: CONTEXT) => void;
  BATTERY: (item: IBattery, context: CONTEXT) => void;
  behavior: (item: IBehavior, context: CONTEXT) => void;
  bionic: (item: IBionic, context: CONTEXT) => void;
  BIONIC_ITEM: (item: IBionicItem, context: CONTEXT) => void;
  body_part: (item: IBodyPart, context: CONTEXT) => void;
  BOOK: (item: IBook, context: CONTEXT) => void;
  butchery_requirement: (item: IButcheryRequirement, context: CONTEXT) => void;
  charge_removal_blacklist: (item: IChargeRemovalBlacklist, context: CONTEXT) => void;
  city_building: (item: ICityBuilding, context: CONTEXT) => void;
  clothing_mod: (item: IClothingMod, context: CONTEXT) => void;
  colordef: (item: IColordef, context: CONTEXT) => void;
  COMESTIBLE: (item: IComestible, context: CONTEXT) => void;
  conduct: (item: IConduct, context: CONTEXT) => void;
  construction: (item: IConstruction, context: CONTEXT) => void;
  construction_category: (item: IConstructionCategory, context: CONTEXT) => void;
  construction_group: (item: IConstructionGroup, context: CONTEXT) => void;
  disease_type: (item: IDiseaseType, context: CONTEXT) => void;
  dream: (item: IDream, context: CONTEXT) => void;
  effect_type: (item: IEffectType, context: CONTEXT) => void;
  emit: (item: IEmit, context: CONTEXT) => void;
  enchantment: (item: IEnchantment, context: CONTEXT) => void;
  ENGINE: (item: IEngine, context: CONTEXT) => void;
  event_statistic: (item: IEventStatistic, context: CONTEXT) => void;
  event_transformation: (item: IEventTransformation, context: CONTEXT) => void;
  EXTERNAL_OPTION: (item: IExternalOption, context: CONTEXT) => void;
  faction: (item: IFaction, context: CONTEXT) => void;
  fault: (item: IFault, context: CONTEXT) => void;
  field_type: (item: IFieldType, context: CONTEXT) => void;
  furniture: (item: IFurniture, context: CONTEXT) => void;
  gate: (item: IGate, context: CONTEXT) => void;
  GENERIC: (item: IGeneric, context: CONTEXT) => void;
  GUN: (item: IGun, context: CONTEXT) => void;
  GUNMOD: (item: IGunmod, context: CONTEXT) => void;
  harvest: (item: IHarvest, context: CONTEXT) => void;
  hit_range: (item: IHitRange, context: CONTEXT) => void;
  item_action: (item: IItemAction, context: CONTEXT) => void;
  ITEM_BLACKLIST: (item: IItemBlacklist, context: CONTEXT) => void;
  ITEM_CATEGORY: (item: IItemCategory, context: CONTEXT) => void;
  item_group: (item: IItemGroup, context: CONTEXT) => void;
  json_flag: (item: IJsonFlag, context: CONTEXT) => void;
  LOOT_ZONE: (item: ILootZone, context: CONTEXT) => void;
  MAGAZINE: (item: IMagazine, context: CONTEXT) => void;
  map_extra: (item: IMapExtra, context: CONTEXT) => void;
  mapgen: (item: IMapgen, context: CONTEXT) => void;
  martial_art: (item: IMartialArt, context: CONTEXT) => void;
  material: (item: IMaterial, context: CONTEXT) => void;
  MIGRATION: (item: IMigration, context: CONTEXT) => void;
  mission_definition: (item: IMissionDefinition, context: CONTEXT) => void;
  MOD_INFO: (item: IModInfo, context: CONTEXT) => void;
  mod_tileset: (item: IModTileset, context: CONTEXT) => void;
  MONSTER: (item: IMonster, context: CONTEXT) => void;
  monster_adjustment: (item: IMonsterAdjustment, context: CONTEXT) => void;
  monster_attack: (item: IMonsterAttack, context: CONTEXT) => void;
  MONSTER_BLACKLIST: (item: IMonsterBlacklist, context: CONTEXT) => void;
  MONSTER_FACTION: (item: IMonsterFaction, context: CONTEXT) => void;
  MONSTER_WHITELIST: (item: IMonsterWhitelist, context: CONTEXT) => void;
  monstergroup: (item: IMonstergroup, context: CONTEXT) => void;
  morale_type: (item: IMoraleType, context: CONTEXT) => void;
  movement_mode: (item: IMovementMode, context: CONTEXT) => void;
  mutation: (item: IMutation, context: CONTEXT) => void;
  mutation_category: (item: IMutationCategory, context: CONTEXT) => void;
  mutation_type: (item: IMutationType, context: CONTEXT) => void;
  npc: (item: INpc, context: CONTEXT) => void;
  npc_class: (item: INpcClass, context: CONTEXT) => void;
  obsolete_terrain: (item: IObsoleteTerrain, context: CONTEXT) => void;
  overlay_order: (item: IOverlayOrder, context: CONTEXT) => void;
  overmap_connection: (item: IOvermapConnection, context: CONTEXT) => void;
  overmap_land_use_code: (item: IOvermapLandUseCode, context: CONTEXT) => void;
  overmap_location: (item: IOvermapLocation, context: CONTEXT) => void;
  overmap_special: (item: IOvermapSpecial, context: CONTEXT) => void;
  overmap_terrain: (item: IOvermapTerrain, context: CONTEXT) => void;
  palette: (item: IPalette, context: CONTEXT) => void;
  PET_ARMOR: (item: IPetArmor, context: CONTEXT) => void;
  profession: (item: IProfession, context: CONTEXT) => void;
  profession_item_substitutions: (item: IProfessionItemSubstitutions, context: CONTEXT) => void;
  proficiency: (item: IProficiency, context: CONTEXT) => void;
  recipe: (item: IRecipe, context: CONTEXT) => void;
  recipe_category: (item: IRecipeCategory, context: CONTEXT) => void;
  recipe_group: (item: IRecipeGroup, context: CONTEXT) => void;
  region_overlay: (item: IRegionOverlay, context: CONTEXT) => void;
  region_settings: (item: IRegionSettings, context: CONTEXT) => void;
  relic_procgen_data: (item: IRelicProcgenData, context: CONTEXT) => void;
  requirement: (item: IRequirement, context: CONTEXT) => void;
  rotatable_symbol: (item: IRotatableSymbol, context: CONTEXT) => void;
  scenario: (item: IScenario, context: CONTEXT) => void;
  SCENARIO_BLACKLIST: (item: IScenarioBlacklist, context: CONTEXT) => void;
  scent_type: (item: IScentType, context: CONTEXT) => void;
  score: (item: IScore, context: CONTEXT) => void;
  skill: (item: ISkill, context: CONTEXT) => void;
  skill_boost: (item: ISkillBoost, context: CONTEXT) => void;
  skill_display_type: (item: ISkillDisplayType, context: CONTEXT) => void;
  snippet: (item: ISnippet, context: CONTEXT) => void;
  SPECIES: (item: ISpecies, context: CONTEXT) => void;
  speech: (item: ISpeech, context: CONTEXT) => void;
  SPELL: (item: ISpell, context: CONTEXT) => void;
  start_location: (item: IStartLocation, context: CONTEXT) => void;
  talk_topic: (item: ITalkTopic, context: CONTEXT) => void;
  technique: (item: ITechnique, context: CONTEXT) => void;
  ter_furn_transform: (item: ITerFurnTransform, context: CONTEXT) => void;
  terrain: (item: ITerrain, context: CONTEXT) => void;
  TOOL: (item: ITool, context: CONTEXT) => void;
  TOOL_ARMOR: (item: IToolArmor, context: CONTEXT) => void;
  tool_quality: (item: IToolQuality, context: CONTEXT) => void;
  TOOLMOD: (item: IToolmod, context: CONTEXT) => void;
  TRAIT_BLACKLIST: (item: ITraitBlacklist, context: CONTEXT) => void;
  trait_group: (item: ITraitGroup, context: CONTEXT) => void;
  trap: (item: ITrap, context: CONTEXT) => void;
  uncraft: (item: IUncraft, context: CONTEXT) => void;
  vehicle: (item: IVehicle, context: CONTEXT) => void;
  vehicle_group: (item: IVehicleGroup, context: CONTEXT) => void;
  vehicle_part: (item: IVehiclePart, context: CONTEXT) => void;
  vehicle_part_category: (item: IVehiclePartCategory, context: CONTEXT) => void;
  vehicle_placement: (item: IVehiclePlacement, context: CONTEXT) => void;
  vehicle_spawn: (item: IVehicleSpawn, context: CONTEXT) => void;
  vitamin: (item: IVitamin, context: CONTEXT) => void;
  weather_type: (item: IWeatherType, context: CONTEXT) => void;
  WHEEL: (item: IWheel, context: CONTEXT) => void;
}
