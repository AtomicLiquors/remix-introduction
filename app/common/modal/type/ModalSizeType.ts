export const ModalSizes = {
    FULL: "full",
    SMALL: "small",
} as const;

export type ModalSizesType =
    (typeof ModalSizes)[keyof typeof ModalSizes];