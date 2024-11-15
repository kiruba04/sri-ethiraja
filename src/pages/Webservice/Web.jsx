
import Webhome from"../../webcomponent/home/webhome"
import MyNavbar from "../../component/Navbar/Navbar";
import Webcontent from "../../webcomponent/webconent/webcontent";
import Webcharacteristics from "../../webcomponent/characteristics/webcharacteristics";
import Needs from "../../webcomponent/Needs/Needs";
import Reasons from "../../webcomponent/Reasons/Reasons";

const Web =() =>{
    return (    
        <>
        <MyNavbar/>
        <Webhome/>
        <Webcontent/>
        <Webcharacteristics/>
        <Needs/>
        <Reasons/>
        </>
    )
}

export default Web;