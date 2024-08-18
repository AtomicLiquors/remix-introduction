import React, { useEffect, useRef } from "react";

export default function Modal() {
  // Use useRef with the correct type for the dialog element
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const modal = modalRef.current;

    if (modal) {
      const handleClickOutside = (event: MouseEvent) => {
        // Ensure that event.target is of type HTMLDialogElement
        if (event.target === modal) {
          modal.close();
        }
      };

      modal.addEventListener("click", handleClickOutside);

      // Cleanup event listener on component unmount
      return () => {
        modal.removeEventListener("click", handleClickOutside);
      };
    }
  }, []);

  return (
    <div>
      <button
        className="btn"
        onClick={() => modalRef.current?.showModal()}
      >
        open modal
      </button>
      <dialog ref={modalRef} id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
