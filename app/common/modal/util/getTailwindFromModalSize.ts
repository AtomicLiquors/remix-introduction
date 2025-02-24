import { ModalSize, ModalSizeType } from "../type/ModalSizeType";

const tailwindForModalSize: Record<ModalSizeType, string> = {
    [ModalSize.FULL]: "w-full h-full md:w-5/6 md:h-5/6",
    [ModalSize.SMALL]: "w-auto md:w-3/6 h-128"
}


export const getTailwindFromModalsize = (modalSize: ModalSizeType) => {
    return tailwindForModalSize[modalSize];
}