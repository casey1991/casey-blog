import api from '../../api/notebooks.js';
import * as types from '../mutation-types.js';
const state ={
    notebooks: []
}
const getters ={
    getNotebookById:(state,getters)=>(id)=>{
        return state.notebooks.find((item)=>{
            if(item.id === id) return item;
        })
    }
}
const mutations ={
    [types.NOTEBOOKS_GET_ALL](state,notebooks){
        state.notebooks = notebooks;
    },
    [types.NOTEBOOK_UPDATE_SUCCESS](state,notebook){
        var id = notebook;
        state.notebooks.forEach((element)=>{
            if(element.id ==id){
                element = notebook;
                return
            }
        })
    },
    [types.NOTEBOOK_CREATE_SUCCESS](state,notebook){
        state.notebooks.push(notebook);
    }
}
const actions = {
    getNotebooks({state,commit,dispatch}){
        return new Promise((resolve,reject)=>{
            api.getNotebooks().then(({notebooks})=>{
                commit(types.NOTEBOOKS_GET_ALL,notebooks);
            })
        })
    },
    createNotebook({state,commit,dispatch},notebook){
        return new Promise((resolve,reject)=>{
            api.createNotebook(notebook).then((notebook)=>{
                commit(types.NOTEBOOK_CREATE_SUCCESS,notebook)
                resolve(types.NOTEBOOK_CREATE_SUCCESS)
            })
        })
    },
    updateNotebook({state,commit,dispatch},notebook){
        return new Promise((resolve,reject)=>{
            api.updateNotebook(notebook).then((notebook)=>{
                commit(types.NOTEBOOK_UPDATE_SUCCESS,notebook);
                resolve(types.NOTEBOOK_UPDATE_SUCCESS);
            })
        })
    }
}
export default{
    state,
    getters,
    mutations,
    actions
}