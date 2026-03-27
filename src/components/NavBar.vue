<template>
  <header class="navbar">
    <div class="container nav-content">
      <a href="#" class="logo">abomdevp</a>

      <button class="menu-btn" @click="isOpen = !isOpen" aria-label="Abrir menú">
        <Menu v-if="!isOpen" :size="24" />
        <X v-else :size="24" />
      </button>

      <nav :class="['nav-links', { open: isOpen }]">
        <a href="#about" @click="closeMenu">Un poco de mí</a>
        <a href="#projects" @click="closeMenu">Proyectos</a>
        <a href="#skills" @click="closeMenu">Técnicas Malditas</a>
        <a href="#contact" @click="closeMenu">Contacto</a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { Menu, X } from '@lucide/vue'

const isOpen = ref(false)

const closeMenu = () => {
  isOpen.value = false
}
</script>