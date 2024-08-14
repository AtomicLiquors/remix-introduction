import FontAwesome, { FAType, FONT_AWESOME_TYPES } from "@/common/icon/FontAwesome";

interface TimelineListItemProps {
  children: React.ReactNode;
  icon: FAType
}

export default function TimelineListItem({
  children, icon
}: TimelineListItemProps): React.ReactElement {
  return (
    <li className="mb-5 ms-6">
      <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
        <FontAwesome
          icon={icon}
        />
      </span>
      {children}
    </li>
  );
}
