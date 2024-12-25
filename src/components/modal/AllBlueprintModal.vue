<script setup>
import AllBlueprint from "../chooseProvider/AllBlueprint.vue";

const emit = defineEmits(["onCreateBlueprint"]);
const bluePrintList = defineModel("bluePrintList");
</script>

<template>
  <div
    id="all-blueprint-modal"
    tabindex="-1"
    aria-hidden="true"
    class="hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative p-4 w-full max-w-[960px] max-h-full">
      <div
        class="relative bg-white border border-[#313a6c66] rounded-lg shadow dark:bg-darkBackgroundSecondary overflow-hidden"
      >
        <form action="#">
          <!-- Modal header -->
          <div class="flex items-center justify-between">
            <h2
              class="text-2xl font-medium px-5 py-5 text-black dark:text-white"
            >
              All Blueprint
            </h2>
            <button
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-4 right-4 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="all-blueprint-modal"
            >
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <!-- Modal body -->
          <div
            class="modal-body px-5 pb-5 overflow-y-auto"
            style="max-height: calc(100vh - 160px)"
          >
            <AllBlueprint
              v-model:bluePrintList="bluePrintList"
            />
          </div>
          <!-- Modal footer -->
          <div
            class="flex items-center justify-end bg-lightBackgroundSecondary dark:bg-[#232a4d] px-5 py-3"
          >
            <button
              data-modal-hide="all-blueprint-modal"
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:right-0 focus:shadow-none focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-body::-webkit-scrollbar {
  display: none;
}
.modal-body {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
