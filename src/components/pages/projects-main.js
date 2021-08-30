import React, { Fragment,useContext } from 'react'
import {ProjectsContext} from '../context/projects/ProjectContext'
import ProjectSidebar from '../layout/sidebar/projects-sidebar'
import TopBar from '../layout/top-bar/top-bar';
import TaskForm from '../tasks/task-form/task-form';
import TasksList from '../tasks/task-list/tasks-list';

const Projects = () => {

    const{activeProject} = useContext(ProjectsContext);
    
    return ( 
        <div className="app-container">   
            <ProjectSidebar/> 

            <div className="main-section">
                <TopBar/>
            
                <main>
                    {activeProject === '' 
                        ? <h2>Crea o selecciona un proyecto para comenzar</h2> 
                        : <Fragment>
                            <TaskForm/>
                            <div className="tasks-container">
                                <TasksList/>
                            </div>
                          </Fragment>
                    }
                </main>

            </div>
        </div>
     );
}
 
export default Projects;