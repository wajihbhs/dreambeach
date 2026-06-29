<template>
  <section id="contact" class="section contact">
    <div class="contact__top-wave">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,40 C360,0 1080,80 1440,40 L1440,0 L0,0 Z" fill="white"/>
      </svg>
    </div>
    <div class="container">
      <div class="contact__header">
        <span class="section-tag contact__tag reveal">{{ t.contact.tag }}</span>
        <h2 class="section-heading contact__heading reveal reveal-delay-1">{{ t.contact.title }}</h2>
        <p class="section-subtitle contact__subtitle reveal reveal-delay-2">{{ t.contact.subtitle }}</p>
      </div>

      <div class="contact__grid">
        <!-- Info cards -->
        <div class="contact__cards">
          <!-- Phones -->
          <div class="contact-card reveal">
            <div class="contact-card__icon">📞</div>
            <div class="contact-card__title">{{ t.contact.phones }}</div>
            <div class="contact-card__content">
              <a v-for="phone in phones" :key="phone" :href="`tel:${phone.replace(/\s/g,'')}`" class="contact-card__phone">
                {{ phone }}
              </a>
            </div>
            <a :href="`tel:${phones[0].replace(/\s/g,'')}`" class="btn btn-primary contact-card__cta">
              {{ t.contact.reservation }}
            </a>
          </div>

          <!-- Address -->
          <div class="contact-card reveal reveal-delay-1">
            <div class="contact-card__icon">📍</div>
            <div class="contact-card__title">{{ t.contact.address }}</div>
            <div class="contact-card__address">
              <span v-for="(line, i) in addressLines" :key="i">{{ line }}<br v-if="i < addressLines.length - 1"/></span>
            </div>
          </div>

          <!-- Hours -->
          <div class="contact-card reveal reveal-delay-2">
            <div class="contact-card__icon">🕗</div>
            <div class="contact-card__title">{{ t.contact.hours }}</div>
            <div class="contact-card__address">
              <span v-for="(line, i) in hoursLines" :key="i">{{ line }}<br v-if="i < hoursLines.length - 1"/></span>
            </div>
          </div>
        </div>

        <!-- Map + No alcohol notice -->
        <div class="contact__right">
          <!-- Map embed placeholder -->
          <div class="contact__map reveal">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d500!2d10.840179314082775!3d36.95829297109823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDU3JzI5LjkiTiAxMMKwNTAnMjQuNiJF!5e0!3m2!1sfr!2stn!4v1688000000000!5m2!1sfr!2stn"
              style="border:0;"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Localisation Healthy Dream House"
            ></iframe>
          </div>

          <!-- No alcohol notice -->
          <div class="no-alcohol reveal reveal-delay-1">
            <div class="no-alcohol__icon">🚫🍷</div>
            <div class="no-alcohol__content">
              <div class="no-alcohol__title">{{ t.contact.noAlcohol }}</div>
              <p class="no-alcohol__desc">{{ t.contact.noAlcoholDesc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useLocale } from '../composables/useLocale'
import { useReveal } from '../composables/useReveal'

const { t } = useLocale()
const { observe } = useReveal()
onMounted(() => observe())

const phones = ['94 549 368', '24 833 440', '24 22 33 45']

const addressLines = computed(() => t.value.contact.addressValue.split('\n'))
const hoursLines = computed(() => t.value.contact.hoursValue.split('\n'))
</script>

<style scoped>
.contact {
  position: relative;
  background: var(--color-primary-900);
  color: white;
  padding-top: 0;
}

.contact__top-wave {
  line-height: 0;
  margin-bottom: -1px;
}

.contact__top-wave svg {
  width: 100%;
  height: 80px;
  display: block;
}

.contact__header {
  text-align: center;
  margin-bottom: var(--space-8);
  padding-top: var(--space-8);
}

.contact__tag {
  background: rgba(45,155,78,0.2);
  color: var(--color-accent-400);
  border: 1px solid rgba(45,155,78,0.3);
}

.contact__heading {
  color: white;
}

.contact__subtitle {
  color: rgba(255,255,255,0.65);
  margin: 0 auto;
}

.contact__grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: var(--space-8);
  align-items: start;
}

.contact__cards {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.contact-card {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: var(--radius-xl);
  padding: var(--space-4);
  backdrop-filter: blur(8px);
  transition: border-color var(--transition-base);
}

.contact-card:hover {
  border-color: rgba(255,255,255,0.2);
}

.contact-card__icon {
  font-size: 1.75rem;
  margin-bottom: var(--space-1);
}

.contact-card__title {
  font-weight: 700;
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-secondary-300);
  margin-bottom: var(--space-2);
}

.contact-card__content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: var(--space-3);
}

.contact-card__phone {
  display: block;
  font-size: 1.2rem;
  font-weight: 700;
  color: white;
  letter-spacing: 0.05em;
  transition: color var(--transition-fast);
}

.contact-card__phone:hover {
  color: var(--color-secondary-300);
}

.contact-card__cta {
  width: 100%;
  text-align: center;
}

.contact-card__address {
  font-size: 1rem;
  color: rgba(255,255,255,0.8);
  line-height: 1.75;
}

/* Map */
.contact__map {
  border-radius: var(--radius-xl);
  overflow: hidden;
  aspect-ratio: 16/10;
  box-shadow: var(--shadow-xl);
  margin-bottom: var(--space-3);
}

.contact__map iframe {
  width: 100%;
  height: 100%;
  display: block;
}

/* No alcohol */
.no-alcohol {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.25);
  border-radius: var(--radius-xl);
  padding: var(--space-3) var(--space-4);
}

.no-alcohol__icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.no-alcohol__title {
  font-weight: 700;
  color: #fca5a5;
  margin-bottom: 0.25rem;
}

.no-alcohol__desc {
  font-size: 0.85rem;
  color: rgba(255,255,255,0.65);
  line-height: 1.6;
}

@media (max-width: 900px) {
  .contact__grid { grid-template-columns: 1fr; }
}

@media (max-width: 768px) {
  .contact__header { padding-top: var(--space-6); margin-bottom: var(--space-6); }
  .contact-card { padding: var(--space-3); }
  .contact__map { aspect-ratio: 16/9; }
}

@media (max-width: 480px) {
  .contact-card__phone { font-size: 1rem; }
  .contact-card__icon { font-size: 1.4rem; }
  .no-alcohol { flex-direction: column; align-items: flex-start; gap: var(--space-1); padding: var(--space-2) var(--space-3); }
  .no-alcohol__icon { font-size: 1.75rem; }
  .contact__map { aspect-ratio: 4/3; }
  .contact__cards { gap: var(--space-2); }
  .contact__grid { gap: var(--space-5); }
}
</style>
