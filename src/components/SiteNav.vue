<script setup>
import { computed } from 'vue'
import { shared } from '../data/profile'
import { lang, languages, t } from '../i18n'

const links = computed(() => [
  { href: '#work', label: t.value.nav.work },
  { href: '#how', label: t.value.nav.how },
  { href: '#beyond', label: t.value.nav.beyond },
  { href: '#contact', label: t.value.nav.contact },
])
</script>

<template>
  <header class="nav-wrap">
    <nav class="container nav" aria-label="Main">
      <a href="#top" class="brand mono">hansell<span class="brand-accent">ramos</span></a>
      <div class="links">
        <a v-for="link in links" :key="link.href" :href="link.href">{{ link.label }}</a>
        <a v-if="shared.cvUrl" :href="shared.cvUrl" class="cv" download>{{ t.nav.cv }}</a>
        <div class="lang mono" role="group" :aria-label="t.nav.lang">
          <button
            v-for="code in languages"
            :key="code"
            type="button"
            :class="{ active: lang === code }"
            :aria-pressed="lang === code"
            @click="lang = code"
          >
            {{ code.toUpperCase() }}
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.nav-wrap {
  border-bottom: 1px solid var(--sand-line);
}

.nav {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding-top: 16px;
  padding-bottom: 16px;
}

.brand {
  font-weight: 700;
  font-size: 17px;
  color: var(--ink);
  text-decoration: none;
  padding: 12px 0;
}

.brand-accent {
  color: var(--accent);
}

.links {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px 28px;
  font-size: 15px;
  font-weight: 500;
}

.links a {
  color: var(--ink);
  text-decoration: none;
  padding: 12px 0;
}

.links a:hover {
  color: var(--accent-link);
}

.links .cv {
  background: var(--ink);
  color: var(--sand);
  padding: 12px 18px;
  border-radius: var(--radius-pill);
  font-size: 14px;
  font-weight: 600;
}

.links .cv:hover {
  color: var(--sand);
  background: #1d3743;
}

.lang {
  display: inline-flex;
  border: 1.5px solid var(--ink);
  border-radius: var(--radius-pill);
  padding: 3px;
  gap: 2px;
}

.lang button {
  font: inherit;
  font-size: 13px;
  font-weight: 700;
  min-width: 44px;
  min-height: 36px;
  border: 0;
  border-radius: var(--radius-pill);
  background: transparent;
  color: var(--ink);
  cursor: pointer;
}

.lang button.active {
  background: var(--ink);
  color: var(--sand);
}

@media (max-width: 640px) {
  .links {
    gap: 4px 20px;
  }
}
</style>
