<template>
  <section id="gallery" class="section gallery">
    <div class="container">
      <div class="gallery__header">
        <span class="section-tag reveal">{{ t.gallery.tag }}</span>
        <h2 class="section-heading reveal reveal-delay-1">{{ t.gallery.title }}</h2>
        <p class="section-subtitle reveal reveal-delay-2">{{ t.gallery.subtitle }}</p>
      </div>

      <div class="gallery__grid">
        <div
          v-for="(img, i) in galleryItems"
          :key="i"
          class="gallery__item reveal"
          :class="[img.span, `reveal-delay-${(i % 4) + 1}`]"
          @click="openLightbox(i)"
        >
          <img :src="img.src" :alt="img.alt" loading="lazy" />
          <div class="gallery__item-overlay">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <Teleport to="body">
      <div v-if="lightboxIndex !== null" class="lightbox" @click.self="closeLightbox">
        <button class="lightbox__close" @click="closeLightbox" aria-label="Fermer">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
        <button class="lightbox__nav lightbox__nav--prev" @click="prevImage" aria-label="Précédent">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="28" height="28">
            <polyline points="15,18 9,12 15,6"/>
          </svg>
        </button>
        <img :src="galleryItems[lightboxIndex].src" :alt="galleryItems[lightboxIndex].alt" class="lightbox__img" />
        <button class="lightbox__nav lightbox__nav--next" @click="nextImage" aria-label="Suivant">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="28" height="28">
            <polyline points="9,18 15,12 9,6"/>
          </svg>
        </button>
        <div class="lightbox__counter">{{ (lightboxIndex ?? 0) + 1 }} / {{ galleryItems.length }}</div>
      </div>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useLocale } from '../composables/useLocale'
import { useReveal } from '../composables/useReveal'

const { t } = useLocale()
const { observe } = useReveal()
onMounted(() => observe())

const lightboxIndex = ref<number | null>(null)

const galleryItems = [
  {
    src: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    alt: 'Plage de Degla – Haouaria',
    span: 'gallery__item--tall',
  },
  {
    src: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
    alt: 'Parasols sur la plage',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
    alt: 'Mer Méditerranée',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
    alt: 'Bungalow vue sur mer',
    span: 'gallery__item--wide',
  },
  {
    src: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
    alt: 'Restaurant bio healthy',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
    alt: 'Légumes frais de la ferme',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    alt: 'Vedette – Balade en mer',
    span: 'gallery__item--tall',
  },
  {
    src: 'https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
    alt: 'Volleyball sur la plage',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/1592364/pexels-photo-1592364.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
    alt: 'Transport 4x4 dunes',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/1680140/pexels-photo-1680140.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
    alt: 'Famille sur la plage',
    span: 'gallery__item--wide',
  },
]

function openLightbox(index: number) {
  lightboxIndex.value = index
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  lightboxIndex.value = null
  document.body.style.overflow = ''
}

function nextImage() {
  if (lightboxIndex.value !== null) {
    lightboxIndex.value = (lightboxIndex.value + 1) % galleryItems.length
  }
}

function prevImage() {
  if (lightboxIndex.value !== null) {
    lightboxIndex.value = (lightboxIndex.value - 1 + galleryItems.length) % galleryItems.length
  }
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowRight') nextImage()
  if (e.key === 'ArrowLeft') prevImage()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.gallery {
  background: white;
}

.gallery__header {
  text-align: center;
  margin-bottom: var(--space-8);
}

.gallery__header .section-subtitle {
  margin: 0 auto;
}

.gallery__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 220px;
  gap: var(--space-2);
}

.gallery__item {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  cursor: pointer;
  background: var(--color-neutral-200);
}

.gallery__item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.gallery__item:hover img {
  transform: scale(1.07);
}

.gallery__item-overlay {
  position: absolute;
  inset: 0;
  background: rgba(5, 37, 54, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background var(--transition-base);
}

.gallery__item-overlay svg {
  width: 48px;
  height: 48px;
  color: white;
  opacity: 0;
  transform: scale(0.7);
  transition: all var(--transition-base);
}

.gallery__item:hover .gallery__item-overlay {
  background: rgba(5, 37, 54, 0.4);
}

.gallery__item:hover .gallery__item-overlay svg {
  opacity: 1;
  transform: scale(1);
}

.gallery__item--wide {
  grid-column: span 2;
}

.gallery__item--tall {
  grid-row: span 2;
}

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.92);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-4);
}

.lightbox__img {
  max-width: 90vw;
  max-height: 85vh;
  object-fit: contain;
  border-radius: var(--radius-lg);
  box-shadow: 0 0 80px rgba(0, 0, 0, 0.5);
}

.lightbox__close {
  position: absolute;
  top: var(--space-3);
  right: var(--space-3);
  color: white;
  background: rgba(255,255,255,0.1);
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background var(--transition-fast);
  cursor: pointer;
}

.lightbox__close:hover {
  background: rgba(255,255,255,0.2);
}

.lightbox__nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  background: rgba(255,255,255,0.1);
  border-radius: 50%;
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background var(--transition-fast);
  cursor: pointer;
}

.lightbox__nav:hover {
  background: rgba(255,255,255,0.25);
}

.lightbox__nav--prev { left: var(--space-3); }
.lightbox__nav--next { right: var(--space-3); }

.lightbox__counter {
  position: absolute;
  bottom: var(--space-3);
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255,255,255,0.7);
  font-size: 0.875rem;
  font-weight: 500;
}

@media (max-width: 900px) {
  .gallery__grid {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 200px;
  }
  .gallery__item--wide { grid-column: span 2; }
  .gallery__item--tall { grid-row: span 1; }
  .gallery__header { margin-bottom: var(--space-6); }
}

@media (max-width: 600px) {
  .gallery__grid { grid-auto-rows: 170px; gap: var(--space-1); }
}

@media (max-width: 480px) {
  .gallery__grid {
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 130px;
    gap: 0.5rem;
  }
  .gallery__item--wide { grid-column: span 2; }
  .gallery__item--tall { grid-row: span 1; }
  .gallery__header { margin-bottom: var(--space-4); }
  .lightbox__nav { width: 40px; height: 40px; }
  .lightbox__img { max-width: 95vw; max-height: 80vh; }
}

@media (max-width: 360px) {
  .gallery__grid {
    grid-template-columns: 1fr;
    grid-auto-rows: 200px;
  }
  .gallery__item--wide { grid-column: span 1; }
}
</style>
