<template>
    <button @click="onClick">Click!</button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import store from '@/store';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

   private onClick(): void {
    store.commit('increment');

    console.log(store.state.count);
  }
}
</script>
