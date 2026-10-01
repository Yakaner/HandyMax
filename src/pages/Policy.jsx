import { useLocation } from 'react-router'
import { Breadcrumb, TextLink } from '../components/ui'

const PENDING = '확정된 내용을 반영할 예정입니다.'

// 목차 + 번호 섹션 레이아웃. sections: [{ id, title, body, extra }]
function PolicyLayout({ eyebrow, title, desc, tocTitle = '목차', sections, top, children }) {
  const { hash } = useLocation()
  const current = hash.slice(1) || sections[0].id
  return (
    <div className="with-side">
      <aside className="side side--toc">
        <p className="side__title">{tocTitle}</p>
        <nav aria-label={tocTitle}>
          {sections.map((s, i) => (
            <a key={s.id} href={`#${s.id}`} aria-current={current === s.id ? 'true' : undefined}>
              <span>{String(i + 1).padStart(2, '0')}</span> {s.title}
            </a>
          ))}
        </nav>
      </aside>
      <div className="with-side__body policy">
        {top}
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="page-title">{title}</h1>
        {desc && <p className="page-desc">{desc}</p>}
        <p className="policy__meta">시행일 <b>확정 예정</b></p>
        {children}
        {sections.map((s, i) => (
          <section key={s.id} id={s.id} className="policy__sec">
            <span className="policy__no">{String(i + 1).padStart(2, '0')}</span>
            <div>
              <h2>{s.title}</h2>
              {s.lead && <p className="policy__lead">{s.lead}</p>}
              <p className="muted">{s.body ?? PENDING}</p>
              {s.extra}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}

export function Terms() {
  return (
    <PolicyLayout
      eyebrow="Terms of service"
      title="이용약관"
      sections={[
        { id: 'purpose', title: '목적 및 적용 범위', body: `서비스의 적용 범위와 이용 조건을 안내합니다. ${PENDING}` },
        { id: 'account', title: '계정 및 회원 관리', body: `계정 생성, 회원 정보 관리 및 이용자 권한에 관한 사항을 안내합니다. ${PENDING}` },
        { id: 'service', title: '서비스 이용', body: `서비스의 제공 범위와 이용 방법, 이용 시 유의사항을 안내합니다. ${PENDING}` },
        { id: 'billing', title: '구독 및 결제', body: `구독 서비스의 이용과 결제 관련 사항을 안내합니다. ${PENDING}`, extra: <TextLink to="/refund-policy">구독·환불 정책 보기</TextLink> },
        { id: 'limit', title: '이용 제한', body: `서비스 이용 제한과 관련된 사항을 안내합니다. ${PENDING}` },
        { id: 'change', title: '서비스 변경 및 종료', body: `서비스 내용 변경, 제공 중단 및 종료와 관련된 사항을 안내합니다. ${PENDING}` },
        { id: 'contact', title: '문의', body: '이용약관과 관련한 문의는 고객지원을 통해 안내받으실 수 있습니다.', extra: <TextLink to="/support#inquiry">고객지원</TextLink> },
      ]}
    />
  )
}

export function Privacy() {
  const later = '실제 운영 현황 확인 후 안내할 예정입니다.'
  return (
    <PolicyLayout
      eyebrow="Privacy policy"
      title="개인정보처리방침"
      desc="HandyMax는 이용자의 개인정보를 소중히 여기며, 관련 법령에 따라 안전하게 처리합니다."
      sections={[
        {
          id: 'collect',
          title: '처리 목적 및 수집 항목',
          body: 'HandyMax는 아래 목적을 위해 필요한 최소한의 개인정보를 수집하고 처리합니다.',
          extra: (
            <div className="table-wrap">
              <table className="table">
                <thead><tr><th>구분</th><th>항목</th><th>처리 목적</th></tr></thead>
                <tbody>
                  {['회원가입', '구독·결제', '플러그인 인증'].map((r) => <tr key={r}><td>{r}</td><td>—</td><td>—</td></tr>)}
                </tbody>
              </table>
            </div>
          ),
        },
        { id: 'retention', title: '보유 및 파기', body: later },
        { id: 'third-party', title: '처리 위탁 및 제3자 제공', body: later },
        { id: 'overseas', title: '국외 이전', body: later },
        { id: 'rights', title: '이용자 권리', body: later },
        { id: 'cookies', title: '쿠키 및 접속 정보', body: later },
        { id: 'contact', title: '문의처', body: '개인정보 처리와 관련한 문의는 고객지원으로 접수해 주시기 바랍니다.', extra: <TextLink to="/support#inquiry">고객지원 문의</TextLink> },
      ]}
    />
  )
}

export function RefundPolicy() {
  return (
    <PolicyLayout
      eyebrow="Policy"
      title="구독·환불 정책"
      tocTitle="정책"
      sections={[
        { id: 'billing', title: '결제 및 갱신', lead: '결제 주기와 자동 갱신 여부를 안내합니다.', body: '구독 요금의 결제 주기, 결제 수단, 자동 갱신 여부와 관련된 세부 사항은 정책이 확정되는 대로 이곳에 안내할 예정입니다.' },
        { id: 'change', title: '구독 변경', lead: '변경 가능 범위와 적용 시점을 안내합니다.', body: '요금제 변경, 업그레이드 또는 다운그레이드 등 구독 변경과 관련된 범위와 적용 시점은 정책이 확정되는 대로 안내할 예정입니다.' },
        { id: 'cancel', title: '구독 해지', lead: '해지 절차와 이용 종료 시점을 안내합니다.', body: '해지 방법과 해지 이후의 이용 가능 범위, 서비스 이용 종료 시점에 대한 세부 내용은 정책이 확정되는 대로 안내할 예정입니다.', extra: <TextLink to="/account/subscription">구독 관리로 이동</TextLink> },
        { id: 'refund', title: '환불 기준', lead: '환불 대상, 산정 방식, 처리 기준을 안내합니다.', body: '환불 대상과 금액 산정 방식, 처리 기준에 대한 세부 내용은 정책이 확정되는 대로 이곳에 안내할 예정입니다.' },
        { id: 'request', title: '환불 신청', lead: '신청 절차와 필요한 정보를 안내합니다.', body: '환불 신청 방법과 필요한 정보, 이후 처리 절차는 정책이 확정되는 대로 안내할 예정입니다.', extra: <TextLink to="/support#inquiry">환불 문의하기</TextLink> },
      ]}
    >
      <dl className="policy__facts">
        <div><dt>결제 주기</dt><dd>확정 예정</dd></div>
        <div><dt>갱신 방식</dt><dd>확정 예정</dd></div>
        <div><dt>해지 적용 시점</dt><dd>확정 예정</dd></div>
      </dl>
    </PolicyLayout>
  )
}

const pluginRows = ['사용자 수', '등록 기기', '동시 사용', '회사·팀 사용']
const modelRows = ['상업 프로젝트 사용', '완성 이미지·영상 납품', '프로젝트 원본 전달', '모델 원본 재배포', '구독 종료 후 사용']

export function License() {
  return (
    <PolicyLayout
      eyebrow="License"
      title="라이선스 및 모델 사용권"
      desc="제품별 사용 범위를 확인하세요."
      tocTitle="사용권"
      top={<Breadcrumb items={[['홈', '/'], ['가이드', '/download'], ['라이선스 및 모델 사용권']]} />}
      sections={[
        {
          id: 'plugin',
          title: '플러그인 라이선스',
          body: '구매 전 적용되는 사용권을 확인해주세요.',
          extra: (
            <div className="table-wrap">
              <table className="table">
                <thead><tr><th>항목</th><th>Interiors</th><th>Exhibits</th></tr></thead>
                <tbody>{pluginRows.map((r) => <tr key={r}><td>{r}</td><td>확정 예정</td><td>확정 예정</td></tr>)}</tbody>
              </table>
            </div>
          ),
        },
        {
          id: 'model',
          title: 'Model Pro 사용권',
          body: '사용 상황별 허용 범위입니다.',
          extra: (
            <div className="table-wrap">
              <table className="table">
                <thead><tr><th>사용 상황</th><th>허용 범위</th></tr></thead>
                <tbody>{modelRows.map((r) => <tr key={r}><td>{r}</td><td>확정 예정</td></tr>)}</tbody>
              </table>
            </div>
          ),
        },
        { id: 'contact', title: '문의', body: '사용 범위가 명확하지 않다면 문의해주세요.', extra: <TextLink to="/support#inquiry">사용권 문의하기</TextLink> },
      ]}
    />
  )
}
