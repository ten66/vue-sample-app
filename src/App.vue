<template>
  <task-section
    msg="Vue.js"
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
      sections: [] as data.Section[],
    }
  }
});
</script>

<style>

</style>
