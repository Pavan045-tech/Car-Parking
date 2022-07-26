import React from "react";
import './Parking-view.css';
import { Link, useParams } from "react-router-dom";

const View = () => {

    const data=useParams();

            if(data){
                return(
                    <div className="Parking-view">
                    <h1>Please Choose Parking of {`${data}`} Slot and Register</h1>
                    <tr>
                        <th><Link to={`/Register`}><button>Parking Lot-1</button></Link></th>
                        <th className="road3"></th>
                        <th><Link to={`/Register`}><button className="red">Parking Lot-2</button></Link></th>
                        <th className="road"></th>
                        <th><Link to={`Register`}><button>Parking Lot-3</button></Link></th>
                        <th className="road3"></th>
                        <th><Link to={`Register`}><button>Parking Lot-4</button></Link></th>
                    </tr>
                    <tr>
                        
                        <th><Link to={`Register`}><button className="red">Parking Lot-5</button></Link></th>
                        <th className="road3"></th>
                        <th><Link to={`Register`}><button>Parking Lot-6</button></Link></th>
                        <th className="road"></th>
                        <th><Link to={`Register`}><button>Parking Lot-7</button></Link></th>
                        <th className="road3"></th>
                        <th><Link to={`Register`}><button>Parking Lot-8</button></Link></th>
                    </tr>
                    <tr className="road2"><h2>Road</h2></tr>
                    <tr>
                        
                        <th><Link to={`Register`}><button>Parking Lot-9</button></Link></th>
                        <th className="road3"></th>
                        <th><Link to={`Register`}><button>Parking Lot-10</button></Link></th>
                        <th className="road"></th>
                    <th> <Link to={`Register`}><button>Parking Lot-11</button></Link></th>
                        <th className="road3"></th>
                        <th><Link to={`Register`}><button className="red">Parking Lot-12</button></Link></th>
                    </tr>
                    <tr>
                        
                        <th><Link to={`Register`}><button>Parking Lot-13</button></Link></th>
                        <th className="road3"></th>
                        <th><Link to={`Register`}><button>Parking Lot-14</button></Link></th>
                        <th className="road"></th>
                        <th><Link to={`Register`}><button>Parking Lot-15</button></Link></th>
                        <th className="road3"></th>
                        <th><Link to={`Register`}><button>Parking Lot-16</button></Link></th>
                    </tr>
                    <Link to="/"><button>Previous</button></Link>
            
        </div>
                    );
        }
        else {
                return(
                    <div>
                    <h1>Plaese Enter The number of Parking Slots to Move</h1>
                    <Link to="/"><button>Previous</button></Link>
                    </div>
                );
                }
 
            }
                    
export default View