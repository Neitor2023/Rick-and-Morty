import React from 'react';

const Pages = ({pageGroup, setPageGroup, quantyPg}) => {
    return (
        <div>
           { pageGroup > 1 && <button className='Btn__page' onClick={()=> setPageGroup(pageGroup-1)}>Anterios</button>}<p>{pageGroup} de {quantyPg} </p>{ quantyPg > pageGroup && <button className='Btn__page' onClick={()=> setPageGroup(pageGroup+1)}>Proximo</button>}
        </div>
    );
};

export default Pages;