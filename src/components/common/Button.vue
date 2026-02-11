<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    :type="type"
    class="btn"
    :class="[`btn-${variant}`, `btn-${size}`, { 'btn-full': fullWidth }]"
  >
    <slot />
  </component>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  variant: {
    type: String,
    default: "primary",
    validator: (val) => ["primary", "secondary", "outline"].includes(val),
  },
  size: {
    type: String,
    default: "md",
    validator: (val) => ["sm", "md", "lg"].includes(val),
  },
  to: {
    type: String,
    default: null,
  },
  href: {
    type: String,
    default: null,
  },
  type: {
    type: String,
    default: "button",
  },
  fullWidth: {
    type: Boolean,
    default: false,
  },
});

const tag = computed(() => {
  if (props.to) return "router-link";
  if (props.href) return "a";
  return "button";
});
</script>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: var(--font-body);
  font-weight: 600;
  text-align: center;
  border: 2px solid transparent;
  border-radius: 10px;
  cursor: pointer;
  transition: var(--transition-base);
  text-decoration: none;
  white-space: nowrap;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Variantes */
.btn-primary {
  background: var(--gradient-primary);
  color: white;
  border-color: transparent;
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: var(--shadow-lg);
}

.btn-secondary {
  background: white;
  color: var(--color-primary);
  border-color: var(--color-border);
}

.btn-secondary:hover:not(:disabled) {
  border-color: var(--color-primary);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.btn-outline {
  background: transparent;
  color: var(--color-primary);
  border-color: var(--color-primary);
}

.btn-outline:hover:not(:disabled) {
  background: var(--gradient-primary);
  color: white;
  border-color: transparent;
}

/* Tamaños */
.btn-sm {
  padding: 0.5rem 1.25rem;
  font-size: 0.875rem;
}

.btn-md {
  padding: 0.75rem 1.75rem;
  font-size: 1rem;
}

.btn-lg {
  padding: 1rem 2.5rem;
  font-size: 1.125rem;
}

.btn-full {
  width: 100%;
}
</style>
