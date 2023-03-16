import React, { Component, Fragment, useEffect, useState } from 'react';
import Select from "react-select";
import "../css/App.css"
import Axios from 'axios'
import Pagination from './Pagination';
import ResidentInfo from './ResidentInfo';

const Location = () => {
    const [seleData, setSeleData] = useState({})
    const [data, setData] = useState({})
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostPerPage] = useState(7)
    // const [currentPosts, setCurrentPosts] = useState({})

    useEffect(() => {

        Axios.get(`https://rickandmortyapi.com/api/location/${Math.floor(Math.random(1) * 126) + 1}`)
            .then(resp => setData(resp.data))
            .catch(error => console.log(error))

        Axios.get(`https://rickandmortyapi.com/api/location/`)
            .then(resp => setSeleData(resp.data))
            .catch(error => console.log(error))

    }, [])

    const lookId = (Obj_L) => {
        const look = Obj_L.value
        if (look <= 126) {

            let container_loader = document.querySelector('.loader_url')
            container_loader.style.opacity = 1
            container_loader.style.height = '100px'
            container_loader.style.visibility = 'visible'

            Axios.get(`https://rickandmortyapi.com/api/location/${look}`)
                .then(res => setData(res.data))
                .catch(error => console.log(error))
        } else {
            alert("Entrada no valida")
        }
    }

    const options = seleData.results?.map(item => {
        return {
            value: item.id,
            label: item.name
        }
    })

    return (
        <div className="App">
            <div className='detail_f'>
                <div className='detail'>
                    <p> <strong> Name: </strong> <br /><br /> {data.name}</p>
                    <p> <strong> Type: </strong> <br /><br /> {data.type}</p>
                    <p> <strong> Dimension: </strong> <br /><br /> {data.dimension}</p>
                    <p> <strong> Residents: </strong> <br /><br /> {data.residents?.length}</p>
                </div>
                <br />
                <div className='search'>
                    <Select className='Select_css'
                        name="url"
                        options={options}
                        onChange={lookId}
                    ></Select >
                </div>
                <br />
                <div className="loader_ul">
                    <div className="loader_url"></div>
                </div>
                <br />
                <div>
                    <Pagination totalPosts={data.residents?.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
                </div>
                <br />
                <br />
                <br />
                <div className='wrapper'>
                    {data.residents?.map((resid, index) => index >= ((currentPage * postsPerPage) - postsPerPage) && index <= (currentPage * postsPerPage) ?
                        <ResidentInfo url={resid} key={resid} /> : ''
                    )}
                </div>
            </div>
        </div>
    )
}

export default Location