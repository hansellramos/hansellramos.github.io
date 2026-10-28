<script setup>
import PromptLabel from './PromptLabel.vue'
import { work } from '../data/profile'
</script>

<template>
  <section id="work" class="container section">
    <div class="head">
      <PromptLabel text="show selected work" />
      <h2 class="section-title">Problems I've helped solve</h2>
    </div>
    <div class="cards">
      <article v-for="item in work" :key="item.title" class="card">
        <div class="meta">
          <span class="context mono">{{ item.context }}</span>
          <span v-if="item.badge" class="badge mono">{{ item.badge }}</span>
        </div>
        <h3>{{ item.title }}</h3>
        <p>{{ item.body }}</p>
        <ul class="tags" aria-label="Technologies">
          <li v-for="tag in item.tags" :key="tag" class="mono">{{ tag }}</li>
        </ul>
      </article>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding-top: 96px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 36px;
}

.head {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}

.card {
  flex: 1 1 460px;
  min-width: 0;
  background: var(--card);
  border: 1px solid var(--sand-line);
  border-radius: var(--radius-lg);
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.meta {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px;
}

.context {
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
}

.badge {
  font-size: 12px;
  color: var(--accent-link);
  background: var(--accent-tint);
  border-radius: var(--radius-pill);
  padding: 3px 10px;
}

h3 {
  margin: 0;
  font-size: 26px;
  line-height: 1.2;
}

p {
  margin: 0;
  font-size: 16px;
  line-height: 1.6;
  color: var(--ink-soft);
}

.tags {
  list-style: none;
  margin: auto 0 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tags li {
  background: var(--sand);
  border-radius: var(--radius-pill);
  padding: 6px 12px;
  font-size: 13px;
}

@media (max-width: 640px) {
  .section {
    padding-top: 64px;
  }

  .card {
    padding: 24px;
    flex-basis: 100%;
  }
}
</style>
