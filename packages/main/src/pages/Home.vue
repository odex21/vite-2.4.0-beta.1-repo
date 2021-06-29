<template>
  <div w:w="106px" w:bg="red-500" :class="{ red: isRed }">Home</div>
  <Foo />
  <div>id: {{ route.query }} | {{ id }}</div>
</template>

<script setup lang="ts">
import { Foo } from '@scope/foo'
import { useRouteQuery } from '@vueuse/router'
import { useRoute } from 'vue-router'
ref: isRed = true

const route = useRoute()
console.log('route', route)
ref: id = useRouteQuery('id')
</script>
