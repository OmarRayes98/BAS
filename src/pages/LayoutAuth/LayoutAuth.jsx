import './LayoutAuth.css';
import  NavigateIcon  from '../../assets/icons/navigate_icon.svg?react';

const LayoutAuth = ({children}) => {
  return (

    <div className="auth-container">

        <div className='space'>

        </div>

        {children}


        <div className='arrow-navigation'>
                <NavigateIcon/>
        </div>



    </div>



    
  )
}

export default LayoutAuth
