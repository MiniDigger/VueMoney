<template>
    <b-navbar toggleable="lg" type="dark" variant="info" sticky>
        <b-navbar-brand href="#">VueMoney</b-navbar-brand>

        <b-navbar-toggle target="nav_collapse"/>

        <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav>
                <b-nav-item to="/">Home</b-nav-item>
                <b-nav-item to="/list">List</b-nav-item>
                <b-nav-item to="/categories">Categories</b-nav-item>
                <b-nav-item to="/about">About</b-nav-item>
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto">
                <b-nav-item href="https://github.com/MiniDigger/VueMoney" target="_blank" right>Fork me on Github!
                </b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class NavComponent extends Vue {

    }
</script>
