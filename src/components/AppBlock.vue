<template>
    <div class="container">
      <app-alert 
        v-if="alertStatus" 
        :title="'Attention!'" 
        :content="'Thanks for attention'" 
        :type="'bad'" 
        @closeAlert="close">
      </app-alert>
      <div class="el">
        <button class="btn accept" @click="toggleAlert">{{ getStatus }} сообщение</button>
      </div>
    </div>
  </template>
  
  <script>
  import AppAlert from './AppAlert.vue';
  import AlertMixin from '@/mixins/AlertMixin';
  export default {
    mixins: [AlertMixin],//миксинов можно указать сколько угодно
    components: {
      'app-alert': AppAlert,
    },
  }
  </script>
  
  
  