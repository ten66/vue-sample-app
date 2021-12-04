<template>
  <task-section
    v-for="section in sections"
    :key="section.id"
    :section="section"
  />
  <add-section-btn />
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
      sections: [
        {
          id: 1,
          title: "",
          taskList: [],
        }
      ] as data.Section[],
    }
  }
});
</script>

<style>

</style>
