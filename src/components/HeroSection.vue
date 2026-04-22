<template>
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <div class="status-badge">
          <span class="dot"></span>
          {{ $t('hero.status') }}
        </div>
        
        <h1 class="hero-title">
          {{ $t('hero.mainTitle') }} 
          <span class="highlight">{{ $t('hero.highlightedWord') }}</span> 
          {{ $t('hero.afterHighlight') }}
        </h1>

        <p class="hero-description">
          {{ $t('hero.description') }}
        </p>

        <div class="hero-buttons">
          <a href="#contact" class="btn btn-pill btn-dark">
            {{ $t('hero.getInTouch') }}
          </a>
          <a href="#about" class="btn btn-pill btn-outline">
            {{ $t('navbar.about') }}
          </a>
        </div>

        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-value">{{ $t('hero.stats.projects.value') }}</span>
            <span class="stat-label">{{ $t('hero.stats.projects.label') }}</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">{{ $t('hero.stats.exp.value') }}</span>
            <span class="stat-label">{{ $t('hero.stats.exp.label') }}</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">{{ $t('hero.stats.clients.value') }}</span>
            <span class="stat-label">{{ $t('hero.stats.clients.label') }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No extra imports needed for now
</script>