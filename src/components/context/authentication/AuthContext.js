import React,{createContext,useReducer} from 'react';
import {AuthReducer} from './AuthReducer';
import axiosClient from '../../../config/axios';
import authToken from '../../../config/authToken';

import {CREATE_USER_OK,
    CREATE_USER_ERROR,
    GET_USER,
    LOGIN_OK,
    LOGIN_ERROR,
    LOG_OUT
} from '../../types/types'

export const AuthContext = createContext();

const AuthProvider = (props) => {

    const initialState ={
        token: localStorage.getItem('token'),
        authenticated:null,
        user:null,
        message:null
    }

    const [state,dispatch] = useReducer(AuthReducer,initialState);

    //State actions
    //! User register
    const registerUser = async (userData)=>{
        try {
            const resp = await axiosClient.post('/api/users',userData);
            console.log('Entra')
            dispatch({
                type:CREATE_USER_OK,
                payload:resp.data
                
            });

            //getAuthUser();

        } catch (error) {
            const alert = {
                msg:error.response.data.msg,
                category:'alert-error'
            }
            
            dispatch({
                type:CREATE_USER_ERROR,
                payload:alert
            })
        }
    }

    //! Get an user
    const getAuthUser = async()=>{
        const token  = await localStorage.getItem('token');
        if(token){
            authToken(token);
        }

        try {
            const resp = await axiosClient.get('/api/auth');
            console.log(resp)
        } catch (error) {
            console.log(error);
            dispatch({
                type:LOGIN_ERROR
            })
        }


    }

    return ( 
        <AuthContext.Provider
            value={{
                token:state.token,
                authenticated:state.authenticated,
                user:state.user,
                message:state.message,
                registerUser
            }}
        >
            {props.children}
        </AuthContext.Provider>
     );
}
 
export default AuthProvider;