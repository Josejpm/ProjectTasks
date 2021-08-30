import React, { Fragment, useState,useContext } from 'react';
import {v4} from 'uuid'
import {ProjectsContext} from '../context/projects/ProjectContext'


const NewProject = () => {

    const {form,formError,showForm,saveProject,setFormError} = useContext(ProjectsContext);

    const [projectName, setProjectName]= useState({
        name:''
    })

    const readForm = e=>{
        setProjectName({
            name:e.target.value
        })
    }
    const {name}=projectName;

    const saveForm = e=>{
        e.preventDefault()

        //Validar formulario
            if(name === ''){
                setFormError();
                console.log('Error, Completa el formulario')
                return;
            }
        //Enviar al action
            const newProject = {
                name,
                id:v4()
            }
            saveProject(newProject);
            setProjectName({
                name:''
            })

    }

    return ( 
        <Fragment>
            <button
                onClick={()=>showForm()}
                type="button"
                className="btn btn-primary btn-block"
            >Nuevo Proyecto</button>


            {form 
            ? 
                <form 
                    className="new-project-form"
                    onSubmit={saveForm}
                >
                    <input 
                        type="text" 
                        className="input-text"
                        name="name" 
                        placeholder="Nombre del proyecto"
                        value={name}
                        onChange={readForm}
                    />

                    <input 
                        type="submit" 
                        className="btn btn-primary btn-block"
                        value="Crear"/>
                </form>
            : null}

            {formError ? <p className="message error" > El nombre del proyecto es requerido </p> : null}
            
            

        </Fragment>
     );
}
 
export default NewProject;