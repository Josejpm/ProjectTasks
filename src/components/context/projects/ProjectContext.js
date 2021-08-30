import React,{createContext,useReducer} from 'react';
import {ProjectReducer} from './ProjectsReducer'

import {SHOW_PROJECT_FORM,
        SAVE_PROJECT_NAME,
        SHOW_FORM_ERROR,
        SELECT_PROJECT
        } from '../../types/types'



export const ProjectsContext = createContext();

const ProjectsProvider = props => {

    const initialState = {
        projectForm:false,
        formError:false,
        projects:[],
        activeProject:''
    }

    const [state, dispatch] = useReducer(ProjectReducer, initialState)

    const showForm = ()=>{

        dispatch({
            type:SHOW_PROJECT_FORM
        })

    }

    const saveProject = (project)=>{
        
        dispatch({
            type:SAVE_PROJECT_NAME,
            payload:project
        });
    }

    const setFormError = ()=>{
        dispatch({
            type: SHOW_FORM_ERROR,
            payload:true 
        })
    }

    const selectProject=(project)=>{

        dispatch({
            type:SELECT_PROJECT,
            payload:project
        })

    }


    return ( 

        <ProjectsContext.Provider
            value={{
                form:state.projectForm,
                projects:state.projects,
                formError:state.formError,
                activeProject:state.activeProject,
                showForm,
                saveProject,
                setFormError,
                selectProject
            }}
        >


            {props.children}
        </ProjectsContext.Provider>
     );


}
 
export default ProjectsProvider;