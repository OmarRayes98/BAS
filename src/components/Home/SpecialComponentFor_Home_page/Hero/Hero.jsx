import './Hero.css'

const Hero = ({title, text, heroImage, info}) => {
  return (
    <div className='aj-hero'>
      <div className="aj-hero-text">
        <h1>{title}</h1>
        <p>{text}</p>
        <img src={heroImage} alt="hero-image" />
      </div>
      {
        info? <div className="aj-hero-info">
                <div className="aj-info-industry">
                  <p>Industry</p>
                  <p>Fin tech</p>
                </div>
                <div className="aj-info-location">
                  <p>Location</p>
                  <p>UAE</p>
                </div>
              </div> : ""
      }
    </div>
  )
}

export default Hero