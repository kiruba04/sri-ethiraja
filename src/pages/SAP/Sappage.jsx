
import Sapcontent from "../../sapcomponent/sapcontent/sapcontent";
import MyNavbar from "../../component/Navbar/Navbar";
import Ams from "../../sapcomponent/AMS/WorkProcess";
import Report from "../../sapcomponent/Report/Report";
import Sapcustomize from "../../sapcomponent/sapcustome/Sapcustomize";
import Footer from "../../component/Footer/Footer"

const Sappage =() =>{
    return(
        <>
        <MyNavbar/>

        <Sapcontent/>
        <Ams/>
        <Report/>
        <Sapcustomize/>
        <Footer/>
        </>
        );
}

export default Sappage