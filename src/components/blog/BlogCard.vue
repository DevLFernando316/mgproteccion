<template>
  <article class="blog-card">
    <router-link :to="`/blog/${post.slug}`" class="card-image">
      <img :src="post.featuredImage" :alt="post.title" />
      <div class="image-overlay"></div>
    </router-link>

    <div class="card-content">
      <div class="card-meta">
        <span class="meta-date">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          {{ formatDate(post.date) }}
        </span>
        <span v-if="post.categories.length > 0" class="meta-category">
          {{ post.categories[0].name }}
        </span>
      </div>

      <router-link :to="`/blog/${post.slug}`">
        <h3 class="card-title">{{ post.title }}</h3>
      </router-link>

      <div class="card-excerpt" v-html="truncateExcerpt(post.excerpt)"></div>

      <router-link :to="`/blog/${post.slug}`" class="read-more">
        Leer más
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </router-link>
    </div>
  </article>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  post: {
    type: Object,
    required: true,
  },
});

const formatDate = (date) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString("es-ES", options);
};

const truncateExcerpt = (excerpt) => {
  const text = excerpt.replace(/<[^>]*>/g, "");
  return text.length > 150 ? text.substring(0, 150) + "..." : text;
};
</script>

<style scoped>
.blog-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.4s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.blog-card:hover {
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  transform: translateY(-8px);
}

.card-image {
  position: relative;
  height: 220px;
  overflow: hidden;
  display: block;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.blog-card:hover .card-image img {
  transform: scale(1.1);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 0, 0, 0.3) 100%
  );
  opacity: 0;
  transition: opacity 0.4s ease;
}

.blog-card:hover .image-overlay {
  opacity: 1;
}

.card-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.card-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.meta-date,
.meta-category {
  font-size: 0.8125rem;
  color: var(--color-text-light);
  display: flex;
  align-items: center;
  gap: 0.375rem;
}

.meta-date svg {
  width: 14px;
  height: 14px;
}

.meta-category {
  padding: 0.25rem 0.75rem;
  background: rgba(32, 77, 50, 0.1);
  color: var(--color-primary);
  border-radius: 20px;
  font-weight: 500;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: var(--color-text-dark);
  line-height: 1.4;
  transition: color 0.3s ease;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-title:hover {
  color: var(--color-primary);
}

.card-excerpt {
  font-size: 0.9375rem;
  line-height: 1.6;
  color: var(--color-text-light);
  margin-bottom: 1.25rem;
  flex: 1;
}

.read-more {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-primary);
  font-weight: 600;
  font-size: 0.9375rem;
  transition: all 0.3s ease;
  align-self: flex-start;
}

.read-more svg {
  width: 18px;
  height: 18px;
  transition: transform 0.3s ease;
}

.read-more:hover {
  gap: 0.75rem;
}

.read-more:hover svg {
  transform: translateX(4px);
}
</style>
