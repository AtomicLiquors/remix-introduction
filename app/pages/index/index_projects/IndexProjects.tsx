import { projectData } from "./projectData";
import Project from "./Project";

export default function IndexProjects() {
  return (
    <>
      {projectData &&
        projectData.map((proj, idx) => <Project key={idx} {...proj}/>)}
    </>
  );
}
