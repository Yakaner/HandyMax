import { useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router'
import Icon from '../components/Icons'
import { InfoList, TextLink } from '../components/ui'
import { products } from '../siteData'

const EMAIL = 'designer@example.com' // ponytail: 실제 로그인 계정으로 교체
const PLANS = { monthly: '월간 구독', yearly: '연간 구독' }

function useOrder() {
  const [params] = useSearchParams()
  const product = products.find((p) => p.id === params.get('p')) ?? products[0]
  const plan = params.get('plan') === 'yearly' ? 'yearly' : 'monthly'
  return { product, plan, params }
}

export function Checkout() {
  const navigate = useNavigate()
  const { product, plan, params } = useOrder()
  const [agreed, setAgreed] = useState(false)
  const set = (k, v) => navigate(`?${new URLSearchParams({ ...Object.fromEntries(params), [k]: v })}`, { replace: true })

  return (
    <div className="container page-pad">
      <div className="checkout__head">
        <h1 className="page-title">주문 및 결제</h1>
        <ol className="steps">
          <li>01 제품 선택</li>
          <li aria-current="step">02 결제</li>
          <li>03 설치</li>
        </ol>
      </div>

      <form
        className="checkout"
        onSubmit={(e) => { e.preventDefault(); navigate(`/checkout/complete?p=${product.id}&plan=${plan}`) }}
      >
        <div className="checkout__main">
          <section className="block">
            <h2 className="block__title">계정 정보</h2>
            <InfoList rows={[['이메일', EMAIL]]} />
          </section>

          <section className="block">
            <h2 className="block__title">구독 상품</h2>
            <div className="seg" role="radiogroup" aria-label="제품">
              {products.map((p) => (
                <button type="button" key={p.id} role="radio" aria-checked={p.id === product.id} onClick={() => set('p', p.id)}>
                  {p.name}
                </button>
              ))}
            </div>
            <div className="seg" role="radiogroup" aria-label="구독 방식">
              {Object.entries(PLANS).map(([k, label]) => (
                <button type="button" key={k} role="radio" aria-checked={k === plan} onClick={() => set('plan', k)}>
                  {label}
                </button>
              ))}
            </div>
          </section>

          <section className="block">
            <h2 className="block__title">결제수단</h2>
            <select className="input select" defaultValue="" required aria-label="결제수단">
              <option value="" disabled>결제수단 선택</option>
              <option>신용·체크카드</option>
              <option>계좌이체</option>
              <option>간편결제</option>
            </select>
          </section>

          <section className="block">
            <h2 className="block__title">구독 조건 확인</h2>
            <InfoList
              rows={[
                ['자동 갱신', '확정 예정'],
                ['결제 주기', plan === 'yearly' ? '연간' : '월간'],
                ['해지 및 환불', <Link key="p" to="/refund-policy" className="u">구독·환불 정책</Link>],
              ]}
            />
            <label className="check">
              <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} required />
              주문 내용 및 결제 조건을 확인했습니다.
            </label>
          </section>
        </div>

        <aside className="summary">
          <h2 className="block__title">주문 요약</h2>
          <p className="summary__name">{product.name}</p>
          <p className="muted">{PLANS[plan]}</p>
          <InfoList rows={[['상품 금액'], ['세금']]} />
          <InfoList className="summary__total" rows={[['오늘 결제할 금액', '요금 확정 예정'], ['다음 결제 예정일']]} />
          <button className="btn btn--light btn--block" disabled={!agreed}>
            {agreed ? '결제하기' : '결제 조건 확인 후 진행'}
          </button>
          <p className="muted small">
            결제를 진행하시면 구독 조건에 동의하는 것으로 간주됩니다.{' '}
            <Link to="/refund-policy" className="u">구독·환불 정책</Link>을 반드시 확인해 주세요.
          </p>
        </aside>
      </form>
    </div>
  )
}

export function CheckoutComplete() {
  const { product, plan } = useOrder()
  return (
    <div className="container page-pad result">
      <span className="result__icon"><Icon name="check" size={30} /></span>
      <h1 className="page-title">구독이 시작되었습니다.</h1>
      <p className="page-desc">이제 {product.name}를 설치하고 작업을 시작하세요.</p>
      <InfoList className="result__info" rows={[['제품', product.name], ['구독', PLANS[plan]], ['계정', EMAIL], ['결제 금액'], ['이용 기간']]} />
      <Link to={`/download?p=${product.id}`} className="btn btn--light result__cta">
        설치파일 다운로드 <Icon name="download" size={18} />
      </Link>
      <TextLink to={`/download?p=${product.id}#install`} icon="chevron">설치 가이드 보기</TextLink>

      <ol className="flow">
        <li><span>01</span><strong>다운로드</strong>설치파일을 다운로드하세요.</li>
        <li><span>02</span><strong>설치</strong>안내에 따라 프로그램을 설치하세요.</li>
        <li><span>03</span><strong>라이선스 인증</strong>구독한 계정으로 로그인하고 라이선스를 인증하세요.</li>
      </ol>
      <div className="result__links">
        <TextLink to="/account" icon="chevron">내 제품으로 이동</TextLink>
        <TextLink to="/account/subscription#history" icon="chevron">결제 내역 보기</TextLink>
      </div>
    </div>
  )
}

export function CheckoutFailed() {
  const { product, plan } = useOrder()
  return (
    <div className="container page-pad result">
      <span className="result__icon"><Icon name="alert" size={30} /></span>
      <h1 className="page-title">결제를 완료하지 못했어요.</h1>
      <p className="page-desc">결제수단과 입력 정보를 확인한 후 다시 시도해주세요.</p>

      <div className="result__product">
        <img src={product.image} alt="" />
        <div>
          <p className="muted small">선택 상품</p>
          <strong>{product.name}</strong>
          <p className="muted">{PLANS[plan]}</p>
        </div>
      </div>
      <p className="note"><Icon name="info" size={18} /> 결제 상태가 불분명하다면 결제 내역을 먼저 확인해주세요.</p>

      <div className="btn-row">
        <Link to={`/checkout?p=${product.id}&plan=${plan}`} className="btn btn--light">다시 결제하기 <Icon name="arrow" size={18} /></Link>
        <Link to={`/checkout?p=${product.id}&plan=${plan}`} className="btn btn--line">결제수단 변경</Link>
      </div>
      <div className="result__links">
        <TextLink to="/account/subscription#history">결제 내역 확인</TextLink>
        <TextLink to="/support#inquiry">고객지원 문의</TextLink>
      </div>
    </div>
  )
}
