<template>
    <div class="tr_background" v-bind:class="{'hidden': !is_open}" @click.self="$emit('close', true)">

        <div class="header">
            <slot name="header"></slot>
        </div>
        
        <div class="profile">
            <slot name="profile"></slot>
        </div>

        <div class="default">
            <slot></slot>
        </div>

        <div class="footer">
            <slot name="footer"></slot>

        </div>

    </div>
</template>

<script>
export default {
    props: {
       is_open: {
        type: Boolean,
        required: false,
        default: true
       } 
    }
}
</script>

<style lang="scss" scoped>
.tr_background {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    flex-direction: column;

    box-sizing: border-box;
    padding: 2%;

    background-color: rgba($color: #000000, $alpha: .35);

}


.header {
    position: absolute;
    width: 50%;
    align-items: center;
    justify-content: center;
    text-align: center;

    margin-left: 23%
}

.profile {
    position: absolute;
    height: auto;
    top: 10%;
}

.default {
    position: absolute;
    top: 20%;
    max-height: 65%;
    width: 96%;
}

.footer {
    position: absolute;
    top: 85%;
    max-height: 14%;
    width: 96%;
}
</style>