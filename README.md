<div align="center">
	<h1>Strapi Blocks Vue Component</h1>
  <p>
  Based on the <a href="https://github.com/rdunk/sanity-blocks-vue-component/" _target="blank">https://github.com/rdunk/sanity-blocks-vue-component/</a>
	</p>
	<p>
		<h3>A Vue component for rendering Rich Block JSON content from Stripe 4.</h3>
	<br>
	<br>
</div>

## Install

> **Notice**: This version is for **Vue 3**. 

```bash
$ npm i @bgrusnak/blocks-vue-renderer # or yarn add @bgrusnak/blocks-vue-renderer
```

## Usage

Import directly into your component or view:

```vue
<template>
  <RenderBlocks :blocks="blocks"  />
</template>

<script setup lang="ts">
import { RenderBlocks, type BlocksContentType } from '@bgrusnak/blocks-vue-renderer';
const blocks: BlocksContentType = [ {
    type: 'paragraph',
    children: [{ type: 'text', text: 'A simple paragraph' }],
  },]; // Stripe block text
</script>
```

Or install globally:

```ts
import { createApp } from 'vue';
import { RenderBlocks } from '@bgrusnak/blocks-vue-renderer';
import App from './App.vue';

const app = createApp(App);
app.component('render-blocks', RenderBlocks);
app.mount('#app');
```

## Props

The following props can be passed to the component.

| Prop          | Required | Description                                        | Type   |
| ------------- | -------- | -------------------------------------------------- | ------ |
| `blocks`      | Yes      | Block content retrieved from Stripe.               | Array  | 

## License

[MIT](http://opensource.org/licenses/MIT)
