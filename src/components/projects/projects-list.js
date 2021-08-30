import React, { useContext } from 'react'
import Project from './project'
import {ProjectsContext} from '../context/projects/ProjectContext'
const ProjectList = () => {
    
    const{projects}=useContext(ProjectsContext)

    // const projects = [
    //     {name:'Jose',id:1},
    //     {name:'Francisco',id:2},
    //     {name:'Rangel',id:3},
    //     {name:'Perez',id:4}
    // ];
    
    return ( 
        <ul className = 'projects-list'> 

            {projects.length === 0 
                ? <p>Crea un proyecto para empezar</p> 
                :  projects.map(project=>(
                    <Project
                        key={project.id}
                        project={project}
                    />
                ))
            }

            

        </ul>


     );
}
 
export default ProjectList;