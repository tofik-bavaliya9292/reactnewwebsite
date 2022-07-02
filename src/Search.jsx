import React, { useState } from "react";
import {useLocation} from 'react-router-dom'

const Search = () => {

    const [data, setdata] = useState('');

    let old = useLocation();
    console.log(old.pathname);

    let images = `https://source.unsplash.com/random/300×300/?${data} `;

    const update = (event) => {

        let datas = event.target.value;
        setdata(datas);
    }

    return (
        <>

            <div className="in ">
                <p> your path name is here : {old.pathname}</p>
                <input type='text' value={data} placeholder=' search images ' onChange={update} />
                <img src={images} alt=' please check your connection _random_images' />
            </div>

        </>
    )
}


export default Search;