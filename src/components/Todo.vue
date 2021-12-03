<template>
  <h1>{{ msg }}</h1>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "Todo",
    props: {
        msg: String,
    }
})

</script>


<style scoped>

</style>