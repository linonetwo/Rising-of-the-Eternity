import path from 'path';

export const isDevelopment = process.env.NODE_ENV === 'development';
export const isProductionTest = process.env.PROD_TEST === 'true';
export const resourcesPath = isDevelopment || isProductionTest ? path.join(__dirname, '../../', 'resources') : process.resourcesPath;
export const iconPath = path.join(resourcesPath, 'icon.icns');
export const modFolder = path.join(resourcesPath, 'mods');
