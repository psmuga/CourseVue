import Vue from 'vue'
import App from './App.vue'

// coś jakby service
export const eventBus = new Vue({
  methods:{
    changeAge(age){
      this.$emit('ageWasEdited',age);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})

