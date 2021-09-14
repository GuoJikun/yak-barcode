# yak-barcode

一个适用于 `vue3` 的条形码生成器，利用 `jabarcode`

## 安装

```bash
npm i yak-barcode
#or
yarn add yak-barcode
#or
pnpm add yak-barcode
```

## 使用

```js
import {createApp } from 'vue';
import App form './app.vue';

// import {Barcode} from 'yak-barcode'
// createApp(App).component('Barcode', Barcode).mount('#app')

import Barcode from 'yak-barcode'
createApp(App).use(Barcode).mount('#app')
```

## Attrs

| 属性名  | 说明             | 类型   | 默认值      |
| ------- | ---------------- | ------ | ----------- |
| tag     | 条形码渲染的元素 | String | canvas(svg) |
| type    | 条形码的类型     | String | CODE128     |
| options | 其它配置         | Object | {}          |

> `type` 相当于 `options.format`，但是如果 `type` 和 `options.format` 同时存在，`type` 的值的优先级最高；[完整的配置](https://github.com/lindell/JsBarcode/wiki/Options)
