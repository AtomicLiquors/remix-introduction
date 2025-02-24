import Center from "@/common/components/atoms/Center";
import useModal from "./hook/useModal.hook";
import { ModalProps } from "./type/ModalProps";
import { getTailwindFromModalsize } from "./util/getTailwindFromModalSize";

export function Modal({ children, closeBtn, isModalOpen, modalSize, closeModal }: ModalProps){
  
  const modalRef = useModal(isModalOpen, closeModal);

  return (
    <dialog
      ref={modalRef}
      className={`modal rounded ${getTailwindFromModalsize(modalSize)}}`}
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
