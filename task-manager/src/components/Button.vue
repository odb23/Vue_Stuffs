<template >
    <button class="btn" :style="{background:color}" @click="$emit('on-click')" >{{ text }}</button>
</template>

<script>
export default {
    name: "ButtonComponent",
    props: {
        text: String,
        color: String,
    },
    methods: {
       
    }
}
</script>

<style lang="">
    
</style>