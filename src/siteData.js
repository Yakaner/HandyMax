import exhibits from './assets/images/exhibits.webp'
import modelPro from './assets/images/model-pro.webp'
import guide from './assets/images/guide.webp'
import support from './assets/images/support.webp'
import hero from './assets/images/hero.webp'
import interiors from './assets/images/interiors.webp'
import update from './assets/images/update.webp'

// image 가 null 이면 톤에 맞는 그라데이션이 대신 표시됩니다.
export const heroImage = hero

export const navItems = [
  { label: '제품', href: '/#explore' },
  { label: '활용 사례', href: '/#explore' },
  { label: '가이드', href: '/download' },
  { label: '요금제', href: '/checkout' },
]

export const products = [
  {
    id: 'interiors',
    name: 'Interiors',
    tagline: '인테리어 디자인을 위한 플러그인 및 모델 라이브러리',
    desc: '공간 디자인 작업을 위한 다양한 플러그인과 고품질 3D 모델을 제공합니다.',
    image: interiors,
  },
  {
    id: 'exhibits',
    name: 'Exhibits',
    tagline: '전시 디자인을 위한 플러그인 및 모델 라이브러리',
    desc: '전시 부스와 공간 연출을 위한 다양한 플러그인과 고품질 3D 모델을 제공합니다.',
    image: exhibits,
  },
  {
    id: 'model-pro',
    name: 'Model Pro',
    tagline: '다양한 3D 모델 에셋 라이브러리',
    desc: '가구, 소품, 마감재 등 다양한 3D 모델 에셋을 제공합니다.',
    image: modelPro,
  },
]

export const policyLinks = [
  { label: '이용약관', href: '/terms' },
  { label: '개인정보처리방침', href: '/privacy' },
  { label: '구독·환불 정책', href: '/refund-policy' },
  { label: '라이선스', href: '/license' },
]

export const exploreItems = [
  {
    no: '01',
    title: 'Interiors',
    desc: ['아이디어를 현실로,', '공간을 더 쉽게.'],
    image: interiors,
    href: '/download?p=interiors',
  },
  {
    no: '02',
    title: 'Exhibits',
    desc: ['전시 공간을', '더 감각적으로.'],
    image: exhibits,
    href: '/download?p=exhibits',
  },
  {
    no: '03',
    title: 'Model Pro',
    desc: ['정밀한 모델링,', '프로를 위한 선택.'],
    image: modelPro,
    href: '/download?p=model-pro',
  },
  {
    no: '04',
    title: '사용 가이드',
    desc: ['처음이어도 괜찮아요,', '차근차근 알려드릴게요.'],
    image: guide,
    href: '/download',
  },
  {
    no: '05',
    title: '업데이트',
    desc: ['새로운 기능과', '개선 사항을 확인하세요.'],
    image: update,
    href: '/updates',
  },
  {
    no: '06',
    title: '고객지원',
    desc: ['궁금한 점이 있다면', '언제든 문의하세요.'],
    image: support,
    href: '/support',
  },
]


// [카테고리, 질문, 답변]
export const faqs = [
  ['설치·인증', '설치파일이 실행되지 않아요.', '보안 프로그램이 실행을 막고 있을 수 있습니다. 설치파일을 마우스 오른쪽 버튼으로 눌러 관리자 권한으로 실행해 보세요.'],
  ['설치·인증', '인증에 실패했어요.', '구독한 계정으로 로그인했는지 확인해주세요. 계속 실패한다면 고객지원으로 문의해주세요.'],
  ['설치·인증', '지원 버전을 확인하고 싶어요.', '다운로드 페이지의 제품 정보에서 지원 프로그램과 운영체제를 확인할 수 있습니다.'],
  ['구독·결제', '결제 후 제품은 어디에서 다운로드하나요?', '내 계정 › 내 제품 또는 다운로드 페이지에서 받을 수 있습니다.'],
  ['구독·결제', '구독 해지는 어떻게 하나요?', '내 계정 › 구독 관리에서 자동 갱신을 해지할 수 있습니다.'],
  ['계정', '비밀번호를 잊어버렸어요.', '로그인 화면의 ‘비밀번호 찾기’에서 새 비밀번호를 설정할 수 있습니다.'],
  ['모델 사용권', '모델의 사용 범위가 궁금해요.', '라이선스 및 모델 사용권 페이지에서 제품별 사용 범위를 확인해주세요.'],
]
