<template>
  <q-drawer
  :width="200"
  :breakpoint="700"
  elevated
  class="bg-grey-3"
  >
    <q-scroll-area
    class="fit">
      <div class="q-pa-sm">
        <menu-items
        v-for="(item, i) in items"
        :key="i"
        :title="item.title"
        :caption="item.caption"
        :icon="item.icon"
        />
      </div>
    </q-scroll-area>
  </q-drawer>
</template>

<script setup>
import menuItems from '../components/menuItems.vue';

const items = [
  {
    title: 'Menu',
    caption: 'menu',
    icon: 'dashboard'
  },
  {
    title: 'Account',
    caption: 'account',
    icon: 'account_circle'
  },
]
</script>
<style scoped>

</style>
