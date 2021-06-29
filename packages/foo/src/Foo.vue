<template>
  <div>{{ foo }}</div>
  <div>{{ getFoo() }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { get } from '@vueuse/core'
const foo = ref(1)

const getFoo = () => get(foo)
</script>
