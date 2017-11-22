<template lang="pug" src="./templates/app.pug">
</template>
<script>
    import Signin from './signin/signin.vue';
    
    import Index from './index.vue';
    import Header from './header/header.vue';
    import ArticleList from './articles/article-list.vue';
    import ArticleDetail from './articles/article-detail.vue';
    
    import Admin from './admin/admin.vue';
    import Notebooks from './admin/components/notebooks.vue';
    import NotebookEdit from './admin/components/notebook-edit.vue';
    
    import VueRouter from 'vue-router';
    const router = new VueRouter({
        routes:[
                {
                    path:'/signin',
                    components:{
                        root: Signin
                    }
                },
                {
                    path:'/admin',
                    components:{
                        root: Admin
                    },
                    children:[
                            {
                                path:'',components:{
                                    content: Notebooks
                                }
                            },
                            {
                                path:'notebook-edit/:id',props:{
                                    content: true
                                    },components:{
                                    content: NotebookEdit
                                }
                            }
                        ]
                },
                {
                    path:'/',components: {
                        root: Index
                    },
                    children:[
                            {
                                path:'',components:{
                                    header: Header,
                                    content: ArticleList
                                }
                            },
                            {
                                path:'article-detail',components:{
                                    header: Header,
                                    content: ArticleDetail
                                }
                            }
                        ]
                }
            ]
    })
    export default {
        router
    }
</script>
<style lang="scss" src="./styles/app.scss"></style>