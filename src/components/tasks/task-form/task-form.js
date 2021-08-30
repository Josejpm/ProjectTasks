import React,{useState,useContext,useEffect} from 'react'
import {v4} from 'uuid'
import './task-form.scss'

import {TasksContext} from '../../context/tasks/TasksContext'
import {ProjectsContext} from '../../context/projects/ProjectContext'


const TaskForm = () => {

    const {actualTask,taskFormError,saveNewTask,editTask,formError} = useContext(TasksContext);
    const {activeProject} = useContext(ProjectsContext);

    const [task,setTask] = useState({
        name:''
    });
    const {name} = task;

    useEffect(() => {
        if (actualTask !== null){
            setTask(actualTask)
        }else(
            setTask({
                name:''
            })
        )
    }, [actualTask])

    const readForm = (e)=>{
        setTask({
            ...task,
            name:e.target.value
        })

    }

    const saveForm  =(e)=>{
        e.preventDefault();

        if(name.trim() === ''){
            formError();
            return
        }

        if (actualTask === null){
            const newTask = {
                name,
                project:activeProject.id,
                id:v4(),
                state:false
            }
            saveNewTask(newTask);
            setTask({name:''})
        } else {
            editTask(task);
            setTask({name:''})
        }
    }
        
    return ( 
        <div className="form">
            
                {taskFormError ? <p className=" message error task " > La tarea no puede estar vacia </p> : null }

                <form onSubmit={(e)=>saveForm(e)}>
                    <div className="input-container">
                        <input 
                            type="text" 
                            className="input-text"
                            placeholder="Nombre de la tarea"
                            name="name"
                            value={name}
                            onChange={readForm}
                        />
                    </div>
                    <div className="input-container">
                        <input 
                            type="submit" 
                            className="btn btn-primary btn-block"
                            value={actualTask ? 'Editar tarea' : 'Agregar tarea'  }
                        />
                    </div>
                </form> 
        </div>
     );
}
 
export default TaskForm;