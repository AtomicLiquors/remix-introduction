interface AvatarProps {
    avatarId: number;
    className?: string;
    onClick?: () => void;
}

const avatarSourcePrefix = "/img/avatars/"

const avatarSources = new Map<number, string>([
    [0, "blank.png"],
    [1, "avatar(1).jfif"],
    [2, "avatar(2).jfif"],
    [3, "avatar(3).jfif"],
    [4, "avatar(4).jfif"],
    [5, "avatar(5).jfif"],
    [6, "avatar(6).jfif"]
])


export default function Avatar({avatarId, className, onClick}: AvatarProps) {
  return <img src={avatarSourcePrefix + avatarSources.get(avatarId)} className={`${className} rounded-full h-10 w-10 bg-gray-500`} onClick={onClick}/>

}
