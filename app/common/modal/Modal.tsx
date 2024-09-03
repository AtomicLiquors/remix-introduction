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
  closeModal: () => void;
}

export function Modal({ children, closeBtn, isModalOpen, closeModal }: ModalProps){
  
  const modalRef = useRef<HTMLDialogElement>(null);
  const modal = modalRef.current;

  useEffect(() => {
    const modal = modalRef.current;

    if (modal) {
      const handleClickOutside = (event: MouseEvent) => {
        if (event.target === modal){
          
          /* getBoundingclientRect는 event 발생 시에 지정해줘야 한다. (스크롤바 유무가 반영되는 것 같다.) */
          const rect = modal.getBoundingClientRect();
          const isClickedOutside =
          event.clientX >= rect.right ||
          event.clientY >= rect.bottom ||
          event.clientX <= rect.left ||
          event.clientY <= rect.top;

          if (isClickedOutside)
            closeModal();
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
          <div className="modal-backdrop p-5 border-t">
            <Center>
              <button onClick={closeModal} className="border rounded pl-3 pr-3">닫기</button>
            </Center> 
          </div>
        )}
      </div>
    </dialog>
  );
};
