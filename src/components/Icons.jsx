// 24px 라인 아이콘. 새 아이콘은 paths 에 path d 값만 추가하면 됩니다.
const paths = {
  arrow: 'M4 12h15m-6-6 6 6-6 6',
  search: 'M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm9 16-3.5-3.5',
  chevron: 'm9 6 6 6-6 6',
  down: 'm6 9 6 6 6-6',
  eye: 'M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Zm10-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z',
  eyeOff: 'M3 3l18 18M10.6 5.1A10 10 0 0 1 12 5c6.4 0 10 7 10 7a17 17 0 0 1-3.2 4M6.6 6.6C3.7 8.4 2 12 2 12s3.6 7 10 7a9.7 9.7 0 0 0 5.4-1.6M9.9 9.9a3 3 0 0 0 4.2 4.2',
  check: 'm5 12.5 4.5 4.5L19 7.5',
  alert: 'M12 7v6m0 3.5v.01M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z',
  info: 'M12 11v6m0-9.5v.01M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z',
  mail: 'M3 5h18v14H3zm0 0 9 7 9-7',
  download: 'M12 3v12m-5-5 5 5 5-5M4 19h16',
  user: 'M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM4 21c0-4 3.6-6 8-6s8 2 8 6',
  box: 'm12 2 9 5v10l-9 5-9-5V7zm0 10 9-5m-9 5L3 7m9 5v10',
  refresh: 'M20 11a8 8 0 0 0-14.5-4.5L4 8m0-5v5h5M4 13a8 8 0 0 0 14.5 4.5L20 16m0 5v-5h-5',
  card: 'M3 6h18v12H3zm0 4h18M7 15h3',
  receipt: 'M6 3h12v18l-3-2-3 2-3-2-3 2zm3 5h6m-6 4h6',
  gear: 'M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm7.4 3a7.4 7.4 0 0 0-.1-1.3l2.1-1.6-2-3.5-2.5 1a7.5 7.5 0 0 0-2.2-1.3L14.3 2h-4.6l-.4 2.7a7.5 7.5 0 0 0-2.2 1.3l-2.5-1-2 3.5 2.1 1.6a7.4 7.4 0 0 0 0 2.6l-2.1 1.6 2 3.5 2.5-1a7.5 7.5 0 0 0 2.2 1.3l.4 2.7h4.6l.4-2.7a7.5 7.5 0 0 0 2.2-1.3l2.5 1 2-3.5-2.1-1.6c.1-.4.1-.9.1-1.3Z',
  headset: 'M4 14v-2a8 8 0 0 1 16 0v2M4 14h3v6H4zm13 0h3v6h-3zm3 6c0 1-1 2-4 2h-3',
  doc: 'M6 2h9l5 5v15H6zm9 0v5h5M9 13h7m-7 4h7',
  wrench: 'M14.7 6.3a4 4 0 0 0 5 5L21 13l-8 8-3-3 8-8-1.3-1.3a4 4 0 0 1-5-5L13 2z',
  chat: 'M4 4h16v12H8l-4 4z',
  external: 'M14 4h6v6m0-6-9 9M18 14v6H4V6h6',
}

export default function Icon({ name, size = 20, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" {...rest}>
      <path d={paths[name]} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export const ArrowIcon = ({ size = 18 }) => <Icon name="arrow" size={size} />
export const SearchIcon = ({ size = 20 }) => <Icon name="search" size={size} />
