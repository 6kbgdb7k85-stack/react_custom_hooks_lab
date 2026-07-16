import { useEffect, useState } from "react";

/**
 *
 * @param {string} key
 * @param {string} initialValue
 */

export function useLocalStorage(key, initialValue = null) {
  const [value, setValue] = useState(localStorage.getItem(key) || initialValue);

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value]);

  return [ value, setValue ];
}
