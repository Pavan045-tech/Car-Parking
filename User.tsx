import React, { FormEvent, useState } from "react";
import './user.css';
import { Link } from "react-router-dom";


const Data  = () => {

    interface Prep{
        number:number;
        setData:React.Dispatch<React.SetStateAction<number>>;

    }

    const [data,setData]=useState("");

    const Func= ()=> {
        console.log(data);
    }




    return(
        <div className="main">
            <div className="full-page-view">
                <h1>Welcome to Pavan's car Parking Website</h1>
                <form>
                <label htmlFor="number"></label>
                <input id="number"type="number" className="input"  placeholder="Enter Number of Parking Slot's" onChange={(e)=>setData(e.target.value)}></input>
                <Link to={`View/${data}`} className="Link"><button type="submit" className="submit">Go</button></Link>
                </form>
            </div>
            <div className="footer">
                <h1 className="footer1">Pavan's car Parking</h1>
            </div>
        </div>
    );
}

export default Data