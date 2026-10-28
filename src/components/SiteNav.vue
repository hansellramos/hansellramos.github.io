<script setup>
import { profile } from '../data/profile'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#how', label: 'How I work' },
  { href: '#beyond', label: 'Beyond code' },
  { href: '#contact', label: 'Contact' },
]
</script>

<template>
  <header class="nav-wrap">
    <nav class="container nav" aria-label="Main">
      <a href="#top" class="brand mono">hansell<span class="brand-accent">ramos</span></a>
      <div class="links">
        <a v-for="link in links" :key="link.href" :href="link.href">{{ link.label }}</a>
        <a v-if="profile.cvUrl" :href="profile.cvUrl" class="cv" download>Download CV</a>
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

@media (max-width: 640px) {
  .links {
    gap: 4px 20px;
  }
}
</style>
