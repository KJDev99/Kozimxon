<template>
    <div id="tarif" class="sec_five max-md:px-2">
        <h3 class="five_title">Тарифлар</h3>
        <div class="five_content grid lg:grid-cols-4 msx-md:grid-cols-1 gap-x-5">
            <div class="five_item" v-for="tarif of tariff" :key="tarif.id">
                <div class="five_item_title">{{ tarif.name }}</div>
                <div class="five_item_text">{{ tarif.head_text }}</div>
                <div class="five_body">
                    <div :class="`five_item_body ${option.enabled ? 'five_item_act' : 'five_item_noact'}`"
                        v-for="option of tarif.options" :key="option.id">
                        <img class="act_img" src="../assets/imgs/Vector.svg" alt="">
                        <img class="noact_img" src="../assets/imgs/Vector (1).svg" alt="">
                        <p>{{ option.option }}</p>
                    </div>
                </div>
                <button class="five_btn"><a href="#registration">Курсга ёзилиш</a></button>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            tariff: [],
        }
    },
    methods: {
        async getVideoss() {
            let res = await axios.get(`https://api.kozimhon.uz/api/tariffs`)
            if (res.status == 200) {
                this.tariff = [...res.data]
            }
        }
    },
    mounted() {
        this.getVideoss()
    }
};
</script>
<style lang="css">
.sec_five {
    transition: 0.3s !important;
}

.sec_five .five_title {
    font-size: 36px;
    font-weight: 500;
    line-height: 48px;
    letter-spacing: -0.04em;
    text-align: left;
    margin-top: 180px;
    margin-bottom: 60px;
    color: rgba(255, 255, 255, 1);
}

.five_item {
    border: 1px solid rgba(21, 210, 232, 0.5);
    background:
        linear-gradient(0deg, rgba(21, 210, 232, 0.05), rgba(21, 210, 232, 0.05));
    padding: 20px;
    border-radius: 22px;
    border: 1px;
    border: 1px solid rgba(21, 210, 232, 0.5)
}

.five_item_title {
    background: rgba(21, 210, 232, 0.1);
    padding: 14px, 10px, 14px, 10px;
    border-radius: 17px;
    gap: 10px;
    font-size: 24px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.02em;
    text-align: center;
    color: rgba(21, 210, 232, 1);
    height: 45px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.five_item_text {
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.02em;
    text-align: center;
    color: rgba(255, 255, 255, 1);
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;
    width: 100% !important;
}

.five_body {
    height: 430px;
}

.five_item_body {
    display: flex;
    align-items: start;
    margin-bottom: 14px;
}

.five_item_body img {
    margin-right: 5px;
}

.five_item_body p {
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
}

.five_item_act {
    color: white;
}

.five_item_noact {
    color: rgba(255, 255, 255, 0.2);
}

.five_item_noact .noact_img {
    display: block;
}

.five_item_noact .act_img {
    display: none;
}

.five_item_act .noact_img {
    display: none;
}

.five_item_act .act_img {
    display: block;
}

.five_btn {
    width: 100%;
    height: 48px;
    padding: 13px, 33px, 13px, 33px;
    border-radius: 7px;
    border: 1.5px;
    gap: 10px;
    background:
        linear-gradient(0deg, rgba(21, 210, 232, 0.2), rgba(21, 210, 232, 0.2));
    border: 1.5px solid rgba(21, 210, 232, 1);
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: center;
    color: white;
    margin-top: 60px;
}

@media(max-width: 768px) {
    .sec_five .five_title {
        font-size: 22px;
        line-height: 22px;
        letter-spacing: -0.04em;
        margin-top: 80px;
        margin-bottom: 30px;
    }

    .five_body {
        height: max-content;
    }

    .five_item {
        margin-bottom: 20px;
    }

    .five_item_title {
        font-size: 18px;
    }

    .five_item_text {
        font-size: 16px;
        line-height: 24px;
        letter-spacing: -0.02em;
    }

    .five_item_body {
        margin-bottom: 12px;
    }

    .five_item_body p {
        font-size: 14px;
        line-height: 19px;
    }
}
</style>