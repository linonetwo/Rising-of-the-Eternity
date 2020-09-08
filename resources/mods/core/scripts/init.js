const modName = 'core';

const textureIndex = {
  floors: [
    'ASPHALT',
    'BLECH',
    'DIAGONAL',
    'GEMINA',
    'GREEK',
    'HEXAGON',
    'LEAF',
    'MARMOR',
    'TRIAD',
    'TWIST',
    'WELLA',
    'BAROCK',
    'CROSS',
    'DRAPEZ',
    'GEMINY',
    'HEXAGA',
    'KACHELN',
    'LOCH',
    'STERN',
    'TRIANGLE',
    'TWISTA',
    'TitaniumTile',
  ],
  flowers: {
    AlliumGiganteum: ['AlliumGiganteumA', 'AlliumGiganteumB'],
    Anthurium: ['AnthuriumA', 'AnthuriumB', 'AnthuriumC', 'AnthuriumD', 'AnthuriumE', 'AnthuriumF'],
    NymphHair: ['Nymph_Hair_Plant_A', 'Nymph_Hair_Plant_B', 'Nymph_Hair_Plant_C'],
    PinkRimstalk: ['PinkRimstalkA', 'PinkRimstalkB', 'PinkRimstalkC'],
    Plumeria: ['PlumeriaA', 'PlumeriaB', 'PlumeriaC'],
    Sunflower: ['SunflowerA', 'SunflowerB'],
  },
  tree: {
    RedMaple: ['RedMaple_a', 'RedMaple_b', 'RedMaple_c'],
    TreeAcacia: ['TreeAcacia'],
    TreeCamellia: ['TreeCamelliaA'],
    TreeCherryBlossom: ['TreeCherryBlossomA'],
    TreeJapaneseMaple: ['TreeJapaneseMapleA'],
    TreeCherryBlossom_Leafless: ['TreeCherryBlossom_Leafless'],
    TreeJapaneseMaple_Leafless: ['TreeJapaneseMaple_Leafless'],
  },
  wall: [
    'Light_Atlas',
    'Shield_Atlas',
    'Titanium_Atlas',
    'Window_Atlas',
    'Light_MenuIcon',
    'Shield_MenuIcon',
    'Titanium_MenuIcon',
    'Window_MenuIcon',
  ],
  door: ['DoorTitanium_MenuIcon', 'DoorTitanium_Mover', 'DoorTitaniumBD_MenuIcon', 'DoorTitaniumBD_Mover'],
  hair: ['Bernadetta', 'Caspar', 'Dorothea', 'Ferdinand', 'Hubert', 'Linhardt', 'Petra', 'Edelgard'],
  bodies: ['Naked_Fat', 'Naked_Female', 'Naked_Hulk', 'Naked_Male', 'Naked_Thin'],
  heads: {
    male: [
      'Male_Average_Normal',
      'Male_Average_Pointy',
      'Male_Average_Wide',
      'Male_Narrow_Pointy',
      'Male_Narrow_Wide',
      'Male_Narrow_Normal',
    ],
    female: [
      'Female_Average_Normal',
      'Female_Average_Pointy',
      'Female_Narrow_Normal',
      'Female_Narrow_Wide',
      'Female_Average_Wide',
      'Female_Narrow_Pointy',
    ],
  },
};

textureIndex.heads.female.forEach(async (resourceName) => {
  for (const facing of ['north', 'south', 'east']) {
    const resourceDetailName = `${resourceName}_${facing}`;
    const resourceBuffer = await window.mod.getTexture({
      modName,
      texturePath: `core/textures/heads/female/${resourceDetailName}.png`,
    });
    resources.addTextureRaw(resourceDetailName, resourceBuffer);
  }
});
textureIndex.hair.forEach(async (resourceName) => {
  for (const facing of ['north', 'south', 'east']) {
    const resourceDetailName = `${resourceName}_${facing}`;
    const resourceBuffer = await window.mod.getTexture({
      modName,
      texturePath: `core/textures/hair/${resourceDetailName}.png`,
    });
    resources.addTextureRaw(resourceDetailName, resourceBuffer);
  }
});
textureIndex.bodies.forEach(async (resourceName) => {
  for (const facing of ['north', 'south', 'east']) {
    const resourceDetailName = `${resourceName}_${facing}`;
    const resourceBuffer = await window.mod.getTexture({
      modName,
      texturePath: `core/textures/bodies/${resourceDetailName}.png`,
    });
    resources.addTextureRaw(resourceDetailName, resourceBuffer);
  }
});
Object.keys(textureIndex.flowers).forEach(async (resourceName) => {
  for (const resourceDetailName of textureIndex.flowers[resourceName]) {
    const resourceBuffer = await window.mod.getTexture({
      modName,
      texturePath: `core/textures/flowers/${resourceName}/${resourceDetailName}.png`,
    });
    resources.addTextureRaw(resourceDetailName, resourceBuffer);
  }
});
Object.keys(textureIndex.tree).forEach(async (resourceName) => {
  for (const resourceDetailName of textureIndex.tree[resourceName]) {
    const resourceBuffer = await window.mod.getTexture({
      modName,
      texturePath: `core/textures/tree/${resourceName}/${resourceDetailName}.png`,
    });
    resources.addTextureRaw(resourceDetailName, resourceBuffer);
  }
});
textureIndex.floors.forEach(async (resourceName) => {
  const resourceBuffer = await window.mod.getTexture({
    modName,
    texturePath: `core/textures/floors/${resourceName}.png`,
  });
  resources.addTextureRaw(resourceName, resourceBuffer);
});
textureIndex.wall.forEach(async (resourceName) => {
  const resourceBuffer = await window.mod.getTexture({
    modName,
    texturePath: `core/textures/wall/${resourceName}.png`,
  });
  resources.addTextureRaw(resourceName, resourceBuffer);
});
