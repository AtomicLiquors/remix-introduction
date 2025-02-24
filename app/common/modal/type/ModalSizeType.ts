export const ModalSize = {
    FULL: "full",
    SMALL: "small",
} as const;

export type ModalSizeType =
    (typeof ModalSize)[keyof typeof ModalSize];