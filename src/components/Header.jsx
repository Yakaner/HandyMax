import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { navItems } from '../siteData'
import Icon, { SearchIcon } from './Icons'

export default function Header() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  // ponytail: 로그인 상태는 계정 페이지 여부로만 판단 — 실제 인증 붙일 때 교체
  const signedIn = pathname.startsWith('/account') || pathname.startsWith('/checkout')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const cls = ['header', (scrolled || !isHome) && 'is-scrolled', !isHome && 'is-solid', menuOpen && 'is-open']

  return (
    <header className={cls.filter(Boolean).join(' ')}>
      <div className="container header__inner">
        <Link to="/" className="logo">HandyMax</Link>

        <nav className="header__nav" aria-label="주 메뉴" onClick={() => setMenuOpen(false)}>
          {navItems.map((item) => (
            <Link key={item.label} to={item.href}>{item.label}</Link>
          ))}
        </nav>

        <div className="header__utils">
          <Link to="/support" className="icon-btn" aria-label="검색">
            <SearchIcon />
          </Link>
          <span className="header__divider" aria-hidden="true" />
          {signedIn ? (
            <Link to="/account" className="header__login header__account">
              내 계정 <Icon name="user" size={18} />
            </Link>
          ) : (
            <Link to="/login" className="header__login">로그인</Link>
          )}
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
