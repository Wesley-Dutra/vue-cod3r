<template>
  <div>
    <p>{{ contador }}</p>
    <button class="btn" @click="aumentar">Adicionar</button>
    <button class="btn" @click="subtrair">Diminuir</button>
  </div>
</template>

<script setup>
import { ref } from "vue"

const contador = ref(0)

function  aumentar() {
  contador.value++
}

function  subtrair() {
  contador.value--
}
</script>

<style scoped lang="scss">
  $spacing: 10px;

  .btn {
    background-color: #85b62e;
    color: white;
    outline: none;
    border: none;
    padding: $spacing 24px;
    border-radius: 8px;

    &:hover {
      background-color: #5f8726;
    }

    &:active {
      background-color: #406013;
    }
  }
</style>
