<template>
  <q-layout view="hHh Lpr lFf">
    <header-layout @toggle-drawer="leftDrawer = !leftDrawer" />
    <drawer-left v-model="leftDrawer" />
    <footer-layout />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import {ref} from 'vue';
import FooterLayout from "layouts/footerLayout.vue";
import DrawerLeft from "components/drawerLeft.vue";
import HeaderLayout from "layouts/headerLayout.vue";

const leftDrawer = ref(false)

</script>
