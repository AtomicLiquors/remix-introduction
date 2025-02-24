import { useEffect, useRef } from "react";

function useModal(isOpen: boolean, closeModal: () => void) {
const modalRef = useRef<HTMLDialogElement>(null);

useEffect(() => {
    const modal = modalRef.current;
    if (!modal) return;

    const handleClickOutside = (event: MouseEvent) => {
    if (event.target === modal) {
        const rect = modal.getBoundingClientRect();
        const isClickedOutside =
        event.clientX >= rect.right ||
        event.clientY >= rect.bottom ||
        event.clientX <= rect.left ||
        event.clientY <= rect.top;

        if (isClickedOutside) closeModal();
    }
    };

    modal.addEventListener("mousedown", handleClickOutside);
    return () => {
    modal.removeEventListener("mousedown", handleClickOutside);
    };
}, [closeModal]);

useEffect(() => {
    const modal = modalRef.current;
    if (modal) {
    isOpen ? modal.showModal() : modal.close();
    }
}, [isOpen]);

return modalRef;
}

export default useModal;
