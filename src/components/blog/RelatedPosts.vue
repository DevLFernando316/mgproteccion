<template>
  <section v-if="relatedPosts.length > 0" class="related-posts">
    <div class="container">
      <h2>Artículos Relacionados</h2>
      <div class="posts-grid">
        <BlogCard v-for="post in relatedPosts" :key="post.id" :post="post" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, defineProps } from "vue";
import { wordpressService } from "../../services/wordpress";
import BlogCard from "./BlogCard.vue";

const props = defineProps({
  currentPostId: {
    type: Number,
    required: true,
  },
  categories: {
    type: Array,
    default: () => [],
  },
});

const relatedPosts = ref([]);

onMounted(async () => {
  if (props.categories.length > 0) {
    const categoryIds = props.categories.map((cat) => cat.id).join(",");
    const result = await wordpressService.getPosts({
      per_page: 3,
      categories: categoryIds,
    });

    // Filtrar el post actual
    relatedPosts.value = result.posts
      .filter((post) => post.id !== props.currentPostId)
      .slice(0, 3);
  }
});
</script>

<style scoped>
.related-posts {
  padding: 4rem 0;
  background: var(--color-bg-light);
}

.related-posts h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--color-text-dark);
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

@media (max-width: 968px) {
  .posts-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .related-posts {
    padding: 3rem 0;
  }

  .related-posts h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .posts-grid {
    grid-template-columns: 1fr;
  }
}
</style>
