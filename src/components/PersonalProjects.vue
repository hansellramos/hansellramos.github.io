<script setup>
import { computed } from 'vue'
import PromptLabel from './PromptLabel.vue'
import { shared } from '../data/profile'
import { t } from '../i18n'

const projects = computed(() => shared.projects.map((p, i) => ({ ...p, ...t.value.projects[i] })))
</script>

<template>
  <section id="projects" class="container section">
    <div class="head">
      <PromptLabel :text="t.projectsSection.prompt" />
      <h2 class="section-title">{{ t.projectsSection.title }}</h2>
      <p class="lead">{{ t.projectsSection.lead }}</p>
    </div>
    <div class="cards">
      <article v-for="project in projects" :key="project.id" class="card">
        <div class="top">
          <h3>{{ project.name }}</h3>
          <span v-if="project.license" class="license mono">{{ project.license }}</span>
          <span v-if="project.private" class="license mono">{{ t.projectsSection.privateLabel }}</span>
        </div>
        <p class="tagline">{{ project.tagline }}</p>
        <p class="body">{{ project.body }}</p>
        <ul class="tags" :aria-label="t.workSection.tagsLabel">
          <li v-for="tag in project.tags" :key="tag" class="mono">{{ tag }}</li>
        </ul>
        <a v-if="project.url" :href="project.url" class="repo mono" target="_blank" rel="noopener">
          <svg aria-hidden="true" viewBox="0 0 16 16" width="16" height="16">
            <path
              fill="currentColor"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
            />
          </svg>
          {{ project.repo }} · {{ t.projectsSection.openRepo }}
        </a>
      </article>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding-top: 40px;
  padding-bottom: 72px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.head {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.head .lead {
  max-width: 720px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 460px), 1fr));
  gap: 24px;
}

.card {
  background: var(--card);
  border: 1px solid var(--sand-line);
  border-radius: var(--radius-lg);
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  min-width: 0;
}

.top {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
}

h3 {
  margin: 0;
  font-size: 26px;
}

.license {
  font-size: 12px;
  color: var(--accent-link);
  background: var(--accent-tint);
  border-radius: var(--radius-pill);
  padding: 3px 10px;
}

.tagline {
  margin: 0;
  font-size: 17px;
  font-weight: 600;
  line-height: 1.4;
}

.body {
  margin: 0;
  font-size: 16px;
  line-height: 1.6;
  color: var(--ink-soft);
}

.tags {
  list-style: none;
  margin: 0;
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

.repo {
  margin-top: auto;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: var(--ink);
  text-decoration: none;
  padding: 10px 0;
  word-break: break-word;
}

.repo:hover {
  color: var(--accent-link);
}

@media (max-width: 640px) {
  .card {
    padding: 24px;
  }
}
</style>
