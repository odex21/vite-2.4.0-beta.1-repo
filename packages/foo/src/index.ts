import 'virtual:windi.css'

export { default as Foo } from './Foo.vue'

import { ref } from 'vue'
import { get } from '@vueuse/core'
console.log(get.toString())
