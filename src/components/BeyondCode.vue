<script setup>
import PromptLabel from './PromptLabel.vue'
import { interests } from '../data/profile'
</script>

<template>
  <section id="beyond" class="band">
    <div class="container section">
      <div class="head">
        <div class="title">
          <PromptLabel text="what drives you?" />
          <h2 class="section-title">Technology is worth it when it helps someone.</h2>
        </div>
        <p class="lead">
          That's why AI excites me: it can give people hours of their lives back. I'm also an entrepreneur and a DJ.
          When I'm not building, I'm traveling, on Colombia's Caribbean coast, up a trail or behind a drone
          controller, and at home there's usually a PlayStation controller in my hands.
        </p>
      </div>
      <div class="grid">
        <figure v-for="item in interests" :key="item.title">
          <img v-if="item.photo" :src="item.photo" :alt="item.caption" class="media" loading="lazy" />
          <div v-else class="media placeholder mono" :style="{ background: item.tint }" aria-hidden="true">
            {{ item.placeholder }}
          </div>
          <figcaption>
            <strong>{{ item.title }}</strong>
            <span>{{ item.caption }}</span>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<style scoped>
.band {
  background: var(--sea);
}

.section {
  padding-top: 96px;
  padding-bottom: 96px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.head {
  display: flex;
  flex-wrap: wrap;
  gap: 24px 64px;
  align-items: flex-end;
}

.title {
  flex: 1 1 420px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.head .lead {
  flex: 1 1 380px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
}

@media (max-width: 960px) {
  .grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

figure {
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.media {
  aspect-ratio: 4 / 5;
  width: 100%;
  object-fit: cover;
  border-radius: 20px;
}

.placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--ink-soft);
  font-size: 13px;
  text-align: center;
  padding: 16px;
}

figcaption {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

figcaption strong {
  font-size: 17px;
}

figcaption span {
  font-size: 14px;
  color: var(--ink-soft);
}

@media (max-width: 640px) {
  .section {
    padding-top: 64px;
    padding-bottom: 64px;
  }

  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
  }
}
</style>
