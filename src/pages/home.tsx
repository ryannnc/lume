import './home.css'
import AnimatedText from '../animation/animatedtext'
import hero3 from '../assets/hero2.png'
import AnimatedImage from '../animation/animatedimage'
import SlideIn from '../animation/slide'
import WaitlistCTA from '../components/waitlistcta'

export default function Home() {
  return (
    <main className="home">
      <section className="home-section hero-section">
        <video autoPlay loop muted playsInline className='background-video'>
          <source src="/videos/austin.mp4" type="video/mp4" />
        </video>

        <div className="content">
          <AnimatedText
            as="h1"
            text="Cinematic Content Made Easy"
            className="hero"
          />
          <WaitlistCTA />
        </div>

        <div className="scroll-indicator">
          <span className="scroll-text">Scroll for more</span>
          <div className="arrow"></div>
        </div>
      </section>

      <section className="home-section showcase-section">
        <div className=" showcase-content">
          <div className="showcase-row">
            <div className="showcase-card">
              <video autoPlay loop muted playsInline className="showcase-video">
                <source src="/videos/spotify3.mp4" type="video/mp4" />
              </video>
              <h2 className="showcase-label">Motion Graphics</h2>
            </div>

            <div className="showcase-card">
              <video autoPlay loop muted playsInline className="showcase-video">
                <source src="/videos/stillscollection.mp4" type="video/mp4" />
              </video>
              <h2 className="showcase-label">LUTs</h2>
            </div>

            <div className="showcase-card">
              <video autoPlay loop muted playsInline className="showcase-video">
                <source src="/videos/shot-decks.mp4" type="video/mp4" />
              </video>
              <h2 className="showcase-label">Shot Decks</h2>
            </div>
          </div>
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

            <SlideIn from="bottom" delay={0.25} className="about-text-wrap">
              <div className="about-text">
                <h1 className="overlay-text">About Me</h1>
                <p className="about-description">
                  With a background in engineering, I’ve developed a strong appreciation for the craft behind building and refining things. I genuinely enjoy the process, especially the attention to detail that goes into making something feel just right. At the same time, I’ve seen how easy it is to get stuck in the technical side and lose focus on the bigger creative vision.
                  This site is built for creators who want both inspiration and practical tools. It’s a place to explore cinematic ideas and find products like my LUTs that help you achieve a polished look more efficiently, so you can spend less time tweaking and more time telling your story.
                </p>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>
    </main>
  )
}   