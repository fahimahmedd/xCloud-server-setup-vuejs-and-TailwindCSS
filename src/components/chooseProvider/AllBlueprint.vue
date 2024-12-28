<script setup>
import CommonButton from "../common/CommonButton.vue";
import BlueprintItems from "../blueprint/BlueprintItems.vue";

const bluePrintList = defineModel("bluePrintList");
const defaultSelectedBlueprint = bluePrintList.value[0].id
</script>

<template>
  <div class="flex items-center justify-end">
    <CommonButton
      data-modal-target="create-blueprint-modal"
      data-modal-show="create-blueprint-modal"
    >
      <template #icon>
        <ion-icon name="add" class="text-lg"></ion-icon>
      </template>
      New Blueprint
    </CommonButton>
  </div>
  <div
    class="blueprint-items grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8"
  >
    <div v-for="(item, index) in bluePrintList" :key="index">
      <BlueprintItems
        :item="item"
        :index="index + 1"
        v-model:defaultSelectedBlueprint="defaultSelectedBlueprint"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
