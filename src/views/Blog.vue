<template>
  <div class="blog-page">
    <!-- Hero -->
    <BlogHero />

    <!-- Contenido Principal -->
    <section class="section">
      <div class="container">
        <div class="blog-layout">
          <!-- Sidebar -->
          <aside class="blog-sidebar">
            <!-- Buscador -->
            <div class="sidebar-widget">
              <h3>Buscar</h3>
              <div class="search-box">
                <input
                  v-model="searchQuery"
                  type="text"
                  placeholder="Buscar artículos..."
                  @keyup.enter="handleSearch"
                />
                <button @click="handleSearch">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                  </svg>
                </button>
              </div>
            </div>

            <!-- Categorías -->
            <div class="sidebar-widget">
              <h3>Categorías</h3>
              <ul class="categories-list">
                <li
                  v-for="category in categories"
                  :key="category.id"
                  :class="{ active: selectedCategory === category.id }"
                  @click="filterByCategory(category.id)"
                >
                  {{ category.name }} ({{ category.count }})
                </li>
                <li
                  :class="{ active: selectedCategory === null }"
                  @click="filterByCategory(null)"
                >
                  Todos los artículos
                </li>
              </ul>
            </div>

            <!-- CTA Servicios -->
            <div class="sidebar-widget cta-widget">
              <h3>¿Necesita asesoría?</h3>
              <p>Nuestros expertos están listos para ayudarle</p>
              <Button variant="primary" to="/contacto">
                Solicitar Asesoría
              </Button>
            </div>
          </aside>

          <!-- Posts Grid -->
          <div class="blog-content">
            <div v-if="loading" class="loading-state">
              <p>Cargando artículos...</p>
            </div>

            <div v-else-if="posts.length === 0" class="empty-state">
              <p>No se encontraron artículos.</p>
            </div>

            <div v-else class="posts-grid">
              <BlogCard v-for="post in posts" :key="post.id" :post="post" />
            </div>

            <!-- Paginación -->
            <div v-if="totalPages > 1" class="pagination">
              <button
                :disabled="currentPage === 1"
                @click="goToPage(currentPage - 1)"
                class="pagination-btn"
              >
                Anterior
              </button>

              <div class="pagination-numbers">
                <button
                  v-for="page in visiblePages"
                  :key="page"
                  :class="{ active: page === currentPage }"
                  @click="goToPage(page)"
                  class="pagination-number"
                >
                  {{ page }}
                </button>
              </div>

              <button
                :disabled="currentPage === totalPages"
                @click="goToPage(currentPage + 1)"
                class="pagination-btn"
              >
                Siguiente
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { wordpressService } from "../services/wordpress";
import BlogHero from "../components/blog/BlogHero.vue";
import BlogCard from "../components/blog/BlogCard.vue";
import Button from "../components/common/Button.vue";

const posts = ref([]);
const categories = ref([]);
const loading = ref(true);
const currentPage = ref(1);
const totalPages = ref(0);
const totalPosts = ref(0);
const selectedCategory = ref(null);
const searchQuery = ref("");

const visiblePages = computed(() => {
  const pages = [];
  const start = Math.max(1, currentPage.value - 2);
  const end = Math.min(totalPages.value, currentPage.value + 2);

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return pages;
});

const fetchPosts = async () => {
  loading.value = true;

  const result = await wordpressService.getPosts({
    page: currentPage.value,
    per_page: 9,
    categories: selectedCategory.value || "",
    search: searchQuery.value,
  });

  posts.value = result.posts;
  totalPages.value = result.totalPages;
  totalPosts.value = result.totalPosts;
  loading.value = false;

  // Scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const fetchCategories = async () => {
  categories.value = await wordpressService.getCategories();
};

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
    fetchPosts();
  }
};

const filterByCategory = (categoryId) => {
  selectedCategory.value = categoryId;
  currentPage.value = 1;
  fetchPosts();
};

const handleSearch = () => {
  currentPage.value = 1;
  fetchPosts();
};

onMounted(() => {
  fetchPosts();
  fetchCategories();
});
</script>

<style scoped>
.blog-page {
  margin-top: 65px;
}

.section {
  padding: 4rem 0;
}

.blog-layout {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 3rem;
}

/* Sidebar */
.blog-sidebar {
  position: sticky;
  top: 85px;
  height: fit-content;
}

.sidebar-widget {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  margin-bottom: 2rem;
}

.sidebar-widget h3 {
  font-size: 1.25rem;
  margin-bottom: 1.25rem;
  color: var(--color-text-dark);
}

.search-box {
  display: flex;
  gap: 0.5rem;
}

.search-box input {
  flex: 1;
  padding: 0.75rem;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  font-size: 0.9375rem;
}

.search-box button {
  padding: 0.75rem;
  background: var(--color-primary);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.search-box button svg {
  width: 20px;
  height: 20px;
}

.search-box button:hover {
  background: var(--color-secondary);
}

.categories-list {
  list-style: none;
}

.categories-list li {
  padding: 0.75rem 1rem;
  margin-bottom: 0.5rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: var(--color-text-light);
}

.categories-list li:hover,
.categories-list li.active {
  background: rgba(32, 77, 50, 0.1);
  color: var(--color-primary);
}

.cta-widget {
  background: var(--gradient-primary);
  color: white;
  text-align: center;
}

.cta-widget h3 {
  color: white;
}

.cta-widget p {
  margin-bottom: 1.5rem;
  opacity: 0.9;
}

/* Posts Grid */
.posts-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.loading-state,
.empty-state {
  text-align: center;
  padding: 4rem 2rem;
  color: var(--color-text-light);
}

/* Pagination */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 3rem;
}

.pagination-btn,
.pagination-number {
  padding: 0.75rem 1.25rem;
  border: 1px solid var(--color-border);
  background: white;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
}

.pagination-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination-btn:not(:disabled):hover {
  background: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
}

.pagination-numbers {
  display: flex;
  gap: 0.5rem;
}

.pagination-number.active {
  background: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
}

.pagination-number:hover {
  background: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
}

/* Responsive */
@media (max-width: 1200px) {
  .posts-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 968px) {
  .blog-layout {
    grid-template-columns: 1fr;
  }

  .blog-sidebar {
    position: static;
  }

  .posts-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .posts-grid {
    grid-template-columns: 1fr;
  }

  .pagination {
    flex-wrap: wrap;
  }
}
</style>
