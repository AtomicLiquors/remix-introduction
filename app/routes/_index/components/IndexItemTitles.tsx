import Center from "@/common/components/atoms/Center";
import { themeClasses } from "@/theme/theme";

interface IndexItemTitlesProps {
    title:string;
}
export default function IndexItemTitles({title}: IndexItemTitlesProps){
    return <Center className={`font-bold text-3xl ${themeClasses.text.primary}`}>{title}</Center>
}