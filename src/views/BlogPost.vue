<template>
  <div class="blog-post-page">
    <div v-if="loading" class="loading-container">
      <p>Cargando artículo...</p>
    </div>

    <div v-else-if="!post" class="error-container">
      <h2>Artículo no encontrado</h2>
      <Button variant="primary" to="/blog">Volver al Blog</Button>
    </div>

    <article v-else class="blog-post">
      <!-- Header -->
      <header class="post-header">
        <div class="header-background">
          <img :src="post.featuredImage" :alt="post.title" />
          <div class="header-overlay"></div>
        </div>
        <div class="container">
          <div class="header-content">
            <div class="post-meta">
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
              <span class="meta-author">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                {{ post.author }}
              </span>
              <span v-if="post.categories.length > 0" class="meta-category">
                {{ post.categories[0].name }}
              </span>
            </div>
            <h1>{{ post.title }}</h1>
          </div>
        </div>
      </header>

      <!-- Content -->
      <div class="container">
        <div class="post-layout">
          <!-- Main Content -->
          <div class="post-content">
            <div class="content-body" v-html="post.content"></div>

            <!-- Share -->
            <!-- Share -->
            <div class="post-share">
              <h4>Compartir este artículo</h4>
              <div class="share-buttons">
                <a
                  :href="shareOnWhatsApp"
                  target="_blank"
                  rel="noopener"
                  class="share-btn whatsapp"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                    />
                  </svg>
                  WhatsApp
                </a>

                <a
                  :href="shareOnFacebook"
                  target="_blank"
                  rel="noopener"
                  class="share-btn facebook"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                    />
                  </svg>
                  Facebook
                </a>

                <a
                  :href="shareOnTwitter"
                  target="_blank"
                  rel="noopener"
                  class="share-btn twitter"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                    />
                  </svg>
                  X (Twitter)
                </a>

                <a
                  :href="shareOnLinkedIn"
                  target="_blank"
                  rel="noopener"
                  class="share-btn linkedin"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                    />
                  </svg>
                  LinkedIn
                </a>

                <button @click="copyLink" class="share-btn copy">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path
                      d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
                    />
                  </svg>
                  {{ linkCopied ? "¡Copiado!" : "Copiar enlace" }}
                </button>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <aside class="post-sidebar">
            <!-- CTA Servicios -->
            <div class="sidebar-widget cta-services">
              <h3>¿Necesita ayuda con seguridad laboral?</h3>
              <p>
                Nuestros servicios pueden ayudarle a implementar las mejores
                prácticas
              </p>
              <ul class="services-list">
                <li>
                  <router-link to="/servicios">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                    Sistemas de Gestión SST
                  </router-link>
                </li>
                <li>
                  <router-link to="/servicios">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                    Gestión de Riesgo Eléctrico
                  </router-link>
                </li>
                <li>
                  <router-link to="/servicios">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                    Tareas de Alto Riesgo
                  </router-link>
                </li>
              </ul>
              <Button variant="primary" to="/contacto" class="cta-btn">
                Solicitar Asesoría Gratuita
              </Button>
            </div>

            <!-- Categorías -->
            <div class="sidebar-widget">
              <h3>Categorías</h3>
              <ul class="categories-list">
                <li v-for="category in post.categories" :key="category.id">
                  <router-link :to="`/blog?category=${category.id}`">
                    {{ category.name }}
                  </router-link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>

      <!-- Related Posts -->
      <RelatedPosts :currentPostId="post.id" :categories="post.categories" />
    </article>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { wordpressService } from "../services/wordpress";
import Button from "../components/common/Button.vue";
import RelatedPosts from "../components/blog/RelatedPosts.vue";

const route = useRoute();
const post = ref(null);
const loading = ref(true);
const linkCopied = ref(false);

const formatDate = (date) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString("es-ES", options);
};

const shareOnWhatsApp = computed(() => {
  if (!post.value) return "";
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent(post.value.title);
  return `https://wa.me/?text=${text}%20${url}`;
});

const shareOnFacebook = computed(() => {
  if (!post.value) return "";
  const url = encodeURIComponent(window.location.href);
  return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
});

const shareOnTwitter = computed(() => {
  if (!post.value) return "";
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent(post.value.title);
  return `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
});

const shareOnLinkedIn = computed(() => {
  if (!post.value) return "";
  const url = encodeURIComponent(window.location.href);
  return `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
});

const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);
    linkCopied.value = true;
    setTimeout(() => {
      linkCopied.value = false;
    }, 2000);
  } catch (err) {
    console.error("Error copying link:", err);
  }
};

onMounted(async () => {
  const slug = route.params.slug;
  post.value = await wordpressService.getPostBySlug(slug);
  loading.value = false;
});
</script>

<style scoped>
.blog-post-page {
  margin-top: 65px;
}

.loading-container,
.error-container {
  text-align: center;
  padding: 6rem 2rem;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Post Header */
.post-header {
  position: relative;
  padding: 10rem 1.5rem 6rem;
  color: white;
  overflow: hidden;
}

.header-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.header-background img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.header-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(15, 71, 82, 0.92) 0%,
    rgba(13, 84, 95, 0.85) 100%
  );
}

.header-content {
  position: relative;
  z-index: 1;
  max-width: 900px;
  margin: 0 auto;
}

.post-meta {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.meta-date,
.meta-author,
.meta-category {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9375rem;
  color: rgba(255, 255, 255, 0.9);
}

.meta-date svg,
.meta-author svg {
  width: 18px;
  height: 18px;
}

.meta-category {
  padding: 0.375rem 1rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  font-weight: 500;
}

.post-header h1 {
  font-size: 3rem;
  line-height: 1.2;
  margin: 0;
}

/* Post Layout */
.post-layout {
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 4rem;
  padding: 4rem 0;
}

.post-content {
  max-width: 800px;
}

.content-body {
  font-size: 1.125rem;
  line-height: 1.8;
  color: var(--color-text-dark);
}

.content-body :deep(h2) {
  font-size: 2rem;
  margin: 2.5rem 0 1.25rem;
  color: var(--color-text-dark);
}

.content-body :deep(h3) {
  font-size: 1.5rem;
  margin: 2rem 0 1rem;
  color: var(--color-text-dark);
}

.content-body :deep(p) {
  margin-bottom: 1.5rem;
}

.content-body :deep(img) {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  margin: 2rem 0;
}

.content-body :deep(ul),
.content-body :deep(ol) {
  margin-bottom: 1.5rem;
  padding-left: 2rem;
}

.content-body :deep(li) {
  margin-bottom: 0.75rem;
}

.content-body :deep(blockquote) {
  border-left: 4px solid var(--color-primary);
  padding-left: 1.5rem;
  margin: 2rem 0;
  font-style: italic;
  color: var(--color-text-light);
}

/* Share */
.post-share {
  margin-top: 3rem;
  padding-top: 3rem;
  border-top: 1px solid var(--color-border);
}

.post-share h4 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.share-buttons {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.share-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.875rem;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  color: white;
}

.share-btn svg {
  width: 18px;
  height: 18px;
}

.share-btn.whatsapp {
  background: #25d366;
}

.share-btn.whatsapp:hover {
  background: #1ebe57;
}

.share-btn.facebook {
  background: #1877f2;
}

.share-btn.facebook:hover {
  background: #166fe5;
}

.share-btn.twitter {
  background: #000000;
}

.share-btn.twitter:hover {
  background: #1a1a1a;
}

.share-btn.linkedin {
  background: #0a66c2;
}

.share-btn.linkedin:hover {
  background: #095196;
}

.share-btn.copy {
  background: var(--color-bg-light);
  color: var(--color-text-dark);
  border: 1px solid var(--color-border);
}

.share-btn.copy:hover {
  background: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
}

.share-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* Sidebar */
.post-sidebar {
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

.cta-services {
  background: var(--gradient-primary);
  color: white;
}

.cta-services h3 {
  color: white;
}

.cta-services p {
  margin-bottom: 1.5rem;
  opacity: 0.95;
}

.services-list {
  list-style: none;
  margin-bottom: 1.5rem;
}

.services-list li {
  margin-bottom: 0.75rem;
}

.services-list a {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  font-size: 0.9375rem;
  transition: all 0.3s ease;
}

.services-list a svg {
  width: 16px;
  height: 16px;
}

.services-list a:hover {
  padding-left: 0.5rem;
}

.cta-btn {
  width: 100%;
  justify-content: center;
}

.categories-list {
  list-style: none;
}

.categories-list li {
  margin-bottom: 0.75rem;
}

.categories-list a {
  color: var(--color-text-light);
  transition: color 0.3s ease;
}

.categories-list a:hover {
  color: var(--color-primary);
}

/* Responsive */
@media (max-width: 1200px) {
  .post-layout {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .post-sidebar {
    position: static;
  }
}

@media (max-width: 768px) {
  .post-header {
    padding: 8rem 1.25rem 4rem;
  }

  .post-header h1 {
    font-size: 2rem;
  }

  .post-layout {
    padding: 3rem 0;
  }

  .content-body {
    font-size: 1rem;
  }

  .share-buttons {
    flex-direction: column;
  }

  .share-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
