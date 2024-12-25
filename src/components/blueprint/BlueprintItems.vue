<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});
const defaultSelectedBlueprint = defineModel("defaultSelectedBlueprint");

const colors = ["bg-teal-300", "bg-green-300", "bg-blue-300"];
</script>

<template>
  <div class="flex relative">
    <input
      type="radio"
      :id="item.id + index"
      name="plugin"
      :value="item.id"
      class="hidden peer"
      :checked="item.id === defaultSelectedBlueprint"
    />
    <label
      :for="item.id + index"
      class="w-full border border-lightBorder dark:border-[#313A6C] bg-white dark:bg-darkBackgroundSecondary rounded-md px-4 py-3 relative cursor-pointer peer-checked:border-darkPrimary transition-all group"
    >
      <h5
        class="text-gray-800 dark:text-white font-medium dark:font-light text-sm"
      >
        {{ item.name }}
        <span
          v-if="item.id === defaultSelectedBlueprint"
          class="text-xs py-1 px-3 ml-1 bg-lightBackgroundSecondary dark:bg-[#313A6C] rounded-md text-gray-700 dark:text-white"
          >default</span
        >
      </h5>
      <div class="plugin-items flex items-center gap-1 flex-wrap mt-3">
        <div
          v-for="(pluginItem, index) in item.pluginList.slice(0, 3)"
          :key="index"
          :class="[
            'h-6 w-6 text-xs text-[#45698a] font-medium flex items-center justify-center rounded-sm',
            colors[index % colors.length],
          ]"
        >
          {{ pluginItem }}
        </div>
        <div
          v-if="item.pluginList.length > 3"
          class="h-6 w-6 text-xs text-black bg-sky-400 flex items-center justify-center rounded-sm"
        >
          4+
        </div>
      </div>

      <!-- Checkmark -->
      <div
        class="flex items-center justify-center w-4 h-4 border border-gray-600 rounded-full peer-checked:group:bg-indigo-600 absolute top-3 right-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="hidden w-3 h-3 text-darkPrimary fill-current peer-checked:group:visible"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </label>
  </div>
</template>

<style lang="scss" scoped></style>
