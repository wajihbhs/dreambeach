<template>
  <section id="home" class="hero">
    <div class="hero__bg">
      <img
        src="https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
        alt="Plage de Degla, Tunisie"
        class="hero__bg-img"
      />
      <div class="hero__overlay"></div>
    </div>

    <!-- Floating badge -->
    <div class="hero__content container">
      <div class="hero__badge animate-fadeInUp" style="animation-delay:0.1s">
        <span class="hero__badge-dot"></span>
        {{ t.hero.badge }}
      </div>

      <h1 class="hero__title animate-fadeInUp" style="animation-delay:0.25s">
        <span v-for="(line, i) in titleLines" :key="i">
          {{ line }}<br v-if="i < titleLines.length - 1" />
        </span>
      </h1>

      <p class="hero__location animate-fadeInUp" style="animation-delay:0.4s">
        <svg class="hero__pin" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 0C5.24 0 3 2.24 3 5c0 3.75 5 11 5 11s5-7.25 5-11c0-2.76-2.24-5-5-5zm0 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
        </svg>
        {{ t.hero.subtitle }}
      </p>

      <div class="hero__actions animate-fadeInUp" style="animation-delay:0.55s">
        <a href="#contact" class="btn btn-primary hero__cta">
          {{ t.hero.cta }}
          <svg viewBox="0 0 20 20" fill="currentColor" class="hero__cta-icon">
            <path fill-rule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10z" clip-rule="evenodd"/>
          </svg>
        </a>
        <a href="#about" class="btn btn-ghost hero__cta-secondary">
          {{ t.hero.ctaSecondary }}
        </a>
      </div>

      <!-- Phones bar -->
      <div class="hero__phones animate-fadeInUp" style="animation-delay:0.7s">
        <a v-for="phone in phones" :key="phone" :href="`tel:${phone.replace(/\s/g,'')}`" class="hero__phone">
          <svg viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 16.352V17.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5z" clip-rule="evenodd"/>
          </svg>
          {{ phone }}
        </a>
      </div>
    </div>

    <!-- Wave divider -->
    <div class="hero__wave">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#fafaf9"/>
      </svg>
    </div>

    <!-- Scroll indicator -->
    <div class="hero__scroll animate-float">
      <div class="hero__scroll-line"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useLocale } from '../composables/useLocale'

const { t } = useLocale()

const phones = ['94 549 368', '24 833 440', '24 22 33 45']

const titleLines = computed(() => t.value.hero.title.split('\n'))
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero__bg {
  position: absolute;
  inset: 0;
}

.hero__bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    150deg,
    rgba(5, 37, 54, 0.85) 0%,
    rgba(10, 79, 114, 0.65) 50%,
    rgba(5, 37, 54, 0.45) 100%
  );
}

.hero__content {
  position: relative;
  z-index: 2;
  padding-top: 100px;
  padding-bottom: var(--space-12);
}

.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: white;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.5rem 1.25rem;
  border-radius: var(--radius-full);
  margin-bottom: var(--space-3);
}

.hero__badge-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-accent-400);
  box-shadow: 0 0 0 3px rgba(61, 168, 74, 0.3);
  animation: pulse 2s ease infinite;
}

@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 3px rgba(61, 168, 74, 0.3); }
  50% { box-shadow: 0 0 0 6px rgba(61, 168, 74, 0.1); }
}

.hero__title {
  font-family: var(--font-heading);
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 700;
  color: white;
  line-height: 1.1;
  margin-bottom: var(--space-3);
  max-width: 700px;
  text-shadow: 0 2px 20px rgba(0,0,0,0.3);
}

.hero__location {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  margin-bottom: var(--space-5);
}

.hero__pin {
  width: 14px;
  height: 14px;
  color: var(--color-secondary-400);
  flex-shrink: 0;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-bottom: var(--space-6);
}

.hero__cta-icon {
  width: 18px;
  height: 18px;
}

.btn-ghost {
  background: rgba(255,255,255,0.12);
  color: white;
  border: 1.5px solid rgba(255,255,255,0.35);
  backdrop-filter: blur(4px);
  padding: 0.875rem 2rem;
  border-radius: var(--radius-full);
  font-size: 0.95rem;
  font-weight: 600;
  transition: all var(--transition-base);
  display: inline-flex;
  align-items: center;
}

.btn-ghost:hover {
  background: rgba(255,255,255,0.22);
  transform: translateY(-2px);
}

.hero__phones {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.hero__phone {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  font-size: 0.9rem;
  font-weight: 600;
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.2);
  padding: 0.5rem 1rem;
  border-radius: var(--radius-full);
  backdrop-filter: blur(4px);
  transition: background var(--transition-fast);
}

.hero__phone:hover {
  background: rgba(255,255,255,0.2);
}

.hero__phone svg {
  width: 15px;
  height: 15px;
  color: var(--color-accent-400);
}

.hero__wave {
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  z-index: 2;
  line-height: 0;
}

.hero__wave svg {
  width: 100%;
  height: 80px;
}

.hero__scroll {
  position: absolute;
  bottom: 90px;
  right: var(--space-6);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero__scroll-line {
  width: 2px;
  height: 48px;
  background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.6));
  border-radius: 2px;
}

@media (max-width: 768px) {
  .hero__content { padding-top: 80px; padding-bottom: var(--space-8); }
  .hero__badge { font-size: 0.7rem; padding: 0.4rem 1rem; margin-bottom: var(--space-2); }
  .hero__title { max-width: 100%; margin-bottom: var(--space-2); }
  .hero__location { font-size: 0.9rem; margin-bottom: var(--space-4); }
  .hero__actions { margin-bottom: var(--space-4); }
}

@media (max-width: 640px) {
  .hero__phones { gap: var(--space-1); flex-wrap: wrap; }
  .hero__phone { font-size: 0.8rem; padding: 0.4rem 0.75rem; }
  .hero__scroll { display: none; }
}

@media (max-width: 480px) {
  .hero__content { padding-top: 72px; }
  .hero__phones { flex-direction: column; align-items: flex-start; gap: 0.5rem; }
  .hero__phone { width: 100%; justify-content: center; }
  .hero__actions { flex-direction: column; gap: var(--space-1); }
  .btn-ghost { width: 100%; justify-content: center; }
  .hero__wave svg { height: 50px; }
}
</style>
