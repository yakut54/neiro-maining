<template>
  <div class="page-description">

    <AppHeaderStatic />

    <Title :text="outerItem.title"/>

    <div class="page-content">
      <div class="inner-title">
        Сеанс {{trackNumber}}: <strong class="blue-inner-title" v-html="innerItem.title"></strong>
      </div>

      <div class="paragraph-20" v-html="innerItem.text"></div>

      <router-link :to="`/${outerRoute}/${innerRoute}/media`" class="green-btn">ОТКРЫТЬ СЕАНС →</router-link>
    </div>

  </div>

  <router-link to="/" class="transparent-btn">← В ГЛАВНОЕ МЕНЮ</router-link>
</template>

<script>
import AppHeaderStatic from '@/components/AppHeaderStatic.vue'
import Title from '@/components/pages/Title.vue'
import {mapMutations, mapState} from 'vuex'

export default {
  name: 'Description',
  components: {AppHeaderStatic, Title},
  methods: mapMutations(['setInnerItem', 'setOuterItem']),
  computed: mapState(['data', 'innerItem', 'outerItem']),
  data(){
    return {
      trackNumber: 0,
      outerRoute: '',
      innerRoute: '',
    }
  },
  beforeMount() {
    this.setOuterItem(this.data.pages[this.$route.params.definitionId])
    this.setInnerItem(this.data.pages[this.$route.params.definitionId].btns[this.$route.params.descriptionId])

    this.outerRoute = this.$route.params.definitionId
    this.innerRoute = this.$route.params.descriptionId

    const url = this.$route.path;
    const match = url.match(/track(\d+)/);
    if (match) {
      this.trackNumber = match[1]
    }
  },

}
</script>


