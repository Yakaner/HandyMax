import { useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router'
import Icon from '../components/Icons'
import { Breadcrumb, Field, PageHead, PasswordField } from '../components/ui'
import stone from '../assets/images/update.webp'
import interiors from '../assets/images/interiors.webp'
import hero from '../assets/images/hero.webp'

// 비밀번호 확인 칸: 불일치 시 브라우저 기본 검증 메시지로 막음
function matchPassword(form) {
  const [pw, confirm] = [form.elements.password, form.elements.confirm]
  confirm.setCustomValidity(pw.value === confirm.value ? '' : '비밀번호가 일치하지 않습니다.')
  return form.reportValidity()
}

export function Login() {
  const navigate = useNavigate()
  return (
    <div className="split">
      <div className="split__media" style={{ backgroundImage: `url(${stone})` }}>
        <p className="split__brand">HandyMax</p>
        <p className="split__lead">다음 작업을 이어가세요.</p>
      </div>
      <div className="split__body">
        <form className="form" onSubmit={(e) => { e.preventDefault(); navigate('/account') }}>
          <h1 className="page-title page-title--sm">로그인</h1>
          <p className="page-desc">HandyMax 계정으로 시작하세요.</p>
          <Field label="이메일" type="email" name="email" placeholder="name@example.com" autoComplete="email" required />
          <PasswordField label="비밀번호" name="password" placeholder="비밀번호를 입력하세요." autoComplete="current-password" />
          <div className="form__row">
            <label className="check">
              <input type="checkbox" name="remember" /> 로그인 상태 유지
            </label>
            <Link to="/reset-password" className="u">비밀번호 찾기</Link>
          </div>
          <button className="btn btn--light btn--block">로그인</button>
          <p className="form__foot">
            아직 계정이 없으신가요? <Link to="/signup" className="u">회원가입</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export function Signup() {
  const navigate = useNavigate()
  const onSubmit = (e) => {
    e.preventDefault()
    if (!matchPassword(e.currentTarget)) return
    navigate(`/verify-email?email=${encodeURIComponent(e.currentTarget.elements.email.value)}`)
  }
  return (
    <>
      <PageHead eyebrow="Create account" title="회원가입" desc="하나의 계정으로 HandyMax 제품을 관리하세요." image={interiors} />
      <div className="container">
        <form className="form form--narrow" onSubmit={onSubmit}>
          <Field label="이메일" type="email" name="email" placeholder="name@example.com" autoComplete="email" required />
          <PasswordField label="비밀번호" name="password" placeholder="8자 이상 입력하세요." autoComplete="new-password" />
          <PasswordField label="비밀번호 확인" name="confirm" placeholder="비밀번호를 다시 입력하세요." autoComplete="new-password" onInput={(e) => e.target.setCustomValidity('')} />

          <div className="agree">
            <label className="check"><input type="checkbox" required /> 이용약관 동의 <em>(필수)</em></label>
            <Link to="/terms" className="u">보기</Link>
            <label className="check"><input type="checkbox" required /> 개인정보 수집·이용 동의 <em>(필수)</em></label>
            <Link to="/privacy" className="u">보기</Link>
            <label className="check agree__opt"><input type="checkbox" name="marketing" /> 마케팅 정보 수신 동의 <em>(선택)</em></label>
          </div>

          <button className="btn btn--light btn--block">가입하고 이메일 인증하기</button>
          <p className="form__foot">
            이미 계정이 있으신가요? <Link to="/login" className="u">로그인</Link>
          </p>
        </form>
      </div>
    </>
  )
}

export function VerifyEmail() {
  const [params] = useSearchParams()
  const [sent, setSent] = useState(false)
  return (
    <section className="verify" style={{ backgroundImage: `url(${hero})` }}>
      <div className="container verify__inner">
        <div>
          <p className="eyebrow">Email verification</p>
          <h1 className="page-title">이메일을<br />확인해주세요.</h1>
          <p className="page-desc">가입한 이메일로 인증 링크를 보냈습니다.</p>
        </div>
        <div className="verify__panel">
          <Icon name="mail" size={36} />
          <p className="verify__email">{params.get('email') || '가입한 이메일 주소'}</p>
          <Link to="/account" className="btn btn--light btn--block">인증 상태 확인하기</Link>
          <div className="verify__links">
            <button type="button" className="u" onClick={() => setSent(true)}>
              {sent ? '다시 보냈습니다' : '인증 메일 다시 보내기'}
            </button>
            <Link to="/signup" className="u">이메일 주소 변경</Link>
          </div>
          <p className="muted">
            메일이 보이지 않으면 스팸함을 확인해주세요.<br />
            도움이 필요하신가요? <Link to="/support" className="u">고객지원</Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export function ResetPassword() {
  const navigate = useNavigate()
  const onSubmit = (e) => {
    e.preventDefault()
    if (matchPassword(e.currentTarget)) navigate('/login')
  }
  return (
    <div className="container page-pad">
      <Breadcrumb items={[['로그인', '/login'], ['비밀번호 재설정']]} />
      <form className="form form--narrow form--center" onSubmit={onSubmit}>
        <h1 className="page-title page-title--sm">새 비밀번호 설정</h1>
        <p className="page-desc">앞으로 사용할 비밀번호를 입력해주세요.</p>
        <PasswordField label="새 비밀번호" name="password" placeholder="8자 이상 입력하세요." autoComplete="new-password" />
        <PasswordField label="새 비밀번호 확인" name="confirm" placeholder="비밀번호를 다시 입력하세요." autoComplete="new-password" onInput={(e) => e.target.setCustomValidity('')} />
        <button className="btn btn--light btn--block">비밀번호 변경하기</button>
        <p className="form__foot"><Link to="/login" className="u">로그인으로 돌아가기</Link></p>
      </form>
    </div>
  )
}
