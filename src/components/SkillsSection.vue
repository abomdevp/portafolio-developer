<template>
  <section id="skills" class="section">
    <div class="container">
      <div class="section-header skills-header">

        <h2 class="section-title">{{ $t('skills.title') }}</h2>
        <p class="section-subtitle">{{ $t('skills.subtitle') }}</p>
      </div>

      <div class="carousel-container">
        <div class="carousel-track">
          <div class="carousel-items" v-for="n in 2" :key="n" aria-hidden="true">
            <div v-for="item in allSkills" :key="item.name + n" class="carousel-item">
              <Icon :icon="item.icon" class="carousel-icon" />
              <span class="carousel-text">{{ item.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import { skillGroups } from '../data/skills'

const allSkills = computed(() => {
  return skillGroups.flatMap(group => group.items)
})
</script>