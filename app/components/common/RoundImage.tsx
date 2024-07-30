interface RoundImageProps {
    src: string,
    className?: string,
}


const RoundImage: React.FC<RoundImageProps> = ({src, className}) => {
    return <img src={src} className={`rounded-full ${className}`}/>
}

export default RoundImage;