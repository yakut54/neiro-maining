<template>
  <div class="page page-menu">

    <div class="menu-wrapper">
      <AppHeaderStatic/>
      <router-link class="gray-btn" to="/instructions">Инструкции</router-link>
      <GradientBlock :image="require('@/assets/images/1-7.png')" :text="'ИНТЕНСИВНОЕ ПРОГРАММИРОВАНИЕ <br>НА ПРОЦВЕТАНИЕ'"/>
      <MenuBtns/>
      <GradientBlock :image="require('@/assets/images/8-28.png')" :text="'СОНАСТРОЙКА С ПРОЦВЕТАНИЕМ'"/>
      <BottomMenuBtns/>
      <div class="line"></div>
      <MenuFooter/>
    </div>

  </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex'
import MenuBtns from '@/components/menu/MenuBtns.vue'
import MenuFooter from '@/components/menu/MenuFooter.vue'
import AppHeaderStatic from '@/components/AppHeaderStatic.vue'
import GradientBlock from '@/components/menu/GradientBlock.vue'
import BottomMenuBtns from '@/components/menu/BottomMenuBtns.vue'

export default {
  name: 'Menu',
  components: {
    MenuBtns,
    MenuFooter,
    GradientBlock,
    BottomMenuBtns,
    AppHeaderStatic
  },
  computed: mapState(['data']),
  methods: mapMutations(['setOuterItem', 'setInnerItem', 'setIsStart']),
  mounted() {
    this.setOuterItem({})
    this.setInnerItem({})
    this.setIsStart(true)
    window.scrollTo(0, 0);
  }
}
</script>
