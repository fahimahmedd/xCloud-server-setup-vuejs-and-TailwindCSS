<script setup>
import PluginHint from "../plugin/PluginHint.vue";
import PluginItem from "../plugin/PluginItem.vue";

const pluginList = defineModel("pluginList");
const singleBlueprint = defineModel("singleBlueprint");
const selectedHint = defineModel("selectedHint");
</script>

<template>
  <PluginHint
    v-model:selectedHint="selectedHint"
  />
  <PluginItem
    v-model:singleBlueprint="singleBlueprint"
    v-model:selectedHint="selectedHint"
    v-model:pluginList="pluginList"
  />
</template>

<style scoped></style>
