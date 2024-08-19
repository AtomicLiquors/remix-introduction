import {
  forwardRef,
  ReactNode,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import Center from "@/common/components/atoms/Center";

interface ModalProps {
  children: ReactNode;
  closeBtn?: boolean;
}

export const Modal = forwardRef(function Modal(
  { children, closeBtn }: ModalProps,
  ref
) {
  const modalRef = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => ({
    openModal() {
      modalRef.current?.showModal();
    },
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
    <dialog
      ref={modalRef}
      className="modal rounded w-full h-full md:w-5/6 md:h-5/6"
    >
      <div className="flex flex-col justify-between h-full">
        <div className="modal-box m-5 h-full">{children}</div>
        {closeBtn && (
          <form method="dialog" className="modal-backdrop p-5 border-t">
            <Center>
              <button className="border rounded pl-3 pr-3">CLOSE</button>
            </Center>
          </form>
        )}
      </div>
    </dialog>
  );
});
