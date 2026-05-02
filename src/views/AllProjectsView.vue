<template>
  <div class="all-projects-page">
    <section class="section">
      <div class="container">
        <!-- Back Navigation -->
        <div class="header-actions">
          <router-link to="/" class="back-link">
            <Icon icon="lucide:chevron-left" />
            {{ $t('projects.backToHome') }}
          </router-link>
        </div>

        <!-- Page Header -->
        <div class="page-header">
          <h1 class="page-title">{{ $t('projects.title') }}</h1>
          <p class="page-subtitle">{{ $t('projects.allProjectsSubtitle') }}</p>
        </div>

        <!-- Projects Grid -->
        <div class="projects-grid">
          <article 
            v-for="project in projects" 
            :key="project.id" 
            class="project-card glass"
          >
            <!-- Project Image -->
            <div class="card-visual">
              <img v-if="project.image" :src="project.image" :alt="project.id" class="card-img">
              <div v-else class="img-placeholder">
                <Icon icon="lucide:image" />
              </div>
              <div v-if="project.status === 'in-development'" class="dev-badge">
                {{ $t('projects.inDevelopment') }}
              </div>
            </div>

            <!-- Project Content -->
            <div class="card-content">
              <div class="card-header">
                <h2 class="card-title">{{ $t(`projectsData.${project.id}.title`) }}</h2>
                <div class="card-tech">
                  {{ project.technologies.join(' - ') }}
                </div>
              </div>

              <div class="card-details">
                <div class="detail-block">
                  <span class="detail-label">{{ $t('projects.objective') }}</span>
                  <p>{{ $t(`projectsData.${project.id}.objective`) }}</p>
                </div>
                <div class="detail-block">
                  <span class="detail-label">{{ $t('projects.problemSolved') }}</span>
                  <p>{{ $t(`projectsData.${project.id}.problemSolved`) }}</p>
                </div>
              </div>

              <div class="card-footer">
                <div class="card-links">
                  <a v-if="project.demo" :href="project.demo" target="_blank" class="link-btn primary">
                    <Icon icon="lucide:external-link" />
                    Demo
                  </a>
                  <a v-if="project.github" :href="project.github" target="_blank" class="link-btn outline">
                    <Icon icon="jam:github" />
                    Código
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { projects } from '../data/projects'
import { Icon } from '@iconify/vue'
</script>

<style scoped>
.all-projects-page {
  padding-top: 100px;
  background: radial-gradient(circle at top right, rgba(167, 139, 250, 0.05), transparent 40%);
}

.header-actions {
  margin-bottom: 3rem;
}

.back-link {
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.4);
  text-decoration: none;
  font-weight: 700;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.back-link:hover {
  color: #a78bfa;
  transform: translateX(-5px);
}

.page-header {
  margin-bottom: 5rem;
}

.page-title {
  font-family: 'Fraunces', serif;
  font-size: 4rem;
  letter-spacing: -2px;
  margin-bottom: 1rem;
}

.page-subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.4);
  max-width: 600px;
}

/* Grid Layout */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
}

.project-card {
  display: flex;
  flex-direction: column;
  border-radius: 32px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
  background: rgba(255, 255, 255, 0.01);
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
}

.project-card:hover {
  transform: translateY(-10px);
  border-color: rgba(167, 139, 250, 0.2);
  background: rgba(255, 255, 255, 0.02);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
}

.card-visual {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s ease;
}

.project-card:hover .card-img {
  transform: scale(1.05);
}

.img-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: rgba(255, 255, 255, 0.02);
  background: rgba(0, 0, 0, 0.2);
}

.dev-badge {
  position: absolute;
  top: 20px;
  right: 20px;
  background: #a78bfa;
  color: #0a192f;
  padding: 6px 14px;
  border-radius: 100px;
  font-size: 0.7rem;
  font-weight: 800;
}

.card-content {
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex-grow: 1;
}

.card-title {
  font-family: 'Fraunces', serif;
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

.card-tech {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.3);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.card-details {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.detail-block {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.detail-label {
  font-size: 0.75rem;
  font-weight: 800;
  color: #a78bfa;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.detail-block p {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.6;
}

.card-footer {
  margin-top: auto;
  padding-top: 1rem;
}

.card-links {
  display: flex;
  gap: 1rem;
}

.link-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 0.85rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.link-btn.primary {
  background: #a78bfa;
  color: #0a192f;
}

.link-btn.outline {
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
}

.link-btn.outline:hover {
  background: rgba(255, 255, 255, 0.05);
}

@media (max-width: 1024px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
  .page-title {
    font-size: 3rem;
  }
}
</style>
