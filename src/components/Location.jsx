import React, { Component, Fragment, useEffect, useState } from 'react';
import Select from "react-select";
import "../css/App.css"
import Axios from 'axios'
import Pagination from './Pagination';
import ResidentInfo from './ResidentInfo';

const Location = () => {
    // const [urlDat, seturlDat] = useState({urls:[]})
    const [seleData, setSeleData] = useState({})
    const [data, setData] = useState({})
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostPerPage] = useState(7)
    // const [currentPosts, setCurrentPosts] = useState({})

    // urlDat={
    //     urls:[]
    // }

    useEffect(() => {

        Axios.get(`https://rickandmortyapi.com/api/location/${Math.floor(Math.random(1) * 126) + 1}`)
            .then(resp => setData(resp.data))

        Axios.get(`https://rickandmortyapi.com/api/location/`)
        // .then(resp => console.log(resp.data))
        .then(resp => setSeleData(resp.data))
                
    }, [])
    
    // const [look, setLook] = useState("")
    const lookId = (Obj_L) => {
        const look = Obj_L.value
        if (look <= 126) {

            let container_loader = document.querySelector('.loader_url')
            container_loader.style.opacity = 1
            container_loader.style.height = '100px'
            container_loader.style.visibility = 'visible'

            Axios.get(`https://rickandmortyapi.com/api/location/${look}`)
                .then(res => setData(res.data))
                // seturlDat(data)
            // setLook("")

            // let container_loader = document.querySelector('.loader_url')
            // container_loader.style.opacity = 0
            // container_loader.style.height = '0px'
            // container_loader.style.visibility = 'hidden'

            // console.log("data antes ", data)
            // const lastPostIndex = currentPage * postsPerPage
            // const firstPostIndex = lastPostIndex - postsPerPage
            // console.log("lastPostIndex ",lastPostIndex)
            // console.log("firstPostIndex ",firstPostIndex)

            // const currentPosts = data.residents?.prototype.slice
            // setCurrentPosts(data.residents?.slice(firstPostIndex, lastPostIndex))

            // setData(currentPosts)
        } else {
            alert("Entrada no valida")
            // setLook("")
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
{/*********************{INICIO}********************/}


<Select className='Select'
name="url"
options={options}
onChange={lookId}
></Select>
{/*
defaultValue={options[0]}
className="basic-single"
classNamePrefix="select"
isDisabled={false}
isLoading={false}
isClearable={false}
isRtl={false}
isSearchable={true}

*/}
{/*********************{FIN}********************/}                    
                    {/*
                    <input className='input_r' type="number" min={1} max={126} value={look} onChange={e => setLook(e.target.value)} placeholder={"    Type a location id (1-126)"} />
                    <button className='btn_rick' onClick={lookId}> Search <i className='bx bx-search-alt'></i></button>
                    */}
                </div>
                <br />
                <div className="loader_ul">
                    <div className="loader_url"></div>
                </div>
                <br />
                postsPerPage
                <div>
                    <Pagination totalPosts={data.residents?.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
                </div>
                {/* <MapList DataList={currentPosts}/> */}
                <br />
                <br />
                <br />
                <div className='wrapper'>
                {data.residents?.map((resid, index) => index >= ((currentPage * postsPerPage) - postsPerPage) && index <= (currentPage * postsPerPage) ?
                        <ResidentInfo url={resid} key={resid} />:''
                    )
                    }

                    {/* <CryptoList coinsData={currentPosts} />                     */}
                    {/* {currentPosts.residents?.map(resid => (
                        <ResidentInfo url={resid} key={resid} />
                    ))
                    } */}
                </div>
            </div>
        </div>
    )
}

export default Location
