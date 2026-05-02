<template>
  <section id="projects" class="section section-alt">
    <div class="container">
      <!-- Tab Switcher -->
      <div class="tab-switcher-wrapper">
        <div class="tab-switcher glass">
          <button 
            :class="['tab-btn', { active: activeTab === 'projects' }]" 
            @click="activeTab = 'projects'"
          >
            <Icon icon="lucide:code-2" />
            {{ $t('projects.projectsTab') }}
          </button>
          <button 
            :class="['tab-btn', { active: activeTab === 'qualifications' }]" 
            @click="activeTab = 'qualifications'"
          >
            <Icon icon="lucide:graduation-cap" />
            {{ $t('projects.qualificationsTab') }}
          </button>
        </div>
      </div>

      <!-- Projects Content (Accordion Style) -->
      <div v-if="activeTab === 'projects'" class="showcase-wrapper">
        <div class="showcase-header-minimal">
          <h2 class="minimal-title">{{ $t('projects.title') }}</h2>
        </div>

        <div class="accordion-list">
          <div 
            v-for="(project, index) in projects" 
            :key="project.id" 
            :class="['accordion-item', { expanded: expandedId === project.id }]"
          >
            <!-- Closed State Header -->
            <div class="accordion-header" @click="toggleProject(project.id)">
              <div class="header-left">
                <span class="item-index">{{ String(index + 1).padStart(2, '0') }}</span>
                <div class="header-info">
                  <h3>{{ $t(`projectsData.${project.id}.title`) }}</h3>
                  <div class="tech-stack-minimal">
                    {{ project.technologies.join(' - ') }}
                  </div>
                </div>
              </div>
              <div class="header-right">
                <Icon :icon="expandedId === project.id ? 'lucide:x' : 'lucide:plus'" class="toggle-icon" />
              </div>
            </div>

            <!-- Expanded State Body -->
            <Transition name="expand">
              <div v-if="expandedId === project.id" class="accordion-body">
                <div class="body-grid">
                  <div class="body-content">
                    <ul class="feature-list">
                      <li>
                        <strong>{{ $t('projects.objective') }}:</strong> 
                        {{ $t(`projectsData.${project.id}.objective`) }}
                      </li>
                      <li>
                        <strong>{{ $t('projects.problemSolved') }}:</strong> 
                        {{ $t(`projectsData.${project.id}.problemSolved`) }}
                      </li>
                    </ul>

                    <div class="body-actions">
                      <a v-if="project.demo" :href="project.demo" target="_blank" class="btn btn-primary">
                        <Icon icon="lucide:external-link" />
                        {{ $t('projects.demo') }}
                      </a>
                      <a v-if="project.github" :href="project.github" target="_blank" class="btn btn-outline">
                        <Icon icon="jam:github" />
                        Código
                      </a>
                    </div>
                  </div>

                  <div class="body-visual">
                    <div class="image-frame glass">
                      <img v-if="project.image" :src="project.image" :alt="project.id">
                      <div v-else class="img-placeholder">
                        <Icon icon="lucide:image" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>

      <!-- Qualifications Content -->
      <div v-else class="qualifications-wrapper">
        <div class="showcase-header-minimal">
          <h2 class="minimal-title">{{ $t('projects.qualificationsTab') }}</h2>
        </div>
        
        <div class="qual-list">
          <div v-for="qual in qualifications" :key="qual.id" class="qual-item glass">
            <div class="qual-icon-wrapper">
              <Icon :icon="qual.icon" />
            </div>
            <div class="qual-info">
              <h4>{{ qual.title }}</h4>
              <p>{{ qual.issuer }} - {{ qual.date }}</p>
            </div>
            <a v-if="qual.link" :href="qual.link" target="_blank" class="qual-link">
              <Icon icon="lucide:external-link" />
            </a>
          </div>
        </div>
      </div>
      
      <!-- See More Button (Keep it for all projects page) -->
      <div class="view-all-footer" v-if="activeTab === 'projects'">
        <router-link :to="{ name: 'all-projects' }" class="btn-minimal-all">
          {{ $t('projects.viewAll') }}
          <Icon icon="lucide:arrow-right" />
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { projects } from '../data/projects'
import { qualifications } from '../data/qualifications'
import { Icon } from '@iconify/vue'

const activeTab = ref('projects')
const expandedId = ref(null)

const toggleProject = (id) => {
  expandedId.value = expandedId.value === id ? null : id
}

const handleSwitchToCert = () => {
  activeTab.value = 'qualifications'
}

const handleSwitchToProjects = () => {
  activeTab.value = 'projects'
}

onMounted(() => {
  window.addEventListener('switch-to-certifications', handleSwitchToCert)
  window.addEventListener('switch-to-projects', handleSwitchToProjects)
})

onUnmounted(() => {
  window.removeEventListener('switch-to-certifications', handleSwitchToCert)
  window.removeEventListener('switch-to-projects', handleSwitchToProjects)
})
</script>

<style scoped>
.tab-switcher-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 5rem;
}

.tab-switcher {
  padding: 6px;
  border-radius: 100px;
  display: flex;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.tab-btn {
  padding: 12px 30px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 700;
  transition: all 0.3s ease;
  background: transparent;
  border: none;
}

.tab-btn.active {
  background: rgba(167, 139, 250, 0.15);
  color: #a78bfa;
  box-shadow: 0 4px 15px rgba(167, 139, 250, 0.1);
}

.showcase-header-minimal {
  text-align: center;
  margin-bottom: 4rem;
}

.minimal-title {
  font-family: 'Fraunces', serif;
  font-size: 3.5rem;
  letter-spacing: -1px;
}

/* Accordion Styles */
.accordion-list {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.accordion-item {
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.4s ease;
}

.accordion-header {
  padding: 2.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: padding 0.3s ease;
}

.accordion-item:hover .accordion-header {
  padding-left: 1rem;
  padding-right: 1rem;
  background: rgba(255, 255, 255, 0.01);
}

.header-left {
  display: flex;
  align-items: center;
  gap: 3rem;
}

.item-index {
  font-size: 1.1rem;
  font-weight: 800;
  color: #a78bfa;
  font-family: 'Space Grotesk', sans-serif;
}

.header-info h3 {
  font-size: 1.8rem;
  font-family: 'Fraunces', serif;
  margin-bottom: 0.3rem;
}

.tech-stack-minimal {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.4);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.toggle-icon {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.3);
  transition: transform 0.4s ease;
}

/* Expanded Body */
.accordion-body {
  padding-bottom: 4rem;
  overflow: hidden;
}

.body-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 4rem;
  align-items: start;
}

.project-long-desc {
  font-size: 1.1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 2rem;
}

.feature-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.feature-list li {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);
}

.feature-icon {
  color: #a78bfa;
  font-size: 1.2rem;
  margin-top: 3px;
}

.showcase-footer {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.tech-stack {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.tech-badge {
  background: rgba(255, 255, 255, 0.03);
  padding: 6px 14px;
  border-radius: 6px;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.05);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.body-actions {
  display: flex;
  gap: 1.5rem;
}

.btn {
  padding: 12px 28px;
  border-radius: 8px;
  font-weight: 800;
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.btn-primary {
  background: #a78bfa;
  color: #0a192f;
}

.btn-outline {
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
}

.btn-outline:hover {
  background: rgba(255, 255, 255, 0.05);
}

.body-visual {
  width: 100%;
}

.image-frame {
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.image-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.img-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: rgba(255, 255, 255, 0.03);
}

/* Qualifications Styles */
.qual-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 20px;
}

.qual-item {
  padding: 1.5rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.qual-item:hover {
  transform: translateY(-5px);
  border-color: rgba(167, 139, 250, 0.3);
}

.qual-icon-wrapper {
  width: 60px;
  height: 60px;
  border-radius: 15px;
  background: rgba(167, 139, 250, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #a78bfa;
}

.qual-info h4 {
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
}

.qual-info p {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.4);
}

.qual-link {
  margin-left: auto;
  color: rgba(255, 255, 255, 0.2);
  transition: color 0.3s ease;
}

.qual-link:hover {
  color: #a78bfa;
}

/* Transitions */
.expand-enter-active, .expand-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  max-height: 1000px;
}

.expand-enter-from, .expand-leave-to {
  max-height: 0;
  opacity: 0;
}

.view-all-footer {
  margin-top: 5rem;
  display: flex;
  justify-content: center;
}

.btn-minimal-all {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #a78bfa;
  text-decoration: none;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 1px;
  transition: gap 0.3s ease;
}

.btn-minimal-all:hover {
  gap: 20px;
}

@media (max-width: 1024px) {
  .body-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .header-left {
    gap: 1.5rem;
  }
  .header-info h3 {
    font-size: 1.4rem;
  }
  .minimal-title {
    font-size: 2.5rem;
  }
}
</style>

