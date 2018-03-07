<!--demo页面级组件-->
<template>
    <div class="pageDemo1">
        <helloworld></helloworld>
        <div>vuex变量{{getPageDemo1Value}}</div>
    </div>
</template>

<script>
    import Locale from '@/lib/mixins/locale'
    import helloworld from '@/components/HelloWorld.vue'
    import {mapGetters} from 'vuex'

    export default {
        name: 'pageDemo1',
        mixins: [Locale],
        components:{
            helloworld
        },
        data() {
            return {
            }
        },
        computed: {
            ...mapGetters([
                "getPageDemo1Value"
            ])
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
