<template>
    <ul class="nav nav-pills">
        <li class="nav-item">
            <router-link to="/" tag="li" class="nav-link pointer" active-class="active" exact>Home</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/user" tag="li" class="nav-link pointer" active-class="active">User</router-link>
        </li>
        <!-- <li class="nav-item">
            <router-link to="/user/1" tag="li" class="nav-link pointer" active-class="active">User1</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/user/2" tag="li" class="nav-link pointer" active-class="active">User2</router-link>
        </li> -->
    </ul>
</template>

<style>
    .pointer {
        cursor: pointer;
    }
</style>

