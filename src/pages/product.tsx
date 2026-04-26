import './home.css'
import AnimatedText from '../animation/animatedtext'
import FadeIn from '../animation/fade'
import SlideUp from '../animation/slideup'
import ProductPhotos from '../data/productphotos'

export default function Product() {
  return (
    <main className="home">
      <section className="product-page">
        <div className="content product-content">
          <AnimatedText
            as="h1"
            text="Coming Soon..."
            className="hero"
          />

          <SlideUp className="waitlist-cta" delay={0.5}>
            <p className="waitlist-cta__text">
              While I develop the assets, here are some frames for reference
            </p>
          </SlideUp>
        </div>

        <ProductPhotos />
      </section>
    </main>
  )
}