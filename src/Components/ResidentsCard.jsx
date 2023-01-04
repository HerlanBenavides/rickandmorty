import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ResidentsCard = ({url}) => {
    const [resident, setResident] = useState()
    const [circleColor, setCircleColor] = useState()


    useEffect(() => {
        axios.get(url)
            .then (res => setResident(res.data))
            .catch(err => console.log(err))
    }, [])
    
    useEffect ( () => {
        if (resident?.status === "Dead") {
            setCircleColor("red");
        } else if (resident?.status === "Alive") {
            setCircleColor("green")
        } else {setCircleColor("grey")}

    }, [resident])

    return (
    <div className='ResidentsCard'>
        <header className='ResidentsCard-Header'>
            <img className='ResidentsCard-Header-img' src={resident?.image} alt="" />
            <div className='circle-and-status'>
                <div className='circle-for-status' style={{backgroundColor: `${circleColor}`}}></div>
                <span className='ResidentsCard-Header-Status'>{`${resident?.status}`}</span>
            </div>
        </header>

        <section>
            <h2 className='ResidentsCard-name'>{`${resident?.name}`}</h2>
            <h4 className='ResidentsCard-species'>{`Species: ${resident?.species}`}</h4>
            <h4 className='ResidentsCard-origin'>{`Origin: ${resident?.origin.name}`}</h4>
            <h4 className='ResidentsCard-ep-apearing'>{`Appeard on:${resident?.episode.length} episode/s`} </h4>
        </section>
        
        
    </div>
    )
}

export default ResidentsCard