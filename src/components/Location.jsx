import React, { useEffect, useState } from 'react';
import Axios from 'axios'
import ResidentInfo from './ResidentInfo'
import Pages from './Pages';

const Location = () => {
    const [location, setLocation] = useState({})

    useEffect(() => {
        Axios.get(`https://rickandmortyapi.com/api/location/${Math.floor(Math.random(1) * 126) + 1}`)
            .then(res => setLocation(res.data))
    }, [])
    const [look, setLook] = useState("")

    const lookId = () => {

        if (look <= 126) {
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
    const quantyPg = Math.ceil(location.residents?.length / numPage)
    const firstPg = (pageGroup - 1) * numPage
    // const resiPage = location.residents?.slice(0,6)
    const resiPage = location.residents?.slice(firstPg, firstPg + numPage)

    return (
        <div className='Father'>
            <div className='Location'>
                <div className='Search'>
                    <input className='input_r' type="number" min={1} max={126} value={look} onChange={e => setLook(e.target.value)} placeholder={"    Type a location id (1-126)"} />
                    <button className='Btn_Rick' onClick={lookId}> Search <i className='bx bx-search-alt'></i></button>
                </div>
                <div className='Detail_f'>
                    <div className='Detail'>
                        <p> <strong> Name: </strong> <br /><br /> {location.name}</p>
                        <p> <strong> Type: </strong> <br /><br /> {location.type}</p>
                        <p> <strong> Dimension: </strong> <br /><br /> {location.dimension}</p>
                        <p> <strong> Residents: </strong> <br /><br /> {location.residents?.length}</p>
                    </div>
                </div>
            </div><br />
            <div>

                {/* { location.residents?.map( resid => ( */}

                <Pages pageGroup={pageGroup} setPageGroup={setPageGroup} quantyPg={quantyPg} />

                {resiPage?.map(resid => (
                    <ResidentInfo url={resid} key={resid} />
                ))

                }
            </div>
        </div>
    );
};

export default Location;