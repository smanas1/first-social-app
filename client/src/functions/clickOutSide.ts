import { useEffect } from "react";

export default function OutSideClick(
  ref: React.RefObject<HTMLElement>,
  fun: { (): void; (): void }
) {
  useEffect(() => {
    const click = (e: MouseEvent) => {
      if (!ref.current || ref.current.contains(e.target as Node)) {
        return false;
      }
      fun();
    };
    document.addEventListener("click", click);
    return () => {
      document.removeEventListener("click", click);
    };
  }, [fun, ref]);
}
