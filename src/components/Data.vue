<template>
  <div>
    <div>{{ sourceData.threads }}</div>
  </div>
</template>

<script>
import sourceData from '../data.json'
export default {
  name: 'Data',
  data: function () {
    return {
      sourceData: sourceData
    }
  }
}
</script>

<style scoped></style>
