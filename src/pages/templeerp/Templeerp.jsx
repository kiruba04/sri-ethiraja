import MyNavbar from "../../component/Navbar/Navbar";

import Templecontent from "../../Temple/Templeconent/Templecontent";
import Templecharacteristics from "../../Temple/characteristics/Templecharacteristics";
import TempleNeeds from "../../Temple/Needs/TempleNeeds";
import TempleReasons from "../../Temple/Reasons/Reasons";
import Footer from "../../component/Footer/Footer"
const Templeerp = () => 
{
    return(
        <>
        <MyNavbar/>

        <Templecontent/>
        <Templecharacteristics/>
        <TempleNeeds/>
        <TempleReasons/>
        <Footer/>
        </>
    )
}

export default Templeerp