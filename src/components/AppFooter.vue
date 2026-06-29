<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__grid">
        <!-- Brand -->
        <div class="footer__brand">
          <div class="footer__logo">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="footer__logo-svg">
              <circle cx="20" cy="20" r="20" fill="rgba(255,255,255,0.1)"/>
              <path d="M20 8C14 8 9 13 9 19c0 4 2 7.5 5 9.5V32h12v-3.5c3-2 5-5.5 5-9.5 0-6-5-11-11-11z" fill="#4dacd5"/>
              <path d="M20 8C20 8 16 14 16 19a4 4 0 0 0 8 0c0-5-4-11-4-11z" fill="#2d9b4e"/>
            </svg>
            <div>
              <div class="footer__logo-name">Healthy Dream House</div>
              <div class="footer__logo-tag">{{ t.footer.tagline }}</div>
            </div>
          </div>
          <p class="footer__desc">
            Plage Degla · Zawiet El Megueiz<br/>
            Haouaria, Nabeul – Tunisie
          </p>
          <div class="footer__phones">
            <a v-for="phone in phones" :key="phone" :href="`tel:${phone.replace(/\s/g,'')}`" class="footer__phone">
              {{ phone }}
            </a>
          </div>
        </div>

        <!-- Links -->
        <div class="footer__nav">
          <div class="footer__nav-title">Navigation</div>
          <nav class="footer__links">
            <a v-for="(link, i) in navLinks" :key="i" :href="link.href" class="footer__link">
              {{ t.footer.links[i] }}
            </a>
          </nav>
        </div>

        <!-- Services -->
        <div class="footer__services-col">
          <div class="footer__nav-title">Services</div>
          <div class="footer__service-list">
            <div v-for="srv in serviceList" :key="srv" class="footer__service-item">
              <span class="footer__dot"></span>{{ srv }}
            </div>
          </div>
        </div>
      </div>

      <div class="footer__bottom">
        <span>{{ t.footer.rights }}</span>
        <div class="footer__badges">
          <span class="footer__badge">🌿 100% Bio</span>
          <span class="footer__badge">👨‍👩‍👧‍👦 Family</span>
          <span class="footer__badge">🚫🍷 Alcohol Free</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useLocale } from '../composables/useLocale'

const { t, currentLocale } = useLocale()

const phones = ['94 549 368', '24 833 440', '24 22 33 45']

const navLinks = [
  { href: '#home' },
  { href: '#services' },
  { href: '#restaurant' },
  { href: '#excursion' },
  { href: '#contact' },
]

const serviceListByLocale: Record<string, string[]> = {
  fr: ['Location Bungalow', 'Location Chalet', 'Parasols & Transats', 'Restaurant Bio', 'Balade en Mer', 'Transport 4×4'],
  en: ['Bungalow Rental', 'Chalet Rental', 'Parasols & Sun Loungers', 'Organic Restaurant', 'Sea Excursions', '4×4 Transport'],
  ar: ['إيجار بانغالو', 'إيجار شاليه', 'مظلات وكراسي', 'مطعم عضوي', 'رحلات بحرية', 'نقل 4×4'],
}

const serviceList = computed(() => serviceListByLocale[currentLocale.value] || serviceListByLocale.fr)
</script>

<style scoped>
.footer {
  background: var(--color-neutral-900);
  color: rgba(255, 255, 255, 0.7);
  padding: var(--space-10) 0 0;
}

.footer__grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: var(--space-8);
  margin-bottom: var(--space-8);
}

/* Brand */
.footer__logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: var(--space-3);
}

.footer__logo-svg {
  width: 44px;
  height: 44px;
  flex-shrink: 0;
}

.footer__logo-name {
  font-family: var(--font-heading);
  font-size: 1.1rem;
  font-weight: 700;
  color: white;
  line-height: 1.2;
}

.footer__logo-tag {
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  color: var(--color-accent-400);
}

.footer__desc {
  font-size: 0.9rem;
  line-height: 1.7;
  margin-bottom: var(--space-3);
}

.footer__phones {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.footer__phone {
  font-size: 0.9rem;
  font-weight: 600;
  color: rgba(255,255,255,0.85);
  transition: color var(--transition-fast);
}

.footer__phone:hover {
  color: var(--color-secondary-300);
}

/* Nav */
.footer__nav-title {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.4);
  margin-bottom: var(--space-2);
}

.footer__links {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.footer__link {
  font-size: 0.9rem;
  color: rgba(255,255,255,0.65);
  transition: color var(--transition-fast);
}

.footer__link:hover {
  color: white;
}

/* Services */
.footer__service-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.footer__service-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: rgba(255,255,255,0.65);
}

.footer__dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--color-primary-400);
  flex-shrink: 0;
}

/* Bottom */
.footer__bottom {
  border-top: 1px solid rgba(255,255,255,0.08);
  padding: var(--space-4) 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--space-2);
  font-size: 0.8rem;
  color: rgba(255,255,255,0.4);
}

.footer__badges {
  display: flex;
  gap: var(--space-2);
  flex-wrap: wrap;
}

.footer__badge {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: var(--radius-full);
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  color: rgba(255,255,255,0.6);
}

@media (max-width: 900px) {
  .footer__grid { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 600px) {
  .footer__grid { grid-template-columns: 1fr; }
  .footer__bottom { flex-direction: column; text-align: center; }
}

@media (max-width: 480px) {
  .footer { padding: var(--space-8) 0 0; }
  .footer__grid { gap: var(--space-5); margin-bottom: var(--space-5); }
  .footer__badges { justify-content: center; gap: var(--space-1); }
  .footer__logo-name { font-size: 1rem; }
  .footer__bottom { gap: var(--space-1); padding: var(--space-3) 0; }
}
</style>
