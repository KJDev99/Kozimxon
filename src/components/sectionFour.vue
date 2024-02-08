<template>
    <div class="sec_four px-2">
        <div class="four_title">
            Ўқувчиларимиз фикрлари
        </div>
        <div class="four_content-desktop grid grid-cols-3 gap-5">
            <div class="four_item">
                <iframe src="https://www.youtube.com/embed/o4tbI1xOa5o"
                    title="O&#39;zbekistondagi kompaniyalarda nega HR sistema yo&#39;lga qo&#39;yilishi kerak?"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen loading="lazy"></iframe>
            </div>
            <div class="four_item">
                <iframe src="https://www.youtube.com/embed/o4tbI1xOa5o"
                    title="O&#39;zbekistondagi kompaniyalarda nega HR sistema yo&#39;lga qo&#39;yilishi kerak?"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen loading="lazy"></iframe>
            </div>
            <div class="four_item">
                <iframe src="https://www.youtube.com/embed/o4tbI1xOa5o"
                    title="O&#39;zbekistondagi kompaniyalarda nega HR sistema yo&#39;lga qo&#39;yilishi kerak?"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen loading="lazy"></iframe>
            </div>
            <div class="four_item">
                <iframe src="https://www.youtube.com/embed/o4tbI1xOa5o"
                    title="O&#39;zbekistondagi kompaniyalarda nega HR sistema yo&#39;lga qo&#39;yilishi kerak?"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen loading="lazy"></iframe>
            </div>
            <div class="four_item">
                <iframe src="https://www.youtube.com/embed/o4tbI1xOa5o"
                    title="O&#39;zbekistondagi kompaniyalarda nega HR sistema yo&#39;lga qo&#39;yilishi kerak?"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen loading="lazy"></iframe>
            </div>
            <div class="four_item">
                <iframe src="https://www.youtube.com/embed/o4tbI1xOa5o"
                    title="O&#39;zbekistondagi kompaniyalarda nega HR sistema yo&#39;lga qo&#39;yilishi kerak?"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen loading="lazy"></iframe>
            </div>
        </div>
        <div class="four_content-mobile">
            <swiper :cssMode="true" :navigation="true" :pagination="true" :mousewheel="true" :keyboard="true"
                :modules="modules" class="mySwiper">
                <swiper-slide>
                    <iframe src="https://www.youtube.com/embed/o4tbI1xOa5o"
                        title="O&#39;zbekistondagi kompaniyalarda nega HR sistema yo&#39;lga qo&#39;yilishi kerak?"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen loading="lazy"></iframe>
                </swiper-slide>
                <swiper-slide>
                    <iframe src="https://www.youtube.com/embed/o4tbI1xOa5o"
                        title="O&#39;zbekistondagi kompaniyalarda nega HR sistema yo&#39;lga qo&#39;yilishi kerak?"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen loading="lazy"></iframe>
                </swiper-slide>
                <swiper-slide>
                    <iframe src="https://www.youtube.com/embed/o4tbI1xOa5o"
                        title="O&#39;zbekistondagi kompaniyalarda nega HR sistema yo&#39;lga qo&#39;yilishi kerak?"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen loading="lazy"></iframe>
                </swiper-slide>
                <swiper-slide>
                    <iframe src="https://www.youtube.com/embed/o4tbI1xOa5o"
                        title="O&#39;zbekistondagi kompaniyalarda nega HR sistema yo&#39;lga qo&#39;yilishi kerak?"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen loading="lazy"></iframe>
                </swiper-slide>
                <swiper-slide>
                    <iframe src="https://www.youtube.com/embed/o4tbI1xOa5o"
                        title="O&#39;zbekistondagi kompaniyalarda nega HR sistema yo&#39;lga qo&#39;yilishi kerak?"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen loading="lazy"></iframe>
                </swiper-slide>
                <swiper-slide>
                    <iframe src="https://www.youtube.com/embed/o4tbI1xOa5o"
                        title="O&#39;zbekistondagi kompaniyalarda nega HR sistema yo&#39;lga qo&#39;yilishi kerak?"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen loading="lazy"></iframe>
                </swiper-slide>

            </swiper>
        </div>
    </div>
</template>

<script >
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Navigation, Pagination, Mousewheel, Keyboard, Autoplay],
        };
    },
};
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

.four_content-mobile {
    display: none;
}

@media (max-width: 768px) {
    .four_content-desktop {
        display: none !important;
    }

    .four_title {
        font-size: 22px;
        line-height: 22px;
        margin-top: 80px;
        margin-bottom: 30px;
    }

    .four_content-mobile {
        display: block;
    }

    .swiper {
        width: 100%;
        height: 100%;
    }

    .swiper-slide {
        text-align: center;
        font-size: 18px;
        display: flex;
        justify-content: center;
        width: 100%;
        height: 245px;
        border-radius: 22px;
    }

    .swiper-slide iframe {
        border-radius: 22px;
        border: 1px solid rgba(21, 210, 232, 0.5);
        width: 100%;
        height: 191px;
    }

    .swiper-pagination-bullet {
        background: rgba(21, 210, 232, 0.2);
    }

    .swiper-pagination-bullet {
        background: rgba(21, 210, 232, 0.77);
    }

    .swiper-button-prev {
        top: 230px;
        left: 60px;
        z-index: 11;
    }

    .swiper-button-next,
    .swiper-button-prev {
        top: 230px;
        z-index: 11;
        right: 60px;
        background: linear-gradient(0deg, rgba(21, 210, 232, 0.5), rgba(21, 210, 232, 0.5)),
            linear-gradient(0deg, rgba(21, 210, 232, 0.77), rgba(21, 210, 232, 0.77));
        height: 36px;
        width: 36px;
        border-radius: 50%;

    }

    .swiper-button-next::after,
    .swiper-button-prev::after {
        font-size: 18px;
        color: white;
    }

    .swiper-pagination {
        top: 215px !important;
    }

}
</style>