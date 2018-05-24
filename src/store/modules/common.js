import * as types from '@/store/types';

const state = {
    sessionId: ''
}

const getters = {
    sessionId: state => state.sessionId
}

const actions = {
    SESSION_ID({commit}, res) {
        commit(types.SESSION_ID, res);
    }
}

const mutations = {
    [types.SESSION_ID](state, res) {
        state.sessionId = res;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
