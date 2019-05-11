<template>
    <EntryListComponent/>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import EntryListComponent from "@/components/EntryListComponent.vue";

    @Component({
        components: {EntryListComponent},
    })
    export default class List extends Vue {
    }
</script>
