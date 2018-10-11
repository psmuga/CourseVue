<template>
    <div>
        <button class="btn btn-primary" @click="increment">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
    </div>
</template>

<script>
    export default {
        methods: {
            increment() {
                this.$store.commit('increment',1);
            },
            decrement() {
                this.$store.commit('decrement',1);
            }
        }
    }
</script>