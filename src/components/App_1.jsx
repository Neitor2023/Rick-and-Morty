import React, { useEffect, useState } from 'react';
import Axios from 'axios'
import "./css/App.css"
import Location from './components/Location';

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
      <Location data={data}/>
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
