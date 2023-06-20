<template>
    <div class="h-full w-full bg-slate-400">
        <v-chair v-for="chair in chairs" :key="chair.id" :status="chair.status" @select="log(chair)"></v-chair>

        <v-swiper :type="'date'" :elements="['2023-01-01', '2023-01-02']" @select="log">

        </v-swiper>

        <v-swiper class="mt-2" :type="'time'" :elements="['20:30','11:30','12:30','15:30', '01:30']" @select="log">

        </v-swiper>

        <v-button @click.prevent="is_open = !is_open">
            Succes
        </v-button>

        <v-side-bar class="bg-slate-950" :is_open="is_open" @close="is_open = !is_open">
            <template #header>
                <p class="text-center text-2xl font-medium">Заголовок</p>
            </template>

            <template #profile>
                <v-avatar :text="'asdgsdg'" :text_size="'30px'" :border_radius="'20%'" :icon="'https://cs10.pikabu.ru/post_img/big/2020/05/22/11/1590174280160932814.jpg'">
                </v-avatar>
            </template>

            <template #default>
                <p>хуй</p>
            </template>

            <template #footer>
                <p class="text-xl">ОООЧОЕНЬ БОЛЬШОЙ ХУ</p>
                <p class="text-xl">ОООЧОЕНЬ БОЛЬШОЙ ХУ</p>
                <p class="text-xl">ОООЧОЕНЬ БОЛЬШОЙ ХУ</p>
                <p class="text-xl">ОООЧОЕНЬ БОЛЬШОЙ ХУ</p>
                <p class="text-xl">ОООЧОЕНЬ БОЛЬШОЙ ХУ</p>
                <p class="text-xl">ОООЧОЕНЬ БОЛЬШОЙ ХУ</p>
            </template>
        </v-side-bar>

        <v-button-back @go-back="log" :size="20"></v-button-back>


        <div class="absolute grid grid-rows-3 gap-2 py-3.5 px-2 rounded-[21px] bg-slate-950">
            <v-avatar :border_radius="'18px'" :icon="'https://cs10.pikabu.ru/post_img/big/2020/05/22/11/1590174280160932814.jpg'"/>

            <v-avatar :border_radius="'18px'" :icon="'https://cs10.pikabu.ru/post_img/big/2020/05/22/11/1590174280160932814.jpg'"/>

            <v-avatar :border_radius="'18px'" :icon="'https://cs10.pikabu.ru/post_img/big/2020/05/22/11/1590174280160932814.jpg'"/>
            
        </div>

        <v-button class="absolute w-[90%] ml-[5%] h-16 text-2xl font-semibold" @click.prevent="is_open = !is_open">
            Confirm 20$
        </v-button>

    </div>

</template>

<script>
import VChair from '@/components/UI/VChair.vue';
import VSwiper from '@/components/UI/VSwiper.vue';
import VButton from '@/components/UI/VButton.vue';
import VSideBar from '@/components/UI/VSideBar.vue';
import VAvatar from '@/components/UI/VAvatar.vue';
import VButtonBack from '@/components/UI/VButtonBack.vue';
import moment from 'moment'
export default {
    components: {
        VChair,
        VSwiper,
        VButton,
        VSideBar,
        VAvatar,
        VButtonBack,
    },
    data() {
        return {
            is_open: true,
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