<template>
    <div class="test">
        <h1>home</h1>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import EntryListComponent from "@/components/EntryListComponent.vue";

    @Component({
        components: {EntryListComponent},
    })
    export default class Home extends Vue {
    }
</script>
