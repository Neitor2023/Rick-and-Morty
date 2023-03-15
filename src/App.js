import React, { useEffect, useState } from 'react';
import Axios from 'axios'
import "./css/App.css"
import Location from './components/Location2';

function App() {

  const [data, setData] = useState({})
  useEffect(() => {
    Axios.get(`https://rickandmortyapi.com/api/location/${Math.floor(Math.random(1) * 126) + 1}`)
      .then(resp => setData(resp.data))
  }, [])

  const [look, setLook] = useState("")
  const lookId = () => {
    if (look <= 126) {

      let container_loader = document.querySelector('.loader_url')
      container_loader.style.opacity = 1
      container_loader.style.height = '100px'
      container_loader.style.visibility = 'visible'

      Axios.get(`https://rickandmortyapi.com/api/location/${look}`)
        .then(res => setData(res.data))
      setLook("")

      setTimeout(() => {
        let container_loader = document.querySelector('.loader_url')
        container_loader.style.opacity = 0
        container_loader.style.height = '0px'
        container_loader.style.visibility = 'hidden'
      }, 2500);
    } else {
      alert("Entrada no valida")
      setLook("")
    }
  }

  return (
    <div className="App">
      <header className="header">
        <div className="header_left"></div>
        <div className="header_right"></div>
        <div className="header_center"></div>
      </header>
      <Location data={data}/>
      <div className='search'>
        <input className='input_r' type="number" min={1} max={126} value={look} onChange={e => setLook(e.target.value)} placeholder={"    Type a location id (1-126)"} />
        <button className='btn_rick' onClick={lookId}> Search <i className='bx bx-search-alt'></i></button>
      </div>
      <div className="loader_ul">
        <div className="loader_url"></div>
      </div>
      <div className='box_btn'>
        {/* <Pagination totalPosts={location.length} postsPerPage={postsPerPage} /> */}
      </div>
    </div>

  );
}

export default App;
