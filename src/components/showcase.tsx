import shotdeck from '../assets/shotdeck.jpg'
import '../pages/home.css'



export default function Showcase(){
  return (
    <section className="home-section showcase-section">
      <div className="showcase-content">
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
            <img
              src={shotdeck}
              alt="Shot Decks"
              className="showcase-video"
            />
            <h2 className="showcase-label">Shot Decks</h2>
          </div>

        </div>
      </div>
    </section>
  )
}