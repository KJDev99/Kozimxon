<template>
    <header class="header">
        <div class="container">
            <div class="nav_content flex justify-between w-full pt-6 items-center">
                <div class="logo">
                    <img src="@/assets/imgs/logo (1).png" alt="">
                </div>
                <ul class="nav_list flex">
                    <li class="nav_list"><a href="#">Устоз ҳақида <img src="../assets/imgs/Line 1.png" alt=""> </a></li>
                    <li class="nav_list"><a href="#">Курс дастури <img src="../assets/imgs/Line 1.png" alt=""> </a></li>
                    <li class="nav_list"><a href="#">Тарифлар <img src="../assets/imgs/Line 1.png" alt=""> </a></li>
                </ul>
            </div>
            <div class="header_content flex">
                <div class="header_content-left">
                    <h1>Компаниянгизни юқори поғонага олиб чиқиш даври келди.</h1>
                    <p>"Корпоратив бошқарув ва HR" курси</p>
                    <button>Иштирок этиш</button>
                </div>
                <div class="header_content-right">
                    <img src="../assets/imgs/pic (1).png" alt="">

                </div>
            </div>
            <img src="../assets/imgs/Group 9 (1).png" alt="" class="head_pos-one">
            <img src="../assets/imgs/Ustki nurlar - shu holatda saqlab ishlatish mumkin.svg" class="header-ustki-nur"
                alt="">
        </div>
    </header>
</template>

<script setup>

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

@media (max-width: 768px) {

    .head_pos-one,
    .header-ustki-nur {
        display: none;
    }

    .header {
        height: 746px;
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

    .nav_list {
        display: none;
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
}
</style>