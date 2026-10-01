import { useState } from 'react'
import Icon from '../components/Icons'
import { Field, PageHead, SelectField } from '../components/ui'
import { faqs, products } from '../siteData'
import { Faq } from './Download'
import corridor from '../assets/images/support.webp'

const cats = ['전체', '설치·인증', '구독·결제', '계정', '모델 사용권']

export default function Support() {
  const [cat, setCat] = useState('전체')
  const [q, setQ] = useState('')
  const [sent, setSent] = useState(false)
  const list = faqs.filter((f) => (cat === '전체' || f[0] === cat) && (f[1] + f[2]).includes(q.trim()))

  return (
    <>
      <PageHead eyebrow="Support center" title="무엇을 도와드릴까요?" image={corridor}>
        <label className="search">
          <Icon name="search" />
          <input type="search" placeholder="설치, 결제, 라이선스 검색" value={q} onChange={(e) => setQ(e.target.value)} aria-label="자주 묻는 질문 검색" />
        </label>
      </PageHead>

      <div className="container section-pad">
        <div className="tabs tabs--line" role="tablist">
          {cats.map((c) => (
            <button key={c} role="tab" aria-selected={c === cat} onClick={() => setCat(c)}>{c}</button>
          ))}
        </div>

        <h2 className="section-title">자주 묻는 질문</h2>
        {list.length ? <Faq items={list} /> : <p className="empty">검색 결과가 없습니다. 아래 양식으로 문의해주세요.</p>}

        <section className="inquiry" id="inquiry">
          <div>
            <h2 className="section-title">해결되지 않았다면<br />문의해주세요.</h2>
            <p className="muted">아래 양식을 보내주시면 확인 후 이메일로 안내드리겠습니다.</p>
          </div>
          {sent ? (
            <p className="inquiry__done"><Icon name="check" /> 문의가 접수되었습니다. 확인 후 이메일로 답변드리겠습니다.</p>
          ) : (
            <form className="form" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
              <SelectField label="문의 제품" name="product" options={products.map((p) => p.name)} required />
              <SelectField label="문의 유형" name="type" options={cats.slice(1).concat('기타')} required />
              <Field label="이메일" type="email" name="email" placeholder="name@example.com" required />
              <Field label="제목" name="title" placeholder="제목을 입력해주세요." required />
              <Field label="문의 내용">
                {(id) => <textarea id={id} className="input" name="body" rows={5} placeholder="문의 내용을 자세히 입력해주세요." required />}
              </Field>
              <Field label="파일 첨부" type="file" name="file" hint="오류 화면과 사용 환경을 함께 알려주세요." />
              <button className="btn btn--light">문의 보내기</button>
            </form>
          )}
        </section>
      </div>
    </>
  )
}
