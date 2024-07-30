import Education from "./Education";
import { educationData } from "./educationData";

export default function IndexEducations() {
  return (
    <>
      {educationData &&
        educationData.map((edu) => <Education {...edu} />)}
    </>
  );
}
