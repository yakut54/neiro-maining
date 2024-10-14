<template>
	<div class="video-player">
		<div class="video-top teleport">
        <video 
          ref="video"
          :src="source" 
          :poster="require(`@/assets/images/shag${idx + 1}.jpg`)">
        </video>
        <div @click="fullscreenVideo" class="fullscreen">
					<i class="fa fa-arrows-alt" aria-hidden="true"></i>
				</div>
        <!-- teleport play button -->
      </div>
      <div class="video-bottom">
        <Player 
          :player="player" 
          :source="source" 
          :teleport="'.teleport'"/>
      </div>
	</div>
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import Player from './Player.vue'

export default {
  setup () {
    const store = useStore()
    const idx = ref(0)
		const data = computed(() => store.state.data)
    const source = ref('')
    const video = ref(null)
    let player = () => video.value

    const fullscreenVideo = () => {
      if (video.value) {
        video.value.requestFullscreen()
      }
    }


    onMounted(() => {
      let idx_
      if (localStorage.getItem('idx')) idx_ = localStorage.getItem('idx')
      else idx_ = 0 
      idx.value = +idx_
      source.value = data.value[idx_].source

      window.scrollTo(0, 0)
    })
    return {video, player, fullscreenVideo, source, data, dx}
  },
  components: { Player } 
}
</script>

<style></style>
