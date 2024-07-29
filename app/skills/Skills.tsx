import { useEffect, useState } from "react";
import Skill from "./Skill";
import { skillData } from "./skillData";

export default function Skills() {

    return <>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 content-center ">
            {skillData && skillData.map((skill, idx) => (
                <Skill key={idx} title={skill.title} content={skill.content}/>
            ))}
        </div>
    </>;
}