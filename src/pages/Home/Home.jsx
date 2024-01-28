
import Hero from '../../components/Home/SpecialComponentFor_Home_page/Hero/Hero'
import './Home.css'
import heroImage from './../../assets/img/Group.svg'
import LatestProjects from '../../components/Home/SpecialComponentFor_Home_page/LatestProjects/LatestProjects'
import Partners from '../../components/Home/SpecialComponentFor_Home_page/Partners/Partners'
import FocalImg from './../../assets/img/focalx.png'
// import WhatWeDo from '../../components/Home/SpecialComponentFor_Home_page/WhatWeDo/WhatWeDo'
// import WhoWeAre from '../../components/Home/SpecialComponentFor_Home_page/WhoWeAre/WhoWeAre'
// import Reviews from '../../components/Home/SpecialComponentFor_Home_page/Reviews/Reviews'
// import FAQs from '../../components/Home/SpecialComponentFor_Home_page/FAQs/FAQs'

const Home = () => {

    return (
        <div className='home'>
            <Hero title="Black Analysis Solution" text="Leave it to us" heroImage={heroImage}/>
            {/* <WhatWeDo />
            <WhoWeAre /> */}
            <LatestProjects img={FocalImg}/>
            {/* <Reviews /> */}
            <Partners header={"Partners"} />
            {/* <FAQs /> */}
        </div>
    )


}

export default Home