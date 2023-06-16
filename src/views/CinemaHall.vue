<template>
    <div class="h-full w-full bg-slate-400">
        <v-chair v-for="chair in chairs" :key="chair.id" :status="chair.status" @select="log(chair)"></v-chair>

        <v-swiper :type="'date'" :elements="['2023-01-01', '2023-01-02']" @select="log">

        </v-swiper>

        <v-swiper class="mt-2" :type="'time'" :elements="['20:30','11:30','12:30','15:30', '01:30']" @select="log">

        </v-swiper>
    </div>
</template>

<script>
import VChair from '@/components/UI/VChair.vue';
import VSwiper from '@/components/UI/VSwiper.vue';
import moment from 'moment'
export default {
    components: {
        VChair,
        VSwiper,
    },
    data() {
        return {
            chairs: [
                {
                    id: 1,
                    status: 'bought',
                    row: 1,
                    place: {
                        row: 1,
                        place: 1,
                    }
                },
                {
                    id: 2,
                    row: 1,
                    place: {
                        row: 1,
                        place: 2,
                    }
                },
                {
                    id: 3,
                    status: 'selected',
                    place: {
                        row: 1,
                        place: 3,
                    }
                },
            ]
        }
    },
    methods: {
        log(el) {
            console.log(el)
        }
    },
    mounted() {
        const time = '2023-01-01'
        console.log(moment(time, 'YYYY-MM-DD', true).isValid())

    }
}
</script>

<style lang="scss" scoped></style>