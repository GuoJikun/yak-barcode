<template>
  <component :is="props.tag" ref="wrapEl" :key="props.text"></component>
</template>

<script setup lang="ts">
import { ref, onMounted, PropType } from "vue";
import JsBarcode from "jsbarcode";

export type YakTag = "canvas" | "svg";
export type YakType =
  | "CODE128"
  | "CODE39"
  | "EAN/UPC"
  | "ITF-14"
  | "MSI"
  | "Pharmacode"
  | "Codabar";

export type YakOption = {
  width?: number;
  height?: number;
  format?: YakType;
  displayValue?: boolean;
  fontOptions?: string;
  font?: string;
  textAlign?: string;
  textPosition?: string;
  textMargin?: number;
  fontSize?: number;
  background?: string;
  lineColor?: string;
  margin?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  flat?: boolean;
  valid?: Function;
};

const props = defineProps({
  tag: {
    type: String as PropType<YakTag>,
    default: "canvas",
  },
  text: {
    type: String,
    default: null,
  },
  options: {
    type: Object as PropType<YakOption>,
    default() {
      return {};
    },
  },
  type: {
    type: String as PropType<YakType>,
    default: "CODE128",
  },
});

const wrapEl = ref(null);

const updateBarcode = () => {
  const opt: any = { ...props.options, format: props.type };
  JsBarcode(wrapEl.value, props.text, opt);
};
onMounted(() => {
  updateBarcode();
});
</script>
