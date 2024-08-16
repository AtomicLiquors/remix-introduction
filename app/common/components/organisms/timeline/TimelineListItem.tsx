import FontAwesome, { FAType, FONT_AWESOME_TYPES } from "@/common/icon/FontAwesome";

interface TimelineListItemProps {
  children: React.ReactNode;
}

export default function TimelineListItem({
  children
}: TimelineListItemProps): React.ReactElement {
  return (
    <li className="mb-5 ms-6">
      {children}
    </li>
  );
}
