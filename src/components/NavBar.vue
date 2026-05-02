<template>
  <header class="navbar">
    <div class="container nav-content">
      <div class="logo-wrapper">
        <a href="#" class="logo">Francisco González</a>
      </div>

      <div class="nav-right">
        <nav :class="['nav-links', { open: isOpen }]">
          <a href="#about" @click="closeMenu">{{ $t('navbar.about') }}</a>
          <a href="#projects" @click="goToProjects">{{ $t('navbar.projects') }}</a>
          <a href="#projects" @click="goToCertifications">{{ $t('projects.qualificationsTab') }}</a>
          <a href="#skills" @click="closeMenu">{{ $t('navbar.skills') }}</a>
          <a href="#contact" class="nav-btn-contact" @click="closeMenu">{{ $t('navbar.contact') }}</a>
        </nav>

        <div class="nav-actions">
          <a href="https://github.com/abomdevp" target="_blank" rel="noopener noreferrer" class="social-link" title="GitHub">
            <Icon icon="jam:github" width="24" height="24" />
          </a>
          <a href="https://linkedin.com/in/fgonzalezcorrea" target="_blank" rel="noopener noreferrer" class="social-link" title="LinkedIn">
            <Icon icon="jam:linkedin" width="24" height="24" />
          </a>
          
          <button @click="toggleLanguage" class="lang-btn" :title="locale === 'es' ? 'Switch to English' : 'Cambiar a Español'">
            {{ locale.toUpperCase() }}
          </button>

          <button class="menu-btn" @click="isOpen = !isOpen" aria-label="Abrir menú">
            <Menu v-if="!isOpen" :size="24" />
            <X v-else :size="24" />
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { Menu, X } from '@lucide/vue'
import { Icon } from '@iconify/vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const isOpen = ref(false)

const closeMenu = () => {
  isOpen.value = false
}

const goToCertifications = () => {
  closeMenu()
  window.dispatchEvent(new CustomEvent('switch-to-certifications'))
}

const goToProjects = () => {
  closeMenu()
  window.dispatchEvent(new CustomEvent('switch-to-projects'))
}

const toggleLanguage = () => {
  locale.value = locale.value === 'es' ? 'en' : 'es'
}
</script>

<style scoped>
.nav-right {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.social-link {
  color: var(--text-color);
  display: flex;
  align-items: center;
  transition: color 0.3s ease;
}

.social-link:hover {
  color: var(--primary-color);
}

.lang-btn {
  background: var(--bg-alt);
  border: 1px solid var(--border-color);
  color: var(--text-color);
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.8rem;
  transition: all 0.3s ease;
}

.lang-btn:hover {
  background: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}

@media (max-width: 768px) {
  .nav-right {
    gap: 1rem;
  }
}
</style>