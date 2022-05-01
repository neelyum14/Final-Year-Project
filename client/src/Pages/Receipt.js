import React from 'react';
// import { Autocomplete } from '@react-google-maps/api';
// import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
// import SearchIcon from '@material-ui/icons/Search';
// { onPlaceChanged, onLoad }
import './Receipt.css';
import Dashboard from "./Dashboard";
let endpoint = "http://localhost:8080";

const Receipt = () => {

  const [DashboardIsOpen, setDashboardIsOpen] = React.useState(false);
  function DashboardPage() {
    setDashboardIsOpen(true);
    get_data()
  }

  function get_data(){
    fetch(endpoint + "/api/getUserData",)
        .then(response => {
            const data =response.json();
            console.log("GET RESPONSE" , data)

        })
        .catch(error => {
           
            console.error('There was an error!', error);
        });
  }




   
  return(
      <div className='receipt' >
  <div className="container bootstrap snippets bootdey">
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="row">
              <div className="col-md-6 col-sm-6 text-left text-dark">
                <h4><strong>Client</strong> Details</h4>
                <ul className="list-unstyled">
                  <li><strong>Full Name:</strong> John Doel</li>
                  <li><strong>Mail ID:</strong> john@gmail.com</li>
                  <li><strong>Phone Number:</strong> 1234567890</li>
                  {/* <li><strong>DOB:</strong> YYYY/MM/DD</li> */}
                </ul>
              </div>
              {/* <div className="col-md-6 col-sm-6 text-right">
                <h4><strong>Payment</strong> Details</h4>
                <ul className="list-unstyled">
                  <li><strong>Bank Name:</strong> 012345678901</li>
                  <li><strong>Account Number:</strong> 012345678901</li>
                  <li><strong>SWIFT Code:</strong> SWITCH012345678CODE</li>
                  <li><strong>V.A.T Reg #:</strong> VAT5678901CODE</li>
                </ul>
              </div> */}
            </div>
            <div className="table-responsive">
              <table className="table table-condensed nomargin">
                <thead>
                  <tr>
                    <th></th>
                    {/* <th>Quantity</th> */}
                    <th>Total Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div><strong>Distance</strong></div>
                    </td>
                    <td>23,78 km</td>
                  </tr>
                  <tr>
                    <td>
                      <div><strong>Total Distance</strong></div>
                    </td>
                    
                    <td>68.80 km</td>
                  </tr>
                  <tr>
                    <td>
                      <div><strong>Disel Rate</strong></div>
                    </td>
                    <td>₹435.20</td>
                  </tr>
                  <tr>
                    <td>
                      <div><strong>Truck Milage</strong></div>
                    </td>
                    <td>₹100.20</td>
                  </tr>
                  <tr>
                    <td>
                      <div><strong>Fuel Used</strong></div>
                    </td>
                    <td>₹700.20</td>
                  </tr>
                  <tr>
                    <td>
                      <div><strong>Fuel Cost</strong></div>
                    </td>
                    <td>₹700.20</td>
                  </tr>
                  
                </tbody>
                <tr>
                    <td>
                      <div><strong>Total Amount</strong></div>
                    </td>
                    <td>₹2162.00</td>
                  </tr>
              </table>
            </div>
            <hr className="nomargin-top" />
            <div className="row">
              <div className="col-sm-6 text-left-dark text-dark" >
                {/* <h4><strong>Contact</strong> Details</h4>
                <p className="nomargin nopadding">
                  <strong>Note:</strong> 
                  Lid est laborum dolo rumes fugats.
                </p><br />no P margin for printing - use <br> instead */}
                <address>
                  <b>Move n Earn</b><br/>
                  IND MH Pune <br />
                  Pune 43<br />
                  Phone: 7350416562 <br />
                  Fax: 7350416562 <br />
                  Email:movenearn@gmail.com
                </address>
              </div>
              
            </div>
          </div>
        </div>
        
        <div className="panel panel-default text-right ">
          <div className="panel-body">
            
            <a className="btn btn-warning " href="#" id='btnn'
            ><i className="fa fa-pencil-square-o" /> EDIT</a>
            
            <a className="btn btn-primary " href="#" id='btnn'><i className="fa fa-check" id='save' /> SAVE</a>
            
            <a className="btn btn-success " href="page-invoice-print.html" target="_blank"><i className="fa fa-print" id='btnn' /> PRINT INVOICE</a>
            {/* <input
                        id="buttonSubmit"
                        className="btn btn-primary btn-lg "
                        type="submit"
                        defaultValue="Search Vehicle"
                        // onClick={(e)=>{handleSubmit(e);}}
                        onClick={setDashboardIsOpen}
                        
                      /> */}
                      <button type="submit" id='btnn' className="billingbtn" onClick={()=>setDashboardIsOpen(true)} >Receipt</button>
          </div>
        </div>
        {DashboardIsOpen && <Dashboard onClick={DashboardPage} />}
      </div>
      </div>
  );
}


export default Receipt;





