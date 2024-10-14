<script>
export default {
  name: 'DefinitionBtns',
  data(){
    return {
      tracks: [],
      route: ''
    }
  },
  props: {
    item: Object,
  },
  watch: {
    item: {
      handler(newValue) {
        if (newValue && newValue.btns) {
          this.tracks = Object.keys(newValue.btns)
              .filter(key => key.startsWith('track'))
              .map(key => ({...newValue.btns[key], key}));
        }
      },
      immediate: true
    }
  },
  mounted() {
    this.route = this.$route.params.definitionId
  }
}
</script>

<template>
  <div class="definition-btns-block">
    <router-link
        :to="`/${route}/${btn.key}`"
        class="definition-btn"
        v-for="(btn, idx) in tracks"
    >
      <span class="row">
        <span class="left-definition-btn">
          <span>{{ idx + 1 }}. </span>
        </span>
        <span class="right-definition-btn">
          <span v-html="btn.title"></span>
        </span>
      </span>
    </router-link>
  </div>
</template>

