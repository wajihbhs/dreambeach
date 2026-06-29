<template>
  <section id="restaurant" class="section restaurant">
    <div class="restaurant__bg-pattern"></div>
    <div class="container">
      <div class="restaurant__grid">
        <!-- Content -->
        <div class="restaurant__content">
          <span class="section-tag reveal">{{ t.restaurant.tag }}</span>
          <h2 class="section-heading reveal reveal-delay-1">{{ t.restaurant.title }}</h2>
          <p class="restaurant__subtitle reveal reveal-delay-2">{{ t.restaurant.subtitle }}</p>
          <p class="restaurant__desc reveal reveal-delay-2">{{ t.restaurant.description }}</p>

          <ul class="restaurant__features reveal reveal-delay-3">
            <li v-for="(feat, i) in t.restaurant.features" :key="i" class="restaurant__feature">
              <svg class="feature-check" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5z" clip-rule="evenodd"/>
              </svg>
              {{ feat }}
            </li>
          </ul>

          <!-- Basket CTA -->
          <div class="restaurant__basket reveal reveal-delay-4">
            <div class="restaurant__basket-icon">🧺</div>
            <div>
              <div class="restaurant__basket-title">{{ t.restaurant.basket }}</div>
              <p class="restaurant__basket-desc">{{ t.restaurant.basketDesc }}</p>
            </div>
          </div>
        </div>

        <!-- Images -->
        <div class="restaurant__images reveal">
          <div class="restaurant__img-main">
            <img
              src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
              alt="Cuisine bio saine"
            />
          </div>
          <div class="restaurant__img-grid">
            <div class="restaurant__img-small">
              <img
                src="https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
                alt="Légumes frais de la ferme"
              />
            </div>
            <div class="restaurant__img-small">
              <img
                src="https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
                alt="Sandwichs frais"
              />
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
.restaurant {
  position: relative;
  background: var(--color-primary-900);
  overflow: hidden;
  color: white;
}

.restaurant__bg-pattern {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle at 20% 80%, rgba(11, 123, 179, 0.15) 0%, transparent 60%),
                    radial-gradient(circle at 80% 20%, rgba(45, 155, 78, 0.1) 0%, transparent 50%);
}

.restaurant__grid {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-10);
  align-items: center;
}

/* Content */
.restaurant__content .section-tag {
  background: rgba(45, 155, 78, 0.2);
  color: var(--color-accent-400);
  border: 1px solid rgba(45, 155, 78, 0.3);
}

.restaurant__content .section-heading {
  color: white;
}

.restaurant__subtitle {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  font-style: italic;
  margin-bottom: var(--space-3);
}

.restaurant__desc {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.75;
  margin-bottom: var(--space-4);
}

.restaurant__features {
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-1);
  margin-bottom: var(--space-5);
}

.restaurant__feature {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.85);
}

.feature-check {
  width: 18px;
  height: 18px;
  color: var(--color-accent-400);
  flex-shrink: 0;
}

.restaurant__basket {
  display: flex;
  align-items: flex-start;
  gap: var(--space-2);
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: var(--radius-xl);
  padding: var(--space-3);
  backdrop-filter: blur(8px);
}

.restaurant__basket-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.restaurant__basket-title {
  font-weight: 700;
  font-size: 1.05rem;
  margin-bottom: 0.375rem;
  color: var(--color-secondary-300);
}

.restaurant__basket-desc {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.65;
}

/* Images */
.restaurant__img-main {
  border-radius: var(--radius-xl);
  overflow: hidden;
  aspect-ratio: 4/3;
  margin-bottom: var(--space-3);
  box-shadow: var(--shadow-xl);
}

.restaurant__img-main img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.restaurant__img-main:hover img {
  transform: scale(1.04);
}

.restaurant__img-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-2);
}

.restaurant__img-small {
  border-radius: var(--radius-lg);
  overflow: hidden;
  aspect-ratio: 4/3;
  box-shadow: var(--shadow-lg);
}

.restaurant__img-small img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.restaurant__img-small:hover img {
  transform: scale(1.06);
}

@media (max-width: 900px) {
  .restaurant__grid { grid-template-columns: 1fr; }
  .restaurant__features { grid-template-columns: 1fr; }
}

@media (max-width: 600px) {
  .restaurant__basket { flex-direction: column; align-items: flex-start; gap: var(--space-1); }
  .restaurant__img-grid { gap: var(--space-1); }
  .restaurant__basket { padding: var(--space-2); }
}

@media (max-width: 480px) {
  .restaurant__content { gap: var(--space-1); }
  .restaurant__subtitle { font-size: 1rem; margin-bottom: var(--space-2); }
  .restaurant__desc { margin-bottom: var(--space-3); font-size: 0.95rem; }
  .restaurant__basket-icon { font-size: 2rem; }
  .restaurant__img-main { margin-bottom: var(--space-2); }
}
</style>
