import { useState } from "react";
import Avatar from "./Avatar";
import { avatarSources } from "@/paths/avatarPaths";

interface AvatarSelectorProps {
  handleAvatarChange?: (arg0: number) => void;
  defaultAvatarId?: number;
}

export default function AvatarSelector({handleAvatarChange, defaultAvatarId}:AvatarSelectorProps) {
  const [avatarId, setAvatarId] = useState<number>(defaultAvatarId || 0);
  const [isAvatarSelectorOpen, setIsAvatarSelectorOpen] = useState<boolean>(false);

  const handleAvatarSelection = (idx: number) => {
    setAvatarId(idx);
    setIsAvatarSelectorOpen(false);
    handleAvatarChange && handleAvatarChange(idx);
  }

  return (
    <div>
      <Avatar avatarId={avatarId} className="relative cursor-pointer" onClick={() => setIsAvatarSelectorOpen(!isAvatarSelectorOpen)} />
      {isAvatarSelectorOpen &&
      <div className="absolute flex flex-wrap gap-2 p-1 bg-gray-200 rounded overflow-clip mr-4">
        {avatarSources.map((_, idx) => (
          <Avatar className="cursor-pointer" key={idx} avatarId={idx} onClick={() => handleAvatarSelection(idx)}/>
        ))}
      </div>}
    </div>
  );
}
