import { SkillProps } from "./skillType";

export default function Skill({title, content}: SkillProps) {
    return <><p>{title}</p><p>{content}</p></>;
}