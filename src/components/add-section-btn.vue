<template>
  <div class="m-1">
    <div v-if="!addSec" @click="addSec=true">
      <button class="btn-style btn-ripple">Add Section</button>
    </div>
    <div v-else class="input-form">
      <div class="p-2">
        <input type="text" class="col-12" v-model="sectionTitle" placeholder="Section Name">
      </div>
      <div class="d-flex justify-content-end p-2">
        <div class="px-1" @click="addSection()"><button class="input-btn">Add</button></div>
        <div class="ps-1" @click="addSec=false"><button class="input-btn">Cancel</button></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "addSectionBtn",
  data() {
    return {
      addSec: false,
      sectionTitle: "",
    }
  },
  methods: {
    addSection() {
      if(!this.sectionTitle) return;
      this.addSec = false;
      this.$emit("addSection", this.sectionTitle);
      this.sectionTitle = "";
    },
  }
})
</script>

<style scoped>
.btn-style {
  border: none;
  width: 15rem;
  border-radius: 5px;
  opacity: .9;
  box-shadow: 3px 3px 5px;
}

.input-btn {
  border: none;
  border-radius: 5px;
  box-shadow: 1px 1px 3px;
}

.input-btn:hover {
  background: grey;
  border-radius: 5px;
  color: white;
}

.input-form {
  background: white;
  border: none;
  width: 15rem;
  border-radius: 5px;
  opacity: .8;
  box-shadow: 3px 3px 5px;
}

.btn-ripple {
  position: relative;
  display: inline-block;
  text-decoration: none;
  outline: none;
}

.btn-ripple:hover::before {
  content: "";
  position: absolute;
  left: 50%;
  top: -25%;

  border: 2px solid #333;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  opacity: 1;
  animation: 1s circleanime forwards;
}

@keyframes circleanime {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
}
</style>