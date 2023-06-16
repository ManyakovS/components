<template>
    <div class="chair" v-bind:style="{
        'background-color': getBackground_color,
        'width': getSize + 'px',
        'height': getSize + 'px',
    }" @click="select" />
</template>

<script>
export default {
    methods: {
        select() {
            this.$emit('select', true)
        },
    },
    computed: {
        getBackground_color: function () {
            let background_color;
            switch (this.status) {
                case 'selected':
                    background_color = '#F24253';
                    break;

                case 'booked':
                    background_color = '#FFBB00';
                    break;

                case 'bought':
                    background_color = '#49D381';
                    break;

                default:
                    background_color = '#FFFFFF';
                    break;
            }
            return background_color
        },
        getSize: function () {
            let size;
            switch (this.size) {
                case 'xs':
                    size = 16;
                    break;

                case 's':
                    size = 24;
                    break;

                case 'l':
                    size = 32;
                    break;

                case 'xl':
                    size = 40;
                    break;

                default:
                    typeof this.size === 'number' ? size = this.size : size = 32;
                    break;
            }
            return size
        },
    },
    props: {
        status: {
            validator: function (value) {
                return ['selected', 'available', 'booked', 'bought', Number].includes(value)
            },
            required: false,
        },
        size: {
            validator: function (value) {
                return ['xs', 's', 'l', 'xl'].includes(value)
            },
            required: false,
        },
    },
}
</script>

<style lang="scss" scoped>
.chair {
    margin: 2px;
    display: block;
    mask-image: url("@/assets/Chair.svg");
    mask-repeat: no-repeat;
    mask-size: contain;
}

</style>