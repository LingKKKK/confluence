/**
 * @description uploadImage module
 */

import { IModuleConf } from '@packages/core/index'
import withUploadImage from './plugin'
import { uploadImageMenuConf } from './menu/index'

const uploadImage: Partial<IModuleConf> = {
  menus: [uploadImageMenuConf],
  editorPlugin: withUploadImage,
}

export default uploadImage
