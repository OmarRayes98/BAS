import Slider from 'react-slick';
import SectionHeader from '../SectionHeader/SectionHeader'

import './OurTeam.css'
import Loading from '../../Common/Loading/Loading';



const OurTeam = ({team,loadingTeam}) => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  };


  return (

    <div className='aj-our-team'>
      <SectionHeader title="Out Team" />
      <div className='aj-team-slider'>
      {
    loadingTeam ?
    <Loading color={'white'} />
        :
        <Slider {...settings}>

          {
            team.map((item,index)=>(
              <div key={index} className='aj-team-slide'>
              <img src={item.path} alt="team-member" />
              <h3 className='aj-member-name'>{item.name}</h3>
              <p className='aj-member-job'>{item.position}</p>
            </div>
            ))
          }

      </Slider>
      }

      </div>
    </div>
  )
}

export default OurTeam