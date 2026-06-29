<template>
  <header class="nav" :class="{ 'nav--scrolled': scrolled, 'nav--open': menuOpen }">
    <div class="nav__container container">
      <!-- Logo -->
      <a href="#home" class="nav__logo" @click="menuOpen = false">
        <div class="nav__logo-icon">
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="#0a4f72"/>
            <path d="M20 8C14 8 9 13 9 19c0 4 2 7.5 5 9.5V32h12v-3.5c3-2 5-5.5 5-9.5 0-6-5-11-11-11z" fill="#4dacd5"/>
            <path d="M20 8C20 8 16 14 16 19a4 4 0 0 0 8 0c0-5-4-11-4-11z" fill="#2d9b4e"/>
            <path d="M14 12c-1.5 2-2 4.5-2 7" stroke="#80c4e1" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </div>
        <div class="nav__logo-text">
          <span class="nav__logo-name">Healthy</span>
          <span class="nav__logo-sub">Dream House</span>
        </div>
      </a>

      <!-- Desktop links -->
      <nav class="nav__links">
        <a v-for="link in navLinks" :key="link.key" :href="link.href" class="nav__link">
          {{ (t.nav as Record<string, string>)[link.key] }}
        </a>
      </nav>

      <!-- Lang switcher + mobile toggle -->
      <div class="nav__actions">
        <div class="lang-switcher">
          <button
            v-for="lang in langs"
            :key="lang.code"
            class="lang-btn"
            :class="{ active: currentLocale === lang.code }"
            @click="setLocale(lang.code as Locale)"
          >
            {{ lang.label }}
          </button>
        </div>

        <button class="nav__burger" @click="menuOpen = !menuOpen" :aria-label="menuOpen ? 'Fermer' : 'Menu'">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <div class="nav__mobile" :class="{ 'nav__mobile--open': menuOpen }">
      <a
        v-for="link in navLinks"
        :key="link.key"
        :href="link.href"
        class="nav__mobile-link"
        @click="menuOpen = false"
      >
        {{ (t.nav as Record<string, string>)[link.key] }}
      </a>
      <div class="lang-switcher lang-switcher--mobile">
        <button
          v-for="lang in langs"
          :key="lang.code"
          class="lang-btn"
          :class="{ active: currentLocale === lang.code }"
          @click="setLocale(lang.code as Locale); menuOpen = false"
        >
          {{ lang.label }}
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useLocale } from '../composables/useLocale'
import type { Locale } from '../locales'

const { t, currentLocale, setLocale } = useLocale()

const scrolled = ref(false)
const menuOpen = ref(false)

const langs = [
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
  { code: 'ar', label: 'ع' },
]

const navLinks = [
  { key: 'about', href: '#about' },
  { key: 'services', href: '#services' },
  { key: 'restaurant', href: '#restaurant' },
  { key: 'excursion', href: '#excursion' },
  { key: 'gallery', href: '#gallery' },
  { key: 'contact', href: '#contact' },
]

function onScroll() {
  scrolled.value = window.scrollY > 60
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: background var(--transition-base), box-shadow var(--transition-base);
}

.nav--scrolled,
.nav--open {
  background: rgba(255, 255, 255, 0.97);
  backdrop-filter: blur(12px);
  box-shadow: var(--shadow-md);
}

.nav__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  gap: var(--space-3);
}

/* Logo */
.nav__logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-shrink: 0;
}

.nav__logo-icon svg {
  width: 40px;
  height: 40px;
}

.nav__logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1.15;
}

.nav__logo-name {
  font-family: var(--font-heading);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-primary-800);
}

.nav--scrolled .nav__logo-name,
.nav--open .nav__logo-name {
  color: var(--color-primary-800);
}

.nav:not(.nav--scrolled):not(.nav--open) .nav__logo-name {
  color: white;
}

.nav__logo-sub {
  font-size: 0.65rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-accent-500);
}

/* Nav links */
.nav__links {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.nav__link {
  font-size: 0.875rem;
  font-weight: 500;
  color: white;
  transition: color var(--transition-fast);
  position: relative;
  padding-bottom: 2px;
}

.nav__link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--color-secondary-400);
  border-radius: 2px;
  transform: scaleX(0);
  transition: transform var(--transition-base);
}

.nav__link:hover::after { transform: scaleX(1); }

.nav--scrolled .nav__link,
.nav--open .nav__link {
  color: var(--color-neutral-700);
}

.nav--scrolled .nav__link:hover,
.nav--open .nav__link:hover {
  color: var(--color-primary-700);
}

/* Actions */
.nav__actions {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

/* Lang switcher */
.lang-switcher {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.15);
  border-radius: var(--radius-full);
  padding: 3px;
  gap: 2px;
  backdrop-filter: blur(4px);
}

.nav--scrolled .lang-switcher,
.nav--open .lang-switcher {
  background: var(--color-neutral-100);
}

.lang-btn {
  padding: 0.25rem 0.625rem;
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  font-weight: 600;
  color: rgba(255,255,255,0.75);
  transition: all var(--transition-fast);
  cursor: pointer;
  letter-spacing: 0.05em;
}

.nav--scrolled .lang-btn,
.nav--open .lang-btn {
  color: var(--color-neutral-500);
}

.lang-btn.active {
  background: white;
  color: var(--color-primary-700);
  box-shadow: var(--shadow-sm);
}

.nav--scrolled .lang-btn.active,
.nav--open .lang-btn.active {
  background: var(--color-primary-700);
  color: white;
}

/* Burger */
.nav__burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 4px;
  width: 36px;
}

.nav__burger span {
  display: block;
  height: 2px;
  background: white;
  border-radius: 2px;
  transition: all var(--transition-base);
}

.nav--scrolled .nav__burger span,
.nav--open .nav__burger span {
  background: var(--color-neutral-700);
}

/* Mobile menu */
.nav__mobile {
  display: none;
  flex-direction: column;
  gap: var(--space-1);
  padding: 0 var(--space-3);
  background: rgba(255, 255, 255, 0.98);
  max-height: 0;
  overflow: hidden;
  transition: max-height var(--transition-slow), padding var(--transition-slow);
}

.nav__mobile--open {
  max-height: 500px;
  padding: var(--space-2) var(--space-3) var(--space-3);
}

.nav__mobile-link {
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-neutral-700);
  padding: 0.625rem 0;
  border-bottom: 1px solid var(--color-neutral-200);
  display: block;
}

.nav__mobile-link:last-of-type {
  border-bottom: none;
}

.lang-switcher--mobile {
  margin-top: var(--space-2);
  justify-content: flex-start;
  background: var(--color-neutral-100);
}

@media (max-width: 900px) {
  .nav__links { display: none; }
  .nav__burger { display: flex; }
  .nav__mobile { display: flex; }
}

@media (max-width: 480px) {
  .nav__container { height: 60px; gap: var(--space-1); }
  .nav__logo-icon svg { width: 34px; height: 34px; }
  .nav__logo-name { font-size: 0.95rem; }
  .nav__logo-sub { font-size: 0.6rem; }
  .lang-btn { padding: 0.2rem 0.5rem; font-size: 0.7rem; }
  .nav__burger { width: 32px; }
  .nav__mobile--open { padding: var(--space-2); }
  .nav__mobile-link { font-size: 0.95rem; padding: 0.75rem 0; }
}
</style>
