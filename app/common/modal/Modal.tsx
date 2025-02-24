import {
  ReactNode,
  useEffect,
  useRef,
} from "react";
import Center from "@/common/components/atoms/Center";
import { ModalSizesType } from "./type/ModalSizeType";
import useModal from "./hook/useModal.hook";

interface ModalProps {
  children: ReactNode;
  closeBtn?: boolean;
  isModalOpen: boolean;
  modalSize: ModalSizesType;
  closeModal: () => void;
}

export function Modal({ children, closeBtn, isModalOpen, closeModal }: ModalProps){
  
  const modalRef = useModal(isModalOpen, closeModal);

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
