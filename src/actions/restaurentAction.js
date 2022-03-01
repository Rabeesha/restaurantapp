import{
     RESTAURENTS_LIST_REQUEST,
  RESTAURENTS_LIST_SUCCESS,
  RESTAURENTS_LIST_FAIL
}from '../constants/restaurentConstants'
 
import axios from 'axios'
 export const listRestaurents=()=>async(dispatch)=>{
     try{
dispatch({type:RESTAURENTS_LIST_REQUEST})
const {data}=await axios.get('/restaurants.json')
     
     dispatch({type:RESTAURENTS_LIST_SUCCESS,payload:data.restaurants})
     } 
     catch(error){
        dispatch({
            type:RESTAURENTS_LIST_FAIL,payload:error
           })
     }
 }