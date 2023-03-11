import React, { useEffect, useState } from 'react';
import Axios from 'axios'

const Location = () => {
    const [location, setLocation] = useState({})

    useEffect(() => {
        Axios.get(`https://rickandmortyapi.com/api/location/3`)
        .then(res => setLocation(res.data))
    },[])

    console.log(location)

    return (
        <div>
            <h1>Hola Mundo! Location</h1>
        </div>
    );
};

export default Location;