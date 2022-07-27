/**
 * @description i18n entry
 */

import { i18nAddResources } from "@packages/core/index";
import enResources from "./en";
import zhResources from "./zh-CN";

i18nAddResources("en", enResources);
i18nAddResources("zh-CN", zhResources);
