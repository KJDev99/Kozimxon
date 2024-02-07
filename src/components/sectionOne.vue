<template>
  <div class="w-[100%] main px-2">
    <h2 class="w-[50%] max-xl:w-[100%] text-white text-4xl max-md:text-2xl pt-[100px] max-md:pt-[60px]">
      Курсда таълим олишингиз шарт! <span class="md:block">агар ...</span>
    </h2>
    <div
      class="pt-[140px] max-md:pt-[60px] grid lg:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-[40px] max-md:gap-[60px] main-card">
      <div class="relative h-[175px] flex items-center pl-[100px] pr-[10px] text-white text-lg font-normal">
        <img src="../assets/imgs/main-card.png" alt="icon"
          class="absolute md:left-[-14px] md:top-[-82px] w-[137px] h-[137px] max-md:w-[109px] max-md:top-[-36px] max-md:left-0" />
        <p>
          Компаниянгизда HR тизимини жорий этган ҳолда 101% ли натижага эришиш;
        </p>
      </div>

      <div class="relative h-[175px]  flex items-center  pl-[100px] pr-[10px] text-white text-lg font-normal">
        <img src="../assets/imgs/main-card2.png" alt="icon"
          class="absolute md:left-[-14px] md:top-[-82px] w-[137px] h-[137px] max-md:w-[109px] max-md:top-[-36px] max-md:left-0" />
        <p>
          Компаниянгизда HR тизимини жорий этган ҳолда 101% ли натижага эришиш;
        </p>
      </div>

      <div
        class="max-lg:mt-[80px] max-md:mt-0 relative h-[175px] flex items-center  pl-[100px] pr-[10px] text-white text-lg font-normal">
        <img src="../assets/imgs/main-card3.png" alt="icon"
          class="absolute md:left-[-14px] md:top-[-82px] w-[137px] h-[137px] max-md:w-[109px] max-md:top-[-36px] max-md:left-0" />
        <p>
          Компаниянгизда HR тизимини жорий этган ҳолда 101% ли натижага эришиш;
        </p>
      </div>
    </div>
    <button
      class="mt-[40px] max-xl:mt-[0px] bg-btn-blue w-[240px] max-md:w-[100%] h-[48px] flex items-center justify-center rounded-[7px] cursor-pointer text-lg font-medium text-white max-md:mt-[30px]">
      Жойни банд қилиш
    </button>
  </div>
</template>

<script setup></script>

<style lang="css">
.main {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.main-card div {
  border: 1px solid rgba(21, 210, 232, 0.5);
  border-radius: 22px;
  backdrop-filter: blur(17px);
  background: rgba(21, 210, 232, 0.05);
}

img {
  object-fit: contains;
}
</style>
