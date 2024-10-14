<template>
  <div class="app-header-static">

    <back-button v-if="$route.name !== 'menu'" />

    <div class="inner-header-wrapper">
      <img alt="" src="@/assets/images/neiromaining.png" class="neiromaining-img"/>
      <div class="header-subtitle">
        <span class="text-header-subtitle">Полное перепрограммирование <br>финансового мышления</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeaderStatic"
}
</script>

