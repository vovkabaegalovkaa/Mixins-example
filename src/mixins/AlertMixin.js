//миксин заменяет собой вот этот объект из Vue, если он у нас где повторяется чтобы не писать его много раз одинаковый
//то есть в компонентах AppBlock и App у нас полностью одинаковые объекты ну кроме компнентов, то есть их можно вынести сюда
export default {
    data(){
        return {
          alertStatus: false,
        }
      },
    methods: {
        close(){
            this.alertStatus = false;
        },
        toggleAlert(){
            this.alertStatus = !this.alertStatus;
        }
    },
    computed: {
        getStatus(){
          if(this.alertStatus){
            return "Закрыть"
          }
          return "Показать"
        }
    },
}