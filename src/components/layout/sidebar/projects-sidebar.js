import React from 'react';
import './projects-sidebar.scss'
import NewProject from '../../projects/new-project';
import ProjectList from '../../projects/projects-list';


const ProjectSidebar = () => {



    return ( 

        <aside>
            
            <h1>Projects <span>Tasks</span> </h1>

            <NewProject/>

            <div className="projects">
                <h2>Tus Proyectos</h2>
                <ProjectList/> 
            </div>



        </aside>

     );
}
 
export default ProjectSidebar;