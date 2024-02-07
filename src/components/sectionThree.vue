<template>
    <div class="sec_three px-2">
        <h3 class="three_title">Курс дастури</h3>
        <vue-collapsible-panel-group accordion
            class="grid items-start lg:grid-cols-2 max-md:grid-cols-1 lg:gap-x-10 lg:gap-y-10 max-md:gap-y-2.5">
            <vue-collapsible-panel :expanded="true">
                <template #title>
                    <div class="acc_num">
                        <p>1</p>
                    </div>
                    <p>1-модул: HR аудит орқали компаниядаги камчиликларни аниқлаш</p>
                </template>
                <template #content>
                    <ul>
                        <li>Ментор кўмаги билан курс бошида компаниянгиз HR тизимини таҳлил қилиш</li>
                        <li>HR тизимисиз компания қанча зарар кўраётганини рақамларда баҳолаш</li>
                        <li>HR бўлимининг асосий фокуси ва қандай муаммоларни бартараф эта олади</li>
                    </ul>
                </template>
            </vue-collapsible-panel>
            <vue-collapsible-panel :expanded="false">
                <template #title>
                    <div class="acc_num">
                        <p>1</p>
                    </div>
                    16-модул Япония тажрибаси асосида сифатли хизмат кўрсатиш тизимини жорий қилиш
                </template>
                <template #content>
                    <ul>
                        <li>Ментор кўмаги билан курс бошида компаниянгиз HR тизимини таҳлил қилиш</li>
                        <li>HR тизимисиз компания қанча зарар кўраётганини рақамларда баҳолаш</li>
                        <li>HR бўлимининг асосий фокуси ва қандай муаммоларни бартараф эта олади</li>
                    </ul>
                </template>
            </vue-collapsible-panel>
            <vue-collapsible-panel :expanded="false">
                <template #title>
                    <div class="acc_num">
                        <p>1</p>
                    </div>
                    16-модул Япония тажрибаси асосида сифатли хизмат кўрсатиш тизимини жорий қилиш
                </template>
                <template #content>
                    <ul>
                        <li>Ментор кўмаги билан курс бошида компаниянгиз HR тизимини таҳлил қилиш</li>
                        <li>HR тизимисиз компания қанча зарар кўраётганини рақамларда баҳолаш</li>
                        <li>HR бўлимининг асосий фокуси ва қандай муаммоларни бартараф эта олади</li>
                    </ul>
                </template>
            </vue-collapsible-panel>
            <vue-collapsible-panel :expanded="false">
                <template #title>
                    <div class="acc_num">
                        <p>1</p>
                    </div>
                    16-модул Япония тажрибаси асосида сифатли хизмат кўрсатиш тизимини жорий қилиш
                </template>
                <template #content>
                    <ul>
                        <li>Ментор кўмаги билан курс бошида компаниянгиз HR тизимини таҳлил қилиш</li>
                        <li>HR тизимисиз компания қанча зарар кўраётганини рақамларда баҳолаш</li>
                        <li>HR бўлимининг асосий фокуси ва қандай муаммоларни бартараф эта олади</li>
                    </ul>
                </template>
            </vue-collapsible-panel>
            <vue-collapsible-panel :expanded="false">
                <template #title>
                    <div class="acc_num">
                        <p>1</p>
                    </div>
                    16-модул Япония тажрибаси асосида сифатли хизмат кўрсатиш тизимини жорий қилиш
                </template>
                <template #content>
                    <ul>
                        <li>Ментор кўмаги билан курс бошида компаниянгиз HR тизимини таҳлил қилиш</li>
                        <li>HR тизимисиз компания қанча зарар кўраётганини рақамларда баҳолаш</li>
                        <li>HR бўлимининг асосий фокуси ва қандай муаммоларни бартараф эта олади</li>
                    </ul>
                </template>
            </vue-collapsible-panel>
            <vue-collapsible-panel :expanded="false">
                <template #title>
                    <div class="acc_num">
                        <p>1</p>
                    </div>
                    16-модул Япония тажрибаси асосида сифатли хизмат кўрсатиш тизимини жорий қилиш
                </template>
                <template #content>
                    <ul>
                        <li>Ментор кўмаги билан курс бошида компаниянгиз HR тизимини таҳлил қилиш</li>
                        <li>HR тизимисиз компания қанча зарар кўраётганини рақамларда баҳолаш</li>
                        <li>HR бўлимининг асосий фокуси ва қандай муаммоларни бартараф эта олади</li>
                    </ul>
                </template>
            </vue-collapsible-panel>
        </vue-collapsible-panel-group>
        <button class="three_button">Жойни банд қилиш</button>
    </div>
</template>

<script setup>

</script>

<style lang="css">
.sec_three .three_title {
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

.acc_num {
    border: 1.5px solid rgba(21, 210, 232, 0.5);
    background: #063741;
    height: 42px;
    width: 42px;
    position: absolute;
    left: -21px;
    top: -21px;
    transform: rotate(-45deg);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: 500;
    line-height: 48px;
    letter-spacing: -0.04em;
    text-align: left;
}

.acc_num p {
    transform: rotate(45deg);
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
    padding-left: 40px;
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

.three_button {
    width: 240px;
    height: 48px;
    padding: 13px, 33px, 13px, 33px;
    border-radius: 7px;
    gap: 10px;
    background: rgba(16, 166, 185, 1);
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    margin-top: 40px;
}

.sec_three {
    margin-top: 320px;
}

@media (max-width: 768px) {
    .sec_three {
        margin-top: 580px;
    }

    .acc_num {
        display: none;
    }

    .sec_three .three_title {
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

    .three_button {
        width: 100%;
        height: 48px;
        font-size: 16px;
        margin-top: 30px;
    }
}
</style>
