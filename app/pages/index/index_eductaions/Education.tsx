import { EducationProps } from "./educationType"

const Education: React.FC<EducationProps> = (edu) => {
    return( 
    <div>
        <h2>{edu.title}</h2>
        <p>{edu.startDate.toDateString()} - {edu.endDate.toDateString()} ({edu.time}시간), {edu.location}</p>
        <p>
           {edu.content.map((line) => <p>{line}</p>)}
        </p>
    </div>);
}

export default Education;