<template>
  <div class="w-[100%] h-[400px] 
   max-lg:h-[542px] sectionTwo mt-[160px] 
   max-md:mt-[220px] px-2
   max-sm:h-[550px]">
    <div class="eight_content flex relative items-center text-center 
       justify-start max-xl:pl-0 bg-bgcolor-blue 
       bg-opacity-10 backdrop-blur-[10px] w-[100%] 
       h-[100%] z-10 border-[1.5px] max-md:border-[0.81px] border-bgcolor-blue
        border-opacity-50 rounded-[22px] max-md:rounded-[47.58px] 
        border-solid mt-[200px] max-md:mt-[100px] ">
      <div class="background-content eight_content
        z-10 w-[50%] h-[400px] max-lg:w-[96%] p-[40px] max-md:p-[20px] max-lg:h-auto
        max-lg:absolute max-lg:bottom-0 max-lg:left-[2%]">
        <h2 class="text-3xl text-white mb max-md:text-xl mb-[40px] max-md:mb-[20px]">
          Курсимизда таълим олиш учун рўйхатдан ўтинг
        </h2>
        <el-form :model="ruleForm" :rules="rules" :size="formSize" ref="ruleFormRef"
          class="demo-ruleForm w-[400px] max-md:w-[100%]">
          <el-form-item prop="name">
            <el-input v-model="ruleForm.name" placeholder="Исмингиз (фамилия ихтиёрий*)" class="h-[48px] " />
          </el-form-item>
          <el-form-item prop="phoneNumber">
            <el-input v-model="ruleForm.phoneNumber" placeholder="Телефон рақамингиз" class="h-[48px]" />
          </el-form-item>
        </el-form>
        <button class="border-[1px] border-solid max-md:mt-[30px] text-lg
           font-medium border-bgcolor-blue border-opacity-50 bg-btn-blue
            text-white hover:text-btn-blue hover:bg-white w-[400px] 
            max-md:w-[100%] 
             h-[48px] flex items-center justify-center rounded-[7px] cursor-pointer">
          Рўйҳатдан ўтиш
        </button>
      </div>
      <img src="../assets/imgs/kozim aka.webp" alt=""
        class="absolute top-[-125px] right-0 h-[523px] max-lg:w-[100%] max-lg:h-auto max-sm:top-[-150px] eight_mobile" />
      <img src="../assets/imgs/kozim aka (1).webp" alt=""
        class="absolute top-[-125px] right-0 h-[523px] max-lg:w-[100%] max-lg:h-auto max-sm:top-[-150px] eight_desktop" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";

interface RuleForm {
  name: string;
  phoneNumber: string;
}

const formSize = ref("");
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive<RuleForm>({
  name: "",
  phoneNumber: "",
});
const rules = reactive<FormRules<RuleForm>>({
  name: [
    { required: true, message: "Iltimos ismingizni kiriting", trigger: "blur" }
  ],
  phoneNumber: [
    { required: true, message: "Iltimos raqamingizni kiriting", trigger: "blur" },
  ],
});
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid: boolean, fields: object) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!", fields);
    }
  });
};
</script>

<style>
.el-input__wrapper {
  box-shadow: none !important;
  background:
    linear-gradient(0deg, rgba(21, 210, 232, 0.05), rgba(21, 210, 232, 0.05)) !important;
  border: 1px solid rgba(21, 210, 232, 0.5) !important;
}

.eight_content h2 {
  font-size: 36px;
  font-weight: 500;
  line-height: 48px;
  letter-spacing: -0.04em;
  text-align: left;
}

.el-input__inner,
.el-input__inner::placeholder {
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(16, 166, 185, 1) !important;
  box-shadow: none !important;
}

.eight_mobile {
  display: none;
}

@media (max-width: 1024px) {
  .background-content {
    border-radius: 22px;
    backdrop-filter: blur(22px);
    background: rgba(0, 62, 69, 0.2);

  }

  .eight_mobile {
    display: block;
  }

  .eight_desktop {
    display: none;
  }

  .eight_content {
    height: max-content;
  }

  .eight_content h2 {
    font-size: 22px;
    line-height: 22px;
    text-align: center;
  }

}
</style>
