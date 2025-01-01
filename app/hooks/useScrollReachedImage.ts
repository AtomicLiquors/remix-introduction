import { useState, useEffect, forwardRef } from "react";

export const useScrollReachedToImage = (
    ref: React.RefObject<HTMLImageElement>
    ) => {
    const [hasScrollReachedImage, setHasScrollReachedImage] = useState<boolean>(false);

    useEffect(() => {
        if (ref && typeof ref !== "function" && ref.current) {
            registerObserver(ref.current, setHasScrollReachedImage);
        }
    }, [ref]);

    const registerObserver = (
        imageElement: HTMLImageElement, 
        setIsImageVisible: React.Dispatch<React.SetStateAction<boolean>>
    ) => {
        const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
            
            if (!entry.isIntersecting) return; 
            setIsImageVisible(true);
            observer.disconnect();
            });
        },
        {
            threshold: 0.1, 
        }
        );

        observer.observe(imageElement);
    };

    return hasScrollReachedImage;
};
