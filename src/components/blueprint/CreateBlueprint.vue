<script setup>
import PluginSearch from "../plugin/PluginSearch.vue";
import BlueprintPlugin from "./BlueprintPlugin.vue";

const pluginList = defineModel("pluginList");
const singleBlueprint = defineModel("singleBlueprint");
const nameNotify = defineModel("nameNotify");
const addPluginNotify = defineModel("addPluginNotify");
const selectedHint = defineModel("selectedHint");

const nameNotifyHandle = () => {
  nameNotify.value = !nameNotify.value;
};
const addPluginNotifyHandle = () => {
  addPluginNotify.value = !addPluginNotify.value;
};
</script>

<template>
  <!-- Blueprint Name Notify-->
  <div
    id="blueprint-name"
    :class="{ hidden: !nameNotify, block: nameNotify }"
    class="flex items-center px-4 py-2 mb-4 rounded-lg border border-red-300 dark:border-[#d28d394b] bg-red-50 dark:bg-[#73563823] text-red-500 dark:text-[#A1A7BA]"
    role="alert"
  >
    <svg
      class="flex-shrink-0 w-4 h-4"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
      />
    </svg>
    <span class="sr-only">Info</span>
    <div class="ms-3 tfont-thin text-xs md:text-sm">
      Warning: You must create a name for your Blueprint
    </div>
    <button
      type="button"
      class="ms-auto -mx-1.5 -my-1.5 bg-white text-red-500 rounded-lg focus:ring-2 dark:focus:ring-yellow-400 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-6 w-6 dark:bg-gray-800 dark:text-yellow-300 dark:hover:bg-gray-700"
      @click="nameNotifyHandle"
      aria-label="Close"
    >
      <span class="sr-only">Close</span>
      <svg
        class="w-2.5 h-2.5"
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
    </button>
  </div>
  <div class="pt-1">
    <input
      type="text"
      id=""
      v-model="singleBlueprint.name"
      class="bg-green-50 border bg-transparent border-lightBorder focus:border-green-400 dark:border-darkBorder placeholder-gray-500 dark:placeholder-[#747e94] text-black dark:text-white text-sm rounded-md block w-full p-2.5"
      placeholder="Name your blueprint"
      required=""
    />
  </div>
  <!-- Tabs -->
  <div
    class="my-4 px-2 flex justify-between items-center rounded-md bg-lightBackgroundSecondary dark:bg-darkBackground"
  >
    <ul
      class="flex flex-wrap -mb-px text-sm font-medium text-center"
      id="blueprint-tab"
      data-tabs-toggle="#blueprint-tab-content"
      data-tabs-active-classes="text-blue-600 hover:text-blue-600 dark:text-white dark:hover:text-white border-blue-600 dark:border-white"
      data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300"
      role="tablist"
    >
      <li class="me-2" role="presentation">
        <button
          class="inline-block py-4 px-2 md:px-4 border-b-2 rounded-t-lg"
          id="profile-styled-tab"
          data-tabs-target="#styled-profile"
          type="button"
          role="tab"
          aria-controls="profile"
          aria-selected="false"
        >
          Themes
        </button>
      </li>
      <li class="me-2" role="presentation">
        <button
          class="inline-block py-4 px-2 md:px-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
          id="dashboard-styled-tab"
          data-tabs-target="#styled-dashboard"
          type="button"
          role="tab"
          aria-controls="dashboard"
          aria-selected="true"
        >
          Plugins
        </button>
      </li>
      <li class="me-2" role="presentation">
        <button
          class="inline-block py-4 px-2 md:px-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
          id="settings-styled-tab"
          data-tabs-target="#styled-settings"
          type="button"
          role="tab"
          aria-controls="settings"
          aria-selected="false"
        >
          Popular Plugins
        </button>
      </li>
    </ul>

    <PluginSearch class="hidden sm:block" />
  </div>

  <div id="blueprint-tab-content">
    <div
      class="hidden p-4 rounded-lg bg-gray-50 dark:bg-darkBackground"
      id="styled-profile"
      role="tabpanel"
      aria-labelledby="profile-tab"
    >
      <p class="text-sm text-gray-500 dark:text-gray-400">
        This is some placeholder content the
        <strong class="font-medium text-gray-800 dark:text-white"
          >Themes associated content</strong
        >. Clicking another tab will toggle the visibility of this one for the
        next.
      </p>
      <p class="text-sm text-gray-500 dark:text-gray-400 mt-4">
        rem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
        repudiandae possimus ipsam eveniet aliquid. Dolor consequatur, in ipsam
        a amet obcaecati tempore, fugit earum et, culpa vitae ut cumque libero!
      </p>
      <p class="text-sm text-gray-500 dark:text-gray-400 mt-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
        repudiandae possimus ipsam eveniet aliquid. Dolor consequatur, in ipsam
        a amet obcaecati tempore, fugit earum et, culpa vitae ut cumque libero!
      </p>
      <p class="text-sm text-gray-500 dark:text-gray-400 mt-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
        repudiandae possimus ipsam eveniet aliquid. Dolor consequatur, in ipsam
        a amet obcaecati tempore, fugit earum et, culpa vitae ut cumque libero!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
        praesentium quo at suscipit quis deleniti, ea molestias nostrum placeat
        accusamus debitis nemo dolores doloremque ut voluptatibus eveniet
        veritatis iusto soluta delectus exercitationem laudantium! Ullam maxime
        impedit cum nesciunt! Totam, veniam.
      </p>
    </div>
    <div
      class="hidden"
      id="styled-dashboard"
      role="tabpanel"
      aria-labelledby="dashboard-tab"
    >
      <!-- Blueprint Name Notify-->
      <div
        id="blueprint-name"
        :class="{ hidden: !addPluginNotify, block: addPluginNotify }"
        class="flex items-center px-4 py-2 mb-4 rounded-lg border border-red-300 dark:border-[#d28d394b] bg-red-50 dark:bg-[#73563823] text-red-500 dark:text-[#A1A7BA]"
        role="alert"
      >
        <svg
          class="flex-shrink-0 w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
          />
        </svg>
        <span class="sr-only">Info</span>
        <div class="ms-3 tfont-thin text-xs md:text-sm">
          Warning: You must select at least 1 plugin for your Blueprint
        </div>
        <button
          type="button"
          class="ms-auto -mx-1.5 -my-1.5 bg-white text-red-500 rounded-lg focus:ring-2 dark:focus:ring-yellow-400 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-6 w-6 dark:bg-gray-800 dark:text-yellow-300 dark:hover:bg-gray-700"
          @click="addPluginNotifyHandle"
          aria-label="Close"
        >
          <span class="sr-only">Close</span>
          <svg
            class="w-2.5 h-2.5"
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
        </button>
      </div>

      <BlueprintPlugin
        v-model:singleBlueprint="singleBlueprint"
        v-model:pluginList="pluginList"
        v-model:selectedHint="selectedHint"
        v-model:addPluginNotify="addPluginNotify"
      />
    </div>
    <div
      class="hidden p-4 rounded-lg bg-gray-50 dark:bg-darkBackground"
      id="styled-settings"
      role="tabpanel"
      aria-labelledby="settings-tab"
    >
      <p class="text-sm text-gray-500 dark:text-gray-400">
        This is some placeholder content the
        <strong class="font-medium text-gray-800 dark:text-white"
          >Popular Plugins tab's associated content</strong
        >. Clicking another tab will toggle the visibility of this one for the
        next. The tab JavaScript swaps classes to control the content visibility
        and styling.
      </p>
      <p class="text-sm text-gray-500 dark:text-gray-400 mt-4">
        rem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
        repudiandae possimus ipsam eveniet aliquid. Dolor consequatur, in ipsam
        a amet obcaecati tempore, fugit earum et, culpa vitae ut cumque libero!
      </p>
      <p class="text-sm text-gray-500 dark:text-gray-400 mt-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
        repudiandae possimus ipsam eveniet aliquid. Dolor consequatur, in ipsam
        a amet obcaecati tempore, fugit earum et, culpa vitae ut cumque libero!
      </p>
      <p class="text-sm text-gray-500 dark:text-gray-400 mt-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
        repudiandae possimus ipsam eveniet aliquid. Dolor consequatur, in ipsam
        a amet obcaecati tempore, fugit earum et, culpa vitae ut cumque libero!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
        praesentium quo at suscipit quis deleniti, ea molestias nostrum placeat
        accusamus debitis nemo dolores doloremque ut voluptatibus eveniet
        veritatis iusto soluta delectus exercitationem laudantium! Ullam maxime
        impedit cum nesciunt! Totam, veniam.
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
