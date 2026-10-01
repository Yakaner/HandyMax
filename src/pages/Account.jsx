import { useState } from 'react'
import { Link, Outlet, useLocation, useNavigate, useSearchParams } from 'react-router'
import Icon from '../components/Icons'
import { Breadcrumb, InfoList, SelectField, TextLink } from '../components/ui'
import { products } from '../siteData'

const EMAIL = 'designer@example.com' // ponytail: 실제 로그인 계정으로 교체
const SUBSCRIBED = ['interiors'] // ponytail: 구독 API 연동 전 예시 데이터

const menu = [
  ['내 제품', '/account', 'box'],
  ['구독 관리', '/account/subscription', 'refresh'],
  ['결제 내역', '/account/subscription#history', 'receipt'],
  ['다운로드', '/download', 'download'],
  ['계정 설정', '/account/settings', 'gear'],
  ['고객지원', '/support', 'headset'],
]

export function AccountLayout() {
  const { pathname, hash } = useLocation()
  // 구독 관리와 결제 내역(#history)이 같은 페이지라 해시까지 비교
  const isCurrent = (to) => (to.includes('#') ? pathname + hash === to : pathname === to && hash !== '#history')
  return (
    <div className="with-side">
      <aside className="side">
        <nav aria-label="계정 메뉴">
          {menu.map(([label, to, icon]) => (
            <Link key={label} to={to} aria-current={isCurrent(to) ? 'page' : undefined}>
              <Icon name={icon} /> {label}
            </Link>
          ))}
        </nav>
      </aside>
      <div className="with-side__body">
        <Outlet />
      </div>
    </div>
  )
}

export function MyProducts() {
  return (
    <>
      <div className="acc-head">
        <div>
          <h1 className="page-title">내 제품</h1>
          <p className="page-desc">다음 작업을 시작해볼까요?</p>
        </div>
        <p className="acc-head__user"><Icon name="user" /> {EMAIL}</p>
      </div>

      <ul className="owned">
        {products.map((p) => {
          const active = SUBSCRIBED.includes(p.id)
          return (
            <li key={p.id} className="owned__item">
              <img src={p.image} alt="" />
              <div>
                <span className={`chip${active ? ' chip--on' : ''}`}>{active ? '이용 중' : '미구독'}</span>
                <h2 className="owned__name">HandyMax {p.name}</h2>
                <p className="muted">{p.tagline}</p>
                <InfoList rows={[['구독 상태', active ? '월간 구독' : '미구독'], ['이용 기간'], ['다음 결제일']]} />
              </div>
              <div className="owned__side">
                <p className="muted">{p.desc}</p>
                {active ? (
                  <>
                    <Link to={`/download?p=${p.id}`} className="btn btn--light btn--block"><Icon name="download" size={18} /> 다운로드</Link>
                    <Link to="/account/subscription" className="btn btn--line btn--block">구독 관리</Link>
                  </>
                ) : (
                  <>
                    <Link to={`/download?p=${p.id}`} className="btn btn--light btn--block">제품 살펴보기</Link>
                    <Link to={`/checkout?p=${p.id}`} className="btn btn--line btn--block">요금제 보기</Link>
                  </>
                )}
              </div>
            </li>
          )
        })}
      </ul>

      <div className="quick">
        <strong>빠른 도움</strong>
        <Link to="/download#install"><Icon name="doc" /> <span><b>설치 가이드</b>처음 시작하는 분들을 위한 안내입니다.</span><Icon name="chevron" /></Link>
        <Link to="/support"><Icon name="wrench" /> <span><b>인증 문제 해결</b>인증 관련 문제 해결 방법을 확인하세요.</span><Icon name="chevron" /></Link>
        <Link to="/support#inquiry"><Icon name="chat" /> <span><b>문의 내역</b>이전에 문의한 내역을 확인할 수 있습니다.</span><Icon name="chevron" /></Link>
      </div>
    </>
  )
}

export function Subscription() {
  const [params, setParams] = useSearchParams()
  const product = products.find((p) => p.id === params.get('p')) ?? products[0]
  const active = SUBSCRIBED.includes(product.id)

  return (
    <>
      <p className="eyebrow">Subscription</p>
      <h1 className="page-title">구독 관리</h1>

      <div className="tabs" role="tablist">
        {products.map((p) => (
          <button key={p.id} role="tab" aria-selected={p.id === product.id} onClick={() => setParams({ p: p.id }, { replace: true })}>
            {p.name}
          </button>
        ))}
      </div>

      <section className="panel sub">
        <img src={product.image} alt="" />
        <div className="sub__body">
          <div className="sub__top">
            <div>
              <h2 className="sub__name">{product.name}</h2>
              <span className={`chip${active ? ' chip--on' : ''}`}>{active ? '이용 중' : '미구독'}</span>{' '}
              {active && <span className="chip">월간 구독</span>}
            </div>
            {active ? (
              <div className="btn-row">
                <Link to={`/checkout?p=${product.id}`} className="btn btn--line btn--sm">구독 기간 변경</Link>
                <Link to={`/account/subscription/cancel?p=${product.id}`} className="btn btn--light btn--sm">자동 갱신 해지</Link>
              </div>
            ) : (
              <Link to={`/checkout?p=${product.id}`} className="btn btn--light btn--sm">구독하기</Link>
            )}
          </div>
          <InfoList className="stats" rows={[['현재 이용 기간'], ['다음 결제 예정일'], ['다음 결제 금액'], ['자동 갱신', active ? '사용 중' : null]]} />
        </div>
      </section>

      <section className="panel">
        <div className="panel__head">
          <h2 className="block__title">결제수단</h2>
          <button type="button" className="btn btn--line btn--sm">변경</button>
        </div>
        <p className="empty"><Icon name="card" /> 등록된 결제수단이 표시됩니다.</p>
      </section>

      <section className="panel" id="history">
        <h2 className="block__title">결제 내역</h2>
        <div className="table-wrap">
          <table className="table">
            <thead><tr><th>결제일</th><th>상품</th><th>금액</th><th>상태</th><th>영수증</th></tr></thead>
            <tbody>
              <tr><td>—</td><td>Interiors</td><td>—</td><td>—</td><td><a href="#history" className="u">보기</a></td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

export function CancelSubscription() {
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const product = products.find((p) => p.id === params.get('p')) ?? products[0]
  return (
    <div className="container page-pad">
      <Breadcrumb items={[['내 계정', '/account'], ['구독 관리', '/account/subscription'], ['해지 확인']]} />
      <form className="cancel" onSubmit={(e) => { e.preventDefault(); navigate('/account/subscription') }}>
        <h1 className="page-title page-title--sm">자동 갱신을 해지하시겠어요?</h1>
        <p className="page-desc">해지 적용 시점과 이용 종료일을 확인해주세요.</p>
        <div className="cancel__info">
          <img src={product.image} alt="" />
          <InfoList rows={[['제품', product.name], ['현재 구독', '월간'], ['이용 종료일'], ['해지 적용 시점', '정책 확정 후 표시']]} />
        </div>
        <p className="muted">구독 해지와 환불 요청은 별도로 처리됩니다. 상세 기준은 구독·환불 정책에서 확인해주세요.</p>
        <SelectField label="해지 사유 (선택)" name="reason" options={['사용 빈도가 낮아요', '가격이 부담돼요', '필요한 기능이 없어요', '다른 제품을 사용해요', '기타']} />
        <div className="btn-row btn-row--fill">
          <Link to="/account/subscription" className="btn btn--line">돌아가기</Link>
          <button className="btn btn--light">자동 갱신 해지 확인</button>
        </div>
        <TextLink to="/refund-policy#refund">환불 기준 확인</TextLink>
      </form>
    </div>
  )
}

export function Settings() {
  const [saved, setSaved] = useState(false)
  return (
    <>
      <h1 className="page-title">계정 설정</h1>
      <p className="page-desc">계정 정보를 관리하고 보안 및 알림 설정을 변경할 수 있습니다.</p>

      <section className="setting">
        <h2 className="block__title">계정 정보</h2>
        <div className="setting__row">
          <span>이메일</span>
          <p className="setting__value">{EMAIL}</p>
          <button type="button" className="btn btn--line btn--sm">이메일 변경</button>
        </div>
      </section>

      <section className="setting">
        <h2 className="block__title">보안</h2>
        <div className="setting__row">
          <span>비밀번호</span>
          <p className="setting__value">••••••••</p>
          <Link to="/reset-password" className="btn btn--line btn--sm">비밀번호 변경</Link>
        </div>
        <div className="setting__row">
          <span>로그인된 기기</span>
          <p className="setting__value muted">현재 기기</p>
          <button type="button" className="u">다른 기기 로그아웃</button>
        </div>
      </section>

      <section className="setting">
        <h2 className="block__title">알림 설정</h2>
        <div className="setting__row">
          <span>마케팅 정보 수신</span>
          <label className="check setting__value">
            <input type="checkbox" onChange={() => setSaved(false)} /> 이벤트, 신규 제품, 활용 사례 등 유용한 정보를 이메일로 받아보겠습니다.
          </label>
          <button type="button" className="btn btn--line btn--sm" onClick={() => setSaved(true)}>{saved ? '저장됨' : '저장'}</button>
        </div>
      </section>

      <section className="setting">
        <h2 className="block__title">회원 탈퇴</h2>
        <div className="setting__row">
          <span />
          <p className="setting__value muted">진행 중인 구독과 데이터 처리 내용을 확인한 후 탈퇴를 진행하세요.</p>
          <Link to="/support" className="u">탈퇴 안내 보기</Link>
        </div>
      </section>
    </>
  )
}
