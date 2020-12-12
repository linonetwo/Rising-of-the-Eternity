import { injectable } from 'inversify';
import Loki, { Collection, CollectionOptions } from 'lokijs';
import path from 'path';

import { readCDDASourceFiles, buildKnowledgeBaseFromCDDAData, IProcessors, ICDDAJSON } from './cdda';
import { modFolder } from '@/constants/paths';
import { IDescriptionStore, ExtraDatabaseCollections, IDescriptionLoadingError } from './types';

@injectable()
export class CDDADescriptions implements IDescriptionStore {
  private readonly database: Loki;
  private readonly errorLogs: Collection<IDescriptionLoadingError>;

  constructor() {
    this.database = new Loki('cdda');
    this.errorLogs = this.database.addCollection<IDescriptionLoadingError>(ExtraDatabaseCollections.error);
  }

  public async init(): Promise<void> {
    const cddaModPath = path.join(modFolder, 'cdda');
    const cddaCorePath = path.join(cddaModPath, 'core');
    const folderInspectResults = await readCDDASourceFiles(cddaCorePath);
    // load read JSON to the database
    const loaders = this.buildLoaders();

    // First round, store types into database
    // TODO: Second round...
    for (const round of [0, 1]) {
      for (const folderInspectResult of folderInspectResults) {
        buildKnowledgeBaseFromCDDAData<Loki>(folderInspectResult, this.database, loaders, this.addErrorLog, round);
      }
    }
  }

  /**
   * Build loaders of each type of CDDA data JSON Object, load things into the db
   */
  private buildLoaders(): IProcessors<Loki> {
    /** Get db collection, and create on if it is not exist, make sure you can get one */
    const getCollectionOrCreate = <D extends ICDDAJSON>(collectionName: string, options: Partial<CollectionOptions<D>>): Collection<D> => {
      let collection = this.database.getCollection<D>(collectionName);
      if (collection === null) {
        collection = this.database.addCollection<D>(collectionName, options);
      }
      return collection;
    };
    /** By default we simply put things into collection on the first pass */
    const defaultFirstRound = <D extends ICDDAJSON>(item: D, round: number): Collection<D> => {
      const collection = getCollectionOrCreate<D>('achievement', { unique: ['id'], indices: ['id'] });
      if (round === 0) {
        collection.insertOne(item);
      }
      return collection;
    };

    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    const knowledgeBaseBuilders = {} as IProcessors<Loki>;
    // ##        #######     ###    ########  ######## ########   ######
    // ##       ##     ##   ## ##   ##     ## ##       ##     ## ##    ##
    // ##       ##     ##  ##   ##  ##     ## ##       ##     ## ##
    // ##       ##     ## ##     ## ##     ## ######   ########   ######
    // ##       ##     ## ######### ##     ## ##       ##   ##         ##
    // ##       ##     ## ##     ## ##     ## ##       ##    ##  ##    ##
    // ########  #######  ##     ## ########  ######## ##     ##  ######

    knowledgeBaseBuilders.achievement = defaultFirstRound;
    knowledgeBaseBuilders.activity_type = defaultFirstRound;
    knowledgeBaseBuilders.AMMO = defaultFirstRound;
    knowledgeBaseBuilders.ammo_effect = defaultFirstRound;
    knowledgeBaseBuilders.ammunition_type = defaultFirstRound;
    knowledgeBaseBuilders.anatomy = defaultFirstRound;
    knowledgeBaseBuilders.ARMOR = defaultFirstRound;
    knowledgeBaseBuilders.ascii_art = defaultFirstRound;
    knowledgeBaseBuilders.BATTERY = defaultFirstRound;
    knowledgeBaseBuilders.behavior = defaultFirstRound;
    knowledgeBaseBuilders.bionic = defaultFirstRound;
    knowledgeBaseBuilders.BIONIC_ITEM = defaultFirstRound;
    knowledgeBaseBuilders.body_part = defaultFirstRound;
    knowledgeBaseBuilders.BOOK = defaultFirstRound;
    knowledgeBaseBuilders.butchery_requirement = defaultFirstRound;
    knowledgeBaseBuilders.charge_removal_blacklist = defaultFirstRound;
    knowledgeBaseBuilders.city_building = defaultFirstRound;
    knowledgeBaseBuilders.clothing_mod = defaultFirstRound;
    knowledgeBaseBuilders.colordef = defaultFirstRound;
    knowledgeBaseBuilders.COMESTIBLE = defaultFirstRound;
    knowledgeBaseBuilders.conduct = defaultFirstRound;
    knowledgeBaseBuilders.construction = defaultFirstRound;
    knowledgeBaseBuilders.construction_category = defaultFirstRound;
    knowledgeBaseBuilders.construction_group = defaultFirstRound;
    knowledgeBaseBuilders.disease_type = defaultFirstRound;
    knowledgeBaseBuilders.dream = defaultFirstRound;
    knowledgeBaseBuilders.effect_type = defaultFirstRound;
    knowledgeBaseBuilders.emit = defaultFirstRound;
    knowledgeBaseBuilders.enchantment = defaultFirstRound;
    knowledgeBaseBuilders.ENGINE = defaultFirstRound;
    knowledgeBaseBuilders.event_statistic = defaultFirstRound;
    knowledgeBaseBuilders.event_transformation = defaultFirstRound;
    knowledgeBaseBuilders.EXTERNAL_OPTION = defaultFirstRound;
    knowledgeBaseBuilders.faction = defaultFirstRound;
    knowledgeBaseBuilders.fault = defaultFirstRound;
    knowledgeBaseBuilders.field_type = defaultFirstRound;
    knowledgeBaseBuilders.furniture = defaultFirstRound;
    knowledgeBaseBuilders.gate = defaultFirstRound;
    knowledgeBaseBuilders.GENERIC = defaultFirstRound;
    knowledgeBaseBuilders.GUN = defaultFirstRound;
    knowledgeBaseBuilders.GUNMOD = defaultFirstRound;
    knowledgeBaseBuilders.harvest = defaultFirstRound;
    knowledgeBaseBuilders.hit_range = defaultFirstRound;
    knowledgeBaseBuilders.item_action = defaultFirstRound;
    knowledgeBaseBuilders.ITEM_BLACKLIST = defaultFirstRound;
    knowledgeBaseBuilders.ITEM_CATEGORY = defaultFirstRound;
    knowledgeBaseBuilders.item_group = defaultFirstRound;
    knowledgeBaseBuilders.json_flag = defaultFirstRound;
    knowledgeBaseBuilders.LOOT_ZONE = defaultFirstRound;
    knowledgeBaseBuilders.MAGAZINE = defaultFirstRound;
    knowledgeBaseBuilders.map_extra = defaultFirstRound;
    knowledgeBaseBuilders.mapgen = defaultFirstRound;
    knowledgeBaseBuilders.martial_art = defaultFirstRound;
    knowledgeBaseBuilders.material = defaultFirstRound;
    knowledgeBaseBuilders.MIGRATION = defaultFirstRound;
    knowledgeBaseBuilders.mission_definition = defaultFirstRound;
    knowledgeBaseBuilders.MOD_INFO = defaultFirstRound;
    knowledgeBaseBuilders.mod_tileset = defaultFirstRound;
    knowledgeBaseBuilders.MONSTER = defaultFirstRound;
    knowledgeBaseBuilders.monster_adjustment = defaultFirstRound;
    knowledgeBaseBuilders.monster_attack = defaultFirstRound;
    knowledgeBaseBuilders.MONSTER_BLACKLIST = defaultFirstRound;
    knowledgeBaseBuilders.MONSTER_FACTION = defaultFirstRound;
    knowledgeBaseBuilders.MONSTER_WHITELIST = defaultFirstRound;
    knowledgeBaseBuilders.monstergroup = defaultFirstRound;
    knowledgeBaseBuilders.morale_type = defaultFirstRound;
    knowledgeBaseBuilders.movement_mode = defaultFirstRound;
    knowledgeBaseBuilders.mutation = defaultFirstRound;
    knowledgeBaseBuilders.mutation_category = defaultFirstRound;
    knowledgeBaseBuilders.mutation_type = defaultFirstRound;
    knowledgeBaseBuilders.npc = defaultFirstRound;
    knowledgeBaseBuilders.npc_class = defaultFirstRound;
    knowledgeBaseBuilders.obsolete_terrain = defaultFirstRound;
    knowledgeBaseBuilders.overlay_order = defaultFirstRound;
    knowledgeBaseBuilders.overmap_connection = defaultFirstRound;
    knowledgeBaseBuilders.overmap_land_use_code = defaultFirstRound;
    knowledgeBaseBuilders.overmap_location = defaultFirstRound;
    knowledgeBaseBuilders.overmap_special = defaultFirstRound;
    knowledgeBaseBuilders.overmap_terrain = defaultFirstRound;
    knowledgeBaseBuilders.palette = defaultFirstRound;
    knowledgeBaseBuilders.PET_ARMOR = defaultFirstRound;
    knowledgeBaseBuilders.profession = defaultFirstRound;
    knowledgeBaseBuilders.profession_item_substitutions = defaultFirstRound;
    knowledgeBaseBuilders.proficiency = defaultFirstRound;
    knowledgeBaseBuilders.recipe = defaultFirstRound;
    knowledgeBaseBuilders.recipe_category = defaultFirstRound;
    knowledgeBaseBuilders.recipe_group = defaultFirstRound;
    knowledgeBaseBuilders.region_overlay = defaultFirstRound;
    knowledgeBaseBuilders.region_settings = defaultFirstRound;
    knowledgeBaseBuilders.relic_procgen_data = defaultFirstRound;
    knowledgeBaseBuilders.requirement = defaultFirstRound;
    knowledgeBaseBuilders.rotatable_symbol = defaultFirstRound;
    knowledgeBaseBuilders.scenario = defaultFirstRound;
    knowledgeBaseBuilders.SCENARIO_BLACKLIST = defaultFirstRound;
    knowledgeBaseBuilders.scent_type = defaultFirstRound;
    knowledgeBaseBuilders.score = defaultFirstRound;
    knowledgeBaseBuilders.skill = defaultFirstRound;
    knowledgeBaseBuilders.skill_boost = defaultFirstRound;
    knowledgeBaseBuilders.skill_display_type = defaultFirstRound;
    knowledgeBaseBuilders.snippet = defaultFirstRound;
    knowledgeBaseBuilders.SPECIES = defaultFirstRound;
    knowledgeBaseBuilders.speech = defaultFirstRound;
    knowledgeBaseBuilders.SPELL = defaultFirstRound;
    knowledgeBaseBuilders.start_location = defaultFirstRound;
    knowledgeBaseBuilders.talk_topic = defaultFirstRound;
    knowledgeBaseBuilders.technique = defaultFirstRound;
    knowledgeBaseBuilders.ter_furn_transform = defaultFirstRound;
    knowledgeBaseBuilders.terrain = defaultFirstRound;
    knowledgeBaseBuilders.TOOL = defaultFirstRound;
    knowledgeBaseBuilders.TOOL_ARMOR = defaultFirstRound;
    knowledgeBaseBuilders.tool_quality = defaultFirstRound;
    knowledgeBaseBuilders.TOOLMOD = defaultFirstRound;
    knowledgeBaseBuilders.TRAIT_BLACKLIST = defaultFirstRound;
    knowledgeBaseBuilders.trait_group = defaultFirstRound;
    knowledgeBaseBuilders.trap = defaultFirstRound;
    knowledgeBaseBuilders.uncraft = defaultFirstRound;
    knowledgeBaseBuilders.vehicle = defaultFirstRound;
    knowledgeBaseBuilders.vehicle_group = defaultFirstRound;
    knowledgeBaseBuilders.vehicle_part = defaultFirstRound;
    knowledgeBaseBuilders.vehicle_part_category = defaultFirstRound;
    knowledgeBaseBuilders.vehicle_placement = defaultFirstRound;
    knowledgeBaseBuilders.vehicle_spawn = defaultFirstRound;
    knowledgeBaseBuilders.vitamin = defaultFirstRound;
    knowledgeBaseBuilders.weather_type = defaultFirstRound;
    knowledgeBaseBuilders.WHEEL = defaultFirstRound;

    return knowledgeBaseBuilders;
  }

  //  #     # ####### #       ######  ####### ######   #####
  //  #     # #       #       #     # #       #     # #     #
  //  #     # #       #       #     # #       #     # #
  //  ####### #####   #       ######  #####   ######   #####
  //  #     # #       #       #       #       #   #         #
  //  #     # #       #       #       #       #    #  #     #
  //  #     # ####### ####### #       ####### #     #  #####

  public addErrorLog = (log: IDescriptionLoadingError): void => {
    this.errorLogs.insert(log);
  };

  public printErrorLogToConsole(): void {
    this.errorLogs.find().forEach((logItem) => {
      console.log('');
      console.group();
      console.warn(`\u001B[4m${logItem.message}\u001B[0m`);
      console.warn(`Type: \u001B[33m\u001B[40m${logItem.type}\u001B[0m , Path: \u001B[36m${logItem.filePath}\u001B[0m`);
      console.groupEnd();
      console.log('');
    });
  }
}
