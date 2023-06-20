<template>
    <swiper :spaceBetween="space_between" :slidesPerView="slides" :modules="modules" :centeredSlides="centeredSlides"
        :slideActiveClass="slides_class" class="w-full h-auto" @activeIndexChange="select">
        <!-- :cssMode="true" --> <!-- ТОЛЬКО ДЛЯ МОБИЛКИ -->
        <swiper-slide v-for="el in swiper_elements" :key="el.id">

            <div v-if="type == 'date'" class="flex flex-col">
                <p>{{ getDayOfWeek(el) }}</p>
                <p>{{ getDate(el) }}</p>
            </div>

            <div v-else-if="type == 'time'" class="flex">
                {{ el }}
            </div>

            <template v-else-if="type == 'films'">
                <v-film :link="el[0]" :title="el[1]"></v-film>
            </template>

        </swiper-slide>
    </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import VFilm from '@/components/UI/VFilm.vue';
import moment from 'moment'
import 'swiper/css';

import { toRaw } from 'vue';

export default {
    components: {
        Swiper,
        SwiperSlide,
        VFilm
    },
    data() {
        return {

        }
    },
    props: {
        type: {
            validator: function (value) {
                return ['time', 'date', 'films'].includes(value)
            },
        },
        elements: {
            validator: function (value) {
                return Array.isArray(value)
            },
            required: true,
        },
        space_between: {
            type: Number,
            default: 30,
        },
        centeredSlides: {
            type: Boolean,
            default: true,
        },
        slides: {
            type: Number,
            default: 5,
        }
    },
    computed: {
        swiper_elements: function () {
            if (this.type == 'date' && this.elements.every(e => (moment(e, 'YYYY-MM-DD', true).isValid())))
                return this.elements

            else if (this.type == 'time' && this.elements.every(e => (moment(e, 'HH:mm', true).isValid())))
                return this.elements

            else if (this.type == 'films' && this.elements.every(e => this.isValidUrl(e[0])))
                return this.elements

            return undefined
        },
        slides_class: function() {
            let slide_class
            this.type == 'date' || this.type == 'time' ? slide_class = 'swiper-slide-active' : slide_class = null
            return slide_class
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
        },
        isValidUrl(string) {
            try {
                new URL(string);
                return true;
            } catch (_) {
                console.log()
                return false;
            }

        },

    }
}


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