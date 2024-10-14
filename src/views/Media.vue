<template>
  <div class="page page-scena">
    <div class="media">

      <div class="media-header">
        <div class="media-header-side dop-side-1">
          <back-button/>
        </div>
        <div class="media-header-center">
          <div class="media-header-center-text dop-title-size">
            <span v-if="$route?.params.definitionId.includes('day')">Сеанс {{trackNumber}}:<br></span>
            <span v-html="innerItem.title"></span>
          </div>
        </div>
        <div class="media-header-side dop-side-2">
          <back-button class="new-hide-back-btn"/>
        </div>
      </div>

      <div class="media-scene">

        <div class="img-box">
          <img alt="" src="@/assets/images/scene.png" class="img-box-main-img"/>
          <a :href="innerItem.track" class="img-box-save" target="_blank">
            <i class="fa fa-download" aria-hidden="true"></i>
          </a>
        </div>

        <div class="recommendations-dynamic" v-if="innerItem.recommendations" v-html="innerItem.recommendations"></div>

        <div class="recommendations paragraph-18">На сеансе будь в наушниках, это важно</div>

        <audio :src="innerItem.track" ref="audio"></audio>
        <player :player="player" :src="innerItem.track"/>

      </div>

      <div class="doprodazha">
        <div class="kol"></div>
        <div class="media-header-center-text dop-text-new" v-html="data.dopSaleTitle"></div>
        <div class="under-text asb" v-html="data.dopSaleDescription"></div>
        <a :href="data.dopSaleLink" class="dop-link-btn-new asb" target="_blank">ПОДРОБНЕЕ</a>
      </div>

    </div>

    <router-link to="/" class="transparent-btn">← В ГЛАВНОЕ МЕНЮ</router-link>
  </div>
</template>

<script>
import {ref} from 'vue'
import {mapMutations, mapState} from 'vuex'

export default {
  name: 'Scene',
  setup() {
    const audio = ref(null)
    const player = () => audio.value
    return {audio, player}
  },
  data() {
    return {
      outerRoute: '',
      innerRoute: '',
      trackNumber: 0,
    }
  },
  computed: mapState(['data', 'innerItem']),
  methods: mapMutations(['setInnerItem', 'setOuterItem']),
  mounted() {
    window.scrollTo(0, 0)

    this.setOuterItem(this.data.pages[this.$route.params.definitionId])
    this.setInnerItem(this.data.pages[this.$route.params.definitionId].btns[this.$route.params.descriptionId])

    const url = this.$route.path;
    const match = url.match(/track(\d+)/);
    if (match) {
      this.trackNumber = match[1]
    }
  },
}
</script>
