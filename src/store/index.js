// 组装模块并导出 store 的文件
import Vuex from 'vuex'
import Vue from 'vue'
// vuex的各个模块
import common from '@/store/modules/common';

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        common
    }
})