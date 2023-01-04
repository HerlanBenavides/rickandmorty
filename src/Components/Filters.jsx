import React, { useEffect, useState } from 'react'

const Filters = ({ sugList, setDesiredLocation }) => {

    const [showingTitle, setShowingTitle] = useState()

    useEffect(() => {
        if (sugList) {
            setShowingTitle("Or pick from any of these:")
        } else {
            setShowingTitle("")
        }

    }, [sugList])


    const handleClick = id => setDesiredLocation(id);



    return (
        <ul className='suglist'>
            <p className='suglist-tittle'>{showingTitle}</p>
            {
                sugList?.map(location => (
                    <li onClick={() => handleClick(location.id)} key={location.id}>{`${location.name}`}</li>
                ))
            }
        </ul>
    )
}

export default Filters

