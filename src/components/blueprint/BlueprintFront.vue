<script setup>
import { ref } from "vue";
import BlueprintItems from "./BlueprintItems.vue";
import CommonButton from "../common/CommonButton.vue";

const blueprintEnable = ref(false);
const bluePrintList = defineModel("bluePrintList")
const defaultSelectedBlueprint = defineModel("defaultSelectedBlueprint")

</script>

<template>
  <div class="blueprint-container p-5 bg-[#147aff1a] dark:bg-darkBackground mt-8 rounded-md">
    <div class="flex justify-between">
      <h4 class="text-xl text-black dark:text-white font-light">Blueprints</h4>
      <!-- Toggle Switch -->
      <label class="inline-flex items-center cursor-pointer">
        <input type="checkbox" v-model="blueprintEnable" value="" class="sr-only peer" />
        <div
          class="relative w-11 h-6 peer-focus:outline-none rounded-full peer bg-[#cfcfcf] dark:bg-white peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white peer-checked:after:bg-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-gray-400 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-400 dark:peer-checked:bg-green-600"
        ></div>
      </label>
    </div>
    <p class="text-sm text-lightText dark:text-darkText mt-2">
      Add the following record to the DNS for your domain to get free
    </p>
    <transition name="fade">
      <div :class=" blueprintEnable ? 'block' : 'hidden' ">
        <div class="blueprint-items grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          <div v-for="(item , index) in bluePrintList.slice(0,3)" :key="index">
            <BlueprintItems :item="item" :index="index + 1" v-model:defaultSelectedBlueprint="defaultSelectedBlueprint" />
          </div>
        </div>
               <div class="blueprint-footer flex justify-end mt-4">
          <button
              data-modal-target="all-blueprint-modal"
              data-modal-toggle="all-blueprint-modal"
              type="button"
              class="flex gap-1 items-center text-darkPrimary text-sm px-3 py-2.5"
            >
              View All
              <ion-icon name="arrow-forward" class="text-lg"></ion-icon>
            </button>
          <CommonButton  data-modal-show="create-blueprint-modal">
            <template #icon>
              <ion-icon name="add" class="text-lg"></ion-icon>
            </template>
            New Blueprint
          </CommonButton>
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped></style>
