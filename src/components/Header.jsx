import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../data/content';
import { ArrowRightIcon, ChevronDownIcon } from './icons/Icons';
import Logo from './Logo';
import '../styles/simpleNavbar.css';

function isNavActive(pathname, href, children = []) {
  if (href === '/') return pathname === '/';

  if (children.length) {
    return (
      pathname === href ||
      children.some(
        (child) =>
          pathname === child.href || pathname.startsWith(`${child.href}/`)
      )
    );
  }

  if (href === '/blog') return pathname.startsWith('/blog');

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    document.documentElement.classList.toggle('mobile-menu-active', menuOpen);
    document.body.classList.toggle('mobile-menu-active', menuOpen);

    return () => {
      document.documentElement.classList.remove('mobile-menu-active');
      document.body.classList.remove('mobile-menu-active');
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.nav-dropdown')) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const headerClass = [
    'simple-site-header',
    scrolled ? 'simple-site-header--scrolled' : '',
    menuOpen ? 'simple-site-header--menu-open' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <header className={headerClass}>
      <div className="container simple-header-inner">
        <Link
          to="/"
          className="simple-header-logo"
          aria-label="UMA Metal Craft — Home"
        >
          <Logo />
        </Link>

        <nav className="simple-header-nav" aria-label="Main navigation">
          <ul className="simple-nav-list">
            {navLinks.map((link) =>
              link.children ? (
                <li
                  key={link.label}
                  className={`simple-nav-dropdown nav-dropdown ${
                    openDropdown === link.label
                      ? 'simple-nav-dropdown--open'
                      : ''
                  }`}
                >
                  <button
                    type="button"
                    className={`simple-nav-dropdown-toggle ${
                      isNavActive(location.pathname, link.href, link.children)
                        ? 'simple-nav-dropdown-toggle--active'
                        : ''
                    }`}
                    aria-expanded={openDropdown === link.label}
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === link.label ? null : link.label
                      )
                    }
                  >
                    {link.label}
                    <ChevronDownIcon size={14} />
                  </button>

                  <div className="simple-nav-dropdown-menu">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="simple-nav-dropdown-link"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </li>
              ) : (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className={`simple-nav-link ${
                      isNavActive(location.pathname, link.href)
                        ? 'simple-nav-link--active'
                        : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>

        <div className="simple-header-actions">
          <Link to="/contact" className="simple-header-cta">
            Get Instant Quote
            <ArrowRightIcon size={16} />
          </Link>

          <button
            type="button"
            className={`simple-menu-toggle ${
              menuOpen ? 'simple-menu-toggle--open' : ''
            }`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`simple-mobile-menu ${
          menuOpen ? 'simple-mobile-menu--open' : ''
        }`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile navigation">
          <ul className="simple-mobile-nav-list">
            {navLinks.map((link) =>
              link.children ? (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className={`simple-mobile-nav-link ${
                      isNavActive(location.pathname, link.href, link.children)
                        ? 'simple-mobile-nav-link--active'
                        : ''
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>

                  <div className="simple-mobile-submenu">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="simple-mobile-nav-sublink"
                        onClick={() => setMenuOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </li>
              ) : (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className={`simple-mobile-nav-link ${
                      isNavActive(location.pathname, link.href)
                        ? 'simple-mobile-nav-link--active'
                        : ''
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          <Link
            to="/contact"
            className="simple-mobile-cta"
            onClick={() => setMenuOpen(false)}
          >
            Get Instant Quote
            <ArrowRightIcon size={16} />
          </Link>
        </nav>
      </div>
    </header>
  );
}