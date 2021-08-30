import {SAVE_TASK_NAME,
        READ_ACTUAL_TASKS,
        DELETE_TASK,
        CHANGE_TASK_STATE,
        GET_ACTUAL_TASK,
        EDIT_TASK,
        TASK_FORM_ERROR
        } from '../../types/types'


const TasksReducer = (state,action)=>{

    switch(action.type){
        case SAVE_TASK_NAME : 
            return {
                ...state,
                taskFormError:false,
                tasks: [...state.tasks,action.payload]
            }
        case READ_ACTUAL_TASKS:
            return {
                ...state,
                actualTasks:state.tasks.filter(task=>(Object.values(task).includes(action.payload)))
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks:state.tasks.filter(task=>(task.id !== action.payload))
            }
        case CHANGE_TASK_STATE:

            return {
                ...state,
                tasks: state.tasks.map(task=>(
                    task.id === action.payload.id ? action.payload : task
                ))
            }

        case GET_ACTUAL_TASK:
            return {
                ...state,
                actualTask:action.payload
            }
        
        case EDIT_TASK:
            return{
                ...state,
                actualTask:null,
                taskFormError:false,
                tasks: state.tasks.map(task=>(
                    task.id === action.payload.id ? action.payload : task  
                ))
            }
        
        case TASK_FORM_ERROR:
            return{
                ...state,
                taskFormError: true
            }

        default:
            return state
    }


}

export default TasksReducer