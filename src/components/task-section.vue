<template>
  <div class="section-card m-1">
    <div class="p-2">
      <div class="fw-bold fs-3 d-flex pb-3">
        <div class="col-10">
          <label for="sectionTitle" class=""></label>
          <input id="sectionTitle" type="text" v-model="this.title" class="col-10">
        </div>
        <div class="col-2">
          <span class="delete-btn p-1" @click="deleteSection(section.id)"><i class="fas fa-backspace"></i></span>
        </div>
      </div>

      <task 
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        @delete="deleteTask"
      />
      <task-new @addTask="addTask" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Task from './task.vue';
import TaskNew from './task-new.vue';
import * as data from 'src/data';

export default defineComponent({
  name: 'TaskSection',
  components: {
    Task,
    TaskNew
  },
  props: {
    section: Object,
  },
  data() {
    return {
      id: 0,
      title: "",
      tasks: [] as data.Task[],
    }
  },
  methods: {
    deleteSection(id:number) {
      this.$emit("delete", id)
    },
    addTask() {
      this.tasks.push({
        id: this.id,
        title: "",
        content: "content content content"
      })
      this.id += 1;
    },
    deleteTask(num: number) {
      this.tasks = this.tasks.filter(task => task.id !== num);
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.section-card {
  min-width: 300px;
  max-width: 300px;
  border-radius: 5px;
  box-shadow: 3px 3px 5px;
  background: white;
  opacity: .8;
}

.delete-btn:hover {
  cursor: pointer;
  color: white;
  background: grey;
  border-radius: 3px;
}
</style>
