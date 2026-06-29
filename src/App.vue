<template>
  <div :dir="isRTL ? 'rtl' : 'ltr'" :class="{ 'rtl': isRTL }">
    <AppNav />
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <RestaurantSection />
      <ExcursionSection />
      <GallerySection />
      <ContactSection />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppNav from './components/AppNav.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import RestaurantSection from './components/RestaurantSection.vue'
import ExcursionSection from './components/ExcursionSection.vue'
import GallerySection from './components/GallerySection.vue'
import ContactSection from './components/ContactSection.vue'
import AppFooter from './components/AppFooter.vue'
import { useLocale } from './composables/useLocale'

const { isRTL } = useLocale()
</script>

<style>
.rtl .section-heading,
.rtl .section-subtitle,
.rtl .section-tag {
  font-family: var(--font-arabic), var(--font-body);
  text-align: right;
}

.rtl .section-subtitle {
  margin-right: 0;
  margin-left: auto;
}

[dir="rtl"] .section-subtitle {
  margin-right: 0;
  margin-left: auto;
}
</style>
