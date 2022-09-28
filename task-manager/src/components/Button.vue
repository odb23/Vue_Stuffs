<template >
    <button class="btn" :style="{background:color}" @click="onClick()">{{ text }}</button>
</template>

<script>
export default {
    name: "ButtonComponent",
    props: {
        text: String,
        color: String,
    },
    methods: {
        onClick() {
            console.log('Clicked' + this.text)
        }
    }
}
</script>

<style lang="">
    
</style>