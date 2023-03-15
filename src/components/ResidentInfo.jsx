import React, { useEffect, useState } from 'react';
import Axios from 'axios'

const ResidentInfo = ({ url }) => {
    const [residen, setResiden] = useState({})

    useEffect(() => {
        Axios.get(url)
            .then(res => setResiden(res.data))

        setTimeout(() => {
            let container_loader = document.querySelector('.loader_url')
            container_loader.style.opacity = 0
            container_loader.style.height = '0px'
            container_loader.style.visibility = 'hidden'
        }, 2500);

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
        <div className="card">
            <div className='info_status'>
                <div className='status' style={{ backgroundColor: ColorStaus() }}></div><p>{residen.status}</p>
            </div>
            <div className='img'>
                <img src={residen.image} alt="Img" width={"100%"} />
            </div>
            <div className="card_dat">
                <div className="name"><strong>{residen.name}</strong></div>
                <div className="txt"><strong>Species: </strong>{residen.status}</div>
                <div className="txt"><strong>Status: </strong>{residen.species}</div>
                <div className="txt"><strong>Origin: </strong>{residen.origin?.name}</div>
                <div className="txt"><strong>Episode: </strong>{residen.episode?.length}</div>
            </div>
        </div>
    );
};

export default ResidentInfo;