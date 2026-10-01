import { footerLinks, navItems } from '../siteData'
import { SearchIcon } from './Icons'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a href="/" className="logo logo--sm">HandyMax</a>

        <nav className="footer__nav" aria-label="하단 메뉴">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <div className="footer__utils">
          {footerLinks.map((item) => (
            <a key={item.label} href={item.href}>{item.label}</a>
          ))}
          <button type="button" className="icon-btn" aria-label="검색">
            <SearchIcon size={18} />
          </button>
        </div>
      </div>
      <div className="container footer__copy">
        © 2026 HandyMax. All rights reserved.
      </div>
    </footer>
  )
}
