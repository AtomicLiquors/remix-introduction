import { useState } from "react";
import Avatar from "./Avatar";
import { avatarSources } from "./avatarLinks";

export default function AvatarSelector() {
  const [avatarId, setAvatarId] = useState<number>(0);
  const [isAvatarSelectorOpen, setIsAvatarSelectorOpen] = useState<boolean>(false);

  const handleAvatarSelection = (idx: number) => {
    setAvatarId(idx);
    setIsAvatarSelectorOpen(false);
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
