import Education from "./Education";
import { educationData } from "./educationData";

export default function IndexEducations() {
  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700">   
      {educationData &&
        educationData.map((edu, idx) => <Education key={idx} {...edu} />)}
    </ol>
  );
}
