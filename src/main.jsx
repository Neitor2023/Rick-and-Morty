import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import Style from '/style'

window.addEventListener('load', () => {
    const container_loader = document.querySelector('.container_loader')
    container_loader.style.opacity = 0
    container_loader.style.visibility = 'hidden'
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />,
);
