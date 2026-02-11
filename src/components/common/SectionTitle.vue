<template>
  <div class="section-title" :class="{ 'section-title-center': center }">
    <span v-if="label" class="section-label">{{ label }}</span>
    <h2 class="section-heading" :class="{ 'text-gradient': gradient }">
      <slot />
    </h2>
    <p v-if="description" class="section-description">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: null,
  },
  description: {
    type: String,
    default: null,
  },
  center: {
    type: Boolean,
    default: false,
  },
  gradient: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.section-title {
  margin-bottom: 3rem;
}

.section-title-center {
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.section-label {
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: var(--color-primary);
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  background: rgba(32, 77, 50, 0.08);
  border-radius: 50px;
}

.section-heading {
  margin-bottom: 1rem;
  line-height: 1.2;
}

.section-description {
  font-size: 1.125rem;
  color: var(--color-text-light);
  line-height: 1.7;
}
</style>
