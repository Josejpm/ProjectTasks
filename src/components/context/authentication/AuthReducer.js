import {CREATE_USER_OK,
        CREATE_USER_ERROR,
        GET_USER,
        LOGIN_OK,
        LOGIN_ERROR,
        LOG_OUT} from '../../types/types'

export const AuthReducer = (state,action)=>{

    switch (action.type) {
        case CREATE_USER_OK:
            localStorage.setItem('token',action.payload.token);
            return {
                ...state,
                token:localStorage.getItem('token'),
                authenticated: true,
                message:null
            

            }
        case LOGIN_ERROR:
        case CREATE_USER_ERROR:
            localStorage.removeItem('token')
            return {
                ...state,
                token:null,
                message:action.payload

            }
        case GET_USER:
            return {
                ...state
            }
        case LOGIN_OK:
            return {
                ...state
            }
        case LOGIN_ERROR:
            return {
                ...state
            }
        case LOG_OUT:
            return {
                ...state
            }
    
        default:
            return state;
    }

}