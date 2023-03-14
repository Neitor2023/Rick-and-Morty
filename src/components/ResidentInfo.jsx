import React, { useEffect, useState } from 'react';
import Axios from 'axios'
// import LoaderStart from './LoaderStart';
// import LoaderEnd from './LoaderEnd';


const ResidentInfo = ({ url }) => {

    const [residen, setResiden] = useState({})

    useEffect(() => {
        
        const container_load = document.querySelector('.loader_url')
        container_load.style.opacity = 1
        container_load.style.visibility = 'visible'
        
        // <LoaderStart/>
        
        
        Axios.get(url)
        .then(res => setResiden(res.data))
        
        setTimeout(() => {
            const container_load2 = document.querySelector('.loader_url')
            container_load2.style.opacity = 0
            container_load2.style.visibility = 'hidden'
        }, 1000);
            
            // <LoaderEnd/>
    }, [url])

    const ColorStaus = () => {
        if (residen.status === "Alive") {
            return "chartreuse"
        } else if (residen.status === "Dead") {
            return "red"
        } else {
            return "grey"
        }
    }

    return (
        <div className='wrapper'>
            <div className="card">
                <div className='info__status'>
                    <div className='status' style={{ backgroundColor: ColorStaus() }}></div><p>{residen.status}</p>
                </div>

                <div className='img'>
                    <img src={residen.image} alt="Img" width={"100%"} />
                </div>
                <div className="cnt">
                    <div className="name"><strong>{residen.name}</strong></div>
                    <div className="txt"><strong>Species: </strong>{residen.status}</div>
                    <div className="txt"><strong>Status: </strong>{residen.species}</div>
                    <div className="txt"><strong>Origin: </strong>{residen.origin?.name}</div>
                    <div className="txt"><strong>Episode: </strong>{residen.episode?.length}</div>
                </div>
            </div>
        </div>
    );
};

export default ResidentInfo;