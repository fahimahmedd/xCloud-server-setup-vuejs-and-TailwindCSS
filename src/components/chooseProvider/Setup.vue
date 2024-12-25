<script setup>
import { ref } from 'vue';
import TypeItem from '../TypeItem.vue';
import BlueprintFront from '../blueprint/BlueprintFront.vue';


const dropdownOpen = ref(false);
const tag = ref("");
const serverName = ref("");
const serverType = ref("live");

const options = ref(["Option 1", "Option 2"]);
const filteredOptions = ref([...options.value]);

const filterOptions = () => {
  if (tag.value === "") {
    filteredOptions.value = [...options.value];
  } else {
    filteredOptions.value = options.value.filter((option) =>
      option.toLowerCase().includes(tag.value.toLowerCase())
    );
  }
};

const selectOption = (option) => {
  tag.value = option;
  dropdownOpen.value = false;
};

const closeDropdown = () => {
  setTimeout(() => (dropdownOpen.value = false), 100);
};

const submitHandler = () => {
  const serverSetup = ref({
    name: serverName.value,
    tag: tag.value,
    type: serverType.value,
  });
  console.log(serverSetup)
};

const bluePrintList = defineModel("bluePrintList")
const defaultSelectedBlueprint = defineModel("defaultSelectedBlueprint")

</script>

<template>
   <div
      class="setup-container bg-white dark:bg-darkBackgroundSecondary p-5 md:p-12 rounded-lg max-w-[970px] w-full shadow-sm"
    >
      <div class="text-center">
        <h2
          class="dark:text-white font-light text-lg md:text-4xl flex items-center justify-center gap-2 md:gap-5"
        >
          Set Up Your Server With
          <img src="/public/images/logo/logo-light.png" alt="" class="h-5 md:h-10" />
        </h2>
        <p class="text-sm md:text-md text-[#919DB9] font-light py-2">
          Fill in the details below to get your server set up with xCloud
        </p>
      </div>
      <form>
        <div class="server-details mt-10">
          <h5 class="text-gray-800	 dark:text-white text-md font-medium">Server Details</h5>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-8 mt-2">
            <div>
              <label class="text-sm text-gray-700	 dark:text-darkText" for="title"
                >Server Name</label
              >
              <div class="relative group mt-2">
                <input
                  id="title"
                  placeholder="Example Site"
                  v-model="serverName"
                  class="w-full h-[52px] bg-transparent border rounded-md px-4 text-sm text-black dark:text-white border-lightBorder dark:border-darkBorder outline-none placeholder-gray-400 placeholder:text-sm"
                  type="text"
                />
              </div>
            </div>
            <div>
              <label class="font-light text-sm text-gray-700	 dark:text-darkText" for="title"
                >Add Tag (Optional)</label
              >
              <div class="relative w-full mx-auto mt-2">
                <input
                  type="text"
                  id="type-dropdown"
                  placeholder="Search or select..."
                  class="w-full h-[52px] bg-transparent border rounded-md px-4 text-sm text-black dark:text-white border-lightBorder dark:border-darkBorder outline-none placeholder-gray-400 placeholder:text-sm"
                  @input="filterOptions"
                  @focus="dropdownOpen = true"
                  @blur="closeDropdown"
                  v-model="tag"
                />
                <svg
                  class="absolute right-2 top-1/2 -translate-y-1/2 size-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                    clip-rule="evenodd"
                  />
                </svg>

                <!-- Dropdown menu -->
                <ul
                  v-if="dropdownOpen"
                  class="absolute z-10 w-full  bg-white  dark:bg-[#4e5e7c] dark:text-white rounded-md shadow-xl mt-1 max-h-40 overflow-auto text-sm"
                >
                  <li
                    v-for="(option, index) in filteredOptions"
                    :key="index"
                    class="px-4 py-2 text-xs cursor-pointer hover:bg-blue-500 hover:text-white"
                    @mousedown="selectOption(option)"
                  >
                    {{ option }}
                  </li>
                </ul>
              </div>
            </div>
          </div> 

          <TypeItem v-model:type="serverType" />
          <BlueprintFront v-model:bluePrintList="bluePrintList" v-model:defaultSelectedBlueprint="defaultSelectedBlueprint" />

          <div class="advance-options flex items-center mt-5">
            <button
              type="button"
              class="flex gap-1 items-center font-light text-gray-800 dark:text-white bg-lightBackgroundSecondary dark:bg-[#2A325C] rounded-md text-sm px-4 py-2.5"
            >
              More Advanced Settings
              <ion-icon name="chevron-down" class="text-lg"></ion-icon>
            </button>
          </div>
          <button data-modal-show="all-blueprint-modal" type="button" class="text-white mt-4 hidden" @click="submitHandler">
            Submit
          </button>
          
        </div>
      </form>
    </div>
</template>

<style lang="scss" scoped>
  
</style>