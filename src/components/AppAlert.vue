<template>
    <div class="alert" :class="type">
        <p class="alert-title" >{{ title }}</p>
        <p>{{ content }}</p>
        <button class="btn accept" v-if="closable" @click="$emit('closeAlert')">Закрыть</button>
    </div>
</template>

<script>
export default {
    emits:['closeAlert'],
    props: {
        title: {
            type: String,
            required: false,
            default: "Внимание!"
        },
        content: {
            type: String,
            required: false,
            default: "Спасибо за внимание"
        },
        type: {
            type: String,
            required: false,
            validator(value){
                return ['good', 'bad'].includes(value);
            }
        },
        closable: {
            type: Boolean,
            requierd: false,
            default: false,
        }
    }
}
</script>