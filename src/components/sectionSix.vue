<template>
    <div class="six_content sec_four">
        <div class="four_title">
            Бизни танлаган брендлар
        </div>
        <Vue3Marquee :duration="50">
            <img class="max-md:h-[42px] h-[60px] mb-[40px] mx-5" v-for="img of imgArrayTop" :key="img.id"
                :src="img.image" />
        </Vue3Marquee>
        <Vue3Marquee :duration="50" :direction="'reverse'">
            <img class="max-md:h-[42px] h-[60px] mx-5" v-for="img of imgArray" :key="img.id" :src="img.image" />
        </Vue3Marquee>
    </div>
</template>

<script>

import axios from 'axios';
export default {

    data() {
        return {
            imgArray: [],
            imgArrayTop: [],
        }
    },
    methods: {
        async getVideoss() {
            let res = await axios.get(`https://api.kozimhon.uz/api/partners`)
            if (res.status == 200) {
                this.imgArray = [...res.data]
                this.imgArrayTop = this.imgArray.splice(0, Math.floor(this.imgArray.length / 2))
            }
        }
    },
    mounted() {
        this.getVideoss()
    }
};


</script>

<style></style>