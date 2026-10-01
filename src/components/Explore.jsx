import { useState } from 'react'
import { exploreItems } from '../siteData'
import { ArrowIcon } from './Icons'

export default function Explore() {
  const [active, setActive] = useState(0)

  return (
    <section className="explore" id="explore">
      <div className="container">
        <p className="eyebrow">Explore HandyMax</p>
        <h2 className="section-title">당신의 작업에 맞는 도구.</h2>
      </div>

      <div className="container explore__list">
        {exploreItems.map((item, i) => (
          <a
            key={item.no}
            href={item.href}
            className={`explore-card${i === active ? ' is-active' : ''}`}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
          >
            <div
              className={`explore-card__bg${item.image ? '' : ' is-placeholder'}`}
              style={item.image ? { backgroundImage: `url(${item.image})` } : undefined}
              aria-hidden="true"
            />
            <div className="explore-card__shade" aria-hidden="true" />

            <div className="explore-card__body">
              <span className="explore-card__no">{item.no}</span>
              <h3 className="explore-card__title">{item.title}</h3>
              <p className="explore-card__desc">
                {item.desc[0]}
                <br />
                {item.desc[1]}
              </p>
            </div>
            <span className="explore-card__arrow">
              <ArrowIcon size={16} />
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
