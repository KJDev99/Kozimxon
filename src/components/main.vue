<template>
    <div class="w-[100%] main_big">
        <div class="container">
            <sectionOne />
            <sectionTwo />
            <sectionThree />
            <sectionFour />
            <sectionFive />
            <sectionSix />
            <sectionSeven />
            <sectionEight />
        </div>
    </div>
</template>

<script setup>
import sectionOne from './sectionOne.vue';
import sectionTwo from './sectionTwo.vue';
import sectionThree from './sectionThree.vue';
import sectionFour from './sectionFour.vue';
import sectionFive from './sectionFive.vue';
import sectionSix from './sectionSix.vue';
import sectionSeven from './sectionSeven.vue';
import sectionEight from './sectionEight.vue';
</script>

<style lang="css">
.main_big {
    background: url('../assets/imgs/blur bg.png') center/cover no-repeat;
    width: 100%;
    height: 6887px;
    overflow-x: hidden;
}
</style>    