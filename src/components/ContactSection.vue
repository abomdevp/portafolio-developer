<template>
  <section id="contact" class="section section-alt">
    <div class="container">
      <div class="section-header">

        <h2 class="section-title">{{ $t('contact.title') }}</h2>
        <p class="section-subtitle">{{ $t('contact.subtitle') }}</p>
      </div>

      <div class="contact-layout">
        <!-- Left Column: Socials -->
        <div class="contact-info">
          <h3 class="contact-tagline">{{ $t('contact.tagline') }}</h3>
          <p class="contact-description">{{ $t('contact.description') }}</p>
          <div class="social-grid-v2">
            <a :href="`mailto:${$t('contact.email')}`" class="social-card-v2">
              <div class="social-icon-v2">
                <Icon icon="skill-icons:gmail-light" />
              </div>
              <div class="social-text-v2">
                <span class="platform">Email</span>
              </div>
            </a>
            <a href="https://linkedin.com/in/fgonzalezcorrea" target="_blank" class="social-card-v2">
              <div class="social-icon-v2">
                <Icon icon="skill-icons:linkedin" />
              </div>
              <div class="social-text-v2">
                <span class="platform">{{ $t('contact.socials.linkedin.name') }}</span>
                <span class="handle" v-if="$t('contact.socials.linkedin.handle')">{{ $t('contact.socials.linkedin.handle') }}</span>
              </div>
            </a>

            <a href="https://github.com/abomdevp" target="_blank" class="social-card-v2">
              <div class="social-icon-v2">
                <Icon icon="skill-icons:github-dark" />
              </div>
              <div class="social-text-v2">
                <span class="platform">{{ $t('contact.socials.github.name') }}</span>
                <span class="handle" v-if="$t('contact.socials.github.handle')">{{ $t('contact.socials.github.handle') }}</span>
              </div>
            </a>

            <a href="https://instagram.com/panchogonzalezz_" target="_blank" class="social-card-v2">
              <div class="social-icon-v2">
                <Icon icon="skill-icons:instagram" />
              </div>
              <div class="social-text-v2">
                <span class="platform">{{ $t('contact.socials.instagram.name') }}</span>
                <span class="handle" v-if="$t('contact.socials.instagram.handle')">{{ $t('contact.socials.instagram.handle') }}</span>
              </div>
            </a>
          </div>
        </div>

        <!-- Right Column: Form -->
        <div class="contact-form-card">
          <h3>{{ $t('contact.form.title') }}</h3>
          <form class="contact-form" @submit.prevent="submitForm">
            <div class="form-row">
              <div class="form-group">
                <label>{{ $t('contact.form.name') }}</label>
                <input type="text" v-model="formData.name" :placeholder="$t('contact.form.placeholderName')" required />
              </div>
              <div class="form-group">
                <label>{{ $t('contact.form.email') }}</label>
                <input type="email" v-model="formData.email" :placeholder="$t('contact.form.placeholderEmail')" required />
              </div>
            </div>
            
            <div class="form-group">
              <label>{{ $t('contact.form.subject') }}</label>
              <input type="text" v-model="formData.subject" :placeholder="$t('contact.form.placeholderSubject')" required />
            </div>

            <div class="form-group">
              <label>{{ $t('contact.form.message') }}</label>
              <textarea rows="5" v-model="formData.message" :placeholder="$t('contact.form.placeholderMessage')" required></textarea>
            </div>

            <button type="submit" class="btn-pill btn-purple" :disabled="isSubmitting">
              {{ isSubmitting ? $t('contact.form.sending') : $t('contact.form.send') }}
            </button>
            
            <p v-if="submitSuccess" class="form-success">{{ $t('contact.form.success') }}</p>
            <p v-if="submitError" class="form-error">{{ $t('contact.form.error') }}</p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref(false)

const submitForm = async () => {
  isSubmitting.value = true
  submitSuccess.value = false
  submitError.value = false

  try {
    // Reemplaza el email por tu correo real de destino. formsubmit enviará ahí.
    const response = await fetch('https://formsubmit.co/ajax/abomdevp@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData.value)
    })

    if (response.ok) {
      submitSuccess.value = true
      formData.value = { name: '', email: '', subject: '', message: '' }
    } else {
      submitError.value = true
    }
  } catch (error) {
    submitError.value = true
  } finally {
    isSubmitting.value = false
    
    // Ocultar mensajes de estado luego de 5 segundos
    setTimeout(() => {
      submitSuccess.value = false
      submitError.value = false
    }, 5000)
  }
}
</script>