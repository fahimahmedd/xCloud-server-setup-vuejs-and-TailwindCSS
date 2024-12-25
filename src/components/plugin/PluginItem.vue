<script setup>
import { defineModel, defineEmits } from "vue";

const pluginList = defineModel('pluginList');
const singleBlueprint = defineModel('singleBlueprint');
const selectedHint = defineModel('selectedHint');

const updateHint = (name, hint, isChecked) => {
  const hintObject = { name, hint };
  if (isChecked) {
    if (!selectedHint.value.some(item => item.hint === hint)) {
      selectedHint.value.push(hintObject);
    }
  } else {
    selectedHint.value = selectedHint.value.filter(item => item.hint !== hint);
  }
};

</script>

<template>
  <ul class="grid w-full gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
    <li class="relative" v-for="(item, index) in pluginList" :key="index">
      <input
        type="checkbox"
        :id="`plugin-${item.id}`"
        :value="item.hint"
        v-model="singleBlueprint.plugin"
        @change="updateHint(item.name , item.hint , $event.target.checked)"
        class="peer absolute right-3 top-3 h-5 w-5 rounded-full bg-white dark:bg-[#232a4d] border border-lightBorder dark:border-darkBorder focus:bg-lightPrimary dark:focus:bg-transparent focus:ring-0 focus:outline-none checked:bg-lightPrimary dark:checked:bg-transparent"
      />
      <label
        :for="`plugin-${item.id}`"
        class="inline-flex items-center justify-between w-full text-darkText bg-lightBackgroundSecondary dark:bg-darkBackground border border-lightBorder dark:border-darkBorder rounded-md cursor-pointer peer-checked:border-darkPrimary"
      >
        <div class="block">
          <div class="flex p-3">
            <div>
              <div
                class="w-12 h-12 flex rounded-md justify-center items-center bg-[#4a4d581f] dark:bg-darkBackgroundSecondary"
              >
                <img :src="item.img" alt="" class="h-7" />
              </div>
            </div>
            <div class="pl-2">
              <h5 class="text-gray-900 dark:text-white font-medium dark:font-normal text-sm">{{ item.name }}</h5>
              <p class="text-xs py-2">{{ item.detail }}</p>
              <p class="text-xs text-gray-800 dark:text-[#cbcbcb] font-light">
                <span class="text-darkText">By:</span> {{ item.auth }}
              </p>
            </div>
          </div>
          <div class="border-t border-lightBorder dark:border-[#2b36707a] p-3">
            <div class="review-icon flex items-center gap-1">
              <ion-icon
                v-for="n in item.star"
                :key="'filled-' + n"
                name="star"
                class="text-yellow-400 text-sm"
              ></ion-icon>
              <ion-icon
                v-for="n in 5 - item.star"
                :key="'outline-' + n"
                name="star-outline"
                class="text-yellow-400 text-sm"
              ></ion-icon>
              <span class="text-xs font-light">({{ item.review }})</span>
            </div>
            <p class="text-xs mt-2">{{ item.install }}+ Active Installations</p>
          </div>
        </div>
      </label>
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
