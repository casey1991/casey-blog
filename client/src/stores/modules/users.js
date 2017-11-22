import api from '../../api/users.js';
import * as types from '../mutation-types.js';
const state ={
    user: null,
    flushContent:null
}
const getters ={}
const mutations ={
    [types.LOGIN_SUCCESS](state,data){
        state.flushContent = null;
        state.user = data;
    },
    [types.LOGIN_ERRORS_EMAIL_EMPTY](state){
        state.flushContent = '请输入邮箱！';
    },
    [types.LOGIN_ERRORS_EMAIL_WRONG_TYPE](state){
        state.flushContent ='请检查邮箱格式！';
    },
    [types.LOGIN_ERRORS_EMAIL_NOT_EXIT](state){
        
    },
    [types.LOGIN_ERRORS_PASSWORD_EMPTY](state){
        state.flushContent ='请输入密码！';
    },
    [types.LOGIN_ERRORS_PASSWORD_ERROR](state){
        state.flushContent ='检查密码是否正确！';
    },
    [types.LOGOUT_SUCCESS](state){
        state.user = null;
        state.flushContent = null;
    }
}
const actions = {
    login({state,commit,dispatch},{email,password}){
        return new Promise((resolve,reject)=>{
            var regExp = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
            if(state.user) return;
            if(!email||email.trim()==''){
                commit(types.LOGIN_ERRORS_EMAIL_EMPTY);
                return;
            }
            if(!regExp.test(email)){
                commit(types.LOGIN_ERRORS_EMAIL_WRONG_TYPE);
                return;
            }
            if(!password||password.trim()==''){
                commit(types.LOGIN_ERRORS_PASSWORD_EMPTY);
                return;
            }
            api.login({email:email,password:password}).then((user)=>{
                //登录成功
                 commit(types.LOGIN_SUCCESS,user);
                 return resolve('close')
            })
        })
    },
    logout({state,commit,dispatch}){
        api.logout(state.user.id).then(()=>{
            //注销成功
            commit(types.LOGOUT_SUCCESS);
        })
    }
}
export default{
    state,
    getters,
    mutations,
    actions
}