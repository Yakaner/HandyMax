import { Link } from 'react-router'
import { navItems, policyLinks } from '../siteData'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <Link to="/" className="logo logo--sm">HandyMax</Link>

        <nav className="footer__nav" aria-label="하단 메뉴">
          {navItems.map((item) => (
            <Link key={item.label} to={item.href}>{item.label}</Link>
          ))}
        </nav>

        <div className="footer__utils">
          {policyLinks.map((item) => (
            <Link key={item.label} to={item.href}>{item.label}</Link>
          ))}
        </div>
      </div>
      <div className="container footer__copy">© 2026 HandyMax. All rights reserved.</div>
    </footer>
  )
}
