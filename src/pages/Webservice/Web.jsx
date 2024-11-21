
import MyNavbar from "../../component/Navbar/Navbar";
import Webcontent from "../../webcomponent/webconent/webcontent";
import Webcharacteristics from "../../webcomponent/characteristics/webcharacteristics";
import Needs from "../../webcomponent/Needs/Needs";
import Reasons from "../../webcomponent/Reasons/Reasons";
import Footer from "../../component/Footer/Footer"

const Web =() =>{
    return (    
        <>
        <MyNavbar/>

        <Webcontent/>
        <Webcharacteristics/>
        <Needs/>
        <Reasons/>
        <Footer/>
        </>
    )
}

export default Web;