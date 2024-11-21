import MyNavbar from "../../component/Navbar/Navbar";
import Promancontent from "../../proman/promanconent/promancontent";
import Promancharacteristics from "../../proman/characteristics/Promancharacteristics";
import PromanNeeds from "../../proman/Needs/PromanNeeds";
import PromanReasons from "../../proman/Reasons/Reasons";
import Footer from "../../component/Footer/Footer"


const Proman = () => 
{
    return(
        <>
        <MyNavbar/>
        
        <Promancontent/>
        <Promancharacteristics/>
        <PromanNeeds/>
        <PromanReasons/>
        <Footer/>
        </>
    )
}

export default Proman