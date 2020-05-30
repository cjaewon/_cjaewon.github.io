import { useEffect } from "react";

export default function useScroll(callback: (e: Event) => void) {
  useEffect(() => {
    window.addEventListener('scroll', callback);

    return () => window.removeEventListener('scroll', callback);
  });
};