<template>
  <div class="pt-2">
    <div v-if="!editTask" class="col-12 add-task-btn" @click="editTask=true">
      <div class="d-flex justify-content-start align-items-center ps-1">
        <div><i class="fas fa-plus"></i></div>
        <div>
          <p class="mb-0">Add Task</p>
        </div>
      </div>
    </div>
    <div v-else>
      <div>
        <input type="text" class="col-12" v-model="taskTitle" placeholder="New Title">
      </div>
      <div class="d-flex justify-content-end pt-1">
        <div class="px-1" @click="addTask">
          <button class="input-btn">Add</button>
        </div>
        <div @click="editTask=false">
          <button class="input-btn">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'TaskNew',
  data() {
    return {
      editTask: false,
      taskTitle: "",
    }
  },
  methods: {
    addTask() {
      this.$emit("addTask", this.taskTitle);
      this.taskTitle = "";
      this.editTask = false;
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

.input-btn {
  border: none;
  border-radius: 5px;
  box-shadow: 1px 1px 3px;
}

.input-btn:hover {
  background: grey;
  color: white;
}
</style>