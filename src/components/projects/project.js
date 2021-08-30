import React from 'react';
import { useContext } from 'react';
import {ProjectsContext} from '../context/projects/ProjectContext'
const Project = ({project}) => {

    const {selectProject} = useContext(ProjectsContext)

    return ( 

        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={()=>selectProject(project)}
            >
                {project.name}
            </button>
        </li>

     );
}
 
export default Project;