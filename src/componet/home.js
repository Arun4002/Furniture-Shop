
// import './App.css';

import PrimarySearchAppBar from './header';
import DenseAppBar from './navbar2';

import Imagg from './img';
import BasicGrid from './gridd';
import Footer from './footer';
import AppNavbar from './bootnav';
import NavigationBar from './bootnavbar2';
import BasicGridtwo from './grid2';
import NavScrollExample from './bootnavbar2';
import AboutUs from './Aboutus';
import ContactForm from './contactus';
import SearchAppBar from './bootnav';
import Sofas from './sofas';
import Carosel from './carosel';
import Register from './Register';
import SignUp from './Register';
import AxiosPost from './Register';
import SignIn from './login';
export default function Home()
{
    return (
        <div>
            {/* <Carosel/> */}
            {/* <Sofas/> */}
               {/* <NavScrollExample/>   */}
            {/* <SearchAppBar/> */}
            
        <DenseAppBar/> 
        <Imagg/>
       <BasicGrid/> 
      <hr></hr>
     <BasicGridtwo/>    
     {/* <Register/> */}
     {/* <SignUp/> */}
     {/* <SignIn/> */}
     {/* <AboutUs/>  */}
     {/* <Footer/>    */}
     {/* <ContactForm/> */}
      
        </div>
    )
}