import React, { useState,useContext,useEffect } from 'react'
import {useHistory} from 'react-router-dom';
import {AlertsContext} from '../../context/alerts/AlertsContext'
import {AuthContext} from '../../context/authentication/AuthContext'

const NewAccount = () => {
    const {alert,showAlert}  = useContext(AlertsContext);
    const {authenticated,message,registerUser} = useContext(AuthContext);
    const history = useHistory();
    const [formInputs,setFormInputs] = useState({
        name:'',
        email:'',
        password:'',
        repeatPass:''
    });
    const {name,email,password,repeatPass}= formInputs;
    const emailExpReg = /^\w+(\w+)*@\w+(\w+)*(\.\w{2,4})+$/
    
    //UseEffect to ckeck if the user is authenticated

    useEffect(()=>{

        if(authenticated) history.push('/projects');
        if(message){
            showAlert(message.msg,message.category);
        }
    },[message,authenticated])

    const formRead = e=>{
        setFormInputs({
            ...formInputs,
            [e.target.name]:e.target.value
        })
    }

    const formSubmit = e=>{
        e.preventDefault();

        //Validar los campos
        if( name.trim() === '' || email.trim() === '' || password.trim() === '' || repeatPass.trim() === '' ){
            showAlert('Todos los campos son requeridos','alert-error');
            return
        }

        //Validar un email valido
        if(!emailExpReg.test(email)){
            showAlert('Ingresa una direccion de correo valida','alert-error');
            return
        }
        //Pass mayor o igual a 6 caracteres
        if( password.length <6 ){
            showAlert('El password debe contener al menos 6 caracteres','alert-error');
            return
        }
        //Passwords iguales
        if( password !== repeatPass ){
            showAlert('Los passwords deben coincidir','alert-error');
            return
        }

        //Pasar al action
        registerUser({name,email,password});
        setFormInputs({
            password:'',
            repeatPass:''
        })

    }

    return ( 
        <div className="user-form">
            {alert ? ( <div className={`alert ${alert.category}`} > {alert.msg} </div> ) : null}
        <div className="form-container dark-shadow">
            <h1>Iniciar Sesion</h1>

            <form
                onSubmit={formSubmit}
            >
                <div className="form-field">
                    <label htmlFor="name">Nombre</label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name"
                        placeholder="Tu nombre"
                        autoComplete="off"
                        value={name}
                        onChange={formRead}
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email"
                        placeholder="Tu email"
                        autoComplete="off"
                        value={email}
                        onChange={formRead}
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password"
                        placeholder="Tu password"
                        value={password}
                        onChange={formRead}
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="repeatPass">Password</label>
                    <input 
                        type="password" 
                        name="repeatPass" 
                        id="repeatPass"
                        placeholder="Repite tu password"
                        value={repeatPass}
                        onChange={formRead}
                    />
                </div>

                <div className="form-field">
                    <input
                        className="btn btn-primary btn-block" 
                        type="submit" 
                        value="Iniciar sesion"
                    
                    />
                </div>
            </form>

        </div>
    </div>
     );
}
 
export default NewAccount;