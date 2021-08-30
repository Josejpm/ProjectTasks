import React, { Fragment,useContext,useEffect } from 'react';
import './task-list.scss'
import {ProjectsContext} from '../../context/projects/ProjectContext';
import {TasksContext} from '../../context/tasks/TasksContext';
import Task from '../task/task';

const TasksList = () => {

    const {activeProject} = useContext(ProjectsContext);
    const {tasks,actualTasks,setActualTasks} = useContext(TasksContext)

    useEffect(() => {
        setActualTasks(activeProject.id);
        // eslint-disable-next-line
    }, [activeProject,tasks])
    return ( 
        <Fragment>
            {activeProject.name === '' 
                ? null
                : <h2>Proyecto: {activeProject.name} </h2>
            }
            
            <ul className="task-list" >
                {actualTasks.length === 0 
                ?   <h2>No hay tareas en tu proyecto</h2>
                
                :   actualTasks.map(task=>(
                        <Task
                            key={task.id}
                            task={task}
                        />
                    ))
                    
                }
            </ul>
        </Fragment>
     );
}
 
export default TasksList;