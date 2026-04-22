<template>
  <Transition name="fade">
    <div v-if="isOpen" class="modal-overlay" @click.self="close">
      <Transition name="slide-up">
        <div v-if="isOpen" class="modal-content glass">
          <button class="close-button" @click="close">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>

          <div class="modal-header">
            <h2 class="modal-title">{{ $t(`projectsData.${project.id}.title`) }}</h2>
            <div class="modal-tags">
              <span v-for="tech in project.technologies" :key="tech" class="tech-badge">
                <Icon :icon="tech" />
              </span>
            </div>
          </div>

          <!-- Imagen del Proyecto -->
          <div v-if="project.image" class="project-image-container">
            <img :src="project.image" :alt="$t(`projectsData.${project.id}.title`)" class="project-image">
          </div>

          <div class="modal-body">
            <section class="info-section">
              <h3>{{ $t('projects.labelDescription') }}</h3>
              <p>{{ $t(`projectsData.${project.id}.role`) }}</p>
            </section>

            <section class="info-section">
              <h3>{{ $t('projects.objective') }}</h3>
              <p>{{ $t(`projectsData.${project.id}.objective`) }}</p>
            </section>

            <section class="info-section">
              <h3>{{ $t('projects.problemSolved') }}</h3>
              <p>{{ $t(`projectsData.${project.id}.problemSolved`) }}</p>
            </section>
          </div>

          <div class="modal-footer">
            <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-tv-minimal"><path d="M7 21h10"/><rect width="20" height="14" x="2" y="3" rx="2"/></svg>
              {{ $t('projects.demo') }}
            </a>
            <a v-if="project.github" :href="project.github" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
              <Icon icon="jam:github" width="20" height="20" />
              {{ $t('projects.repo') }}
            </a>
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<script setup>
import { Icon } from '@iconify/vue'

defineProps({
  isOpen: Boolean,
  project: Object
})

const emit = defineEmits(['close'])

const close = () => {
  emit('close')
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(11, 17, 32, 0.85);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.glass {
  background: radial-gradient(circle at top right, rgba(167, 139, 250, 0.1), transparent 40%),
              linear-gradient(180deg, #0b1120 0%, #111827 100%);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
}

.modal-content {
  width: 100%;
  max-width: 800px;
  max-height: 90vh;
  border-radius: 24px;
  position: relative;
  overflow-y: auto;
  padding: 40px;
  color: white;
}

.close-button {
  position: absolute;
  top: 25px;
  right: 25px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.close-button:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: rotate(90deg);
}

.modal-header {
  margin-bottom: 30px;
}

.project-image-container {
  width: 100%;
  margin-bottom: 30px;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.project-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-image-container:hover .project-image {
  transform: scale(1.02);
}

.modal-title {
  font-family: 'Fraunces', serif;
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 15px;
  background: linear-gradient(135deg, #fff 0%, #aaa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
}

.modal-tags {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.tech-badge {
  background: rgba(255, 255, 255, 0.05);
  padding: 10px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.tech-badge:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.modal-body {
  display: grid;
  gap: 30px;
  margin-bottom: 40px;
}

.info-section h3 {
  font-family: 'Fraunces', serif;
  color: #a78bfa;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 12px;
  font-weight: 600;
}

.info-section p {
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.85);
  font-size: 1.15rem;
}

.modal-footer {
  display: flex;
  gap: 15px;
}

.btn {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  border-radius: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 1rem;
}

.btn-primary {
  background: #a78bfa;
  color: #0a192f;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(167, 139, 250, 0.3);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.05);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.3);
}

/* Animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(40px) scale(0.95);
  opacity: 0;
}

@media (max-width: 640px) {
  .modal-content {
    padding: 30px 20px;
    border-radius: 0;
    height: 100vh;
    max-height: 100vh;
  }
  
  .modal-title {
    font-size: 2rem;
  }
  
  .modal-footer {
    flex-direction: column;
  }
  
  .btn {
    justify-content: center;
    width: 100%;
  }
}
</style>
