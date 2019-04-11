<template>
  <div class="test">
    <Button />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Button from '@/components/Button.vue';

@Component({
  components: {
      Button,
  },
})
export default class Home extends Vue {}
</script>
