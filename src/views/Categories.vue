<template>
    <CategoryListComponent/>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import CategoryListComponent from "@/components/CategoryListComponent.vue";

    @Component({
        components: {CategoryListComponent},
    })
    export default class Categories extends Vue {
    }
</script>
