<template>
  <section id="about" class="section about">
    <div class="container">
      <div class="about__grid">
        <!-- Images -->
        <div class="about__images reveal">
          <div class="about__img-main">
            <img
              src="https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
              alt="Bungalow face à la mer"
            />
          </div>
          <div class="about__img-secondary">
            <img
              src="https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=400&h=320&dpr=1"
              alt="Mer Méditerranée"
            />
          </div>
          <div class="about__img-badge">
            <span class="about__img-badge-num">100%</span>
            <span class="about__img-badge-text">Bio</span>
          </div>
        </div>

        <!-- Content -->
        <div class="about__content">
          <span class="section-tag reveal">{{ t.about.tag }}</span>
          <h2 class="section-heading reveal reveal-delay-1">{{ t.about.title }}</h2>
          <p class="about__desc reveal reveal-delay-2">{{ t.about.description }}</p>

          <div class="about__values">
            <div
              v-for="(val, i) in t.about.values"
              :key="i"
              class="about__value reveal"
              :class="`reveal-delay-${i + 1}`"
            >
              <div class="about__value-icon">{{ val.icon }}</div>
              <div>
                <div class="about__value-title">{{ val.title }}</div>
                <div class="about__value-text">{{ val.text }}</div>
              </div>
            </div>
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
</script>

<style scoped>
.about {
  background: white;
}

.about__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-10);
  align-items: center;
}

/* Images column */
.about__images {
  position: relative;
}

.about__img-main {
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-xl);
  aspect-ratio: 4/3;
}

.about__img-main img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.about__img-main:hover img {
  transform: scale(1.04);
}

.about__img-secondary {
  position: absolute;
  bottom: -var(--space-4);
  right: -var(--space-4);
  width: 45%;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-xl);
  border: 4px solid white;
  bottom: -2rem;
  right: -2rem;
  aspect-ratio: 1;
}

.about__img-secondary img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.about__img-badge {
  position: absolute;
  top: -1.5rem;
  left: -1.5rem;
  background: var(--color-accent-500);
  color: white;
  border-radius: var(--radius-lg);
  padding: 1rem 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: var(--shadow-lg);
  border: 3px solid white;
}

.about__img-badge-num {
  font-family: var(--font-heading);
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 1;
}

.about__img-badge-text {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

/* Content column */
.about__content {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.about__desc {
  color: var(--color-neutral-600);
  line-height: 1.75;
  font-size: 1.05rem;
  margin-bottom: var(--space-2);
}

.about__values {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  margin-top: var(--space-2);
}

.about__value {
  display: flex;
  align-items: flex-start;
  gap: var(--space-2);
  padding: var(--space-2);
  border-radius: var(--radius-lg);
  background: var(--color-neutral-50);
  border: 1px solid var(--color-neutral-200);
  transition: border-color var(--transition-base), box-shadow var(--transition-base);
}

.about__value:hover {
  border-color: var(--color-primary-200);
  box-shadow: var(--shadow-md);
}

.about__value-icon {
  font-size: 1.75rem;
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
}

.about__value-title {
  font-weight: 600;
  color: var(--color-neutral-800);
  margin-bottom: 0.25rem;
}

.about__value-text {
  font-size: 0.875rem;
  color: var(--color-neutral-500);
  line-height: 1.6;
}

@media (max-width: 900px) {
  .about__grid {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }

  .about__images {
    padding-bottom: 2.5rem;
    padding-right: 2.5rem;
  }
}

@media (max-width: 600px) {
  .about__images {
    padding-bottom: 2rem;
    padding-right: 2rem;
  }
}

@media (max-width: 480px) {
  .about__img-secondary {
    width: 38%;
    right: -1rem;
    bottom: -1rem;
  }

  .about__img-badge {
    top: -0.75rem;
    left: -0.25rem;
    padding: 0.625rem 0.875rem;
    border-radius: var(--radius-md);
  }

  .about__img-badge-num { font-size: 1.35rem; }
  .about__img-badge-text { font-size: 0.6rem; }

  .about__images {
    padding-bottom: 1.75rem;
    padding-right: 1.75rem;
  }
}

@media (max-width: 360px) {
  .about__img-secondary { display: none; }
  .about__images { padding-bottom: 0; padding-right: 0; }
  .about__img-badge { top: 0.5rem; left: 0.5rem; }
  .about__value { gap: var(--space-1); }
}
</style>
