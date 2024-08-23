import { avatarSourcePrefix, avatarSources } from "./avatarLinks";

interface AvatarProps {
    avatarId: number;
    className?: string;
    onClick?: () => void;
}

export default function Avatar({avatarId, className, onClick}: AvatarProps) {
  return <img src={avatarSourcePrefix + avatarSources[avatarId]} className={`${className} rounded-full h-10 w-10 bg-gray-500 relative`} onClick={onClick}/>
}
