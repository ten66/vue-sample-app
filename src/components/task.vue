<template>
  <div class="py-2">
    <div class="pt-2 task-card">
      <div class="p-2">
        <div >
          <input type="text" class="col-12">
        </div>
        <div>
          <div class="pt-2">
            <p class="mb-0">content</p>
          </div>
          <div class="px-2">
            <p>{{ task.content }}</p>
          </div>
          <div class="d-flex justify-content-end ">
            <div class="px-1"><i class="fas fa-edit"></i></div>
            <div class="px-1"><i class="fas fa-trash-alt"></i></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Task",
  props: {
    task: Object,
  },
})
</script>

<style scoped>
.task-card {
  border: 1px solid;
  border-radius: 5px;
  box-shadow: 1px 1px 3px ;
}
</style>