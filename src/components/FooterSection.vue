<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-layout">
        <!-- Brand / Info -->
        <div class="footer-brand">
          <h3>Francisco González</h3>
          <p>{{ $t('footer.tagline') }}</p>
        </div>

        <!-- Quick Links -->
        <div class="footer-links">
          <h4>{{ $t('footer.linksTitle') }}</h4>
          <ul>
            <li><a href="#about" @click.prevent="scrollTo('about')">{{ $t('navbar.about') }}</a></li>
            <li><a href="#projects" @click.prevent="scrollTo('projects')">{{ $t('navbar.projects') }}</a></li>
            <li><a href="#skills" @click.prevent="scrollTo('skills')">{{ $t('navbar.skills') }}</a></li>
            <li><a href="#contact" @click.prevent="scrollTo('contact')">{{ $t('navbar.contact') }}</a></li>
          </ul>
        </div>

        <!-- Socials -->
        <div class="footer-socials">
          <h4>{{ $t('footer.socialsTitle') }}</h4>
          <div class="social-icons">
            <a href="https://linkedin.com/in/fgonzalezcorrea" target="_blank" rel="noopener noreferrer">
              <Icon icon="jam:linkedin" />
            </a>
            <a href="https://github.com/abomdevp" target="_blank" rel="noopener noreferrer">
              <Icon icon="jam:github" />
            </a>
            <a href="https://instagram.com/panchogonzalezz_" target="_blank" rel="noopener noreferrer">
              <Icon icon="jam:instagram" />
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="footer-bottom">
        <p>{{ $t('footer.copyright', { year: new Date().getFullYear() }) }}</p>
        <button class="back-to-top" @click="scrollTo('app')" aria-label="Volver arriba">
          <Icon icon="jam:chevron-up" />
        </button>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Icon } from '@iconify/vue'

const scrollTo = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  } else if (id === 'app') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>