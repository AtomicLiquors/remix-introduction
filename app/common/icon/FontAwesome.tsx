
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy, faGraduationCap, faCreditCard, faGlobe } from '@fortawesome/free-solid-svg-icons'

interface FontAwesomeProps {
  icon: FAType,
  color: TCType
}

export const FONT_AWESOME_TYPES = {
  AWARD: faTrophy,
  EDUCATION: faGraduationCap,
  WORLD: faGlobe,
  CARD: faCreditCard,
} as const;
export type FAType = (typeof FONT_AWESOME_TYPES)[keyof typeof FONT_AWESOME_TYPES];

export const TAILWIND_COLOR_TYPES = {
  AWARD: "text-yellow-500" ,
  EDUCATION: "text-blue-500",
  WORLD: "text-blue-500" ,
  CARD: "text-dark-500" ,
} as const;

export type TCType = (typeof TAILWIND_COLOR_TYPES)[keyof typeof TAILWIND_COLOR_TYPES];

export default function FontAwesome({
  icon, color
}: FontAwesomeProps) {
  return (
    <FontAwesomeIcon className={color} icon={icon} transform="shrink-6"/>
  );
}
