<template>
    <div class="sec_four px-2">
        <div class="four_title">
            Ўқувчиларимиз фикрлари
        </div>
        <div class="four_content-desktop grid grid-cols-3 gap-5">
            <div class="four_item">
                <iframe src="https://www.youtube.com/embed/o4tbI1xOa5o?modestbranding=0" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
            </div>
            <div class="four_item">
                <iframe src="https://www.youtube.com/embed/o4tbI1xOa5o" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
            </div>
            <div class="four_item">
                <iframe src="https://www.youtube.com/embed/o4tbI1xOa5o" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
            </div>
            <div class="four_item">
                <iframe src="https://www.youtube.com/embed/o4tbI1xOa5o" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
            </div>
            <div class="four_item">
                <iframe src="https://www.youtube.com/embed/o4tbI1xOa5o" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
            </div>
            <div class="four_item">
                <iframe src="https://www.youtube.com/embed/o4tbI1xOa5o" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
            </div>
        </div>
        <div class="four_content-mobile">
            aaa
            <fwb-carousel :pictures="pictures" />
        </div>
    </div>
</template>

<script setup>
import { FwbCarousel } from 'flowbite-vue'

const pictures = [
    { src: '@/assets/imgs/Header (1).png', alt: 'Image 1' },
    { src: '@/assets/imgs/Header (3).png', alt: 'Image 2' },
    { src: '@/assets/imgs/Header (1).png', alt: 'Image 3' },
]
</script>

<style lang="css">
.four_title {
    font-size: 36px;
    font-weight: 500;
    line-height: 48px;
    letter-spacing: -0.04em;
    text-align: left;
    margin-top: 180px;
    margin-bottom: 60px;
    color: rgba(255, 255, 255, 1);
}


.four_item iframe {
    width: 100% !important;
    height: 225px;
    border-radius: 22px;
}

.ytp-gradient-top {
    display: none !important;
}

.ytp-show-cards-title {
    display: none !important;
    opacity: 0 !important;
}

.ytp-large-play-button {
    display: none !important;
}

@media (max-width: 768px) {
    .four_content-desktop {
        display: none !important;
    }
}
</style>