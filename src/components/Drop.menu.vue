<template>
  <div :class="['drop-menu', isDrop ? 'drop' : '']" @click="toggleDrop">
    <a target="_blank" class="drop-menu-btn" href="/">Официальный сайт</a>
    <a target="_blank" class="drop-menu-btn" href="https://t.me/psychological_journal/">Телеграм-канал</a>
    <a target="_blank" class="drop-menu-btn" href="/2023/zhensovet/">Приложение "ЖенСовет"</a>
    <a target="_blank" class="drop-menu-btn" href="/letter/">Техподдержка</a>
    <a target="_blank" class="drop-menu-btn hits" href="/2023/hits_2023/">ХИТЫ ЭТОГО ГОДА</a>
  </div>
  <div class="drop-menu-wrapper">
    <div class="max1140 aic">
      <div class="drop-menu-img">
        <router-link to="/">
          <img src="@/assets/images/sidebar-img.png" alt="" />
        </router-link>
      </div>
      <div class="drop-menu-btn-descktop-block">
        <a target="_blank" class="drop-menu-btn-descktop" href="/">Официальный сайт</a>
        <a target="_blank" class="drop-menu-btn-descktop" href="https://t.me/psychological_journal/">Телеграм-канал</a>
        <a target="_blank" class="drop-menu-btn-descktop" href="/2023/zhensovet/">Приложение "ЖенСовет"</a>
        <a target="_blank" class="drop-menu-btn-descktop" href="/letter/">Техподдержка</a>
        <a target="_blank" class="drop-menu-btn-descktop hits" href="/2023/hits_2023/">ХИТЫ ЭТОГО ГОДА</a>
      </div>
      <div class="drop-switch">
        <i @click="toggleDrop" :class="['fa', 'switch-btn', isDrop ? 'fa-times' : 'fa-bars']" aria-hidden="true"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['isDrop', 'toggleDrop'],
}
</script>
