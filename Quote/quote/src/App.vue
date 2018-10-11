<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <!-- <app-quote>
          <h2 slot="title">{{title}}</h2>
          <p slot="content">A wonderful quote!</p>
        </app-quote> -->
        <!-- <app-quote>
          <h2 slot="title">{{title}}</h2>
          <p>A wonderful quote!</p>
        </app-quote> -->
        <button @click="selectedComponent = 'appQuote'">Quote</button>
        <button @click="selectedComponent = 'appAuthor'">Author</button>
        <button @click="selectedComponent = 'appNew'">New</button>
        <hr>
        <p>{{selectedComponent}}</p>
        <!-- keep-alive gwarantuje że component nie zostanie usunięy -->
        <keep-alive>
          <component :is="selectedComponent">
            <p slot="title">title</p>
            <p>Default content</p>
          </component>
        </keep-alive>
        
       

      </div>
    </div>
  </div>
</template>

<script>
import Quote from './components/Quote.vue';
import New from './components/New.vue';
import Author from './components/Author.vue';

export default {
  data: function() {
    return {
      title: 'Quote',
      selectedComponent: 'appQuote'
    }
  },
  components: {
    appQuote: Quote,
    appAuthor: Author,
    appNew: New
  }
}
</script>

<style lang="scss">

</style>
