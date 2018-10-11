<template>
    <div>
        <button class="btn btn-primary" @click="increment(100)">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
        <hr>
        <button class="btn btn-primary" @click="asyncIncrement({by: 50, duration: 500})">Async Increment</button>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        methods: {
            ...mapActions([
                'increment',
                'decrement',
                'asyncIncrement',
                'asyncDecrement'
            ])
        }
    }


    // import {mapMutations} from 'vuex';
    // export default {
    //     methods: {
    //         ...mapMutations([
    //             'increment',
    //             'decrement'
    //         ])
    //     }
    // }

    // export default {
    //     methods: {
    //         increment() {
    //             this.$store.commit('increment');
    //         },
    //         decrement() {
    //             this.$store.commit('decrement');
    //         }
    //     }
    // }
</script>