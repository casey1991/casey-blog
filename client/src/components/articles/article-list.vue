<template lang="pug" src="./templates/article-list.pug"></template>
<script>
    import contentListItem from './article-list-item.vue';
    export default {
        data: function () {
            return {
                
            }
        },
        computed:{
            articles(){
                return this.$store.state.Articles.articles;
            },
            preEnable(){
                return this.$store.getters.previousEnable;
            },
            nextEnable(){
                return this.$store.getters.nextEnable;
            }
        },
        components:{
            contentListItem
        },
        methods:{
            prePage: function(){
                this.$store.dispatch('previousPage')
            },
            nextPage: function () {
                this.$store.dispatch('nextPage')
            }
        },
        created: function(){
            this.$store.dispatch('initArticles');
        }
    }
</script>
<style lang="scss" src="./styles/article-list.scss"></style>