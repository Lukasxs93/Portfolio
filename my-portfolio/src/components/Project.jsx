import { useContext } from "react";

import { ProjectContext } from "../context/ProjectContext";
function Project() {
    const projects = useContext(ProjectContext)
    console.log(projects);
    return ( <div className="projectContainer">{
       projects[0].map(project=>{
        return(
          project.Index  % 2 === 0  ? 
             <div className="project" style={{alignSelf:'flex-end'}}>
              <h2>{project.Name}</h2>
              <div className="descriptionContainer" style={{flexDirection:'row-reverse'}} >
                <span>{project.Description}</span>
                <a href={project.url} target='blank'><img src={project.img} alt="preview" className="projectImage"/></a>
              </div>
              
              </div>  
              : 
            
            <div className="project" style={{alignSelf:'flex-start'}}>
              <h2>{project.Name}</h2>
              <div className="descriptionContainer"  >
                <span >{project.Description}</span>
                <a href={project.url} target='blank'><img src={project.img} alt="preview" className="projectImage"/></a>
              </div>
              
            </div>)
       
       })
    }</div>
     );
}

export default Project;