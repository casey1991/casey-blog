import * as types from '../mutation-types.js';
import api from '../../api/articles.js';
const state = {
    articles:[],
    currentPage:1,
    totalPage:0,
}
const getters = {
    previousEnable:(state)=>{
        return (state.currentPage > 1) && (state.currentPage<=state.totalPage);
    },
    nextEnable:(state)=>{
        return state.currentPage < state.totalPage;
    }
}
const actions = {
    previousPage({state,commit,dispatch}){
        if(state.currentPage<=1){
            return 
        }
        var requestPage = state.currentPage -1;
        dispatch({type:'loadArticles',page:requestPage}).then((data)=>{
            commit(types.ARTICLES_PREVIOUS_PAGE);
            commit(types.ARTICLES_SET_ARTICLES,data.articles);
        })
    },
    nextPage({state,commit,dispatch}){
        if(state.currentPage>=state.totalPage) return
        var requestPage = state.currentPage +1;
        dispatch({type:'loadArticles',page:requestPage}).then((data)=>{
            commit(types.ARTICLES_NEXT_PAGE)
            commit(types.ARTICLES_SET_ARTICLES,data.articles);
        })
    },
    loadArticles({state,commit},{page}){
        return api.get_articles({page:page});//返回请求promise
    },
    initArticles({dispatch,commit}){
      //初始化  
      dispatch({type:'loadArticles',page:1}).then((data)=>{
          //成功获取数据
          commit(types.ARTICLES_SET_TOTAL_PAGE,Math.ceil(data.total/data.size));
          commit(types.ARTICLES_SET_ARTICLES,data.articles);
      })
    }
}
const mutations = {
    [types.ARTICLES_SET_TOTAL_PAGE](state,totalPage){
        state.totalPage = totalPage;
    },
    [types.ARTICLES_SET_ARTICLES](state,articles){
        state.articles = articles;
    },
    [types.ARTICLES_NEXT_PAGE](state){
        state.currentPage +=1;
    },
    [types.ARTICLES_PREVIOUS_PAGE](state){
        state.currentPage -=1;
    }
}
export default {
    state,
    getters,
    actions,
    mutations
}