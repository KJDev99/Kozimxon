<template>
    <div class="six_content sec_four">
        <div class="four_title">
            Бизни танлаган брендлар
        </div>
        <Vue3Marquee :duration="50">
            <img class="max-md:h-[42px] h-[60px] mb-[40px] mx-5" v-for="img in imgArray" :key="img" :src="img" />
        </Vue3Marquee>
        <Vue3Marquee :duration="50" :direction="'reverse'">
            <img class="max-md:h-[42px] h-[60px] mx-5" v-for="img in imgArray" :key="img" :src="img" />
        </Vue3Marquee>
    </div>
</template>

<script setup>
const imgArray = [
    'https://sponsors.vuejs.org/images/dronahq.avif',
    'https://sponsors.vuejs.org/images/dronahq.avif',
    'https://sponsors.vuejs.org/images/dronahq.avif',
    'https://sponsors.vuejs.org/images/dronahq.avif',
    'https://sponsors.vuejs.org/images/dronahq.avif',
    'https://sponsors.vuejs.org/images/dronahq.avif',
    'https://sponsors.vuejs.org/images/dronahq.avif',
    'https://sponsors.vuejs.org/images/dronahq.avif',
    'https://sponsors.vuejs.org/images/dronahq.avif',
]
</script>

<style></style>