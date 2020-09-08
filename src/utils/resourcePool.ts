// @flow
/* eslint-disable no-await-in-loop, guard-for-in */
import * as PIXI from 'pixi.js';

type Base64Image = string;

class ResourcePool {
  index = {};
  textures: { [textureName: string]: PIXI.Texture | Base64Image } = {};
  addTextureRaw(name: string, rawTexture: PIXI.Texture) {
    this.textures[name] = rawTexture;
  }

  /**
   * Get PIXI.Texture instance from resource poll
   * This will update the cache
   * @param {*} name Name of resource
   * @param {*} modifyTexture Function to do something with texture, return a new texture
   * @param {*} copyFrom Name of resource, You can copy a texture and create a flipped version
   */
  getTexture(name: string, modifyTexture: (texture: PIXI.Texture) => PIXI.Texture = (i) => i, copyFrom?: string): PIXI.Texture | void {
    let cachedTexture = this.textures[name];
    // generate a new texture from another texture
    if (copyFrom && !cachedTexture && this.textures[copyFrom]) {
      const textureToCopy = this.textures[copyFrom];
      if (textureToCopy instanceof PIXI.Texture) {
        cachedTexture = modifyTexture(textureToCopy);
      } else {
        cachedTexture = textureToCopy;
      }
    }
    // if no "copyFrom" set, and we don't have such texture, load it from disk
    if (!cachedTexture) {
      return;
    }
    if (!(cachedTexture instanceof PIXI.Texture)) {
      // generate texture on first load
      cachedTexture = PIXI.Texture.from(cachedTexture);
      if (modifyTexture) {
        cachedTexture = modifyTexture(cachedTexture);
      }
      this.addTextureRaw(name, cachedTexture);
    }
    return cachedTexture;
  }

  /**
   * Load PIXI.Texture instance from disk async
   * This will update the cache
   * @param {*} texturePath Name of resource
   */
  async getTextureFromDisk(texturePath: string) {
    const cachedTexture = this.textures[texturePath];
    if (cachedTexture) {
      return cachedTexture;
    }
    const textureBase64String = await window.mod.getTexture({ texturePath });
    const newTexture = PIXI.Texture.from(textureBase64String);
    this.addTextureRaw(texturePath, newTexture);
    return newTexture;
  }
}
export const resources = new ResourcePool();
