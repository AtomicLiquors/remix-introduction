import { ReactNode, ReactElement} from 'react';

interface TimelineListItemProps {
  children: ReactNode;
  key: number;
}

export default function TimelineListItem({
  children, key
}: TimelineListItemProps): ReactElement {
  return (
    <li key={key} className="mb-5 sm:ms-6">
      {children}
    </li>
  );
}
