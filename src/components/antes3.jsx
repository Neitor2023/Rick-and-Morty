import React, { useEffect, useState } from 'react';
import Axios from 'axios'

const Location = ({ data }) => {
    const [look, setLook] = useState("")
    // const [location, setLocation] = useState({})
    const [data, setData] = useState({})
    // setLocation( [ ...data ] )
    const lookId = () => {
        if (look <= 126) {
            let container_loader = document.querySelector('.loader_url')
            container_loader.style.opacity = 1
            container_loader.style.visibility = 'visible'

            Axios.get(`https://rickandmortyapi.com/api/location/${look}`)
                .then(res => setData(res.data))
            setLook("")
            console.log("Bandera")
            // console.log("location.length" , location.length)
            // const lastPostIndex = currentPage * postsPerPage
            // const firstPostIndex = lastPostIndex - postsPerPage
            // const currentPost = location.slice(firstPostIndex, lastPostIndex)

            setTimeout(() => {
                let container_loader = document.querySelector('.loader_url')
                container_loader.style.opacity = 0
                container_loader.style.visibility = 'hidden'
            }, 2500);
        } else {
            alert("Entrada no valida")
            setLook("")
        }
    }

    return (
        <div className='detail_f'>
            <div className='detail'>
                <p> <strong> Name: </strong> <br /><br /> {data.name}</p>
                <p> <strong> Type: </strong> <br /><br /> {data.type}</p>
                <p> <strong> Dimension: </strong> <br /><br /> {data.dimension}</p>
                <p> <strong> Residents: </strong> <br /><br /> {data.residents?.length}</p>
            </div>
            <div className='search'>
                <input className='input_r' type="number" min={1} max={126} value={look} onChange={e => setLook(e.target.value)} placeholder={"    Type a location id (1-126)"} />
                <button className='btn_rick' onClick={lookId}> Search <i className='bx bx-search-alt'></i></button>
            </div>
        </div>
    )
}

export default Location