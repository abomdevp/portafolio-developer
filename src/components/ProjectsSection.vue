<template>
  <section id="projects" class="section section-alt">
    <div class="container">
      <div class="section-header">

        <h2 class="section-title">{{ $t('projects.title') }}</h2>
      </div>

      <div class="projects-grid">
        <article 
          v-for="project in projects" 
          :key="project.id" 
          class="project-card"
          @click="openProject(project)"
        >
          <div v-if="project.status === 'in-development'" class="dev-badge">
            {{ $t('projects.inDevelopment') }}
          </div>

          <div class="project-image-wrapper">
            <img v-if="project.image" :src="project.image" :alt="$t(`projectsData.${project.id}.title`)" class="project-card-image">
            <div v-else class="project-image-placeholder">
              <Icon icon="lucide:image" />
            </div>
          </div>

          <div class="project-info">
            <div class="project-top">
              <h3>{{ $t(`projectsData.${project.id}.title`) }}</h3>
            </div>

            <p class="project-description">{{ $t(`projectsData.${project.id}.description`) }}</p>
            <p class="project-role"><strong>{{ $t('projects.labelDescription') }}:</strong> {{ $t(`projectsData.${project.id}.role`) }}</p>

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
              <button class="project-link btn-details">
                {{ $t('projects.viewDetails') }}
              </button>
              <div class="external-links">
                <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener noreferrer" class="icon-link" @click.stop>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-tv-minimal"><path d="M7 21h10"/><rect width="20" height="14" x="2" y="3" rx="2"/></svg>
                </a>
                <a v-if="project.github" :href="project.github" target="_blank" rel="noopener noreferrer" class="icon-link" @click.stop>
                  <Icon icon="jam:github" width="20" height="20" />
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>

    <!-- Project Detail Modal -->
    <ProjectModal 
      :is-open="isModalOpen" 
      :project="selectedProject" 
      @close="closeProject" 
    />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { projects } from '../data/projects'
import { Icon } from '@iconify/vue'
import ProjectModal from './ProjectModal.vue'

const isModalOpen = ref(false)
const selectedProject = ref(null)

const openProject = (project) => {
  selectedProject.value = project
  isModalOpen.value = true
  document.body.style.overflow = 'hidden' // Prevent scroll
}

const closeProject = () => {
  isModalOpen.value = false
  document.body.style.overflow = '' // Restore scroll
}
</script>

<style scoped>
.project-card {
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  padding: 0;
  display: flex;
  flex-direction: column;
}

.project-image-wrapper {
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.03);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.project-card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .project-card-image {
  transform: scale(1.05);
}

.project-image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.05);
  font-size: 3rem;
}

.project-info {
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.dev-badge {
  position: absolute;
  top: 15px;
  right: -35px;
  background: #a78bfa;
  color: #0a192f;
  padding: 5px 40px;
  font-size: 0.75rem;
  font-weight: 800;
  transform: rotate(45deg);
  z-index: 10;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 20px;
}

.btn-details {
  background: rgba(167, 139, 250, 0.1);
  color: #a78bfa;
  border: 1px solid rgba(167, 139, 250, 0.2);
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-details:hover {
  background: rgba(167, 139, 250, 0.2);
}

.external-links {
  display: flex;
  gap: 12px;
}

.icon-link {
  color: rgba(255, 255, 255, 0.6);
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
}

.icon-link:hover {
  color: #a78bfa;
}
</style>