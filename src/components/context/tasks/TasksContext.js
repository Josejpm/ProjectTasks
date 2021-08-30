import React,{createContext,useReducer} from 'react'

import TasksReducer from './TasksReducer'
import {SAVE_TASK_NAME,
        READ_ACTUAL_TASKS,
        DELETE_TASK,
        CHANGE_TASK_STATE,
        GET_ACTUAL_TASK,
        EDIT_TASK,
        TASK_FORM_ERROR
    } from '../../types/types'


export const TasksContext = createContext();

const TasksProvider = (props) => {
    
    const initialState = {
        tasks:[],
        project:'',
        actualTasks:[],
        actualTask:null,
        taskFormError:false
    }

    const [state,dispatch]=useReducer(TasksReducer,initialState);
    
    const saveNewTask = (taskName)=>{
        dispatch({
            type:SAVE_TASK_NAME,
            payload:taskName
        })
    }

    const setActualTasks = (activeProject)=>{
        dispatch({
            type:READ_ACTUAL_TASKS,
            payload:activeProject
        })
    }

    
    const deleteProject = (id)=>{
        dispatch({
            type:DELETE_TASK,
            payload:id
        })

    }

    const changeState = (task)=>{
        dispatch({
            type:CHANGE_TASK_STATE,
            payload:task
        })
    }

    const getActualTask = (task)=>{

        dispatch({
            type:GET_ACTUAL_TASK,
            payload:task
        })

    }

    const editTask = (task)=>{
        dispatch({
            type:EDIT_TASK,
            payload:task
        })
    }

    const formError = ()=>{
        dispatch({
            type:TASK_FORM_ERROR
        })

    }


    return ( 
        <TasksContext.Provider
            value={{
                tasks:state.tasks,
                project:state.project,
                actualTasks:state.actualTasks,
                actualTask:state.actualTask,
                taskFormError:state.taskFormError,
                saveNewTask,
                setActualTasks,
                deleteProject,
                changeState,
                getActualTask,
                editTask,
                formError
            }}
        >


            {props.children}
        </TasksContext.Provider>
     );
}
 
export default TasksProvider;