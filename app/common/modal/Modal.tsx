import { forwardRef, ReactNode, useEffect, useImperativeHandle, useRef } from "react";
import Center from "../components/atoms/Center";

interface ModalProps {
  children: ReactNode;
}

export const Modal = forwardRef(function Modal({children}: ModalProps, ref) {
  
  const modalRef = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => ({
      openModal() {
        modalRef.current?.showModal();
      }
    
  }));

  useEffect(() => {
    const modal = modalRef.current;

    if (modal) {
      const handleClickOutside = (event: MouseEvent) => {
        if (event.target === modal) {
          modal.close();
        }
      };

      modal.addEventListener("click", handleClickOutside);

      return () => {
        modal.removeEventListener("click", handleClickOutside);
      };
    }
  }, []);

  return (
    <div>
      <dialog ref={modalRef} id="my_modal_2" className="modal rounded">
        <div className="modal-box m-5">
          {children}
        </div>
        <form method="dialog" className="modal-backdrop">
          <Center>
            <button>x</button>
          </Center>
        </form>
      </dialog>
    </div>
  );
});
