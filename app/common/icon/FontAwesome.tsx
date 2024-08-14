
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faTrophy, faBellSlash, faGraduationCap, faLink, faCreditCard, faGlobe, faSliders, faHashtag } from '@fortawesome/free-solid-svg-icons'

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
