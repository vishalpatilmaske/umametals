import { useEffect, useState } from 'react';
import { usePageMeta } from '../hooks/usePageMeta';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { blogCategories } from '../data/innerPages';
import { fetchBlogs } from '../lib/api';
import { ArrowRightIcon, DynamicIcon } from '../components/icons/Icons';
import './blogPage.css';

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  usePageMeta(
    'Industrial Manufacturing Blog | CNC Laser Cutting, Metal Fabrication Guides | UMA Metal Craft',
    'CNC machining guides, metal fabrication tutorials, material selection guides, and manufacturing insights from the factory floor.'
  );

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const blogs = await fetchBlogs();
        setArticles(blogs);
        setError(null);
      } catch {
        setArticles([]);
        setError('Unable to load articles. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, []);

  const filtered =
    activeCategory === 'All'
      ? articles
      : articles.filter((article) => article.category === activeCategory);

  const featured = articles.filter((article) => article.featured);
  const trending = articles.filter((article) => article.trending);

  return (
    <>
      <section className="blog-hero">
        <div className="blog-hero__bg">
          <img src="/assets/blog.png" alt="Industrial manufacturing blog" />
        </div>
        <div className="blog-hero__overlay" />

        <div className="container blog-hero__inner">
          <Reveal className="blog-hero__content">
            <p className="blog-hero__tag">
              <span /> Engineering Insights
            </p>

            <h1>
              Industrial Manufacturing <br />
              <strong>Blog</strong>
            </h1>

            <div className="blog-orange-line" />

            <p className="blog-hero__lead">
              CNC machining guides, metal fabrication tutorials, material
              selection guides, and manufacturing insights from the factory
              floor.
            </p>
          </Reveal>

          <Reveal delay={100} className="blog-hero__stats">
            <div className="blog-stat">
              <strong>{articles.length || '—'}</strong>
              <span>Total Articles</span>
            </div>

            <div className="blog-stat">
              <strong>{featured.length || '—'}</strong>
              <span>Featured Guides</span>
            </div>

            <div className="blog-stat">
              <strong>{blogCategories.length}</strong>
              <span>Categories</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="blog-section">
        <div className="container">
          {loading && <p className="blog-status">Loading articles...</p>}

          {!loading && error && <p className="blog-status blog-status--error">{error}</p>}

          {!loading && !error && articles.length === 0 && (
            <p className="blog-status">No articles published yet. Check back soon.</p>
          )}

          <Reveal className="blog-filter-wrap">
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
          </Reveal>

          {featured.length > 0 && (
            <>
              <Reveal className="blog-section-header">
                <p>
                  <span /> Featured Articles <span />
                </p>
                <h2>
                  Practical Manufacturing <strong>Guides</strong>
                </h2>
              </Reveal>

              <div className="blog-featured-grid">
                {featured.map((article, i) => (
                  <Reveal
                    key={article.slug}
                    delay={i * 50}
                    className="blog-featured-card"
                  >
                    <div className="blog-featured-card__image">
                      <img src={article.image} alt={article.title} loading="lazy" />
                    </div>

                    <div className="blog-featured-card__body">
                      <div className="blog-meta">
                        <span>{article.category}</span>
                        <time>{article.date}</time>
                        <span>{article.readTime}</span>
                      </div>

                      <h3>
                        <Link to={`/blog/${article.slug}`}>{article.title}</Link>
                      </h3>

                      <p>{article.excerpt}</p>

                      <Link to={`/blog/${article.slug}`} className="blog-read-link">
                        Read Article <ArrowRightIcon size={14} />
                      </Link>
                    </div>
                  </Reveal>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {trending.length > 0 && (
        <section className="blog-process-section">
          <div className="container">
            <Reveal className="blog-section-header blog-section-header--dark">
              <p>
                <span /> Trending Now <span />
              </p>
              <h2>
                Factory Floor <strong>Insights</strong>
              </h2>
            </Reveal>

            <div className="blog-trending-grid">
              {trending.map((article, i) => (
                <Reveal key={article.slug} delay={i * 40}>
                  <Link to={`/blog/${article.slug}`} className="blog-trending-card">
                    <span className="blog-trending-card__count">
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    <span className="blog-trending-card__category">
                      {article.category}
                    </span>

                    <strong>{article.title}</strong>

                    <small>{article.readTime}</small>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="blog-section blog-section--muted">
        <div className="container">
          <Reveal className="blog-section-header">
            <p>
              <span /> All Articles <span />
            </p>
            <h2>
              Latest Manufacturing <strong>Knowledge</strong>
            </h2>
          </Reveal>

          <div className="blog-list-grid">
            {filtered.map((article, i) => (
              <Reveal key={article.slug} delay={i * 30} className="blog-list-card">
                <div className="blog-list-card__meta">
                  <span className="blog-list-card__icon">
                    <DynamicIcon name={article.categoryIcon || 'book'} size={14} />
                  </span>

                  <span>{article.category}</span>
                  <time>{article.date}</time>
                </div>

                <h3>
                  <Link to={`/blog/${article.slug}`}>{article.title}</Link>
                </h3>

                <p>{article.excerpt}</p>

                <div className="blog-list-card__footer">
                  <small>{article.readTime}</small>

                  <Link to={`/blog/${article.slug}`} className="blog-read-link">
                    Read <ArrowRightIcon size={14} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="blog-section">
        <div className="container">
          <Reveal className="blog-newsletter">
            <div>
              <p className="blog-section-tag">
                <span /> Monthly Updates
              </p>

              <h2>
                Get Manufacturing Insights in <strong>Your Inbox</strong>
              </h2>

              <p>
                Subscribe for engineering guides, material updates and
                manufacturing tips from our team.
              </p>
            </div>

            <form className="blog-newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email address" required />
              <button type="submit">Subscribe</button>
              <small>No spam. Unsubscribe anytime.</small>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}