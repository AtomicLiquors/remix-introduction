import Center from "@/common/components/atoms/Center";
import { ReactNode } from "react";

interface BoardItemLayoutProps {
  children: ReactNode;
}

export default function BoardItemFirstBlock({
  children,
}: BoardItemLayoutProps) {
  return (
    <Center className="flex-none min-w-16 sm:min-w-24" flex flexCol>
      {children}
    </Center>
  );
}
