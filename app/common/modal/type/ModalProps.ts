import { ReactNode } from "react";
import { ModalSizeType } from "./ModalSizeType";

export interface ModalProps {
    children: ReactNode;
    closeBtn?: boolean;
    isModalOpen: boolean;
    modalSize: ModalSizeType;
    closeModal: () => void;
}