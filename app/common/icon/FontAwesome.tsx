
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy, faGraduationCap, faCreditCard, faGlobe } from '@fortawesome/free-solid-svg-icons'

interface FontAwesomeProps {
  icon: FAType
}

export const FONT_AWESOME_TYPES = {
  AWARD: faTrophy,
  EDUCATION: faGraduationCap,
  WORLD: faGlobe,
  CARD: faCreditCard,
} as const;

export type FAType = (typeof FONT_AWESOME_TYPES)[keyof typeof FONT_AWESOME_TYPES];

export default function FontAwesome({
  icon
}: FontAwesomeProps) {
  return (
    <FontAwesomeIcon className="text-blue-500" icon={icon} transform="shrink-6"/>
  );
}
