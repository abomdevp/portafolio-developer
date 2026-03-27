<template>
  <section id="projects" class="section section-alt">
    <div class="container">
      <div class="section-header">
        <p class="section-kicker">Misiones de Hechiceria</p>
        <h2 class="section-title">Proyectos</h2>
      </div>

      <div class="projects-grid">
        <article v-for="project in projects" :key="project.title" class="project-card">
          <div class="project-top">
            <h3>{{ project.title }}</h3>
          </div>

          <p class="project-description">{{ project.description }}</p>
          <p class="project-role"><strong>Descripción:</strong> {{ project.role }}</p>

          <div class="tech-list">
            <span
              v-for="tech in project.technologies"
              :key="tech"
              class="tech-badge"
            >
              <Icon :icon="tech" />
            </span>
          </div>

          <div class="project-actions">
            <a :href="project.demo" target="_blank" rel="noopener noreferrer" class="project-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-tv-minimal-icon lucide-tv-minimal"><path d="M7 21h10"/><rect width="20" height="14" x="2" y="3" rx="2"/></svg>
              Demo
            </a>
            <a :href="project.github" target="_blank" rel="noopener noreferrer" class="project-link">
              <Icon icon="jam:github" width="24" height="24" />
              Repositorio
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { projects } from '../data/projects'
import { Icon } from '@iconify/vue'
import { ExternalLink } from '@lucide/vue'
</script>