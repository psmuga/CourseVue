<template>
  <div>
      <p>Server status: {{status}}</p>
      <hr>
      <button @click="change">Change</button>
  </div>
</template>

<script>
    export default {
        data () {
            return {
                status: 'Critical'
            }
        },
        methods:{
            change(){
                this.status = 'Normal'
            }
        }
    }
</script>

// scoped inform that this css work only on this template
<style lang="sass" scoped>

</style>

