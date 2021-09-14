<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <ivy-barcode text="CODE128" type="CODE128"></ivy-barcode>
  <!-- <ivy-barcode text="EAN" type="EAN"></ivy-barcode> -->
  <ivy-barcode text="CODE39" type="CODE39"></ivy-barcode>
  <ivy-barcode text="123456" type="pharmacode"></ivy-barcode>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
