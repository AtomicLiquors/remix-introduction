import Charts from "@/charts/Charts"
import Skill from "@/skills/Skill";
import Skills from "@/skills/Skills";

export default function Index() {
    return (
      <div>
      <p id="index-page"  className="text-3xl font-bold underline"> 
                <br />
        Java & JavaScript 개발자
        Powered By Remix
      </p>
      <Skills/>
      </div>
    );
  }