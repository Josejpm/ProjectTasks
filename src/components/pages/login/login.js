import React,{useState} from 'react';
import {Link} from 'react-router-dom'

const Login = () => {

    const [formInputs,setFormInputs] = useState({
        email:'',
        password:''
    })
    const {email,password} = formInputs;

    const formRead = (e)=>{
        setFormInputs({
            ...formInputs,
            [e.target.name]:e.target.value
        })
    }

    const formSubmit = (e)=>{
        e.preventDefault();
        console.log('Submit')

        //Validar los campos

        // Pasar al action


    }

    return ( 
        <div className="user-form">
            <div className="form-container dark-shadow">
                <h1>Iniciar Sesion</h1>

                <form
                    onSubmit={formSubmit}
                >
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
                        <input
                            className="btn btn-primary btn-block" 
                            type="submit" 
                            value="Iniciar sesion"
                        
                        />
                    </div>
                </form>

                <Link to="/new-account" className= "new-account"> Crear una cuenta </Link>

            </div>
        </div>
     );
}
 
export default Login;