import './assets/global.css';
import CategoryItem from './components/StudyCase/CategoryItem/CategoryItem';
// import AboutSection from './components/Profile/AboutSection/AboutSection';
// import ForgotPasswordForm from './pages/ForgotPasswordForm/ForgotPasswordForm';
// import LoginForm from './pages/LoginForm/LoginForm';
import image from './assets/img/card.png'



function App() {



  return (
    <>
      {/* <LoginForm/> */}
      {/* <ForgotPasswordForm/> */}
      {/* <AboutSection 
      title={"Intruduce To the case"} 
      details={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}/> */}
      <CategoryItem title={"LOUIS VUITTON"} type={"industrial"} supplier={"Supplier fraud"} image={image} />
    </>
  )
}

export default App
