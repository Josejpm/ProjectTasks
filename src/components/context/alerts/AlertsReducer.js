import {SHOW_ALERT,HIDE_ALERT} from '../../types/types'


export const AlertsReducer = (state,action)=>{

    switch (action.type) {
        case SHOW_ALERT:
            return {
                alert:action.payload
            }
        
        case HIDE_ALERT:
            return {
                alert:null
            }
    
        default:
            return state
    }

}