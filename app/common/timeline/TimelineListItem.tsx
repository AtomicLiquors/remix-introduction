import { ReactNode, ReactElement} from 'react';

interface TimelineListItemProps {
  children: ReactNode;
}

export default function TimelineListItem({
  children
}: TimelineListItemProps): ReactElement {
  return (
    <li className="mb-5 ms-6">
      {children}
    </li>
  );
}
