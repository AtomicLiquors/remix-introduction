import { useState } from "react";
import Avatar from "./Avatar";
import { avatarSources } from "./avatarLinks";

interface AvatarSelectorProps {
  handleAvatarChange?: (arg0: number) => void;
}

export default function AvatarSelector({handleAvatarChange}:AvatarSelectorProps) {
  const [avatarId, setAvatarId] = useState<number>(0);
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
      <div className="absolute flex gap-2 p-1 bg-gray-200 rounded">
        {avatarSources.map((_, idx) => (
          <Avatar className="cursor-pointer" key={idx} avatarId={idx} onClick={() => handleAvatarSelection(idx)}/>
        ))}
      </div>}
    </div>
  );
}
