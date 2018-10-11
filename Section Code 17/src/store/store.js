import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';
import * as actions from './actions';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        value: 0
    },
    getters: {

        value: state => {
            return state.value;
        }
    }, 
    mutations: {

        updateValue: (state, payload) => {
            state.value = payload;
        }
    },
    actions,
    modules: {
        counter
    }
});





// export const store = new Vuex.Store({
//     state: {
//         counter: 0,
//         value: 0
//     },
//     getters: {
//         doubleCounter: state=> {
//             return state.counter*2;
//         },
//         stringCounter: state =>{
//             return state.counter + ' Clicks';
//         },
//         value: state => {
//             return state.value;
//         }
//     }, 
//     mutations: {
//         increment: (state,payload)=> {
//             state.counter+= payload;
//         },
//         decrement: state => {
//             state.counter--;
//         },
//         updateValue: (state, payload) => {
//             state.value = payload;
//         }
//     },
//     actions: {
//         increment: ({commit},payload) => {
//             commit('increment', payload);
//         },
//         decrement: ({commit}) => {
//             commit('decrement');
//         },
//         asyncIncrement: ({commit}, payload) => {
//             setTimeout(()=>{
//                 commit('increment', payload.by);
//             }, payload.duration);
            
//         },
//         asyncDecrement: ({commit}) => {
//             setTimeout(()=>{
//                 commit('decrement');
//             }, 1000);
            
//         },
//         updateValue({commit}, payload){
//             commit('updateValue',payload);
//         }
//     }
// });