import React from 'react'
import { Card } from 'react-bootstrap'

function Rating({item}) {
    return (
        <>
        
{item.map(rating=>(
    <>
    <p><strong>Name:</strong>{rating.name}</p>
    <p>Date:{rating.date}</p>
    <p>Rating:{rating.rating}</p>
    <p>Comments:{rating.comments}</p>

    </>
))
}
        
        </>
    )
}

export default Rating
