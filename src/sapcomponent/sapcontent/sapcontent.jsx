import "./sapcontent.css";
import erp from '../../assests/ventajas erp.png'
import Erpsvg from "../../assests/erpsvg.png"
const Sapcontent =() =>{
    return (
        <>
        <div className="container mt-4 sapcontent">
            <div className="saptitle">What is SAP</div>
        <p className="sappara">Traditional business models often decentralize data management, with each business function storing its own operational data in a separate database. This makes it difficult for employees from different business functions to access each other’s information. Furthermore, duplication of data across multiple departments increases IT storage costs and the risk of data errors.
            By centralizing data management, SAP software provides multiple business functions with a single view of the truth. This helps companies better manage complex business processes by giving employees of different departments easy access to real-time insights across the enterprise. As a result, businesses can accelerate workflows, improve operational efficiency, raise productivity, enhance customer experiences – and ultimately increase profits.
        </p>
        </div>

        <div className="container mt-4">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-6 col-12">
                    <div className="saptitle erptitle">What is ERP</div>
                <p className="erppara">
        ERP stands for “enterprise resource planning.” ERP software includes programs for all core business areas, such as procurement, production, materials management, sales, marketing, finance, and human resources (HR).
        SAP was one of the first companies to develop standard software for business solutions and continues to offer industry-leading ERP solutions.
                </p>
                    </div>
                <div className="col-lg-6 col-md-6 col-12">
                    <img src={erp} alt="erp" className="img-erp" />
                </div>
            </div>
        </div>


        <div className="container saplist mt-4">
            <div className="row align-items-center">

            <div className="col-lg-6 col-md-6 col-12">
                    <img src={Erpsvg} alt="erp" className="img-erp" />
                </div>

                <div className="col-lg-6 col-md-6 col-12">
                    <div className="saptitle erptitle">Sap Service</div>
                <p className="erppara ">
      <ul>
        <li>Cloud ERP </li><li>Business Network </li>
        <li>Business Technology Platform</li><li>CRM and Customer Experience </li>
        <li>Artificial Intelligence </li><li>Spend Management</li> 
        <li>Supply Chain Management</li><li>Human Capital Management</li>
        <li>Financial Management </li><li>Small and Midsize Enterprises</li> 
        <li>Industry Solutions</li> 
        
      </ul>
                </p>
                    </div>


            </div>
        </div>
        </>
    )
}

export default Sapcontent