<script>
export default {
  name: 'Instructions',
  props: {
    content: {
      type: String,
      required: true,
      default: ''
    }
  }
}
</script>

<template>
  <div v-html="content"></div>
</template>

