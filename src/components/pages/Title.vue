<template>
  <div class="big-blue-text center" v-if="$route.params.definitionId === 'anchors'">В помощь на каждый день:</div>

  <div class="app-title">

    <h1 class="app-title-text"
        v-if="$route.params.definitionId !== 'attunement' && $route.params.definitionId !== 'anchors'">
      <span v-if="$route.path.includes('day')">День {{ dayNumber }}: </span><span v-html="text"></span>
    </h1>

    <div v-else-if="$route.params.definitionId === 'anchors'">
      <h1 class="app-title-text app-title-text-attunement">
        <span>НЕЙРОЯКОРЯ ДЛЯ БЫСТРОЙ СОНАСТРОЙКИ С ПРОЦВЕТАНИЕМ</span>
      </h1>
    </div>

    <h1 class="app-title-text app-title-text-attunement" v-else>
      <img alt="" src="@/assets/images/8-28.png" class="app-title-img"/>
      <span>СОНАСТРОЙКА С СОСТОЯНИЕМ ПРОЦВЕТАНИЯ</span>
    </h1>

  </div>
</template>

<script>
export default {
  name: 'Title',
  data() {
    return {
      dayNumber: 0,
    }
  },
  props: {
    text: {
      type: String,
      required: true,
      default: '',
    },
  },
  mounted() {
    const url = this.$route.path;
    const match = url.match(/day(\d+)/);
    if (match) {
      this.dayNumber = match[1]
    }
  },
}
</script>
