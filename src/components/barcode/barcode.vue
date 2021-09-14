<template>
  <component :is="tag" ref="wrapEl"></component>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import JsBarcode from "jsbarcode";

const props = defineProps({
  tag: {
    type: String,
    default: "canvas",
  },
  text: {
    type: String,
    default: null,
  },
  options: {
    type: Object,
    default() {
      return {};
    },
  },
  type: {
    type: String,
    default: "CODE128",
  },
});

const wrapEl = ref(null);

onMounted(() => {
  const opt: any = { ...props.options, format: props.type };
  JsBarcode(wrapEl.value, props.text, opt);
});
</script>
