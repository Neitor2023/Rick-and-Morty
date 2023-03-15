import React from 'react'
console.log("Location Componente")
const New = ({data}) => {
  return (
    <div className='detail_f'>
    <div className='detail'>
      <p> <strong> Name: </strong> <br /><br /> {data.name}</p>
      <p> <strong> Type: </strong> <br /><br /> {data.type}</p>
      <p> <strong> Dimension: </strong> <br /><br /> {data.dimension}</p>
      <p> <strong> Residents: </strong> <br /><br /> {data.residents?.length}</p>
    </div>
  </div>
  )
}

export default New
