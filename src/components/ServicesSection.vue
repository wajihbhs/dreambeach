<template>
  <section id="services" class="section services">
    <div class="container">
      <div class="services__header">
        <span class="section-tag reveal">{{ t.services.tag }}</span>
        <h2 class="section-heading reveal reveal-delay-1">{{ t.services.title }}</h2>
        <p class="section-subtitle reveal reveal-delay-2">{{ t.services.subtitle }}</p>
      </div>

      <div class="services__grid">
        <article
          v-for="(item, i) in t.services.items"
          :key="i"
          class="service-card reveal"
          :class="`reveal-delay-${i + 1}`"
        >
          <div class="service-card__img-wrap">
            <img :src="serviceImages[i]" :alt="item.title" class="service-card__img" />
            <span v-if="item.tag" class="service-card__tag">{{ item.tag }}</span>
          </div>
          <div class="service-card__body">
            <div class="service-card__icon">{{ serviceIcons[i] }}</div>
            <h3 class="service-card__title">{{ item.title }}</h3>
            <p class="service-card__desc">{{ item.description }}</p>
          </div>
        </article>
      </div>

      <!-- Activities sub-section -->
      <div class="activities">
        <div class="activities__header">
          <span class="section-tag reveal">{{ t.activities.tag }}</span>
          <h2 class="section-heading reveal reveal-delay-1">{{ t.activities.title }}</h2>
          <p class="section-subtitle reveal reveal-delay-2">{{ t.activities.subtitle }}</p>
        </div>

        <div class="activities__grid">
          <div
            v-for="(act, i) in t.activities.items"
            :key="i"
            class="activity-card reveal"
            :class="`reveal-delay-${i + 1}`"
          >
            <div class="activity-card__icon">{{ activityIcons[i] }}</div>
            <h4 class="activity-card__title">{{ act.title }}</h4>
            <p class="activity-card__desc">{{ act.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useLocale } from '../composables/useLocale'
import { useReveal } from '../composables/useReveal'

const { t } = useLocale()
const { observe } = useReveal()
onMounted(() => observe())

const serviceImages = [
  'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
  'https://images.pexels.com/photos/2476340/pexels-photo-2476340.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
  'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
]

const serviceIcons = ['🏡', '🛖', '☂️']
const activityIcons = ['🏐', '🏖️', '⚽', '🌊']
</script>

<style scoped>
.services {
  background: var(--color-neutral-50);
}

.services__header {
  text-align: center;
  margin-bottom: var(--space-8);
}

.services__header .section-subtitle {
  margin: 0 auto;
}

.services__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-4);
  margin-bottom: var(--space-12);
}

.service-card {
  background: white;
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}

.service-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-xl);
}

.service-card__img-wrap {
  position: relative;
  aspect-ratio: 16/10;
  overflow: hidden;
}

.service-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.service-card:hover .service-card__img {
  transform: scale(1.06);
}

.service-card__tag {
  position: absolute;
  top: var(--space-2);
  right: var(--space-2);
  background: var(--color-secondary-500);
  color: white;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.3rem 0.75rem;
  border-radius: var(--radius-full);
}

[dir="rtl"] .service-card__tag {
  right: auto;
  left: var(--space-2);
}

.service-card__body {
  padding: var(--space-3);
}

.service-card__icon {
  font-size: 2rem;
  margin-bottom: var(--space-1);
}

.service-card__title {
  font-family: var(--font-heading);
  font-size: 1.35rem;
  font-weight: 600;
  color: var(--color-neutral-900);
  margin-bottom: var(--space-1);
}

.service-card__desc {
  font-size: 0.9rem;
  color: var(--color-neutral-500);
  line-height: 1.7;
}

/* Activities */
.activities {
  border-top: 1px solid var(--color-neutral-200);
  padding-top: var(--space-12);
}

.activities__header {
  text-align: center;
  margin-bottom: var(--space-8);
}

.activities__header .section-subtitle {
  margin: 0 auto;
}

.activities__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-3);
}

.activity-card {
  text-align: center;
  padding: var(--space-4) var(--space-3);
  background: white;
  border-radius: var(--radius-xl);
  border: 1px solid var(--color-neutral-200);
  transition: all var(--transition-base);
}

.activity-card:hover {
  border-color: var(--color-primary-200);
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}

.activity-card__icon {
  font-size: 2.5rem;
  margin-bottom: var(--space-2);
}

.activity-card__title {
  font-weight: 700;
  font-size: 1rem;
  color: var(--color-neutral-800);
  margin-bottom: var(--space-1);
}

.activity-card__desc {
  font-size: 0.85rem;
  color: var(--color-neutral-500);
  line-height: 1.6;
}

@media (max-width: 900px) {
  .services__grid { grid-template-columns: 1fr 1fr; }
  .activities__grid { grid-template-columns: repeat(2, 1fr); }
  .services__header { margin-bottom: var(--space-6); }
  .activities__header { margin-bottom: var(--space-6); }
}

@media (max-width: 600px) {
  .services__grid { grid-template-columns: 1fr; gap: var(--space-3); }
  .activities__grid { grid-template-columns: repeat(2, 1fr); }
  .services__grid { margin-bottom: var(--space-8); }
}

@media (max-width: 480px) {
  .service-card__body { padding: var(--space-2); }
  .activity-card { padding: var(--space-3) var(--space-2); }
  .activity-card__icon { font-size: 2rem; margin-bottom: var(--space-1); }
  .activities { padding-top: var(--space-8); }
}
</style>
