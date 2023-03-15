import React from "react";

import ResidentInfo from "./ResidentInfo";
// import "./CryptoList.css";

const MapList = ({ DataList }) => {
    return (
        <div className='wrapper'>
            {DataList.residents?.map(resid => {
                return (
                    <ResidentInfo url={resid} key={resid} />
                );
            })}
        </div>
    );
};

export default MapList;