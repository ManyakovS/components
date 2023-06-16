<template>
    <swiper :spaceBetween="30" :slidesPerView="5" :modules="modules" :centeredSlides="true"
        :slideActiveClass="'swiper-slide-active'" class="w-full h-auto" @activeIndexChange="select">
        <!-- :cssMode="true" --> <!-- ТОЛЬКО ДЛЯ МОБИЛКИ -->
        <swiper-slide v-for="el in swiper_elements" :key="el.id">

            <div v-if="type == 'date'" class="flex flex-col">
                <p>{{ getDayOfWeek(el) }}</p>
                <p>{{ getDate(el) }}</p>
            </div>

            <div v-else-if="type == 'time'" class="flex">
                {{ el }}
            </div>

        </swiper-slide>
    </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import moment from 'moment'
import 'swiper/css';

import { toRaw } from 'vue';

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
            if (this.type == 'date' && this.elements.every(e => (moment(e, 'YYYY-MM-DD', true).isValid())))
                return this.elements
            else if (this.type == 'time' && this.elements.every(e => (moment(e, 'HH:mm', true).isValid())))
                return this.elements

            return undefined
        },
    },
    methods: {
        select(el) {
            this.$emit('select', this.swiper_elements[toRaw(el).activeIndex])
        },
        getDate(el) {
            return new Date(el).getDay()
        },
        getDayOfWeek(el) {
            return new Date(el).toDateString().split(' ')[0]
        }
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
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.15rem;
    font-weight: 500;

}

.swiper-slide-active {
    font-size: 1.55rem;
    font-weight: 600;
}

.swiper-slide img {
    display: block;
    width: 100%;
    object-fit: cover;
}
</style>