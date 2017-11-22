<template lang="pug" src="./templates/signin.pug"></template>
<style lang="scss" src="./styles/signin.scss"></style>
<script>
    export default{
        data: function (){
            return {
                email:null,
                password:null
            }
        },
        computed:{
            flushContent: function(){
                return this.$store.state.Users.flushContent;   
            }
        },
        methods: {
            login: function(){
                this.$store.dispatch('login',{email:this.email,password:this.password}).then(()=>{
                    this.$router.go(-1);
                });
            }
        }
    }
</script>