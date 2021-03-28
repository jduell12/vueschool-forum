<template>
  <div>
    <h1>Home</h1>
    <div v-for="thread in threads" :key="thread.id">
      <h2>{{ thread.title }}</h2>
    </div>
  </div>
</template>

<script>
import sourceData from '../data.json'
export default {
  name: 'Home',
  data () {
    return {
      threads: sourceData.threads
    }
  }
}
</script>

<style scoped></style>
