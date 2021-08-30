import React,{useContext} from 'react'
import {TasksContext} from '../../context/tasks/TasksContext'
import './task.scss'


const Task = ({task}) => {

    const {deleteProject,changeState,getActualTask} = useContext(TasksContext)

    const changeTasksState = (task)=>{
        task.state ? task.state=false : task.state=true
        changeState(task)
    }

    return ( 

        <li className="task shadow" >
            <p>{task.name}</p>
            <div className="actions">
                <button className="btn btn-primary" onClick={()=>deleteProject(task.id)} >
                    Eliminar       
                </button>
                <button className="btn btn-primary" onClick={()=>getActualTask(task)} >
                    Editar       
                </button>
            </div>
            
            <div className="state">
                {task.state 
                    ? ( <button
                            type="button"
                            className="complete message"
                            onClick={()=>changeTasksState(task)}
                        >Completo
                        </button> ) 
                    : (<button
                            type="button"
                            className="incomplete message"
                            onClick={()=>changeTasksState(task)}
                        >Incompleto
                    </button>)
                }
            </div>
        </li>

     );
}
 
export default Task;