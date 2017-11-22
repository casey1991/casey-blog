<template lang="pug" src="../templates/notebooks.pug"></template>
<script>
    import notebooksItem from './notebooks-item.vue';
    export default{
         components:{
                notebooksItem
            },
        computed:{
            notebooks(){
                return this.$store.state.Notebooks.notebooks;
            }
        },
        methods:{
            createNotebook(){
                //路由
                this.$router.push({path:`/admin/notebook-edit/${'0'}`});
            }
        },
        created:function(){
            this.$store.dispatch('getNotebooks')
        }
    }
</script>