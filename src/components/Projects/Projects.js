import React from 'react';
import './Projects.css';

const Projects=React.forwardRef((props,ref)=>{
    return(
    <>
    <div ref={ref} className="projectsContainer">
        Projects
    </div>
    </>
    );
});

export default Projects;