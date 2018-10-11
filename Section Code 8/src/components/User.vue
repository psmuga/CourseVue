<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change my Name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail :name="name" :resetFn="resetName" :userAge="age"
                    @nameWasReset="name= $event"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit :userAge="age" @ageWasEdited="age =$event"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function(){
            return {
                name: 'Piotr',
                age: 22
            };
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        },
        methods:{
            changeName(){
                this.name = 'Marcin';
            },
            resetName(){
                this.name = "Piotr";
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
