<script>
export default {
  name: "BottomMenuBtns"
}
</script>

<template>
  <div class="menu-btns-block">
    <router-link to="/attunement" class="btm menu-btn">
      <span class="row">
        <span class="left-menu-btn-2">
          <span class="left-menu-img"></span>
        </span>
        <span class="right-menu-btn">
          <span>ДВА ТРЕКА ДЛЯ СОНАСТРОЙКИ С ПРОЦВЕТАНИЕМ</span>
        </span>
      </span>
    </router-link>
    <router-link to="/anchors" class="btm menu-btn">
      <span class="row">
        <span class="left-menu-btn-2">
          <span class="left-menu-img"></span>
        </span>
        <span class="right-menu-btn">
          <span>НЕЙРОЯКОРЯ ДЛЯ СОНАСТРОЙКИ С ПРОЦВЕТАНИЕМ</span>
        </span>
      </span>
    </router-link>
  </div>
</template>

