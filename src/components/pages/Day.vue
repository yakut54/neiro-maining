<script>
import DefinitionBtns from '@/components/menu/DefinitionBtns.vue'

export default {
  name: 'Day',
  components: {DefinitionBtns},
  props: {
    item: Object,
  },
}
</script>

<template>
  <div class="paragraph-24" v-if="item.title === 'НЕЙРОКАРТИРОВАНИЕ ФИНАНСОВОГО МОЗГА'">
    На этом этапе, как и на последующих, 3 сеанса программирования:
  </div>
  <div class="paragraph-24" v-else-if="item.title === 'ИНТЕГРАЦИЯ ФИНАНСОВОГО НЕЙРОИНТЕЛЛЕКТА'">
    На этом этапе, как и на всех предыдущих, 3 сеанса программирования:
  </div>
  <div class="paragraph-24" v-else>
    На этом этапе, как и на всех предыдущих и последующих, <br>
    3 сеанса программирования:
  </div>
  <DefinitionBtns :item="item" />
  <div class="paragraph-20">
    По условиям интенсивного программирования по методу Нейромайнинг <br>
    необходимо принять все три сеанса в течение одного дня. <br>
    Можно и желательно делать перерывы между сеансами. <br>
    Продолжительность перерывов: от 30 минут до 3 часов.
  </div>
</template>

