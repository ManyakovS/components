<template>
    <swiper :spaceBetween="30" :slidesPerView="5" :modules="modules" :centeredSlides="true"
        :slideActiveClass="'swiper-slide-active'" class="w-full h-auto" @activeIndexChange="log">
        <!-- :cssMode="true" --> <!-- ТОЛЬКО ДЛЯ МОБИЛКИ -->
        <swiper-slide v-for="el in swiper_elements" :key="el.id">{{ el }}</swiper-slide>
    </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    props: {
        type: {
            validator: function (value) {
                return ['time', 'date'].includes(value)
            },
            required: false,
        },
        elements: {
            validator: function (value) {
                return Array.isArray(value)
            },
            required: true,
        },
    },
    computed: {
        swiper_elements: function () {
            return this.elements
        },
    },
    methods: {
        log(swiper) {
            console.log(swiper)
        },
    },

};
</script>
  
<style lang="scss">
.swiper-wrapper {
    display: flex;
    align-items: center;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: gray;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide-active {
    background: rgba(62, 62, 152, 0.428);
    height: 50px;

}

.swiper-slide img {
    display: block;
    width: 100%;
    object-fit: cover;
}
</style>