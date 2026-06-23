import { useEffect, useState } from 'react';
import { usePageMeta } from '../hooks/usePageMeta';
import { Link } from 'react-router-dom';
import PageHeroDark from '../components/PageHeroDark';
import Reveal from '../components/Reveal';
import { allBlogArticles, blogCategories } from '../data/innerPages';
import { fetchBlogs } from '../lib/api';
import { ArrowRightIcon, DynamicIcon } from '../components/icons/Icons';

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [articles, setArticles] = useState(allBlogArticles);
  const [loading, setLoading] = useState(true);

  usePageMeta(
    'Industrial Manufacturing Blog | CNC Laser Cutting, Metal Fabrication Guides | UMA Metal Craft',
    'CNC machining guides, metal fabrication tutorials, material selection guides, and manufacturing insights from the factory floor.'
  );

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const blogs = await fetchBlogs();
        if (blogs.length > 0) {
          setArticles(blogs);
        }
      } catch {
        setArticles(allBlogArticles);
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, []);

  const filtered = activeCategory === 'All'
    ? articles
    : articles.filter((a) => a.category === activeCategory);

  const featured = articles.filter((a) => a.featured);
  const trending = articles.filter((a) => a.trending);

  return (
    <>
      <PageHeroDark
        tag="Engineering Insights"
        title="Industrial Manufacturing Blog"
        lead="CNC machining guides, metal fabrication tutorials, material selection guides, and manufacturing insights from the factory floor."
        actions={false}
      />

      <section className="section inner-section">
        <div className="container">
          {loading && (
            <p className="text-muted-sm" style={{ marginBottom: '1rem' }}>Loading articles...</p>
          )}

          <Reveal>
            <div className="blog-filters">
              {blogCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`blog-filter ${activeCategory === cat ? 'blog-filter--active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal delay={60}>
            <h2 className="section-title-lg" style={{ marginTop: '2rem' }}>Featured Articles</h2>
          </Reveal>
          <div className="blog-featured-grid">
            {featured.map((article, i) => (
              <Reveal key={article.slug} delay={80 + i * 60} className="blog-card-v2 blog-card-v2--featured">
                <div className="blog-card-v2__image-wrap">
                  <img src={article.image} alt="" loading="lazy" />
                </div>
                <div className="blog-card-v2__body">
                  <div className="blog-card-v2__meta">
                    <span className="blog-card-v2__category">{article.category}</span>
                    <span className="blog-card-v2__meta-sep">|</span>
                    <time className="blog-card-v2__date">{article.date}</time>
                    <span className="blog-card-v2__meta-sep">|</span>
                    <span className="blog-card-v2__date">{article.readTime}</span>
                  </div>
                  <h3 className="blog-card-v2__title">
                    <Link to={`/blog/${article.slug}`}>{article.title}</Link>
                  </h3>
                  <p className="blog-card-v2__excerpt">{article.excerpt}</p>
                  <Link to={`/blog/${article.slug}`} className="blog-card-v2__link">
                    Read Article
                    <ArrowRightIcon size={14} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={60}>
            <h2 className="section-title-lg" style={{ marginTop: '3rem' }}>Trending Now</h2>
          </Reveal>
          <div className="trending-list">
            {trending.map((article, i) => (
              <Reveal key={article.slug} delay={i * 40}>
                <Link to={`/blog/${article.slug}`} className="trending-item">
                  <span className="trending-item__category">{article.category}</span>
                  <strong className="trending-item__title">{article.title}</strong>
                  <span className="trending-item__time">{article.readTime}</span>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={60}>
            <h2 className="section-title-lg" style={{ marginTop: '3rem' }}>
              All Articles <span className="text-muted-sm">({filtered.length} articles)</span>
            </h2>
          </Reveal>
          <div className="blog-list-grid">
            {filtered.map((article, i) => (
              <Reveal key={article.slug} delay={i * 30} className="blog-list-item">
                <div className="blog-list-item__meta">
                  <span className="blog-card-v2__category-icon">
                    <DynamicIcon name={article.categoryIcon} size={14} />
                  </span>
                  <span className="blog-list-item__category">{article.category}</span>
                  <span className="blog-list-item__time">{article.readTime}</span>
                </div>
                <h3 className="blog-list-item__title">
                  <Link to={`/blog/${article.slug}`}>{article.title}</Link>
                </h3>
                <p className="blog-list-item__excerpt">{article.excerpt}</p>
                <div className="blog-list-item__footer">
                  <time className="blog-list-item__date">{article.date}</time>
                  <Link to={`/blog/${article.slug}`} className="blog-card-v2__link">
                    Read
                    <ArrowRightIcon size={14} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={80}>
            <div className="newsletter-block">
              <h3 className="newsletter-block__title">Get Manufacturing Insights in Your Inbox</h3>
              <p className="newsletter-block__lead">
                Subscribe for monthly engineering guides, material updates, and manufacturing tips from our team.
              </p>
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Your email address" aria-label="Email address" required />
                <button type="submit" className="btn btn--primary">Subscribe</button>
              </form>
              <p className="newsletter-block__note">No spam. Unsubscribe anytime.</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
