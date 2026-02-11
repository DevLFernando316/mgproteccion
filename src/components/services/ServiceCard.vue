<template>
  <div class="service-card">
    <slot />
  </div>
</template>

<style scoped>
.service-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: var(--shadow-sm);
  transition: var(--transition-base);
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}
</style>
