import Vue from 'vue/dist/vue.js'

import Component from './Component.vue'
import { createRoots, COMPONENT_INSTANCES_N } from './config'

createRoots(0)

new Vue({
  el: '#root',
  components: {
    MyComponent: Component,
  },
  render: function(h) {
    return h('div', getChildren(h))
  },
})

function getChildren(h) {
  const out = []
  for (let i = 0; i < COMPONENT_INSTANCES_N; i++) {
    out.push(h('MyComponent'))
  }

  return out
}
