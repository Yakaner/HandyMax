import exhibits from './assets/images/exhibits.webp'
import modelPro from './assets/images/model-pro.webp'
import guide from './assets/images/guide.webp'
import support from './assets/images/support.webp'

// 원본을 아직 받지 못한 이미지는 null 로 두면 톤에 맞는 그라데이션이 대신 표시됩니다.
// 받으면 src/assets/images 에 넣고 import 해서 교체하세요.
//  - hero: 메인 비주얼(곡선 금속 파사드 건축물)
//  - Interiors: 거실 인테리어
//  - 업데이트: 콘크리트 계단/벽
export const heroImage = null

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
    image: null,
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
    image: null,
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
