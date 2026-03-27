<template>
  <section id="contact" class="section section-alt">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Conectemos</h2>
      </div>

      <p class="section-text">
        Estoy abierto a oportunidades, colaboración en proyectos y nuevos desafíos
        dentro del área TI.
      </p>

      <div class="contact-grid">
        <a href="mailto:abomdevp@gmail.com" class="contact-card">
          <Icon icon="skill-icons:gmail-light" width="24" height="24" />
          <span>Gmail</span>
        </a>

        <a href="https://github.com/abomdevp" target="_blank" rel="noopener noreferrer" class="contact-card">
          <Icon icon="jam:github" width="24" height="24" />
          <span>GitHub</span>
        </a>

        <a href="https://linkedin.com/in/fgonzalezcorrea" target="_blank" rel="noopener noreferrer" class="contact-card">
          <Icon icon="logos:linkedin-icon" class="brand-icon" />
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Mail } from '@lucide/vue'
import { Icon } from '@iconify/vue'
</script>