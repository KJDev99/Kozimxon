<template>
  <div id="teacher" class="w-[95%] h-[720px] max-md:h-[389px] relative sectionTwo mt-[70px] px-2 mx-auto">
    <!-- flex items-center justify-center  pl-[450px] max-lg:pl-0  max-md:rounded-b-none max-md:border-b-0 -->
    <div class="flex items-center justify-center 
      pl-[450px] max-xl:pl-0 bg-bgcolor-blue max-md:rounded-b-none max-md:border-b-0 
      bg-opacity-10 absolute top-0 left-0 backdrop-blur-[10px] w-[100%] h-[100%] z-10 
      border-[1.5px] max-md:border-[0.81px] border-bgcolor-blue border-opacity-50 rounded-[88px] 
      max-md:rounded-[47.58px] border-solid mt-[200px] max-md:mt-[100px] ">
      <div class="content w-[470px] h-[553px] max-md:h-[500px] max-md:bottom-[-440px] 
        max-md:z-[60] px-[40px] py-[20px] z-40 backdrop-blur-[15px] absolute bg-bgcolor-blue bg-opacity-[7%]
         border-[1px] rounded-[22px] border-solid border-bgcolor-blue border-opacity-50 max-md:px-[20px]">
        <div class="">
          <h3
            class="text-4xl max-md:text-2xl text-white leading-[48px] max-md:leading-[22px]  mb-[20px] max-xl:text-3xl max-xl:leading-[36px]">
            Курс ментори ким?
          </h3>
          <h5
            class="text-2xl text-white leading-[28px] font-medium max-md:text-base max-md:leading-[20px] mb-[12px] max-xl:text-xl max-xl:leading-[20px]">
            Козимхон Тўраев:
          </h5>
          <ul class="">
            <li>
              <img src="../assets/imgs/Frame.webp" alt="" class="w-[20px] h-[20px]" />
              <p class="text-lg leading-[23px] text-white font-normal max-md:text-sm max-md:leading-[18px]">
                АҚШ, Европа ва Япония таълими тарбияланувчиси;
              </p>
            </li>

            <li>
              <img src="../assets/imgs/Frame.webp" alt="" class="w-[20px] h-[20px]" />
              <p class="text-lg leading-[23px] text-white font-normal max-md:text-sm max-md:leading-[18px]">
                Procter & Gamble компаниясидаги HR Manager лавозими;
              </p>
            </li>

            <li>
              <img src="../assets/imgs/Frame.webp" alt="" class="w-[20px] h-[20px]" />
              <p class="text-lg leading-[23px] text-white font-normal max-md:text-sm max-md:leading-[18px]">
                Саудия Арабистонидаги Ислом Тараққиёт Банки ходими;
              </p>
            </li>

            <li>
              <img src="../assets/imgs/Frame.webp" alt="" class="w-[20px] h-[20px]" />
              <p class="text-lg leading-[23px] text-white font-normal max-md:text-sm max-md:leading-[18px]">
                Қадриятлар академияси асосчиси;
              </p>
            </li>

            <li>
              <img src="../assets/imgs/Frame.webp" alt="" class="w-[20px] h-[20px]" />
              <p class="text-lg leading-[23px] text-white font-normal max-md:text-sm max-md:leading-[18px]">
                Корпоратив бошқарув, HR бўйича профессионал тренинг ваконсалтинг
                хизматлари;
              </p>
            </li>

            <li>
              <img src="../assets/imgs/Frame.webp" alt="" class="w-[20px] h-[20px]" />
              <p class="text-lg leading-[23px] text-white font-normal max-md:text-sm max-md:leading-[18px]">
                Alliance Business Club асосчиларидан бири.
              </p>
            </li>
          </ul>
          <button
            class="border-[1px] border-solid max-md:mt-[30px] text-lg font-medium border-bgcolor-blue border-opacity-50 bg-btn-blue text-white hover:text-btn-blue hover:bg-white w-[240px] max-md:w-[100%] h-[48px] flex items-center justify-center rounded-[7px] cursor-pointer">
            <a href="#registration">Курсга ёзилиш</a>
          </button>
        </div>
      </div>
      <img src="../assets/imgs/akani suratlari.webp" alt=""
        class="absolute top-[-90px] left-0 z-30 w-[627px] max-md:w-[340px]" />
      <img src="../assets/imgs/check 3d.webp" alt=""
        class="absolute bottom-[-100px] max-md:bottom-[-20px] md:left-[-50px] max-md:right-[-30px] md:z-50 max-md:z-[100] w-[244px] max-md:w-[120px] max-sm:bottom-[0px] max-sm:right-[-20px]" />
      <img src="../assets/imgs/rocket.webp" alt=""
        class="absolute bottom-[-150px] max-md:bottom-[-10px] right-[-50px] max-md:left-[-30px] z-30 w-[380px] max-md:w-[150px]" />
    </div>
    <img src="../assets/imgs/portfoio.webp" alt=""
      class="absolute top-[200px] z-2 max-md:top-[100px] right-[-70px] max-md:right-[-30px] w-[340px] max-md:w-[150px]" />
  </div>
</template>

<script setup></script>

<style lang="css">
.sectionTwo ul li {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}

@media (max-width: 768px) {
  .content {
    width: 100% !important;
    margin: auto !important;
  }
}
</style>
