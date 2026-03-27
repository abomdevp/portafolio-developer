<template>
  <section id="skills" class="section">
    <div class="container">
      <div class="section-header">
        <p class="section-kicker">Técnicas Malditas</p>
        <h2 class="section-title">Tecnologías y herramientas</h2>
      </div>

      <div class="skills-wrapper">
        <div class="skills-groups">
          <div v-for="group in skillGroups" :key="group.title" class="skills-group-card">
            <h3>{{ group.title }}</h3>

            <div class="skills-grid">
              <div v-for="item in group.items" :key="item.name" class="skill-card">
                <Icon :icon="item.icon" class="skill-icon" />
                <span>{{ item.name }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="skills-image-card">
          <img
            src="/itadori.png"
            alt="Imagen decorativa"
            class="skills-image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { skillGroups } from '../data/skills'
</script>