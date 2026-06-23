import { useEffect, useState } from 'react';
import { usePageMeta } from '../hooks/usePageMeta';
import { Link, useParams } from 'react-router-dom';
import { company } from '../data/content';
import { allBlogArticles } from '../data/innerPages';
import { fetchBlogBySlug } from '../lib/api';
import Reveal from '../components/Reveal';

export default function ArticlePage() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const loadArticle = async () => {
      setLoading(true);
      setNotFound(false);

      try {
        const blog = await fetchBlogBySlug(slug);
        setArticle(blog);
      } catch {
        const fallback = allBlogArticles.find((a) => a.slug === slug);
        if (fallback) {
          setArticle({ ...fallback, content: '' });
        } else {
          setNotFound(true);
        }
      } finally {
        setLoading(false);
      }
    };

    loadArticle();
  }, [slug]);

  usePageMeta(
    article ? `${article.title} | UMA Metal Craft` : 'Article | UMA Metal Craft',
    article?.excerpt || 'Industrial manufacturing insights from UMA Metal Craft.'
  );

  if (loading) {
    return (
      <div className="container" style={{ padding: '4rem 0' }}>
        <p>Loading article...</p>
      </div>
    );
  }

  if (notFound || !article) {
    return (
      <div className="container" style={{ padding: '4rem 0' }}>
        <h1>Article not found</h1>
        <Link to="/blog" className="text-link">Back to Blog</Link>
      </div>
    );
  }

  return (
    <article className="page-article">
      <header className="article-hero">
        <div className="container article-hero-inner">
          <Reveal>
            <Link to="/blog" className="text-link text-link--back">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
          </Reveal>
          <Reveal delay={80}>
            <div className="article-meta">
              <span>{article.category}</span>
              <time dateTime={article.date}>{article.date}</time>
              <span>{article.readTime}</span>
            </div>
            <h1 className="article-title">{article.title}</h1>
            <p className="article-intro">{article.excerpt}</p>
          </Reveal>
        </div>
      </header>

      <div className="container article-layout">
        <div className="article-content">
          <Reveal>
            <section>
              {article.image && (
                <img src={article.image} alt="" className="article-featured-image" loading="lazy" />
              )}
              {article.content ? (
                <div
                  className="article-body-html article-content"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              ) : (
                <>
                  <p>
                    This article provides practical guidance for industrial buyers and procurement teams evaluating precision metal manufacturing partners. At {company.shortName}, we apply these principles daily across our Nagpur facility.
                  </p>
                  <p>
                    {article.excerpt} Our engineering team works with clients from initial RFQ through production, ensuring drawings are optimized for manufacturability while meeting tight tolerance requirements.
                  </p>
                </>
              )}
            </section>
          </Reveal>

          <Reveal delay={80}>
            <div className="article-closing">
              <h2>Need Manufacturing Support?</h2>
              <p>
                Contact our team with your drawings and specifications. We provide detailed quotations within 24 hours for CNC laser cutting, metal fabrication, and precision machining requirements.
              </p>
              <div className="article-cta-actions">
                <Link to="/contact" className="btn btn--primary">Request a Quote</Link>
                <Link to="/capabilities" className="btn btn--ghost">View Services</Link>
              </div>
            </div>
          </Reveal>
        </div>

        <aside className="article-sidebar">
          <Reveal className="sidebar-card">
            <h3>Related Topics</h3>
            <ul className="sidebar-links">
              <li><Link to="/capabilities">Manufacturing Services</Link></li>
              <li><Link to="/products">Product Range</Link></li>
              <li><Link to="/facilities">Our Facility</Link></li>
            </ul>
          </Reveal>
          <Reveal delay={80} className="sidebar-card sidebar-card--accent">
            <h3>Get a Quote</h3>
            <p>Send your drawings and receive a competitive quotation within 24 hours.</p>
            <Link to="/contact" className="btn btn--primary btn--full">Contact Us</Link>
          </Reveal>
        </aside>
      </div>
    </article>
  );
}
