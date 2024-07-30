import { ProjectProps } from "./projectType";

const Project: React.FC<ProjectProps> = (proj) => {
    return (
      <>
        <p>{proj.title}</p>
      </>
    );
  }
  
  export default Project