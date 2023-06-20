<template>
    <div class="p-4">
        <v-swiper :space_between="15" :slides="3" :centeredSlides="false" v-if="films.length > 3" :type="'films'" :elements="films">

        </v-swiper>

        <div class="flex" v-else>
                <img v-for="(film, i) in films" :key="i" film :src="film[0]" alt="film">
        </div>
    </div>
</template>

<script>
import VSwiper from '@/components/UI/VSwiper.vue';
    export default {
        components: {
            VSwiper,
        },
        data() {
            return {
                films: [
                    [
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREQKu-weN09x7qGH6tgrXTCZxHTu-P1mrX7363Ujen&s',
                        'sfsgdg'
                    ],
                    [
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREQKu-weN09x7qGH6tgrXTCZxHTu-P1mrX7363Ujen&s',
                        'sfsgdg'
                    ],
                    [
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREQKu-weN09x7qGH6tgrXTCZxHTu-P1mrX7363Ujen&s',
                        'sfsgdg'
                    ],
                    [
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREQKu-weN09x7qGH6tgrXTCZxHTu-P1mrX7363Ujen&s',
                        'sfsgdg'
                    ],
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>