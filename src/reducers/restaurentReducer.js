import{
    RESTAURENTS_LIST_REQUEST,
 RESTAURENTS_LIST_SUCCESS,
 RESTAURENTS_LIST_FAIL
}from '../constants/restaurentConstants'

export const restaurentListReducer=(state={restaurants:[]},action)=>{
switch(action.type){
    case RESTAURENTS_LIST_REQUEST:
        return{loading:true,restuarants:[]}
        case RESTAURENTS_LIST_SUCCESS:
            return{loading:false,restaurants:action.payload}
            case RESTAURENTS_LIST_FAIL:
                return{loading:false,error:action.payload}
                default:
                    return state
}
}