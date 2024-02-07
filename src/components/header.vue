<template>
    <header class="header">
        <div class="container">
            <div :class="`nav_content flex justify-between w-full pt-6 items-center ${activeClass && 'active'}`">
                <div class="logo">
                    <img src="@/assets/imgs/logo (1).png" alt="">
                </div>
                <ul :class="`nav_list flex ${activeClass && 'nav_list_open'}`">
                    <li class="nav_link"><a href="#">Устоз ҳақида <img src="../assets/imgs/Line 1.png" alt=""> </a></li>
                    <li class="nav_link"><a href="#">Курс дастури <img src="../assets/imgs/Line 1.png" alt=""> </a></li>
                    <li class="nav_link"><a href="#">Тарифлар <img src="../assets/imgs/Line 1.png" alt=""> </a></li>
                </ul>
                <img @click="openMenu()" src="../assets/imgs/openMenu.png" :class="`openMenu ${activeClass && 'hidden'}`">
                <img @click="closeMenu()" src="../assets/imgs/closeMenu.png" alt=""
                    :class="`closeMenu ${activeClass && 'block'}`">
            </div>
            <div class="header_content flex ">
                <div :class="`header_content-left ${activeClass && 'header_content-left_act'}`">
                    <h1>Компаниянгизни юқори поғонага олиб чиқиш даври келди.</h1>
                    <p>"Корпоратив бошқарув ва HR" курси</p>
                    <button>Иштирок этиш</button>
                </div>
                <div class="header_content-right">
                    <img src="../assets/imgs/pic (1).png" alt="">
                </div>
            </div>
            <img src="../assets/imgs/Group 9 (1).png" alt="" class="head_pos-one">
            <img src="../assets/imgs/Ustki nurlar - shu holatda saqlab ishlatish mumkin.svg" class="header-ustki-nur">
        </div>
    </header>
</template>

<script setup>
import { ref } from 'vue';

const activeClass = ref(false)

function openMenu() {
    activeClass.value = true
    console.log(activeClass.value);
}
function closeMenu() {
    activeClass.value = false
    console.log(activeClass.value);
}

</script>

<style>
.header {
    background: url('../assets/imgs/Header (1).png') center/cover no-repeat;
    height: 900px;
    position: relative;
    overflow: hidden;
}

.header_content-left {
    width: 620px;
    z-index: 2;
}

.header_content-left h1 {
    margin-top: 106px;
    font-size: 42px;
    font-weight: 500;
    line-height: 48px;
    letter-spacing: -0.04em;
    text-align: left;
    margin-bottom: 40px;
    color: #ffffff;
}

.header_content-left p {
    font-size: 28px;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 40px;
    color: #ffffff;
}

.header_content-left button {
    position: static;
    width: 199px;
    height: 48px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 13px 33px 13px 33px;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 40px 0px;
    box-sizing: border-box;
    border: 1.5px solid rgb(21, 210, 232);
    border-radius: 7px;
    backdrop-filter: blur(22px);
    background: rgb(16, 166, 185);
    color: rgb(255, 255, 255);
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0%;
    text-align: left;
}

.header_content-right img {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 884px;
    height: 780px;
}

.head_pos-one {
    position: absolute;
    width: 498.38px;
    left: 30px;
    right: -259px;
    top: 626.99px;
}

.header-ustki-nur {
    position: absolute;
    bottom: 0;
    right: 0;
}

.nav_list a {
    display: flex !important;
    display: flex;
    align-items: center;
    transition: 0.3s;
    width: 173px;
    height: 36px;
    color: rgba(255, 255, 255, 1);
    justify-content: center;
    border: none;
}

.nav_list a img {
    margin-left: 7px;
    opacity: 0;
    transition: 0.3s;
}

.nav_list a:hover {
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: #15D2E8;
    padding: 7px, 11px, 7px, 11px;
    border-radius: 7px;
    gap: 7px;
    background:
        linear-gradient(0deg, rgba(21, 210, 232, 0.2), rgba(21, 210, 232, 0.2));
    border: 1.5px solid #15D2E8
}

.nav_list a:hover>img {
    opacity: 1;
}

.closeMenu,
.openMenu {
    display: none;
}

@media (max-width: 768px) {

    .head_pos-one,
    .header-ustki-nur {
        display: none;
    }

    .header {
        height: 746px;
        background: url('../assets/imgs/Header (3).png'), #000;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        overflow: visible;
    }

    .header_content-left {
        width: 100%;
        border-radius: 22px;
        border: 1px;
        gap: 20px;
        background:
            linear-gradient(0deg, rgba(21, 210, 232, 0.2), rgba(21, 210, 232, 0.2));
        border: 1px solid #15D2E880;
        padding-right: 30px;
        padding-left: 30px;

    }

    .header_content-left h1 {
        margin: 40px 0px 20px;
        font-size: 24px;
        line-height: 22px;
    }

    .header_content-left p {
        font-size: 16px;
        margin-bottom: 20px;
        line-height: 22.4px;
    }

    .header_content-left button {
        background:
            linear-gradient(0deg, #15D2E8, #15D2E8);
        border: 1.5px solid #15D2E8;
        font-size: 16px;
        width: 100%;
        margin-top: 20px;
    }

    .header_content-right img {
        width: 552.74px;
        height: 487.71px;
        object-fit: contain;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
    }

    .header_content-left {
        margin-top: 389px;
    }

    .nav_content {
        padding-left: 26px;
        padding-right: 26px;
    }

    .openMenu {
        display: block;
        cursor: pointer;
    }

    .closeMenu {
        margin-top: 15px;
        margin-right: 10px;
    }

    .nav_list {
        position: absolute;
        display: flex;
        flex-direction: column;
        top: -110px;
        right: 40px;
        align-items: flex-end;
        z-index: 9 !important;
        transition: 0.3s;
    }

    .nav_list_open {
        top: 90px;
    }

    .nav_list a {
        width: max-content;
        height: 36px;
        color: rgba(255, 255, 255, 1);
        justify-content: end;

    }

    .nav_list a img {
        display: none;
    }

    .nav_list a:hover {
        font-size: 16px;
        font-weight: 400;
        color: #ffffff;
        padding: 0;
        background: transparent;
        border: none;
        cursor: pointer;
    }

    .active {
        width: 100%;
        height: 746px;
        z-index: 11;
        background-color: rgba(2, 45, 45, 0.4);
        backdrop-filter: blur(5px);
        position: absolute;
        left: 0;
        top: 0;
        align-items: flex-start !important;
        transition: 0.3s;
    }

    .header_content-left_act {
        margin-top: 485px;
    }

}
</style>