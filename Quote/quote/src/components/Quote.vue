<template>
  <!-- <div>
     <slot ></slot>
  </div> -->
  <div class="container">
      <!-- <div >
        <slot name="title"></slot>
      </div>
      <hr>
      <div>
          <slot name="content"></slot>
      </div> -->
      <div >
        <slot name="title"></slot>
        <!-- subtitle jeśli dodamy  coś do niego w app.vue nadpsize zawartosć -->
        <span style="color:#ccc;"><slot name="subtitle">Subtitle</slot></span>
      </div>
      <hr>
      <div>
          <slot ></slot>
      </div>
  </div>
</template>

<script>

    export default {
       
    }
</script>

<style  scoped>
    .container {
        border: 1px solid #ccc;
        box-shadow: 1px 1px 2px black;
        padding: 30px;
        margin: 30px auto;
        text-align: center;
    }
    .container div:first-child {
        color: red;
    }
</style>
