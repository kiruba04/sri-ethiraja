import MyNavbar from "../../component/Navbar/Navbar";
import Home from "../../component/Home/Home";
import Cards from "../../component/Cards/Cards"
import Client from "../../component/Clientcard/Client";
import Services from "../../component/Ourservice/Services";
import Works from "../../component/works/works";
const HomePage = () =>
{
    return (
        <>
        <MyNavbar/>
        <Home />
        <Cards />
        <Client/>
        <Services/>
        <Works/>
        </>
    );
}

export default HomePage