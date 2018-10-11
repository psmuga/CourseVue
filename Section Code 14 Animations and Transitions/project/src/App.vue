<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col col-lg-10 ">
        <h1>Animations</h1>
        <hr>
        <button class="btn btn-primary" @click="show=!show">Show Alert</button>
        <br><br>
        <select class="form-control" v-model="alertAnimation">
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
        </select>
        <br><br>
        <transition name="fade">
          <div class="alert alert-info" v-show="show">This is some info</div>
        </transition>
        <transition name="slide" type="animation">//or transition which one dictate lenght
          <div class="alert alert-info" v-if="show">This is some info</div>
        </transition>
        <transition name="fade" appear>//animation on load
          <div class="alert alert-info" v-if="show">This is some info</div>
        </transition>
        <transition enter-active-class="animated bounce"
           leave-active-class="animated shake" appear>
          <div class="alert alert-info" v-if="show">This is some info</div>
        </transition>
        <transition :name="alertAnimation">
          <div class="alert alert-info" v-show="show">This is some info</div>
        </transition>
        <transition :name="alertAnimation" mode="out-in">
          <div class="alert alert-info" v-if="show" key="info">This is some info</div>
          <div class="alert alert-warning" v-else key="warning">This is some warning</div>
        </transition>
        
        
        <hr>
        <button class="btn btn-primary" @click="load = !load">Load/Remove Element</button>
        <br><br>
        <transition @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @enter-cancelled="enterCancelled"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @leave-cancelled="leaveCancelled"
          :css="false">//dont look for css we dont use them we use js
          <div style="width: 300px; height: 100px; background-color:lightgreen;" v-if="load"></div>
        </transition>
        <hr>
        <button class="btn btn-primary" 
        @click="componentElement=='app-success-alert'?componentElement = 'app-danger-alert':componentElement = 'app-success-alert'">Toggle component</button>
        <br><br>
        <transition name="fade" mode="out-in">
          <component :is="componentElement"></component>
        </transition>
        <hr>
        <button class="btn btn-primary" @click="addItem">Add item</button>
        <br><br>
          <ul class="list-group">
            <transition-group name="slide">
              <li 
                class="list-group-item" 
                v-for="(item,index) in numbers" 
                @click="removeItem(index)" 
                :key="item">{{item}}
                </li>
            </transition-group>
          </ul>
        
      </div>
    </div>
  </div>
</template>

<script>
import DangerAlert from './DangerAlert.vue';
import SuccessAlert from './SuccessAlert.vue';
export default {
  name: 'app',
  data () {
    return {
      show: true,
      alertAnimation:'fade',
      load: true,
      elementWidth: 100,
      componentElement: 'app-success-alert',
      numbers: [1,2,3,4,5],
      val:6
    }
  },
  methods:{
    beforeEnter(el) {
      console.log('beforeEnter');
      this.elementWidth = 100;
      el.style.width= this.elementWidth+'px';
    },
    enter(el,done){
      console.log('enter');
      let round =1;
      const interval = setInterval(()=>{
        el.style.width= (this.elementWidth + round*10)+'px';
        round++;
        if(round>20){
          clearInterval(interval);
          done();
        }
      },20);
      // done();
    },
    afterEnter(el){
      console.log('afterEnter');
    },
    enterCancelled(el){
      console.log('enterCancelled');
    },
    beforeLeave(el){
      console.log('beforeLeave');
      this.elementWidth = 300;
      el.style.width= this.elementWidth + 'px';
    },
    leave(el,done){
      console.log('afterLeave');
       let round =1;
      const interval = setInterval(()=>{
        el.style.width= (this.elementWidth - round*10)+'px';
        round++;
        if(round>20){
          clearInterval(interval);
          done();
        }
      },20);
    },
    afterLeave(el){
      console.log('afterLeave');
      done();
    },
    leaveCancelled(el){
      console.log('leaveCancelled');
    },
    addItem(){
      const pos = Math.floor(Math.random()*this.numbers.length);
      this.numbers.splice(pos,0,this.val);
      this.val++;
    },
    removeItem(index){
      this.numbers.splice(index,1);
      
    }
  },
  components:{
    'appDangerAlert' :DangerAlert,
    'appSuccessAlert':SuccessAlert
  }

}
</script>

<style lang="scss">
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active{
    transition: opacity 1s;
  }
  .fade-leave{
    opacity: 1;
  }
  .fade-leave-active{
    transition: opacity 1s;
    opacity: 0;
  }
  .slide-enter{
    // transform: translateY(20px);
    opacity: 0;
  }
  .slide-enter-active{
    animation: slide-in 1s ease-out forwards;
    transition: opacity .5s;
    
  }
  .slide-leave{

  }
  .slide-leave-active{
    animation: slide-out 1s ease-out forwards;
    transition: opacity 1s;
    opacity: 0;
    position: absolute;
  }

//special class
  .slide-move{
    transition: transform 1s;
  }
  @keyframes slide-in {
    from {
      transform: translateY(20px);
    }
    to {
      transform: translateY(0);
    }
  }
  @keyframes slide-out {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(20px);
    }
  }
</style>
