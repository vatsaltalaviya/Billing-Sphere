import { useEffect } from "react";

const useKeyCombo = (key, modifiers = {}, callback) => {
  useEffect(() => {
    const handler = (e) => {
      const hasModifiers = Object.keys(modifiers).length > 0;

      const isMatch = hasModifiers
        ? e.key === key &&
          (!!modifiers.ctrl === e.ctrlKey) &&
          (!!modifiers.alt === e.altKey) &&
          (!!modifiers.shift === e.shiftKey)
        : e.key === key;

      if (isMatch) {
        e.preventDefault(); // optional: prevent default behavior
        callback();
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [key, modifiers, callback]);
};

export default useKeyCombo;
