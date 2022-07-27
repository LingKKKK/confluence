/**
 * @description register builtin modules
 */

// basic-modules
import '@packages/basic-modules/assets/index.less'
import basicModules from '@packages/basic-modules'

// list-module
import '@packages/list-module/assets/index.less'
import wangEditorListModule from '@packages/list-module'

// table-module
import '@packages/table-module/assets/index.less'
import wangEditorTableModule from '@packages/table-module'

// upload-image-module
import '@packages/upload-image-module/assets/index.less'
import wangEditorUploadImageModule from '@packages/upload-image-module'

// code-highlight
import '@packages/code-highlight/assets/index.less'
import { wangEditorCodeHighlightModule } from '@packages/code-highlight'

import registerModule from './register'

basicModules.forEach(module => registerModule(module))
registerModule(wangEditorListModule)
registerModule(wangEditorTableModule)
registerModule(wangEditorUploadImageModule)
registerModule(wangEditorCodeHighlightModule)
