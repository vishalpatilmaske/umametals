import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { blogArticles } from '../../data/content';
import { fetchBlogs } from '../../lib/api';
import { ArrowRightIcon, DocumentIcon, DynamicIcon, StarIcon } from '../icons/Icons';
import Reveal from '../Reveal';

export default function BlogPreview() {
  const [articles, setArticles] = useState(blogArticles);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const blogs = await fetchBlogs();
        if (blogs.length > 0) {
          setArticles(blogs.slice(0, 3));
        }
      } catch {
        setArticles(blogArticles);
      }
    };

    loadBlogs();
  }, []);

  return (
    <section className="section blog-preview-v2" aria-labelledby="blog-heading">
      <div className="container">
        <Reveal className="blog-preview-v2__header">
          <div>
            <p className="section-eyebrow">
              <span className="section-eyebrow__line" aria-hidden="true" />
              Our Blog
            </p>
            <h2 id="blog-heading" className="section-title-lg">
              Industrial <span className="title-accent">Insights</span>
            </h2>
            <p className="section-lead">
              Technical articles and updates from the factory floor to keep you informed and inspired.
            </p>
          </div>
          <Link to="/blog" className="btn-read-all">
            <DocumentIcon size={18} className="btn-read-all__icon" />
            Read All Articles
            <ArrowRightIcon size={16} className="btn-read-all__arrow" />
          </Link>
        </Reveal>

        <div className="blog-preview-v2__grid">
          {articles.map((article, i) => (
            <Reveal
              key={article.slug}
              delay={i * 70}
              className={`blog-card-v2 ${article.featured ? 'blog-card-v2--featured' : ''}`}
            >
              <div className="blog-card-v2__image-wrap">
                <img src={article.image} alt="" loading="lazy" />
                {article.featured && (
                  <span className="blog-card-v2__featured-badge">
                    <StarIcon size={12} />
                    Featured
                  </span>
                )}
              </div>
              <div className="blog-card-v2__body">
                <div className="blog-card-v2__meta">
                  <span className="blog-card-v2__category">
                    <span className="blog-card-v2__category-icon">
                      <DynamicIcon name={article.categoryIcon} size={14} />
                    </span>
                    {article.category}
                  </span>
                  <span className="blog-card-v2__meta-sep">|</span>
                  <time className="blog-card-v2__date" dateTime={article.date}>
                    {article.date}
                  </time>
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
      </div>
    </section>
  );
}
