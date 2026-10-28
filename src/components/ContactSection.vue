<script setup>
import PromptLabel from './PromptLabel.vue'
import { profile } from '../data/profile'
</script>

<template>
  <section id="contact" class="container section">
    <div class="panel">
      <div class="copy">
        <PromptLabel text="how can we work together?" dark />
        <h2 class="section-title">Got a problem worth solving? Let's talk.</h2>
        <p>Open to senior remote roles in PHP/Laravel, Vue and AI-assisted development, working US Eastern hours.</p>
      </div>
      <div class="actions">
        <a :href="`mailto:${profile.email}`" class="email">{{ profile.email }}</a>
        <div class="row">
          <a :href="profile.links.linkedin" class="ghost" rel="me noopener" target="_blank">LinkedIn</a>
          <a :href="profile.links.github" class="ghost" rel="me noopener" target="_blank">GitHub</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding-top: 96px;
  padding-bottom: 72px;
}

.panel {
  background: var(--ink);
  color: var(--sand);
  border-radius: 32px;
  padding: 56px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: space-between;
  align-items: center;
}

.copy {
  flex: 1 1 420px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.copy p {
  margin: 0;
  font-size: 17px;
  line-height: 1.6;
  color: var(--night-muted);
}

.actions {
  flex: 0 1 320px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.email {
  background: var(--aqua);
  color: var(--night);
  text-decoration: none;
  padding: 16px 22px;
  border-radius: var(--radius-pill);
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  word-break: break-all;
}

.email:hover {
  color: var(--night);
  background: #7fe0d7;
}

.row {
  display: flex;
  gap: 12px;
}

.ghost {
  flex: 1;
  border: 1.5px solid #3d5560;
  color: var(--sand);
  text-decoration: none;
  padding: 14px;
  border-radius: var(--radius-pill);
  font-weight: 600;
  font-size: 15px;
  text-align: center;
}

.ghost:hover {
  color: var(--sand);
  border-color: var(--aqua);
}

@media (max-width: 640px) {
  .section {
    padding-top: 64px;
  }

  .panel {
    padding: 32px 24px;
    border-radius: 24px;
  }

  .actions {
    flex-basis: 100%;
  }
}
</style>
