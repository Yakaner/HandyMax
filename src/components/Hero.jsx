import { heroImage } from '../siteData'
import { ArrowIcon } from './Icons'

export default function Hero() {
  return (
    <section className="hero">
      <div
        className={`hero__bg${heroImage ? '' : ' is-placeholder'}`}
        style={heroImage ? { backgroundImage: `url(${heroImage})` } : undefined}
        aria-hidden="true"
      />
      <div className="hero__shade" aria-hidden="true" />

      <div className="container hero__content">
        <p className="eyebrow">Create better spaces</p>
        <h1 className="hero__title">
          공간의 가능성을
          <br />
          넓히는 도구.
        </h1>
        <p className="hero__desc">
          아이디어가 현실이 되는 모든 공간에
          <br />
          HandyMax가 함께합니다.
        </p>
        <a href="#explore" className="btn btn--light">
          HandyMax 살펴보기 <ArrowIcon />
        </a>
      </div>
    </section>
  )
}
