<template>
  <q-page class="flex flex-center">
      <carousel-items
        :slides="images"
      />
  </q-page>
</template>

<script setup>
import CarouselItems from "components/carouselItems.vue";

const images = [
  {
   name: 1,
   imgSrc: 'https://images.pexels.com/photos/208321/pexels-photo-208321.jpeg'
  },
  {
   name: 2,
   imgSrc: '../src/assets/slide2.jpg'
  },
  {
   name: 3,
   imgSrc: '../src/assets/slide3.jpg'
  },
]
</script>
