<template>
  <q-carousel
    animated
    v-model="slide"
    arrows
    autoplay
    navigation
    infinite
    style="height: 400px; width: 60vw"
  >
    <q-carousel-slide
      v-for="(item, i) in slides"
      :key="i"
      :name="item.name"
      :img-src="item.imgSrc"
    />
  </q-carousel>
</template>

<script setup>
import { ref } from 'vue';

const slide = ref(1)

const props = defineProps({
  slides: {
    type: Array,
    default: () => []
  }
})

console.log(props.slides)
</script>
