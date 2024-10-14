<script>
export default {
  name: "GradientBlock",
  props: {
    image: {
      type: [String, URL],
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <div class="gradient">
    <img alt="" :src="image" class="gradient-img"/>
    <div class="gradient-text asb" v-html="text"></div>
  </div>
</template>

