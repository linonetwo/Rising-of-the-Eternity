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
   *
   * @param {*} name Name of resource
   * @param {*} modifyTexture Function to do something with texture, return a new texture
   * @param {*} copyFrom Name of resource, You can copy a texture and create a flipped version
   */
  getTexture(name: string, modifyTexture: (texture: PIXI.Texture) => PIXI.Texture = (i) => i, copyFrom?: string): PIXI.Texture | void {
    // generate a new texture from another texture
    let cachedTexture = this.textures[name];
    if (copyFrom && !cachedTexture && this.textures[copyFrom]) {
      const textureToCopy = this.textures[copyFrom];
      if (textureToCopy instanceof PIXI.Texture) {
        cachedTexture = modifyTexture(textureToCopy);
      } else {
        cachedTexture = textureToCopy;
      }
    }
    // if no "copyFrom" set
    if (!cachedTexture) return;
    if (!(cachedTexture instanceof PIXI.Texture)) {
      // generate texture on first load
      cachedTexture = PIXI.Texture.from(cachedTexture);
      if (modifyTexture) {
        cachedTexture = modifyTexture(cachedTexture);
      }
      // update cache
      this.textures[name] = cachedTexture;
    }
    return cachedTexture;
  }
}
export const resources = new ResourcePool();
