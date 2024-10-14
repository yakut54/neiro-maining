<template>
  <div
      class="page-definition"
      :class="{
        'instructions': $route.params.definitionId === 'instructions',
        'anchors': $route.params.definitionId === 'anchors'
       }"
  >

    <AppHeaderStatic/>

    <Title :text="outerItem.title"/>

    <div class="page-content">
      <Instructions :content="outerItem?.content" v-if="$route.params.definitionId === 'instructions'"/>
      <Day :item="outerItem" v-if="$route?.params.definitionId.includes('day')"/>
      <Attunement v-if="$route.params.definitionId === 'attunement'"/>
      <Anchors v-if="$route.params.definitionId === 'anchors'"/>
    </div>
  </div>

  <router-link to="/" class="transparent-btn">← В ГЛАВНОЕ МЕНЮ</router-link>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import Day from '@/components/pages/Day.vue'
import Title from '@/components/pages/Title.vue'
import AppHeaderStatic from '@/components/AppHeaderStatic.vue'
import Instructions from '@/components/pages/Instructions.vue'
import Attunement from '@/components/pages/Attunement.vue'
import Anchors from '@/components/pages/Anchors.vue'

export default {
  name: 'Definition',
  components: {Anchors, Attunement, Day, Instructions, Title, AppHeaderStatic},
  computed: mapState(['data', 'outerItem']),
  methods: mapMutations(['setOuterItem', 'setInnerItem']),
  mounted() {
    this.setOuterItem(this.data.pages[this.$route.params.definitionId])
    this.setInnerItem({})
  },
}
</script>

