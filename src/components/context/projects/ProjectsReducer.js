
import {SHOW_PROJECT_FORM,
        SAVE_PROJECT_NAME,
        SHOW_FORM_ERROR,
        SELECT_PROJECT
    } from '../../types/types'

export const ProjectReducer = (state,action)=>{

    switch (action.type) {
        case SHOW_PROJECT_FORM:
            return {
                ...state,
                projectForm: true
            }
        
        case SAVE_PROJECT_NAME:
            return{
                ...state,
                formError:false,
                projectForm:false,
                projects: [...state.projects,action.payload],

            }
        
        case SHOW_FORM_ERROR:
            return {
                ...state,
                formError:true
            }
        case SELECT_PROJECT:
            return {
                ...state,
                activeProject:action.payload
            }
                
        default:
            return state;
    }

}
