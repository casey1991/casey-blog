<template lang="pug" src="./templates/index.pug"></template>
<script>
        export default {
            data: function () {
                return {
                    isActionMenuShow: false
                }
            },
            methods:{
                popFloatMenu: function () {
                    this.isActionMenuShow = !this.isActionMenuShow;
                }
            },
            mounted:function(){
                
            }
        }
</script>