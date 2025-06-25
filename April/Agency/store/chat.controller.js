
import { GoogleGenerativeAI } from '@google/generative-ai';
const genAI = new GoogleGenerativeAI('');


async function getGeminiModel(prompt) {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const result = await model.generateContent(prompt);
    console.debug('Respuesta', result);
    const response = await result.response;
    const text = response.text();
    return text;
}


const state = {
    query: '',
    response: null,
}
const actions = {
    setQuery({ commit }, newQuery) {
        commit('SET_QUERY', newQuery)
    },
    setResponse({ commit }, newResponse) {
        commit('SET_RESPONSE', newResponse)
    },
    async sendQuery({ commit, state }) {
        try {
            commit('SET_RESPONSE', 'Generando respuesta...')
            const response = await getGeminiModel(state.query)
            commit('SET_RESPONSE', response)
        } catch (error) {
            console.error('Error al obtener respuesta:', error)
            commit('SET_RESPONSE', 'Error al generar la respuesta. Intenta de nuevo.')
        }
    }
}
const mutations = {
    SET_QUERY(state, payload) {
        state.query = payload
    },
    SET_RESPONSE(state, payload) {
        state.response = payload
    }
}
const getters = {}
export const chatController = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}