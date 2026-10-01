import { ArrowIcon } from './Icons'

export default function CtaBanner() {
  return (
    <section className="cta">
      <div className="container cta__inner">
        <h2 className="cta__title">더 나은 작업은, 좋은 도구에서.</h2>
        <a href="#products" className="btn btn--dark">
          제품 살펴보기 <ArrowIcon />
        </a>
      </div>
    </section>
  )
}
