<script setup>
const selectedHint = defineModel("selectedHint");

const removeHint = (index) => {
  selectedHint.value.splice(index, 1);
};
const colors = [
  "bg-teal-300",
  "bg-rose-300",
  "bg-green-300",
  "bg-blue-300",
  "bg-cyan-300",
  "bg-sky-300",
];
</script>

<template>
  <ul class="flex gap-2 items-center mb-3 flex-wrap">
    <li
      v-for="(item, index) in selectedHint"
      :key="index"
      :class="[
        'flex items-center relative group hover:-top-0 md:hover:-top-2 h-10 w-10 cursor-pointer justify-center text-xl font-medium text-[#41668a] rounded-md',
        colors[index % colors.length],
      ]"
      data-tooltip-target="tooltip-default"
    >
      <div
        class="absolute opacity-0 min-w-16 group-hover:opacity-100 text-center -top-0 group-hover:-top-8 z-10 font-light inline-block px-2 py-1 text-xs dark:text-white text-[#3b3a3a] transition-opacity duration-300 bg-[#c9d9eb] rounded-lg shadow-sm dark:bg-[#37406d]"
      >
        {{ item.name }}
        <span
          class="absolute w-2.5 h-2.5 bg-[#c9d9eb] dark:bg-[#37406d] rotate-45 -bottom-1 left-1/2 -translate-x-1/2"
          aria-hidden="true"
        ></span>
      </div>
      {{ item.hint }}
      <div
        @click="removeHint(index)"
        class="flex items-center justify-center w-4 h-4 border bg-red-600 md:bg-green-400 group-hover:bg-red-600 border-gray-200 rounded-full absolute -right-1 -top-1"
      >
        <span class="hidden md:block group-hover:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-3 h-3 text-white fill-current"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </span>

        <span class="block md:hidden group-hover:flex">
          <ion-icon name="close-outline" class="text-white text-sm"></ion-icon>
        </span>
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
