import { useState } from 'react'
import { Link } from 'react-router'
import Icon from '../components/Icons'
import { PageHead, TextLink } from '../components/ui'
import { products } from '../siteData'
import stone from '../assets/images/update.webp'

// ponytail: 실제 업데이트 내역은 CMS/API 연동 전까지 제품별 한 줄 예시
const updates = products.map((p) => ({
  product: p,
  title: `${p.name} 업데이트`,
  tags: ['개선', '수정'],
  body: '확정된 기능 변경 및 오류 수정 내용을 안내합니다.',
}))

export default function Updates() {
  const [filter, setFilter] = useState('all')
  const [q, setQ] = useState('')
  const list = updates.filter((u) => (filter === 'all' || u.product.id === filter) && (u.title + u.body).includes(q.trim()))

  return (
    <>
      <PageHead eyebrow="Updates" title="Updates." desc="HandyMax는 더 나은 작업 경험을 위해 꾸준히 업데이트하고 있습니다. 새로운 기능과 개선 사항을 한눈에 확인하세요." image={stone} />

      <div className="container section-pad">
        <div className="toolbar">
          <div className="seg" role="radiogroup" aria-label="제품 필터">
            {[{ id: 'all', name: '전체' }, ...products].map((p) => (
              <button type="button" key={p.id} role="radio" aria-checked={filter === p.id} onClick={() => setFilter(p.id)}>{p.name}</button>
            ))}
          </div>
          <label className="search search--sm">
            <Icon name="search" size={18} />
            <input type="search" placeholder="업데이트 내용 검색" value={q} onChange={(e) => setQ(e.target.value)} aria-label="업데이트 검색" />
          </label>
        </div>

        {list.map((u) => (
          <article key={u.product.id} className="update">
            <div>
              <h2 className="update__product">{u.product.name}</h2>
              <p className="muted">버전 —<br />게시일 —</p>
            </div>
            <div>
              <h3 className="update__title">{u.title}</h3>
              <p>{u.tags.map((t) => <span key={t} className="chip">{t}</span>)}</p>
              <p className="muted">{u.body}</p>
              <div className="btn-row">
                <button type="button" className="btn btn--light btn--sm">상세 보기 <Icon name="arrow" size={16} /></button>
                <TextLink to={`/download?p=${u.product.id}#install`}>설치 가이드</TextLink>
              </div>
            </div>
          </article>
        ))}
        {!list.length && <p className="empty">검색 결과가 없습니다.</p>}

        <div className="help">
          <Icon name="doc" size={28} />
          <div>
            <strong>설치 전 지원 환경을 확인하세요.</strong>
            <p className="muted">원활한 사용을 위해 사용 중인 환경이 지원되는지 미리 확인해 주세요.</p>
          </div>
          <Link to="/download" className="text-link">지원 환경 안내 <Icon name="arrow" size={16} /></Link>
        </div>
      </div>
    </>
  )
}
