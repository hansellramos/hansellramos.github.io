<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { profile } from '../data/profile'

const command = `whoami ${profile.handle}`
const typed = ref(command)
let timer = null

onMounted(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduceMotion) return
  typed.value = ''
  let i = 0
  timer = setInterval(() => {
    i += 1
    typed.value = command.slice(0, i)
    if (i >= command.length) clearInterval(timer)
  }, 55)
})

onBeforeUnmount(() => clearInterval(timer))
</script>

<template>
  <section id="top" class="container hero">
    <div class="copy">
      <p class="prompt mono">
        <span class="caret" aria-hidden="true">&gt;</span>
        <span aria-hidden="true">{{ typed }}</span>
        <span class="sr-only">{{ command }}</span>
        <span class="cursor" aria-hidden="true">▍</span>
      </p>
      <h1>{{ profile.headline }}</h1>
      <p class="intro">{{ profile.intro }}</p>
      <div class="actions">
        <a href="#work" class="btn btn-primary">See selected work</a>
        <a href="#contact" class="btn btn-outline">Let's talk</a>
        <span class="where mono">{{ profile.location }}</span>
      </div>
    </div>

    <div class="visual">
      <img v-if="profile.photo" :src="profile.photo" :alt="`Portrait of ${profile.name}`" class="photo" />
      <div v-else class="photo placeholder mono" role="img" aria-label="Photo placeholder">
        Your photo here — outdoors, natural light
      </div>

      <div class="status mono">
        <div class="status-cmd">$ {{ profile.handle }} --status</div>
        <div v-for="row in profile.status" :key="row.key">
          <span :class="row.highlight ? 'key-hl' : 'key'">{{ row.key.padEnd(9, ' ') }}</span>{{ row.value }}
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: flex;
  flex-wrap: wrap;
  gap: 56px;
  align-items: center;
  padding-top: 88px;
  padding-bottom: 72px;
}

.copy {
  flex: 999 1 520px;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.prompt {
  margin: 0;
  font-size: 16px;
  color: var(--muted);
  min-height: 24px;
}

.caret,
.cursor {
  color: var(--accent);
  font-weight: 700;
}

.cursor {
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

h1 {
  margin: 0;
  font-size: clamp(42px, 6vw, 68px);
  line-height: 1.02;
  letter-spacing: -0.03em;
  font-weight: 700;
}

.intro {
  margin: 0;
  font-size: 20px;
  line-height: 1.55;
  color: var(--ink-soft);
  max-width: 620px;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}

.where {
  font-size: 13px;
  color: var(--muted);
  padding-left: 8px;
}

.visual {
  flex: 1 1 360px;
  min-width: 0;
  max-width: 460px;
  display: flex;
  flex-direction: column;
}

.photo {
  aspect-ratio: 4 / 5;
  width: 100%;
  object-fit: cover;
  border-radius: 28px;
}

.placeholder {
  background: var(--sand-line);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--muted);
  font-size: 14px;
  text-align: center;
  padding: 24px;
}

.status {
  margin: -96px 20px 0 -24px;
  background: var(--night);
  color: var(--night-text);
  border-radius: 18px;
  padding: 20px 22px;
  font-size: 13px;
  line-height: 1.75;
  white-space: pre-wrap;
  box-shadow: 0 20px 40px rgba(16, 34, 43, 0.22);
}

.status-cmd {
  color: var(--night-dim);
  margin-bottom: 6px;
}

.key {
  color: var(--aqua);
}

.key-hl {
  color: var(--coral);
}

@media (max-width: 640px) {
  .hero {
    padding-top: 48px;
    gap: 40px;
  }

  .status {
    margin: -72px 12px 0 12px;
  }
}
</style>
