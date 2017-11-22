const user ={
    id:10000,
    username:'Admin'
}
export default {
    login(data){
        return new Promise((resolve,reject)=>{
             console.log(data);
             resolve(user);
        })
    },
    logout(id){
        return new Promise((resolve,reject)=>{
            resolve('success');
        })
    }
}