<template>
  <section id="excursion" class="section excursion">
    <div class="container">
      <!-- Boat excursion -->
      <div class="excursion__header">
        <span class="section-tag reveal">{{ t.excursion.tag }}</span>
        <h2 class="section-heading reveal reveal-delay-1">{{ t.excursion.title }}</h2>
        <p class="section-subtitle reveal reveal-delay-2">{{ t.excursion.subtitle }}</p>
      </div>

      <div class="excursion__grid">
        <!-- Image -->
        <div class="excursion__image reveal">
          <div class="excursion__img-wrap">
            <img
              :src="vedetteImg"
              alt="Balade en vedette"
            />
            <div class="excursion__img-overlay">
              <div class="excursion__img-label">Zawiet El Megueiz</div>
            </div>
          </div>
        </div>

        <!-- Content -->
        <div class="excursion__content">
          <ul class="excursion__features reveal reveal-delay-1">
            <li v-for="(feat, i) in t.excursion.features" :key="i" class="excursion__feature">
              <div class="excursion__feature-dot"></div>
              {{ feat }}
            </li>
          </ul>

          <div class="excursion__destinations reveal reveal-delay-2">
            <div
              v-for="(dest, i) in t.excursion.destinations"
              :key="i"
              class="destination-card"
            >
              <div class="destination-card__num">{{ String(i + 1).padStart(2, '0') }}</div>
              <div>
                <div class="destination-card__name">{{ dest.name }}</div>
                <div class="destination-card__desc">{{ dest.description }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 4x4 Transport -->
      <div class="transport reveal">
        <div class="transport__image">
          <img
            :src="pageroImg"
            alt="4x4 offroad"
          />
        </div>
        <div class="transport__content">
          <div class="transport__icon">🚙</div>
          <h3 class="transport__title">{{ t.transport.title }}</h3>
          <p class="transport__desc">{{ t.transport.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useLocale } from '../composables/useLocale'
import { useReveal } from '../composables/useReveal'
import pageroImg from '../assets/pagero.jpeg'
import vedetteImg from '../assets/vedette.jpeg'

const { t } = useLocale()
const { observe } = useReveal()
onMounted(() => observe())
</script>

<style scoped>
.excursion {
  background: var(--color-neutral-50);
}

.excursion__header {
  text-align: center;
  margin-bottom: var(--space-8);
}

.excursion__header .section-subtitle {
  margin: 0 auto;
}

.excursion__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-8);
  align-items: center;
  margin-bottom: var(--space-10);
}

.excursion__img-wrap {
  position: relative;
  border-radius: var(--radius-xl);
  overflow: hidden;
  aspect-ratio: 4/3;
  box-shadow: var(--shadow-xl);
}

.excursion__img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.excursion__img-wrap:hover img {
  transform: scale(1.04);
}

.excursion__img-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(5,37,54,0.8) 0%, transparent 100%);
  padding: var(--space-4) var(--space-3) var(--space-3);
}

.excursion__img-label {
  color: white;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.05em;
}

.excursion__features {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  margin-bottom: var(--space-4);
}

.excursion__feature {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--color-neutral-700);
  font-size: 1rem;
}

.excursion__feature-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--color-primary-500);
  flex-shrink: 0;
}

.excursion__destinations {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.destination-card {
  display: flex;
  align-items: flex-start;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-3);
  background: white;
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-neutral-200);
  transition: all var(--transition-base);
}

.destination-card:hover {
  border-color: var(--color-primary-300);
  box-shadow: var(--shadow-md);
}

.destination-card__num {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-primary-200);
  line-height: 1;
  flex-shrink: 0;
  min-width: 36px;
}

.destination-card__name {
  font-weight: 700;
  color: var(--color-neutral-800);
  margin-bottom: 0.25rem;
}

.destination-card__desc {
  font-size: 0.875rem;
  color: var(--color-neutral-500);
  line-height: 1.6;
}

/* Transport */
.transport {
  background: linear-gradient(135deg, var(--color-primary-800), var(--color-primary-900));
  border-radius: var(--radius-xl);
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  align-items: center;
  box-shadow: var(--shadow-xl);
}

.transport__image {
  aspect-ratio: 4/3;
  overflow: hidden;
}

.transport__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.transport:hover .transport__image img {
  transform: scale(1.04);
}

.transport__content {
  padding: var(--space-8);
  color: white;
}

.transport__icon {
  font-size: 3rem;
  margin-bottom: var(--space-3);
}

.transport__title {
  font-family: var(--font-heading);
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: var(--space-2);
  color: white;
}

.transport__desc {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.75;
  font-size: 1rem;
}

@media (max-width: 900px) {
  .excursion__grid { grid-template-columns: 1fr; }
  .transport { grid-template-columns: 1fr; }
  .transport__content { padding: var(--space-5); }
  .excursion__header { margin-bottom: var(--space-6); }
}

@media (max-width: 600px) {
  .transport__content { padding: var(--space-4); }
  .transport__title { font-size: 1.4rem; }
  .transport__icon { font-size: 2.5rem; margin-bottom: var(--space-2); }
  .destination-card { padding: var(--space-2); }
  .excursion__grid { margin-bottom: var(--space-8); }
}

@media (max-width: 480px) {
  .transport__content { padding: var(--space-3); }
  .transport__title { font-size: 1.25rem; }
  .transport__desc { font-size: 0.9rem; }
  .excursion__feature { font-size: 0.9rem; gap: var(--space-1); }
  .destination-card__num { font-size: 1.25rem; min-width: 28px; }
  .excursion__header { margin-bottom: var(--space-4); }
}
</style>
