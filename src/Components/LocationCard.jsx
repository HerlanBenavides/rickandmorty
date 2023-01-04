import React from 'react'

const LocationCard = ({info}) => {

    
    

    return (
    <div>
        <h2 className='locationCard-tittle'>{`Location: ${info?.name}`}</h2>
        <ul className='locationCard-elemets'>
            <li>{`Type: ${info?.type}`}</li>
            <li>{`Dimension: ${info?.dimension}`}</li>
            <li>{`Population: ${info?.residents.length}`}</li>
        </ul>
    </div>
    )
}

export default LocationCard