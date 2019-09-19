import Vue from 'vue/dist/vue.js'

import Component from './Component.vue'
import { createRoots, COMPONENT_INSTANCES_N, getRootId } from './config'

createRoots(COMPONENT_INSTANCES_N)

for (let i = 0; i < COMPONENT_INSTANCES_N; i++) {
  new Vue({
    el: `#${getRootId(i + 1)}`,
    components: {
      MyComponent: Component,
    },
    render: function(h) {
      return h('MyComponent')
    },
  })
}
