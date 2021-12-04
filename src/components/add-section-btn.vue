<template>
  <div class="m-1">
    <div>
      <button class="btn-style" @click="addSection()">Add Section</button>
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
      childData: "Hello Vue!"
    }
  },
  methods: {
    addCount() {
      return this.count++;
    },
    addSection() {
      this.$emit("send")
    },
  }
})
</script>

<style scoped>
.btn-style {
  min-width: 150px;
  border-radius: 5px;
}
</style>