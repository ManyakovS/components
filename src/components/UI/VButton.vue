<template>
    <button class="bg-[#49D381] hover:bg-[#2cb563] transition-colors duration-300" v-bind:style="styleObject">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
       
    }
}
</script>

<style lang="scss" scoped>

button {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    border-radius: 16px;
    padding: .5% 2%;
}

</style>