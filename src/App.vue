<template>
  <header class="p-2">
    <h1>Task Management App</h1>
  </header>
  <div class="d-flex p-2">
    <task-section 
      v-for="section in sections"
      :key="section.id"
      :section="section"
      @delete="deleteSection"
    />
    <add-section-btn @send="addTaskSection()" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TaskSection from './components/task-section.vue';
import AddSectionBtn from './components/add-section-btn.vue';
import * as data from 'src/data';

export default defineComponent({
  name: 'App',
  components: {
    TaskSection,
    AddSectionBtn
  },
  data() {
    return {
      id: 0,
      sections: [] as data.Section[],
    }
  },
  methods: {
    addTaskSection() {
      this.sections.push({id: this.id, title: "section title" + this.id});
      this.id += 1;
    },
    deleteSection(num:number) {
      this.sections = this.sections.filter(section => section.id !== num);
    }
  }
});
</script>

<style>
body {
  height: 100vh;
  background: url(./assets/bg-moss.jpeg);
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
