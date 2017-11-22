<template lang="pug" src="../templates/notebook-edit.pug"></template>
<script>
    export default {
        data: function(){
            return {
                title:"",
                description:""
            }
        },
        props:{id:String},
        methods:{
            onSubmit(){
                if(!this.id||this.id.trim()=='0'||this.id.trim()==''||this.id==0){
                    this.$store.dispatch('createNotebook',{title:this.title,description:this.description}).then(()=>{
                        this.$router.go(-1);
                    });
                }else{
                    this.$store.dispatch('updateNotebook',{id:this.id,title:this.title,description:this.description}).then(()=>{
                        this.$router.go(-1)
                    });
                }
            }
        },
        created(){
            const notebook = this.$store.getters.getNotebookById(this.id);
            if(notebook){
            this.title = notebook.title;
            this.description = notebook.description;
            }
        }
    }
</script>