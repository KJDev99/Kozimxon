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
    </div>
    <div class="four_content-mobile">

    </div>
</template>

<script >

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

    .four_content-mobile {
        display: block;
    }

}
</style>