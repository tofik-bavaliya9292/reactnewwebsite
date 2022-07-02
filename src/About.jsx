import React from "react";
import { useNavigate } from 'react-router-dom';

const About = () => {

    const history = useNavigate();
    console.log(history);

    return (
        <>

            <h1>this is another about page</h1>
            <div className="btn"><button onClick={() => history(-1)}>go back</button></div>
        
        </>
    )
}


export default About;