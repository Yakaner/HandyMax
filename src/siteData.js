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
  { label: '제품', href: '#products' },
  { label: '활용 사례', href: '#cases' },
  { label: '가이드', href: '#guide' },
]

export const exploreItems = [
  {
    no: '01',
    title: 'Interiors',
    desc: ['아이디어를 현실로,', '공간을 더 쉽게.'],
    image: interiors,
    href: '#interiors',
  },
  {
    no: '02',
    title: 'Exhibits',
    desc: ['전시 공간을', '더 감각적으로.'],
    image: exhibits,
    href: '#exhibits',
  },
  {
    no: '03',
    title: 'Model Pro',
    desc: ['정밀한 모델링,', '프로를 위한 선택.'],
    image: modelPro,
    href: '#model-pro',
  },
  {
    no: '04',
    title: '사용 가이드',
    desc: ['처음이어도 괜찮아요,', '차근차근 알려드릴게요.'],
    image: guide,
    href: '#guide',
  },
  {
    no: '05',
    title: '업데이트',
    desc: ['새로운 기능과', '개선 사항을 확인하세요.'],
    image: update,
    href: '#update',
  },
  {
    no: '06',
    title: '고객지원',
    desc: ['궁금한 점이 있다면', '언제든 문의하세요.'],
    image: support,
    href: '#support',
  },
]

export const footerLinks = [
  { label: '이용약관', href: '#terms' },
  { label: '개인정보처리방침', href: '#privacy' },
]
