<template>
  <div class="pt-2">
    <div class="col-12 add-task-btn" @click="addTask">
      <div class="d-flex justify-content-start align-items-center ps-1">
        <div><i class="fas fa-plus"></i></div>
        <div>
          <p class="mb-0">Add Task</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'TaskNew',
  methods: {
    addTask() {
      this.$emit("addTask");
    }
  }
})
</script>

<style scoped>
.add-task-btn:hover {
  border-radius: 5px;
  cursor: pointer;
  color: white;
  background: grey;
}
</style>