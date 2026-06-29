import { ref, computed, watch } from 'vue'
import { translations, type Locale } from '../locales'

const currentLocale = ref<Locale>('fr')

export function useLocale() {
  const t = computed(() => translations[currentLocale.value])

  const isRTL = computed(() => currentLocale.value === 'ar')

  function setLocale(locale: Locale) {
    currentLocale.value = locale
    document.documentElement.lang = locale
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr'
  }

  watch(
    currentLocale,
    (locale) => {
      document.documentElement.lang = locale
      document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr'
    },
    { immediate: true },
  )

  return { t, currentLocale, isRTL, setLocale }
}
