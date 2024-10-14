<template>
  <aside :class="{'collapse': !isDrop}">
      <div class="switch-sidebar" @click="toggleDrop">
        <i
          :class="['fa', 'switch-btn', isDrop ? 'fa-times' : 'fa-arrow-circle-o-right']"
          aria-hidden="true"
        ></i>
      </div>

      <button v-if="isDrop && isShowSidebarContent" class="aside-mayak" @click="toggleShowSidebarContent"></button>

      <div class="aside-wrapper" v-if="isShowSidebarContent">

        <img alt="" src="@/assets/images/aside-img.png" class="aside-img"/>

        <div class="link-seans-btn-text-h2 aeb">{{data.dopSaleTitle}}</div>
        <div class="aside-text-1" v-html="data.dopSaleDescription"></div>

        <a :href="data.dopSaleLink" class="sidebar-link-btn" target="_blank">ПОДРОБНЕЕ</a>
      </div>

      <div class="aside-wrapper aside-wrapper-2" v-else>
        <button class="close-sidebar-43" @click="toggleShowSidebarContent"></button>

        <img src="@/assets/images/card_15.png" alt="" class="aside-card-img">

        <div class="aside-text-4">
          Данная дисконтная карта даёт право<br class="show_900">  <br>
          на дополнительную <strong>скидку 15%</strong><br class="show_900"> <br>
          на всю продукцию проекта Marta-NG<br class="show_900"> <br>
          на сайте <a href="https://marta-ng.com/?utm_campaign=telegram" target="_blank" class="link">https://marta-ng.com/</a><br class="br"><br class="br">

          <strong class="underline">Как применить промокод</strong>

          <ul class="aside-ul">
            <li><div class="aside-text-4">Положите интересующие вас продукты в корзину</div></li>
            <li><div class="aside-text-4">В поле «промокод» <br>
              напишите <strong class="aside-text-5">КЛИЕНТ 15</strong></div></li>
            <li><div class="aside-text-4">Сумма вашего заказа станет меньше на 15%</div></li>
          </ul>

          <div class="aside-text-1 center aeb">ИЛИ</div>
          <div class="aside-text-4">
            Просто оформите счёт и cвяжитесь <br class="show_900"><br>
            с нами одним из указанных ниже способов:
          </div>

          <ul class="aside-ul">
            <li><div class="aside-text-4">по телефону: <a href="tel:8-800-350-79-63" class="link aeb">8-800-350-79-63</a> (звонок по России бесплатно)</div></li>
            <li><div class="aside-text-4">WhatsApp <a href="tel:+7-923-152-30-73" class="link aeb">+7-923-152-30-73</a></div></li>
          </ul>

          <div class="aside-text-4">
            Сообщите о том, что у Вас есть <strong class="aeb">дисконтная карта</strong><br class="show_900"> <br>
            и наши специалисты сами исправят Ваш счёт,<br class="show_900"> <br>
            применив к нему скидку.
          </div>

        </div>
      </div>

    </aside>
</template>

<script>
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import { mapState } from 'vuex'

export default {
  name: 'app-idebar',
  props: ['isDrop', 'toggleDrop'],
  setup () {
    const route = useRoute()
    const isShowSidebarContent = ref(true)
    const toggleShowSidebarContent = () => {
      isShowSidebarContent.value = !isShowSidebarContent.value
    }

    return {route, isShowSidebarContent, toggleShowSidebarContent}
  },
  computed: {
    ...mapState(['data'])
  },
}
</script>

<style scoped>

</style>
