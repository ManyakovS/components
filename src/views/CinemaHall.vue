<template>
    <div class="h-full w-full bg-slate-400">
        <v-chair v-for="chair in 0" :key="chair.id" :status="chair.status" @select="log(chair)"></v-chair>

        <v-swiper :type="'date'" :elements="['1', '10']">
            
        </v-swiper>
    </div>
</template>

<script>
import VChair from '@/components/UI/VChair.vue';
import VSwiper from '@/components/UI/VSwiper.vue';
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
            el.status = 'selected'
        }
    },
    mounted() {


    }
}
</script>

<style lang="scss" scoped></style>