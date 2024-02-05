import './WhatWeDo.css'
import Slider from 'react-slick';
import SectionHeader from '../SectionHeader/SectionHeader'

import ServiceCard from './ServiceCard/ServiceCard';
import { Fragment } from 'react';
import Loading from '../../Common/Loading/Loading';

const WhatWeDo = ({services,loadingService}) => {
  
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
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
          slidesToScroll: 1
        }
      }
    ]
  };
  var settings2 = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    <div className='aj-what-we-do'>
      <SectionHeader title="What we do" text="We deliver diverse range of services such as consulting, public relations...etc."/>
      <div>
        <Slider className='aj-large-slider' {...settings}>

        {
        loadingService ? 
             <Loading/>
             :
             
          <div className="aj-service-cards-container"  >

            {
              services.map((item, index) => (
                <Fragment key={index}>
                  <ServiceCard 
                logo={
                  item.path
                  } 
                title={item.service_name}
                text={item.description}
                />

                </Fragment>
                ))
              }
          </div>
        }
        </Slider>


        <Slider {...settings2} className='aj-small-slider'>
          {/* <div className="aj-service-cards-container-small"> */}
          {
              services.map((item, index) => (
                <Fragment key={index}>
                  <ServiceCard 
                logo={
                  item.path
                  } 
                title={item.service_name}
                text={item.description}
                />

                </Fragment>
                ))
              }
          {/* </div> */}
        </Slider>
      </div>
    </div>
  )
}

export default WhatWeDo