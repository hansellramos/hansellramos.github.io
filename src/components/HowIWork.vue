<script setup>
import PromptLabel from './PromptLabel.vue'
import { workflow } from '../data/profile'

const last = workflow.length - 1
</script>

<template>
  <section id="how" class="container section">
    <div class="head">
      <PromptLabel text="how do you work with AI?" />
      <h2 class="section-title">AI does the heavy lifting. I own every decision.</h2>
      <p class="lead">
        The same workflow that sped up my team by 50%, condensed. I review and approve every step, and nothing ships
        that I don't understand.
      </p>
    </div>
    <ol class="steps">
      <li v-for="(step, i) in workflow" :key="step.title" class="step" :class="{ final: i === last }">
        <span class="num mono">{{ String(i + 1).padStart(2, '0') }}</span>
        <strong>{{ step.title }}</strong>
        <span class="body">{{ step.body }}</span>
      </li>
    </ol>
  </section>
</template>

<style scoped>
.section {
  padding-top: 72px;
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

.steps {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.step {
  flex: 1 1 160px;
  background: var(--card);
  border: 1px solid var(--sand-line);
  border-radius: 18px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.num {
  font-size: 13px;
  font-weight: 700;
  color: var(--accent);
}

strong {
  font-size: 17px;
}

.body {
  font-size: 14px;
  line-height: 1.5;
  color: var(--ink-soft);
}

.final {
  background: var(--ink);
  border-color: var(--ink);
  color: var(--sand);
}

.final .num {
  color: var(--aqua);
}

.final .body {
  color: var(--night-muted);
}
</style>
