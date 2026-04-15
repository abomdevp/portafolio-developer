<template>
  <section class="hero">
    <div class="container hero-grid">
      <div class="hero-text">
        <h1>
          Desarrollador Full-Stack
        </h1>
        <p class="hero-description">
          Desarrollo interfaces modernas orientadas a proyectos
          reales, experiencia de usuario y escalabilidad.
        </p>

        <div class="hero-buttons">
          <a href="#projects" class="btn btn-primary">Ver Proyectos</a>
          <a href="src/assets/CV FRANCISCO ANDRES GONZALEZ CORREA PORTAFOLIO.pdf" class="btn btn-secondary" download>
            <Download :size="18" />
            Descargar CV
          </a>
        </div>
      </div>

      <div class="hero-card">
        <div class="hero-badge">
          <Icon icon="logos:javascript" />
          <span>JavaScript</span>
        </div>
        <div class="hero-badge">
          <Icon icon="logos:vue" />
          <span>Vue 3</span>
        </div>
        <div class="hero-badge">
          <Icon icon="logos:supabase-icon" />
          <span>Supabase</span>
        </div>
        <div class="hero-badge">
          <Icon icon="jam:github" width="24" height="24" />
          <span>GitHub</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { Download } from '@lucide/vue'
</script>