/*
 * @Description: 
 * @Date: 2022-06-23 11:57:31
 * @LastEditTime: 2022-06-23 14:25:14
 */
import { createStore } from 'vuex'

import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const state = {}

let modules = {}
// 导入 modules 下面的 所有 .ts文件
const modulesFiles = import.meta.globEager("./modules/*.ts")
for (const path in modulesFiles) {
    const moduleName = path.replace(/(.*\/)*([^.]+).*/gi, '$2')
    modules = { ...modules, [moduleName]: modulesFiles[path].default }
}

export default createStore({
    state,
    getters,
    mutations,
    actions,
    modules
})