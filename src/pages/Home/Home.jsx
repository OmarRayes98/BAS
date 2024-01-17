
import Hero from '../../components/Home/SpecialComponentFor_Home_page/Hero/Hero'
import './Home.css'
import heroImage from './../../assets/img/Group.svg'
import LatestProjects from '../../components/Home/SpecialComponentFor_Home_page/LatestProjects/LatestProjects'
import Partners from '../../components/Home/SpecialComponentFor_Home_page/Partners/Partners'
import FocalImg from './../../assets/img/focalx.png'

const Home = () => {

    return (
        <div className='home'>
            <Hero title="Black Analysis Solution" text="Leave it to us" heroImage={heroImage}/>
            <LatestProjects img={FocalImg}/>
            <Partners />
        </div>
    )


}

export default Home
