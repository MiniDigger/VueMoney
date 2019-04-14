<template>
    <b-card :title="entry.title" :sub-title="entry.readableType" class="col-2">
        <b-card-text>
            Some quick example text to build on the <em>card title</em> and make up the bulk of the card's
            content.
        </b-card-text>

        <b-card-text>A second paragraph of text in the card.</b-card-text>

        <a href="#" class="card-link">Card link</a>
        <b-link href="#" class="card-link">Another link</b-link>
    </b-card>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import {Entry} from "@/types/entry";

    @Component
    export default class EntryComponent extends Vue {
        @Prop() private entry!: Entry;

        get cssClass() {
            return "entry entry-" + this.entry.readableType;
        }
    }
</script>
