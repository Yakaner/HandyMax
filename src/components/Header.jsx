import { useEffect, useState } from 'react'
import { navItems } from '../siteData'
import { SearchIcon } from './Icons'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header${scrolled ? ' is-scrolled' : ''}${menuOpen ? ' is-open' : ''}`}>
      <div className="container header__inner">
        <a href="/" className="logo">HandyMax</a>

        <nav className="header__nav" aria-label="주 메뉴">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header__utils">
          <button type="button" className="icon-btn" aria-label="검색">
            <SearchIcon />
          </button>
          <span className="header__divider" aria-hidden="true" />
          <a href="#login" className="header__login">로그인</a>
          <button
            type="button"
            className="header__burger"
            aria-label="메뉴 열기"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
