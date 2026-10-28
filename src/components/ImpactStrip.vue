<script setup>
import { impact } from '../data/profile'
</script>

<template>
  <section class="strip" aria-label="Impact">
    <dl class="container grid">
      <div v-for="item in impact" :key="item.value" class="item">
        <dt class="value">{{ item.value }}</dt>
        <dd class="label">{{ item.label }}</dd>
      </div>
    </dl>
  </section>
</template>

<style scoped>
.strip {
  background: var(--ink);
  color: var(--sand);
}

.grid {
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 48px;
  padding-bottom: 48px;
  display: flex;
  flex-wrap: wrap;
  gap: 32px 48px;
  justify-content: space-between;
}

.item {
  flex: 1 1 200px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.value {
  font-size: 44px;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.label {
  margin: 0;
  font-size: 15px;
  line-height: 1.5;
  color: var(--night-muted);
}
</style>
