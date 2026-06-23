const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

export const categoryIconMap = {
  'CNC Laser Cutting': 'laser',
  'Metal Fabrication': 'welder',
  'Material Guides': 'layers',
  'Engineering Guides': 'ruler',
  'CNC Machining': 'drill',
  'Manufacturing Tips': 'gear',
  'Industrial Components': 'nutBolt',
};

export const fetchBlogs = async (params = {}) => {
  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      searchParams.append(key, value);
    }
  });

  const query = searchParams.toString();
  const response = await fetch(`${API_BASE}/api/blogs${query ? `?${query}` : ''}`);

  if (!response.ok) {
    throw new Error('Failed to fetch blogs');
  }

  const result = await response.json();
  return (result.data || []).map((blog) => ({
    ...blog,
    image: blog.featuredImage || blog.image || '/assets/blog/blog-1.jpg',
    categoryIcon: categoryIconMap[blog.category] || 'gear',
  }));
};

export const fetchBlogBySlug = async (slug) => {
  const response = await fetch(`${API_BASE}/api/blogs/${slug}`);

  if (!response.ok) {
    throw new Error('Blog not found');
  }

  const result = await response.json();
  const blog = result.data;

  return {
    ...blog,
    image: blog.featuredImage || blog.image || '/assets/blog/blog-1.jpg',
    categoryIcon: categoryIconMap[blog.category] || 'gear',
  };
};

export const submitContactRequest = async (payload) => {
  const response = await fetch(`${API_BASE}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || 'Failed to submit inquiry');
  }

  return result;
};
