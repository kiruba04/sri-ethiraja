
import Sapcontent from "../../sapcomponent/sapcontent/sapcontent";
import MyNavbar from "../../component/Navbar/Navbar";
import Ams from "../../sapcomponent/AMS/WorkProcess";
import Report from "../../sapcomponent/Report/Report";
import Sapcustomize from "../../sapcomponent/sapcustome/Sapcustomize";
const Sappage =() =>{
    return(
        <>
        <MyNavbar/>

        <Sapcontent/>
        <Ams/>
        <Report/>
        <Sapcustomize/>
        </>
        );
}

export default Sappage