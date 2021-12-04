<template>
  <div class="section-card m-1">
    <div class="p-2">
      <div class="fw-bold fs-3">
        {{ section.title }}
      </div>

      <div>
        
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TaskSection',
  props: {
    section: Object,
  },
  data() {
    return {
      tasks: [],
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.section-card {
  min-width: 270px;
  border-radius: 5px;
  box-shadow: 1px 1px 3px #6e6e6e;
  background: white;
  opacity: .9;
}
</style>
