<script setup>
import { t } from '../i18n'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container inner mono">
      <span>© {{ year }} Hansel Ramos · {{ t.footer }}</span>
      <a href="/llms.txt">/llms.txt</a>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--sand-line);
}

.inner {
  padding-top: 28px;
  padding-bottom: 28px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px 24px;
  justify-content: space-between;
  font-size: 13px;
  color: var(--muted);
}
</style>
