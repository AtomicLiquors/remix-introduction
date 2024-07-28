import { useEffect, useState } from "react";
import Skill from "./Skill";
import { skillData } from "./skillData";

export default function Skills() {

    return <>
        {skillData.map((skill, idx) => (
            <Skill key={idx} title={skill.title} content={skill.content}/>
        ))}
        <Skill title={"sample"} content={"sample"}/>
    </>;
}