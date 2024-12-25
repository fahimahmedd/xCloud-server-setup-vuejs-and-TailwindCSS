<script setup>
const model = defineModel("type", { default: "live" });

const serverTypeList = [
  {
    title: "Go Live",
    img: "/images/live.png",
    value: "live",
    text: "Get your site up and running for the world to see by simply pointing your domain to the server.",
  },
  {
    title: "Staging Environment",
    img: "/images/staging.png",
    value: "staging",
    text: "Create your site in a staging environment and refine it until it’s ready for launch.",
  },
];

const selectType = (value) => {
  model.value = value;
};
</script>

<template>
  <h5
    class="text-gray-800 dark:text-white text-md dark:font-light font-medium mt-8"
  >
    Server Type
  </h5>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-8 mt-2">
    <div
      v-for="(item, index) in serverTypeList"
      :key="index"
      class="flex items-center mt-1"
    >
      <input
        type="radio"
        :id="'serverType' + index"
        name="serverType"
        :value="item.value"
        class="hidden peer"
        :checked="item.value === model"
        @change="selectType(item.value)"
      />
      <label
        :for="'serverType' + index"
        class="w-full flex items-center border hover:bg-lightBackgroundSecondary dark:hover:bg-[#56678327] border-lightBorder dark:border-[#313A6C] p-3 cursor-pointer rounded-md peer-checked:border-2 peer-checked:border-darkPrimary"
      >
        <div class="icon shrink-0">
          <img :src="item.img" alt="" class="h-12" />
        </div>
        <div class="pl-5">
          <h4 class="text-gray-800 dark:text-white">{{ item.title }}</h4>
          <p
            class="text-sm leading-5 mt-1 line-clamp-2 text-darkText font-light"
          >
            {{ item.text }}
          </p>
        </div>
      </label>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
