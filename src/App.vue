<template>
  <div class="container">
    <app-alert 
      v-if="alertStatus" 
      :title="'Attention!'" 
      :content="'Thanks for attention'" 
      :type="'good'" 
      :closable="true" 
      @closeAlert="close">
    </app-alert>
    <div class="el">
      <button class="btn accept" @click="toggleAlert">{{ getStatus }} сообщение</button>
    </div>
  </div>
  <app-block></app-block>
</template>

<script>
import AppAlert from './components/AppAlert.vue';
import AppBlock from './components/AppBlock.vue';
import AlertMixin from './mixins/AlertMixin';
export default {
  mixins: [AlertMixin],//миксинов можно указать сколько угодно
  components: {
    'app-alert': AppAlert,
    'app-block': AppBlock,
  },
}
</script>


