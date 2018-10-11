import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueResource);
Vue.http.options.root = 'https://vuecourse-91518.firebaseio.com/data.json';

//preprocesing or postprocesiing request
// Vue.http.interceptors.push((request, next)=>{
//   console.log(request);
//   if(request.method == 'POST'){
//     request.method = 'PUT';
//   }
// // next();
//   next(response=>{
//     //dosth
//   });
// });

new Vue({
  el: '#app',
  render: h => h(App)
})
