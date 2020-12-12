import { injectable } from 'inversify';
import Loki, { Collection } from 'lokijs';
import path from 'path';
import { pick } from 'lodash';

import {
  readCDDASourceFiles,
  buildKnowledgeBaseFromCDDAData,
  IProcessors,
  ICDDAJSONWithComments,
  CDDA_JSON_TYPES,
  ICDDATypeMap,
} from './cdda';
import { modFolder } from '@/constants/paths';
import { IDescriptionStore, ExtraDatabaseCollections, IDescriptionLoadingError } from './types';
import { mergeJSONComments } from './cdda/utils';

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
    const getCollectionOrCreate = <D extends ICDDAJSONWithComments>(
      collectionName: string,
      options: Partial<CollectionOptions<D>>,
    ): Collection<D> => {
      let collection = this.database.getCollection<D>(collectionName);
      if (collection === null) {
        collection = this.database.addCollection<D>(collectionName, options);
      }
      return collection;
    };
    /** By default we simply put things into collection on the first pass
     * Some type don't have id, such as 'uncraft', some have array of id such as 'overmap_terrain', don't use this default method
     */
    const insertItemInCollectionWithIndex = <D extends ICDDAJSONWithComments>(item: D, round: number): Collection<D> => {
      // From https://github.com/CleverRaven/Cataclysm-DDA/blob/c380afc798df064ab76645a0a2f66358d425e3bc/doc/NPCs.md#id
      // The topic id can also be an array of strings. This is loaded as if several topics with the exact same content have been given in json, each associated with an id from the id, array. Note that loading from json will append responses and, if defined in json, override the dynamic_line and the replace_built_in_responses setting. This allows adding responses to several topics at once.
      // But we will expand "one item with list of id" into "several items" before add them into the db, so we hack the type check below
      const collection = getCollectionOrCreate<D & { id?: string | string[]; abstract?: string }>(item.type, {
        unique: ['id', 'abstract'],
        indices: ['id', 'abstract'],
      });
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

    knowledgeBaseBuilders.achievement = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.activity_type = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.AMMO = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.ammo_effect = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.ammunition_type = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.anatomy = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.ARMOR = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.ascii_art = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.BATTERY = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.behavior = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.bionic = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.BIONIC_ITEM = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.body_part = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.BOOK = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.butchery_requirement = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.charge_removal_blacklist = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.city_building = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.clothing_mod = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.colordef = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.COMESTIBLE = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.conduct = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.construction = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.construction_category = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.construction_group = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.disease_type = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.dream = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.effect_type = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.emit = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.enchantment = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.ENGINE = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.event_statistic = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.event_transformation = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.EXTERNAL_OPTION = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.faction = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.fault = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.field_type = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.furniture = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.gate = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.GENERIC = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.GUN = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.GUNMOD = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.harvest = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.hit_range = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.item_action = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.ITEM_BLACKLIST = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.ITEM_CATEGORY = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.item_group = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.json_flag = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.LOOT_ZONE = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.MAGAZINE = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.map_extra = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.mapgen = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.martial_art = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.material = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.MIGRATION = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.mission_definition = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.MOD_INFO = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.mod_tileset = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.MONSTER = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.monster_adjustment = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.monster_attack = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.MONSTER_BLACKLIST = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.MONSTER_FACTION = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.MONSTER_WHITELIST = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.monstergroup = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.morale_type = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.movement_mode = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.mutation = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.mutation_category = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.mutation_type = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.npc = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.npc_class = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.obsolete_terrain = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.overlay_order = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.overmap_connection = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.overmap_land_use_code = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.overmap_location = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.overmap_special = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.overmap_terrain = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.palette = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.PET_ARMOR = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.profession = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.profession_item_substitutions = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.proficiency = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.recipe = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.recipe_category = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.recipe_group = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.region_overlay = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.region_settings = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.relic_procgen_data = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.requirement = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.rotatable_symbol = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.scenario = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.SCENARIO_BLACKLIST = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.scent_type = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.score = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.skill = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.skill_boost = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.skill_display_type = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.snippet = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.SPECIES = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.speech = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.SPELL = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.start_location = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.talk_topic = (item, round, context) => {
      const { type, id } = item;
      const collection = getCollectionOrCreate<typeof item>(type, { unique: ['id'], indices: ['id'] });
      if (round === 0) {
        // expand { id: string[] } into { id:string }[]
        if (Array.isArray(id)) {
          const newItems = id.map((anID) => ({ ...item, id: anID }));
          return newItems.map((newItem) => knowledgeBaseBuilders.talk_topic(newItem, round, context));
        }
        // now we have id: string
        const existedItem = collection.findOne({ id: { $contains: id } });
        if (existedItem === null) {
          collection.insertOne(item);
        } else {
          collection.findAndUpdate(pick(existedItem, '$loki'), (oldItem) => {
            // concat responses array if both array exists
            if (item.responses !== undefined) {
              if (oldItem.responses !== undefined) {
                oldItem.responses.push(...item.responses);
              } else {
                oldItem.responses = item.responses;
              }
            }
            // merge comments
            mergeJSONComments(item, oldItem);
          });
        }
      }
    };
    knowledgeBaseBuilders.technique = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.ter_furn_transform = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.terrain = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.TOOL = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.TOOL_ARMOR = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.tool_quality = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.TOOLMOD = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.TRAIT_BLACKLIST = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.trait_group = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.trap = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.uncraft = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.vehicle = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.vehicle_group = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.vehicle_part = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.vehicle_part_category = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.vehicle_placement = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.vehicle_spawn = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.vitamin = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.weather_type = insertItemInCollectionWithIndex;
    knowledgeBaseBuilders.WHEEL = insertItemInCollectionWithIndex;

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

  /**
   * Get item by type and id, note that not every type have id, and even type have id, some don't have one or have "abstract" (which should use getItemByAbstractID() to load)
   * @param type type of JSON
   * @param id id of item
   */
  public getItemByID<T extends ICDDATypeMap[CDDA_JSON_TYPES]>(type: CDDA_JSON_TYPES, id: string): T | null {
    return this.database.getCollection<T & { id: string }>(type).findOne({ id: { $contains: id } });
  }

  /**
   * Some item is abstract, so they don't have "id", instead have "abstract"
   * @param type type of JSON
   * @param abstractID content of "abstract" field
   */
  public getItemByAbstractID<T extends ICDDATypeMap[CDDA_JSON_TYPES]>(type: CDDA_JSON_TYPES, abstractID: string): T | null {
    return this.database.getCollection<T & { abstract: string }>(type).findOne({ abstract: { $contains: abstractID } });
  }
}
