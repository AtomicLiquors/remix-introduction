import { RefObject, useEffect } from "react";

export default function useOutsideClickHandler(ref: RefObject<HTMLElement>, callback: CallableFunction) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event: MouseEvent) {
        /*
        if (ref.current instanceof Node && !ref.current.contains(event.target)) {
          callback();
        }
        */
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }