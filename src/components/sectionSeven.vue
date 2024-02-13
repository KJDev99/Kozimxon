<template>
    <div class="sec_seven px-2">
        <h3 class="seven_title">Кўп бериладиган саволлар</h3>
        <vue-collapsible-panel-group accordion
            class="grid lg:grid-cols-2 max-md:grid-cols-1 lg:gap-x-10 lg:gap-y-10 max-md:gap-y-2.5">
            <vue-collapsible-panel v-for="faqs, index of faq" :key="faqs.id" :expanded="!index">
                <template #title>
                    <p>{{ faqs.question }}</p>
                </template>
                <template #content>
                    {{ faqs.answer }}
                </template>
            </vue-collapsible-panel>
        </vue-collapsible-panel-group>
    </div>
</template>

<script>

import axios from 'axios';
export default {

    data() {
        return {
            faq: [],
        }
    },
    methods: {
        async getVideoss() {
            let res = await axios.get(`https://api.kozimhon.uz/api/faq`)
            if (res.status == 200) {
                this.faq = [...res.data]
            }
        }
    },
    mounted() {
        this.getVideoss()
    }
};

</script>

<style lang="css">
.sec_seven .seven_title {
    font-size: 36px;
    font-weight: 500;
    line-height: 48px;
    letter-spacing: -0.04em;
    text-align: left;
    margin-top: 180px;
    margin-bottom: 60px;
    color: rgba(255, 255, 255, 1);
}

.vcp__header {
    position: relative;
}

.vcpg[data-v-63943e43] .vcp__header {
    background-color: transparent;
    height: 88px;
    border: 1px solid rgba(21, 210, 232, 0.5);
    border-radius: 22px;
    gap: 10px;
    transition: 0.3s cubic-bezier(.5, .25, 0, 1);
}

.vcp--expanded .vcp__header {
    border-radius: 22px 22px 0px 0px !important;
}

.vcpg[data-v-63943e43] .vcp__header-title {
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: -0.02em;
    text-align: left;
    padding: 20px 40px;
    color: rgba(255, 255, 255, 1);
}

.vcpg[data-v-63943e43] .vcp__body {
    border: 1px solid rgba(21, 210, 232, 0.5);
    border-radius: 0px 0px 22px 22px !important;
    color: white;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    padding-left: 20px;
}

.vcpg[data-v-63943e43] .vcp__body li {
    margin-bottom: 18px;
    list-style: disc;
}

.vcp__header[data-v-64321428] {
    display: flex;
    padding: 12px;
    pointer-events: none
}

.vcp--expandable .vcp__header[data-v-64321428] {
    pointer-events: auto;
    cursor: pointer
}

.vcp__header-title[data-v-64321428] {
    display: flex;
    align-items: center;
    flex: 1
}

.vcp__header-icon[data-v-64321428] {
    display: flex;
    align-items: center;
    color: white;
    transition: transform .3s cubic-bezier(.5, .25, 0, 1)
}

.vcp--expanded .vcp__header-icon[data-v-64321428] {
    transform-origin: center;
    transform: rotate(180deg)
}

.vcp__header-icon>span[data-v-64321428] {
    display: flex;
    height: 24px;
    width: 24px
}

.vcp__header-icon[data-v-64321428] svg {
    height: 100%;
    width: 100%
}

.vcp__body[data-v-64321428] {
    overflow: hidden;
    transition: all .3s cubic-bezier(.5, .25, 0, 1)
}

.vcp__body-content[data-v-64321428] {
    padding: 12px
}

@media (max-width: 768px) {

    .sec_seven .seven_title {
        font-size: 22px;
        line-height: 22px;
        letter-spacing: -0.04em;
        margin-top: 80px;
        margin-bottom: 30px;
    }

    .vcpg[data-v-63943e43] .vcp__header {
        height: max-content;
    }

    .vcpg[data-v-63943e43] .vcp__header-title {
        font-size: 16px;
        line-height: 15px;
        padding: 12px 10px;
    }

    .vcpg[data-v-63943e43] .vcp__body {
        font-size: 14px;
        line-height: 15px;
        padding-left: 20px;
    }

    .vcpg[data-v-63943e43] .vcp__body li {
        margin-bottom: 12px;
    }
}
</style>
