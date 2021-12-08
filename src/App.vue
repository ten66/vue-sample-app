<template>
  <header class="p-2">
    <h1>Task Management App</h1>
  </header>

  <div class="d-flex align-items-start p-2 scroll">
    <task-section 
      v-for="section in sections"
      :key="section.id"
      :section="section"
      @change="changeSectionTitle"
      @delete="deleteSection"
    />
    <add-section-btn @addSection="addTaskSection" />

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
    AddSectionBtn,
  },
  data() {
    return {
      id: 0,
      sections: [] as data.Section[],
    }
  },
  methods: {
    addTaskSection(title: string) {
      this.sections.push({id: this.id, title: title});
      this.id += 1;
    },
    changeSectionTitle(id:number, newTitle:string) {
      for(let i = 0; i < this.sections.length; i++) {
        let currSec = this.sections[i];
        if(currSec.id === id) currSec.title = newTitle;
      }
    },
    deleteSection(num:number) {
      this.sections = this.sections.filter(section => section.id !== num);
    }
  }
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');
body {
  height: 100vh;
  background: url(./assets/bg-moss.jpeg);
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  font-family: 'Playfair Display', serif;
}

header {
  color: white;
  background: rgba(0,0,0,.5);
}

.scroll {
  overflow: scroll;
}

</style>
