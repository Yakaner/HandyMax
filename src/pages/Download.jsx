import { Link, useSearchParams } from 'react-router'
import Icon from '../components/Icons'
import { InfoList, PageHead } from '../components/ui'
import { faqs, products } from '../siteData'

export function Faq({ items }) {
  return (
    <div className="faq">
      {items.map(([, q, a]) => (
        <details key={q}>
          <summary>{q}<Icon name="down" /></summary>
          <p>{a}</p>
        </details>
      ))}
    </div>
  )
}

export default function Download() {
  const [params, setParams] = useSearchParams()
  const product = products.find((p) => p.id === params.get('p')) ?? products[0]

  return (
    <>
      <PageHead eyebrow="Download" title="다운로드 & 설치 가이드" desc="내 작업 환경에 맞는 설치 정보를 확인하세요." />

      <div className="container">
        <div className="tabs tabs--line" role="tablist">
          {products.map((p) => (
            <button key={p.id} role="tab" aria-selected={p.id === product.id} onClick={() => setParams({ p: p.id }, { replace: true })}>
              {p.name}
            </button>
          ))}
        </div>

        <section className="dl">
          <img src={product.image} alt="" />
          <div>
            <h2 className="dl__name">{product.name}</h2>
            <p className="muted">{product.desc} 설치 전, 내 환경에 맞는 정보를 확인하세요.</p>
            <InfoList className="info-list--table" rows={[['최신 버전'], ['지원 프로그램'], ['운영체제'], ['업데이트일']]} />
            <Link to="/login" className="btn btn--light">설치파일 다운로드 <Icon name="download" size={18} /></Link>
          </div>
        </section>
      </div>

      <section className="band" id="install">
        <div className="container">
          <p className="eyebrow">Installation guide</p>
          <h2 className="section-title">설치 가이드</h2>
          <ol className="guide">
            <li>
              <span className="guide__no">01</span>
              <strong>설치파일 받기</strong>
              <p className="muted">위의 다운로드 버튼을 눌러 설치파일을 받아주세요.</p>
              <div className="mock mock--file"><Icon name="download" size={28} /></div>
            </li>
            <li>
              <span className="guide__no">02</span>
              <strong>설치 안내 확인</strong>
              <p className="muted">설치 마법사의 안내에 따라 설치를 진행해 주세요.</p>
              <div className="mock mock--wizard"><i /><i /><i /><b>다음</b></div>
            </li>
            <li>
              <span className="guide__no">03</span>
              <strong>계정·라이선스 인증</strong>
              <p className="muted">설치가 끝나면 HandyMax 계정으로 로그인해 라이선스를 인증해 주세요.</p>
              <div className="mock mock--login"><em>HandyMax</em><i /><i /><b>로그인</b></div>
            </li>
          </ol>
        </div>
      </section>

      <section className="container section-pad">
        <p className="eyebrow">Troubleshooting</p>
        <h2 className="section-title">자주 발생하는 문제</h2>
        <Faq items={faqs.filter((f) => f[0] === '설치·인증')} />
        <div className="help">
          <div>
            <strong>더 궁금한 점이 있으신가요?</strong>
            <p className="muted">설치나 사용 중 문제가 계속된다면 고객지원으로 문의해 주세요.</p>
          </div>
          <Link to="/support#inquiry" className="btn btn--line">문의하기 <Icon name="arrow" size={18} /></Link>
        </div>
      </section>
    </>
  )
}
