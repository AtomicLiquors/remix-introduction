import {
  ReactNode,
  useEffect,
  useRef,
} from "react";
import Center from "@/common/components/atoms/Center";

interface ModalProps {
  children: ReactNode;
  closeBtn?: boolean;
  isModalOpen: boolean;
  closeCurrModal: () => void;
}

export function Modal({ children, closeBtn, isModalOpen, closeCurrModal }: ModalProps){
  
  const modalRef = useRef<HTMLDialogElement>(null);
  const modal = modalRef.current;

  useEffect(() => {
    const modal = modalRef.current;

    if (modal) {
      const handleClickOutside = (event: MouseEvent) => {
        if (event.target === modal) {
          closeCurrModal();
        }
      };

      modal.addEventListener("mousedown", handleClickOutside);

      return () => {
        modal.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, []);

  useEffect(() => {
    if(isModalOpen){
      modal?.showModal();
    }else{
      modal?.close();
    }
  }, [isModalOpen])

  return (
    <dialog
      ref={modalRef}
      className="modal rounded w-full h-full md:w-5/6 md:h-5/6"
    >
      <div className="flex flex-col justify-between h-full">
        <div className="modal-box sm:m-5 h-full">{children}</div>
        {closeBtn && (
          <form method="dialog" className="modal-backdrop p-5 border-t">
            <Center>
              <button className="border rounded pl-3 pr-3">닫기</button>
            </Center>
          </form>
        )}
      </div>
    </dialog>
  );
};
