<script setup>
defineProps({
  text: { type: String, required: true },
  dark: { type: Boolean, default: false },
})
</script>

<template>
  <p class="prompt mono" :class="{ dark }">
    <span class="caret" aria-hidden="true">&gt;</span> {{ text }}
  </p>
</template>

<style scoped>
.prompt {
  margin: 0;
  font-size: 15px;
  color: var(--muted);
}

.caret {
  color: var(--accent);
  font-weight: 700;
}

.dark {
  color: var(--night-dim);
}

.dark .caret {
  color: var(--aqua);
}
</style>
