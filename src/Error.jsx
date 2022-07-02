import React from "react";
import {useNavigate} from 'react-router-dom';

let Error = () => {

    let back = useNavigate();

    return (
        <>

            <div className="error">
                <h1>Error page  404 🚫 </h1>
                <h2> Oops! page not found</h2>
                <div className="bts"> <button onClick={() => { back(-1) }} > go back </button></div>
            </div>

        </>
    )
}

export default Error;