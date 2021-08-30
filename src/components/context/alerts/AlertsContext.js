import React,{createContext,useReducer} from 'react';
import {AlertsReducer} from './AlertsReducer';
import {SHOW_ALERT,HIDE_ALERT} from '../../types/types'

export const AlertsContext = createContext();

const AlertsPovider = (props) => {
    
    const initialState = {
        alert:null
    }

    const [state,dispatch] = useReducer(AlertsReducer,initialState)
    
    //State function

    const showAlert = (msg,category)=>{
        dispatch({
            type:SHOW_ALERT,
            payload:{
                msg,category
            }
        });

        setTimeout(() => {
            dispatch({
                type:HIDE_ALERT
            })
        }, 4000);
    }
    
    return ( 
        <AlertsContext.Provider
            value={{
                alert:state.alert,
                showAlert
            }}
        >
            {props.children}
        </AlertsContext.Provider>

     );
}
 
export default AlertsPovider;