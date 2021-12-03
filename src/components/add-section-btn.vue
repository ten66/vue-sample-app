<template>
  <div>
    <div>
      <button class="btn-style" @click="count += 1">Add Section</button>
    </div>
    {{ count }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "addSectionBtn",
  data() {
    return {
      count: 0,
    }
  }
})
</script>

<style scoped>
.btn-style {
  background-color: red;
  border-radius: 10px;
}
</style>