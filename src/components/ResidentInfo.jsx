import React, { useEffect, useState } from 'react';
import Axios from 'axios'

const ResidentInfo = ({url}) => {

    const [residen, setResiden] = useState({})

    useEffect(() => {

        Axios.get( url )
            .then(res => setResiden(res.data))
    }, [url])

    const ColorStaus = () =>{
        if (residen.status === "Alive") {
            return "chartreuse"
        } else if (residen.status === "Dead") {
            return "red"
        } else {
            return "grey"
        }
    }

    return (
        <div className='resident__card'>
            <img src={residen.image} alt="" />
            <h3>{residen.name}</h3>
            <div className='info__status'>
                <div className='status' style={{backgroundColor: ColorStaus()}}></div><p>{residen.status}</p>
            </div>
            <p> <strong>Species: </strong>{residen.species}</p>
            <p> <strong>Status: </strong>{residen.status}</p>
            <p> <strong>Origin: </strong>{residen.origin?.name}</p>
            <p> <strong>Episode: </strong>{residen.episode?.length}</p>
        </div>
    );
};

export default ResidentInfo;