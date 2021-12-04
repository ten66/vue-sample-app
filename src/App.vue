<template>
  <header>
    <h1>Task Section App</h1>
  </header>
  <div class="d-flex p-2">
    <task-section 
      v-for="(section, index) in sections"
      :key="index"
      :section="section"
    />
    <add-section-btn @send="addTaskSection()" />
  </div>
  <todo />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TaskSection from './components/task-section.vue';
import Todo from './components/Todo.vue';
import AddSectionBtn from './components/add-section-btn.vue';
import * as data from 'src/data';

export default defineComponent({
  name: 'App',
  components: {
    TaskSection,
    Todo,
    AddSectionBtn
  },
  data() {
    return {
      id: 1,
      sections: [] as data.Section[],
    }
  },
  methods: {
    addTaskSection() {
      this.sections.push({id: this.id, title: "section title" + this.id});
      this.id += 1;
    },
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
