import React from 'react'
import {Card,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Restaurants({item}) {
    return (
        <>
        <Link to={`restaurants/${item.id}`}>
         <Card style={{ width: '18rem' }} className="my-4 p-3 rounded">
  <Card.Img variant="top" src={item.photograph} />
  <Card.Body>
    <Card.Title><h5>{item.name}</h5></Card.Title>
    <Card.Text>
      {item.neighborhood}
      {item.cuisine_type}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>   
</Link>
        </>
    )
}

export default Restaurants
