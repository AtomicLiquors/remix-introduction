import { projectData } from "./projectData";
import Project from "./Project";
import IndexItemTitles from "../IndexItemTitles";

export default function IndexProjects() {
  return (
    <div>
      <IndexItemTitles title="프로젝트"/>
      {projectData &&
        projectData.map((proj, idx) => <Project key={idx} {...proj}/>)}
    </div>
  );
}
