<template lang="pug" src="./templates/header.pug"></template>
<style lang="scss" src="./styles/header.scss"></style>
<script>
    export default{
        data: function(){
            return {}
        },
        computed:{
            user(){
                return this.$store.state.Users.user;
            }
        },
        methods:{
            logout(){
                this.$store.dispatch('logout');
            }
        }
    }
</script>