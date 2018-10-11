<template>
  <div class="container">
    <div class="row" justify-content-md-center>
      <div class="col">
        <h1>Routing</h1>
        <hr>
        <router-view name="header-top"></router-view>
        <!-- <app-header></app-header> -->
        <hr>
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>
        <hr>
        <router-view name="header-bottom"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
export default {
  name: 'app',
  data () {
    return {

    }
  },
  components: {
    appHeader: Header
  }
}
</script>

<style lang="scss">
    .slide-enter-active{
      animation: slide-in 1s ease-out forwards;   
    }
    .slide-leave{
      opacity: 1;
      transform: translateX(0);
    }
    .slide-leave-active{
      
      transition: opacity 1s ease;
      opacity: 0;
      animation: slide-out 1s ease-out forwards;
    }

    @keyframes slide-in {
      from {
        transform: translateY(-30px);
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
        transform: translateY(-30px);
      }
    }
</style>
