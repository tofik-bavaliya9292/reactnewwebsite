import React from "react";
import { Routes, Route , Navigate} from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import About from "./About";
import Search from "./Search";
import Error  from "./Error";


const Main = () => {

    return (

        <>
            <Routes>
                <Route exact path='/' element={<h1>this is home page </h1>} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/contact' element={<h1>this is contact page </h1>} />
                <Route exact path='/search' element={<Search />} />
                <Route path='/*' element={<Error />} />
                <Route path="*" element={<Navigate to='/' replace /> } />
            </Routes>


        </>

    )
}

export default Main;