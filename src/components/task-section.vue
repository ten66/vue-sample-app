<template>
  <div class="section-card m-1">
    <div class="p-2">
      <div class="fw-bold fs-3 d-flex pb-3">
        <div class="col-10">
          <label for="sectionTitle" class=""></label>
          <input id="sectionTitle" type="text" v-model="this.title" class="col-10">
        </div>
        <div class="col-2">
          <span @click="deleteSection(section.id)"><i class="fas fa-backspace"></i></span>
        </div>
      </div>

      <task />

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Task from './task.vue';
import * as data from 'src/data';

export default defineComponent({
  name: 'TaskSection',
  components: {
    Task
  },
  props: {
    section: Object,
  },
  data() {
    return {
      title: "",
      tasks: [] as data.Task[],
    }
  },
  methods: {
    deleteSection(id:number) {
      this.$emit("delete", id)
    },
    addTask() {
      return "";
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
  opacity: .7;
}
</style>
