import MyNavbar from "../../component/Navbar/Navbar";

import Agamcontent from "../../agam/agamconent/agamcontent";
import Agamcharacteristics from "../../agam/characteristics/agamcharacteristics";
import AgamNeeds from "../../agam/Needs/agamNeeds";
import AgamReasons from "../../agam/Reasons/Reasons";
import Footer from "../../component/Footer/Footer"
const Agam = () => 
{
    return(
        <>
        <MyNavbar/>
                
        <Agamcontent/>
        <Agamcharacteristics/>
        <AgamNeeds/>
        <AgamReasons/>
        <Footer/>
        </>
    )
}

export default Agam