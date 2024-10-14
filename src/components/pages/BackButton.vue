<template>
  <img
    src="../../assets/images/back.png"
    alt="back.png"
    title="НАЗАД"
    class="back"
    @click="isStart ? $router.back() : $router.push('/')" />
  />
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'back-button',
  computed: mapState(['isStart'])
}
</script>

<style>
.back {
  position: absolute;
  left: 5px;
  top: 5px;
  width: 43px;
  height: 43px;
  border-radius: 50%;
  cursor: pointer;
  max-width: 100%;
  transition: .3s;
  z-index: 1;
}
.back:hover{
  transform: scale(.9);
}
</style>

