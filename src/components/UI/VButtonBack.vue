<template>
    <span class="arrow_back" @click="goBack"
    v-bind:style="{'width': size + 'px', 'height': size + 'px'}"
    >
    </span>
</template>

<script>
    export default {
        props: {
            size: {
                type: Number,
                default: 20

            }
        },
        methods: {
            goBack() {
                this.$emit('go-back', true)
                window.history.back()
            }
        }
    }
</script>

<style lang="scss" scoped>
    .arrow_back {
        background-image: url(@/assets/Arrow-left.svg);
        display: block;
        background-repeat: no-repeat;
        background-size: cover; 
        min-width: 20px;
        min-height: 20px;
        cursor: pointer;
    }
</style>