<template>
    <div v-bind:class="{ 'flex': text }">
        <div class="w-[60px] h-[60px] border-2 border-slate-200" v-bind:style="{ 'border-radius': border_radius }">
            <img class="w-full h-full object-fill" :src="icon" alt="text" v-bind:style="{ 'border-radius': border_radius }">
        </div>
        <span v-if="text !== null" 
        class="mt-2 ml-2"
        v-bind:style="{'font-size': text_size, 'line-height': text_size}">
            {{ text }}
        </span>
    </div>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            required: true,
        },
        border_radius: {
            type: String,
            validator: function (value) {
                return ['rem', 'em', 'px', '%'].includes(value)
            },
            required: false,
            default: '50%'
        },
        text: {
            type: String,
            required: false,
            default: null,
        },
        text_size: {
            type: String,
            validator: function (value) {
                return ['rem', 'em', 'px'].includes(value)
            },
            required: false,
            default: '1rem'
        }

    }
}
</script>

<style lang="scss" scoped></style>