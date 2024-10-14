<script>
import {mapState} from 'vuex';

export default {
  name: 'MenuBtns',
  computed: mapState(['data']),
  data() {
    return {
      days: [],
    }
  },
  mounted() {
    this.days = Object.keys(this.data.pages)
        .filter(key => key.startsWith('day'))
        .map(key => ({...this.data.pages[key], key}))
  },
}
</script>

<template>
  <div class="menu-btns-block">
    <router-link
        :to="`/${day.key}`"
        class="menu-btn"
        v-for="(day, idx) in days"
    >
    <span class="row">
      <span class="left-menu-btn">
        <span>День {{ idx + 1 }}.</span>
      </span>
      <span class="right-menu-btn">
        <span v-html="day.title"></span>
      </span>
    </span>
    </router-link>
  </div>
</template>
