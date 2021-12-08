<template>
  <div class="section-card m-1">
    <div class="p-2">
      <div class="fw-bold fs-3 d-flex pb-1" v-if="!editSecTitle">
        <div class="col-10 d-flex align-items-center" @click="editSecTitle=true">
          <h4 class="border-bottom border-4">{{ section.title }}</h4>
        </div>
        <div class="col-2">
          <span class="delete-btn p-1" @click="deleteSection(section.id)">
            <i class="fas fa-backspace"></i>
          </span>
        </div>
      </div>

      <div v-else>
        <div>
          <input type="text" class="col-12" v-model="secTitle" placeholder="New Title">
        </div>
        <div class="d-flex justify-content-end pt-1">
          <div class="px-1" @click="changeSection(section.id)"><button class="input-btn">Change</button></div>
          <div @click="editSecTitle=false"><button class="input-btn">Cancel</button></div>
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
    TaskNew,
  },
  props: {
    section: Object,
  },
  data() {
    return {
      id: 0,
      editSecTitle: false,
      secTitle: "",
      tasks: [] as data.Task[],
    }
  },
  methods: {
    deleteSection(id:number) {
      this.$emit("delete", id)
    },
    changeSection(id: number) {
      if(!this.secTitle) return;
      this.$emit("change", id, this.secTitle);
      this.editSecTitle = false;
      this.secTitle = "";
    },
    addTask() {
      this.tasks.push({
        id: this.id,
        title: "",
        content: ""
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
  opacity: .9;
}

.delete-btn:hover {
  cursor: pointer;
  color: white;
  background: grey;
  border-radius: 3px;
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
