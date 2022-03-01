import React from 'react'
import{useState,useEffect} from 'react'
import { Row,Col} from 'react-bootstrap'
import Restaurants from './Restaurants'
import { useSelector,useDispatch } from 'react-redux'
import{listRestaurents} from '../actions/restaurentAction'


function Home() {
const dispatch=useDispatch();
  const restaurentReducer= useSelector(state => state.restaurantReducer)
  const {restaurants}=restaurentReducer
  useEffect(() => {
 
   dispatch(listRestaurents())
    
  }, [])
  return (
    <>
      {restaurants ?(
        <Row>
{restaurants.map(item=>(
  <Col sm={12} md={8} lg={4} xl={3}>
 <Restaurants item = {item}/>  
  </Col>
))}
        </Row>
      ):"null"}
    </>
  )
}

export default Home



