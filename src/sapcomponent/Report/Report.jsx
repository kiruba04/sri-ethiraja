import "./Report.css"

const Report =()=>{
    return (
        <>
        
        <div className="container mt-2">
            <div className="saptitle">Report Development</div>
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-6 col-12">
                <p className="erppara">
                To comply with management reporting and legal requirements, organizations need to produce internal and external reports that document their business transactions.
                These transactions represent operational and financial movements between other organizations, businesses, or individuals.
                </p>
                    </div>
                <div className="col-lg-6 col-md-6 col-12">
                    <img src="https://blog.bit.ai/wp-content/uploads/2021/08/Report-amico-1-768x768.png" alt="erp" className="img-erp" />
                </div>
            </div>
        </div >
        <div className="reportbg" >
        <div className="container mt-2">
            <div className="row ">
                <div className="col-lg-4 col-md-4 col-12 mt-3">
                    <div className="reporttitle">User-Centric Reporting with Role-Based SAP</div>
                    <p className="reportpara">
                    The SAP S/4HANA reporting functionality provides a consistent and intuitive UX with the use of HTMLS-based SAPUI5 technology. With the SAP Fiori user interface, reports from different applications are designed to be based on users’ roles, as opposed to SAP ERP’s function-based design. Depending on the role, an SAP Fiori app-based report exposes only relevant data and functions. This user-centric design approach ensures that all elements and fields are useful and easy to consume.
                    </p>

                </div>

                <div className="col-lg-4 col-md-4 col-12 mt-3">
                    <div className="reporttitle">Embedded Reporting for Real-Time, Synchronized Insights</div>
                    <p className="reportpara">
                    With the embedded approach for reporting in SAP S/4HANA across different applications, business users get synchronized insights quickly within the solution, helping them make better decisions regarding all the information at hand. It enables them to make informed decisions based on real-time insights.
                    </p>

                </div>

                <div className="col-lg-4 col-md-4 col-12 mt-3">
                    <div className="reporttitle">Empowering Self-Service and Ad-Hoc Reporting for Business Users</div>
                    <p className="reportpara">
                    The demand for IT support is reduced with SAP S/4HANA, since business users can create new reports with minimum design-time activities for various self-service reporting and ad-hoc reporting use cases. SAP Fiori-based tools like the Custom Analytical Queries app allow business users to create KPI-based and multidimensional reports for instant insights that require minimal interaction with IT. 
                    </p>

                </div>




            </div>



        </div>
        </div>
        </>
    )
}

export default Report