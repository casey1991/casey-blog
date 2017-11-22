const data={
    notebooks:[
            {
                id: '100000',
                title: 'Node',
                description: 'Node.js description',
                descriptionImg: null
            },
            {
                id: '100001',
                title: 'JavaScript',
                description: 'JavaScript description',
                descriptionImg: null
            }
        ]
}

export default{
    getNotebooks(){
        return new Promise((resolve,reject)=>{
            resolve(data);
        })
    },
    createNotebook(notebook){
        return new Promise((resolve,reject)=>{
            notebook.id = 100002;
            console.log(notebook);
            resolve(notebook)
        })
    },
    updateNotebook(notebook){
        return new Promise((resolve,reject)=>{
            resolve(notebook);
        })
    }
}