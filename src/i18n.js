import { computed, ref, watch } from 'vue'
import { content } from './data/profile'

export const languages = ['en', 'es']

function initialLang() {
  try {
    const saved = localStorage.getItem('lang')
    if (languages.includes(saved)) return saved
  } catch {
    // storage unavailable: fall back to the browser language
  }
  const browser = (navigator.language || 'en').slice(0, 2).toLowerCase()
  return languages.includes(browser) ? browser : 'en'
}

export const lang = ref(initialLang())

watch(
  lang,
  (value) => {
    document.documentElement.lang = value
    try {
      localStorage.setItem('lang', value)
    } catch {
      // ignore: the choice just won't persist
    }
  },
  { immediate: true },
)

export const t = computed(() => content[lang.value])
