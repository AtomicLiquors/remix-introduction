import { themeClasses } from "@/theme/theme";
import Center from "../common/general/atoms/Center";

interface IndexItemTitlesProps {
    title:string;
}
export default function IndexItemTitles({title}: IndexItemTitlesProps){
    return <Center className={`font-bold text-3xl ${themeClasses.text.primary}`}>{title}</Center>
}