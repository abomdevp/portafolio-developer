<template>
  <div v-if="project" class="project-detail-view section-alt">
    <div class="container">
      <!-- Botón Volver -->
      <router-link to="/#projects" class="back-link">
        <Icon icon="lucide:arrow-left" />
        {{ $t('projects.backToProjects') }}
      </router-link>

      <div class="project-header">
        <div v-if="project.featured" class="featured-tag">
          <Icon icon="solar:star-bold" />
          {{ $t('projects.featuredLabel') }}
        </div>
        <h1 class="project-title">{{ $t(`projectsData.${project.id}.title`) }}</h1>
        
        <div class="project-meta">
          <div class="tech-stack">
            <span v-for="tech in project.technologies" :key="tech" class="tech-item">
              <Icon :icon="tech" />
            </span>
          </div>
          
          <div class="project-links">
            <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
              <Icon icon="lucide:external-link" />
              {{ $t('projects.demo') }}
            </a>
            <a v-if="project.github" :href="project.github" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
              <Icon icon="jam:github" />
              {{ $t('projects.repo') }}
            </a>
          </div>
        </div>
      </div>

      <!-- Imagen Hero -->
      <div class="project-hero-image glass">
        <img v-if="project.image" :src="project.image" :alt="$t(`projectsData.${project.id}.title`)" class="hero-img">
        <div v-else class="image-placeholder">
          <Icon icon="lucide:image" />
        </div>
        <div v-if="project.status === 'in-development'" class="status-badge">
          {{ $t('projects.inDevelopment') }}
        </div>
      </div>

      <!-- Contenido Detallado -->
      <div class="project-grid-content">
        <div class="content-section card-glass">
          <h3>
            <Icon icon="lucide:info" />
            {{ $t('projects.labelDescription') }}
          </h3>
          <p>{{ $t(`projectsData.${project.id}.role`) }}</p>
        </div>

        <div class="content-section card-glass">
          <h3>
            <Icon icon="lucide:target" />
            {{ $t('projects.objective') }}
          </h3>
          <p>{{ $t(`projectsData.${project.id}.objective`) }}</p>
        </div>

        <div class="content-section card-glass">
          <h3>
            <Icon icon="lucide:shield-check" />
            {{ $t('projects.problemSolved') }}
          </h3>
          <p>{{ $t(`projectsData.${project.id}.problemSolved`) }}</p>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="project-not-found section-alt">
    <div class="container text-center">
      <h1>404</h1>
      <p>Proyecto no encontrado</p>
      <router-link to="/" class="btn btn-primary">Volver al inicio</router-link>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { projects } from '../data/projects'
import { Icon } from '@iconify/vue'

const route = useRoute()
const router = useRouter()

const project = computed(() => {
  return projects.find(p => p.id === route.params.id)
})

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<style scoped>
.project-detail-view {
  padding: 120px 0 60px;
  min-height: 100vh;
}

.back-link {
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-weight: 600;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  width: fit-content;
}

.back-link:hover {
  color: #a78bfa;
  transform: translateX(-5px);
}

.project-header {
  margin-bottom: 3rem;
}

.featured-tag {
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(167, 139, 250, 0.1);
  color: #a78bfa;
  padding: 6px 14px;
  border-radius: 100px;
  font-size: 0.8rem;
  font-weight: 800;
  width: fit-content;
  margin-bottom: 1rem;
  border: 1px solid rgba(167, 139, 250, 0.2);
}

.project-title {
  font-family: 'Fraunces', serif;
  font-size: clamp(2.5rem, 8vw, 4rem);
  line-height: 1.1;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #fff 0%, #aaa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.project-meta {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 2rem;
  flex-wrap: wrap;
}

.tech-stack {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.tech-item {
  font-size: 1.8rem;
  color: rgba(255, 255, 255, 0.4);
  transition: all 0.3s ease;
}

.tech-item:hover {
  color: #a78bfa;
  transform: translateY(-3px);
}

.project-links {
  display: flex;
  gap: 1rem;
}

.btn {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  border-radius: 14px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  font-size: 1rem;
}

.btn-primary {
  background: #a78bfa;
  color: #0a192f;
  box-shadow: 0 10px 20px rgba(167, 139, 250, 0.2);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 30px rgba(167, 139, 250, 0.4);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.05);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
}

.project-hero-image {
  width: 100%;
  aspect-ratio: 21 / 9;
  border-radius: 32px;
  overflow: hidden;
  margin-bottom: 4rem;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
  color: rgba(255, 255, 255, 0.05);
  background: rgba(255, 255, 255, 0.02);
}

.status-badge {
  position: absolute;
  top: 30px;
  right: 30px;
  background: #a78bfa;
  color: #0a192f;
  padding: 8px 20px;
  border-radius: 100px;
  font-size: 0.85rem;
  font-weight: 800;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

.project-grid-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.content-section {
  padding: 40px;
  border-radius: 24px;
}

.content-section h3 {
  font-family: 'Fraunces', serif;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  color: #a78bfa;
}

.content-section p {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.8;
  font-size: 1.15rem;
}

.card-glass {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.card-glass:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(167, 139, 250, 0.2);
  transform: translateY(-5px);
}

.text-center {
  text-align: center;
}

@media (max-width: 768px) {
  .project-detail-view {
    padding-top: 100px;
  }
  
  .project-meta {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .project-hero-image {
    aspect-ratio: 16 / 9;
    border-radius: 20px;
  }
  
  .content-section {
    padding: 25px;
  }
}
</style>
