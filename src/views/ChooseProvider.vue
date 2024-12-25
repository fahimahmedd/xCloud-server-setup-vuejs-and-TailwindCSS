<script setup>
import Setup from "@/components/chooseProvider/Setup.vue";
import AllBlueprintModal from "@/components/modal/AllBlueprintModal.vue";
import CreateBlueprintModal from "@/components/modal/CreateBlueprintModal.vue";
import { ref, watch } from "vue";

const nameNotify = ref(false);
const selectedHint = ref([]);
const bluePrintList = ref([
  { id: 1, name: "Blueprint - 1", pluginList: ["A", "B", "C", "D", "E"] },
  { id: 2, name: "Blueprint - 2", pluginList: ["C", "D", "E"] },
  { id: 3, name: "Blueprint - 3", pluginList: ["H", "I", "J", "K", "L"] },
  { id: 4, name: "Blueprint - 4", pluginList: ["M", "N", "P", "K"] },
  { id: 5, name: "Blueprint - 5", pluginList: ["S", "T", "Q", "K", "L"] },
]);

const pluginList = ref([
  {
    id: 1,
    name: "A Plugin",
    hint: "A",
    detail: "Have an existing website already? Select this option to Have.",
    auth: "WPDeveloper",
    img: "/images/logo/xCloud.svg",
    star: 5,
    review: 1226,
    install: "5M",
  },
  {
    id: 2,
    name: "B Plugin",
    hint: "B",
    detail: "Boost your website's performance with advanced features.",
    auth: "WPManageNinja",
    img: "/images/logo/xCloud.svg",
    star: 3,
    review: 923,
    install: "7M",
  },
  {
    id: 3,
    name: "C Plugin",
    hint: "C",
    detail: "Improve your website's user experience effortlessly.",
    auth: "WPDeveloper",
    img: "/images/logo/xCloud.svg",
    star: 4,
    review: 2329,
    install: "3M",
  },
  {
    id: 4,
    name: "D Plugin",
    hint: "D",
    detail: "Streamline your workflow with this must-have plugin.",
    auth: "Plugin Masters",
    img: "/images/logo/xCloud.svg",
    star: 5,
    review: 1450,
    install: "10M",
  },
  {
    id: 5,
    name: "E Plugin",
    hint: "E",
    detail: "Enhance website security with cutting-edge features.",
    auth: "SecureWP",
    img: "/images/logo/xCloud.svg",
    star: 4,
    review: 800,
    install: "1M",
  },
  {
    id: 6,
    name: "F Plugin",
    hint: "F",
    detail: "Simplify website management like never before.",
    auth: "EasyManage",
    img: "/images/logo/xCloud.svg",
    star: 2,
    review: 500,
    install: "500K",
  },
  {
    id: 7,
    name: "G Plugin",
    hint: "G",
    detail: "Add stunning visuals and effects to your website.",
    auth: "VisualPlus",
    img: "/images/logo/xCloud.svg",
    star: 4,
    review: 1120,
    install: "2M",
  },
  {
    id: 8,
    name: "H Plugin",
    hint: "H",
    detail: "Automate repetitive tasks and save time.",
    auth: "TaskMaster",
    img: "/images/logo/xCloud.svg",
    star: 3,
    review: 670,
    install: "3M",
  },
  {
    id: 9,
    name: "I Plugin",
    hint: "I",
    detail: "Create engaging content with this all-in-one tool.",
    auth: "Contentify",
    img: "/images/logo/xCloud.svg",
    star: 5,
    review: 1560,
    install: "8M",
  },
  {
    id: 10,
    name: "J Plugin",
    hint: "J",
    detail: "Optimize your site's SEO and improve rankings.",
    auth: "SEOMaster",
    img: "/images/logo/xCloud.svg",
    star: 4,
    review: 2000,
    install: "6M",
  },
]);

const defaultSelectedBlueprint = ref(bluePrintList.value[0].id);

const singleBlueprint = ref({
  id: pluginList.value.length + 1,
  name: null,
  plugin: [],
});

watch(
  selectedHint,
  () => {
    singleBlueprint.value.plugin = singleBlueprint.value.plugin.filter(
      (item) => {
        return selectedHint.value.some((item2) => item2.hint === item);
      }
    );
  },
  { deep: true }
);

const createBlueprint = () => {
  if (singleBlueprint.value.name && singleBlueprint.value.name.trim() !== "") {
    const newBlueprint = {
      id: bluePrintList.value.length + 1,
      name: singleBlueprint.value.name,
      pluginList: singleBlueprint.value.plugin,
    };

    bluePrintList.value.push(newBlueprint);
    singleBlueprint.value.name = "";
    singleBlueprint.value.plugin = [];
    selectedHint.value = [];
    nameNotify.value = false;
    document
      .querySelector('[data-modal-hide="create-blueprint-modal"]')
      .click();
    document.querySelector('[data-modal-show="all-blueprint-modal"]').click();
  } else {
    nameNotify.value = true;
  }
};
</script>

<template>
  <div class="container mx-auto flex items-center justify-center">
    <Setup
      v-model:bluePrintList="bluePrintList"
      v-model:defaultSelectedBlueprint="defaultSelectedBlueprint"
    />
  </div>
  <CreateBlueprintModal
    v-model:singleBlueprint="singleBlueprint"
    v-model:pluginList="pluginList"
    v-model:selectedHint="selectedHint"
    v-model:nameNotify="nameNotify"
    @onCreateBlueprint="createBlueprint"
  />
  <AllBlueprintModal
    v-model:bluePrintList="bluePrintList"
    v-model:defaultSelectedBlueprint="defaultSelectedBlueprint"
  />
</template>
