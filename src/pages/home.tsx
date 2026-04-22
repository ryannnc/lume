import './home.css'
import AnimatedText from '../animation/animatedtext'
import hero3 from '../assets/hero2.png'
import { FaDumbbell, FaLaptopCode, FaHeart } from 'react-icons/fa'
import AnimatedImage from '../animation/animatedimage'
import SlideIn from '../animation/slide'

export default function Home() {
  return (
    <main className="home">
      <section className="home-section hero-section">
        <div className="content">
          <AnimatedText
            as="h1"
            text="Become The Best Version Of Yourself"
            className="hero"
          />
        </div>

        <div className="scroll-indicator">
          <span className="scroll-text">Scroll for more</span>
          <div className="arrow"></div>
        </div>
      </section>

      <section className="home-section image-section">
        <AnimatedImage
          src={hero3}
          className="hero-image"
          alt="Hero"
          containerClassName="hero-image-wrap"
        />

        <div className="image-overlay">
          <div className="about-grid">
            <SlideIn from="bottom" delay={0.15} className="about-icons-wrap">
              <div className="about-icons">
                <div className="icon-card">
                  <FaDumbbell className="about-icon" />
                  <p className="icon-label">Fitness</p>
                </div>

                <div className="icon-card">
                  <FaLaptopCode className="about-icon" />
                  <p className="icon-label">Building</p>
                </div>

                <div className="icon-card">
                  <FaHeart className="about-icon" />
                  <p className="icon-label">Growth</p>
                </div>
              </div>
            </SlideIn>

            <SlideIn from="bottom" delay={0.25} className="about-text-wrap">
              <div className="about-text">
                <h1 className="overlay-text">About Me</h1>
                <p className="about-description">
                  I care deeply about growth, discipline, and building a better
                  version of myself over time. This space represents my background,
                  the lessons that shaped me, and why self-improvement matters to
                  me beyond appearance or productivity. It is about becoming
                  stronger mentally, physically, and creatively.
                </p>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>
    </main>
  )
}   