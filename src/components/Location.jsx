import React, { useEffect, useState } from 'react';
import Axios from 'axios'
import ResidentInfo from './ResidentInfo'
import Pages from './Pages';

const Location = () => {
    const [location, setLocation] = useState({})

    useEffect(() => {
        Axios.get(`https://rickandmortyapi.com/api/location/${Math.floor(Math.random(1) * 126 ) + 1}`)
        .then(res => setLocation(res.data))
    },[])
    const [look , setLook ] = useState("")

    const lookId = () => {

        if (look<=126) {
            Axios.get(`https://rickandmortyapi.com/api/location/${look}`)
            .then(res => setLocation(res.data))
            setLook("")
        } else {
            alert("Entrada no valida")   
            setLook("")
        }
    }
    const [pageGroup, setPageGroup] = useState(1)
    const numPage = 4
    const quantyPg = Math.ceil( location.residents?.length / numPage)
    const firstPg = (pageGroup - 1) * numPage
    // const resiPage = location.residents?.slice(0,6)
    const resiPage = location.residents?.slice(firstPg , firstPg + numPage)

    return (
        <div>
            <input type="number" min={1} max= {126} value={look} onChange={e=> setLook(e.target.value)} placeholder= {"Ingrese Id (1-126)"} />
            <button onClick={lookId} >Search</button>
            <h1>{location.name}</h1>
            <p> <strong> Type: </strong> {location.type}</p>
            <p> <strong> Dimension: </strong> {location.dimension}</p>
            <p> <strong> Residents: </strong> {location.residents?.length}</p>
            {/* { location.residents?.map( resid => ( */}

            <Pages pageGroup = {pageGroup} setPageGroup = {setPageGroup} quantyPg = {quantyPg} />

            { resiPage?.map( resid => (
                <ResidentInfo url={resid} key={resid}/>
            ))

            }
        </div>
    );
};

export default Location;