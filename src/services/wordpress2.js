const WORDPRESS_API_URL = "https://tu-sitio-wordpress.com/wp-json/wp/v2";

export const wordpressService = {
  async getPosts(params = {}) {
    const { page = 1, per_page = 9, categories = "", search = "" } = params;

    const queryParams = new URLSearchParams({
      page: page.toString(),
      per_page: per_page.toString(),
      _embed: "true",
      ...(categories && { categories }),
      ...(search && { search }),
    });

    try {
      const response = await fetch(`${WORDPRESS_API_URL}/posts?${queryParams}`);

      if (!response.ok) {
        throw new Error("Error fetching posts");
      }

      const posts = await response.json();
      const totalPages = parseInt(
        response.headers.get("X-WP-TotalPages") || "1",
      );
      const totalPosts = parseInt(response.headers.get("X-WP-Total") || "0");

      return {
        posts: posts.map((post) => ({
          id: post.id,
          title: post.title.rendered,
          excerpt: post.excerpt.rendered,
          content: post.content.rendered,
          slug: post.slug,
          date: post.date,
          author: post._embedded?.author?.[0]?.name || "MG Protección",
          featuredImage:
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
            "/images/blog-default.png",
          categories:
            post._embedded?.["wp:term"]?.[0]?.map((cat) => ({
              id: cat.id,
              name: cat.name,
              slug: cat.slug,
            })) || [],
        })),
        totalPages,
        totalPosts,
      };
    } catch (error) {
      console.error("Error fetching WordPress posts:", error);
      return { posts: [], totalPages: 0, totalPosts: 0 };
    }
  },

  async getPostBySlug(slug) {
    try {
      const response = await fetch(
        `${WORDPRESS_API_URL}/posts?slug=${slug}&_embed=true`,
      );

      if (!response.ok) {
        throw new Error("Error fetching post");
      }

      const posts = await response.json();

      if (posts.length === 0) {
        return null;
      }

      const post = posts[0];

      return {
        id: post.id,
        title: post.title.rendered,
        content: post.content.rendered,
        excerpt: post.excerpt.rendered,
        slug: post.slug,
        date: post.date,
        author: post._embedded?.author?.[0]?.name || "MG Protección",
        featuredImage:
          post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
          "/images/blog-default.png",
        categories:
          post._embedded?.["wp:term"]?.[0]?.map((cat) => ({
            id: cat.id,
            name: cat.name,
            slug: cat.slug,
          })) || [],
      };
    } catch (error) {
      console.error("Error fetching post by slug:", error);
      return null;
    }
  },

  async getCategories() {
    try {
      const response = await fetch(
        `${WORDPRESS_API_URL}/categories?per_page=100`,
      );

      if (!response.ok) {
        throw new Error("Error fetching categories");
      }

      const categories = await response.json();

      return categories.map((cat) => ({
        id: cat.id,
        name: cat.name,
        slug: cat.slug,
        count: cat.count,
      }));
    } catch (error) {
      console.error("Error fetching categories:", error);
      return [];
    }
  },
};
