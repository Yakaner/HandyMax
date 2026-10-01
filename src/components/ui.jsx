import { useId, useState } from 'react'
import { Link } from 'react-router'
import Icon from './Icons'

export function PageHead({ eyebrow, title, desc, image, children }) {
  return (
    <section className={`page-head${image ? ' page-head--image' : ''}`}>
      {image && <div className="page-head__bg" style={{ backgroundImage: `url(${image})` }} aria-hidden="true" />}
      <div className="container page-head__inner">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="page-title">{title}</h1>
        {desc && <p className="page-desc">{desc}</p>}
        {children}
      </div>
    </section>
  )
}

export function Breadcrumb({ items }) {
  return (
    <nav className="crumbs" aria-label="현재 위치">
      {items.map(([label, to], i) =>
        to ? (
          <span key={label}>
            <Link to={to}>{label}</Link>
            <Icon name="chevron" size={14} />
          </span>
        ) : (
          <span key={label} aria-current={i === items.length - 1 ? 'page' : undefined}>{label}</span>
        ),
      )}
    </nav>
  )
}

export function Field({ label, hint, children, ...input }) {
  const id = useId()
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      {children ? children(id) : <input id={id} className="input" {...input} />}
      {hint && <p className="field__hint">{hint}</p>}
    </div>
  )
}

export function PasswordField({ label, ...input }) {
  const [show, setShow] = useState(false)
  return (
    <Field label={label}>
      {(id) => (
        <div className="input-wrap">
          <input id={id} className="input" type={show ? 'text' : 'password'} minLength={8} required {...input} />
          <button type="button" className="input-wrap__btn" onClick={() => setShow((v) => !v)} aria-label={show ? '비밀번호 숨기기' : '비밀번호 보기'}>
            <Icon name={show ? 'eyeOff' : 'eye'} />
          </button>
        </div>
      )}
    </Field>
  )
}

export function SelectField({ label, options, placeholder = '선택해주세요.', ...rest }) {
  return (
    <Field label={label}>
      {(id) => (
        <select id={id} className="input select" defaultValue="" {...rest}>
          <option value="" disabled>{placeholder}</option>
          {options.map((o) => <option key={o}>{o}</option>)}
        </select>
      )}
    </Field>
  )
}

// 라벨-값 목록. rows: [[라벨, 값], ...] — 값이 없으면 '—'
export function InfoList({ rows, className = '' }) {
  return (
    <dl className={`info-list ${className}`}>
      {rows.map(([k, v]) => (
        <div key={k}>
          <dt>{k}</dt>
          <dd>{v ?? '—'}</dd>
        </div>
      ))}
    </dl>
  )
}

export function TextLink({ to, children, icon = 'arrow' }) {
  return (
    <Link to={to} className="text-link">
      {children} {icon && <Icon name={icon} size={16} />}
    </Link>
  )
}
