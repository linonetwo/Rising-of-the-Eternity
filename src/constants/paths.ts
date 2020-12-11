import path from 'path';
import os from 'os';

export const isDevelopment = process.env.NODE_ENV === 'development';
export const isProductionTest = process.env.PROD_TEST === 'true';
let resourcesPath = path.join(os.tmpdir(), 'fallbackResourcePath');
if (isDevelopment || isProductionTest) {
  resourcesPath = path.join(__dirname, '../../', 'resources');
} else if (typeof process !== 'undefined' && typeof process.resourcesPath === 'string') {
  resourcesPath = process.resourcesPath;
}
export const iconPath = path.join(resourcesPath, 'icon.icns');
export const modFolder = path.join(resourcesPath, 'mods');
