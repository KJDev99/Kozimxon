<template>
    <div class="w-[100%] main_big">
        <div class="container">
            <sectionOne />
            <sectionTwo />
            <sectionThreeVue />
            <sectionFour />
        </div>
    </div>
</template>

<script setup>
import sectionOne from './sectionOne.vue';
import sectionTwo from './sectionTwo.vue';
import sectionThreeVue from './sectionThree.vue';
import sectionFour from './sectionFour.vue';
</script>

<style lang="css">
.main_big {
    background: url('../assets/imgs/blur bg.png') center/cover no-repeat;
    width: 100%;
    height: 6887px;
}
</style>