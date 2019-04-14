<template>
    <div id="app">
        <NavComponent/>

        <div class="container-fluid">
            <router-view/>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import NavComponent from "@/components/NavComponent.vue";

    @Component({
        components: {
            NavComponent,
        },
    })
    export default class App extends Vue {

    }
</script>
