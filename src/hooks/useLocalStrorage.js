"use client"

const useLocalStorage = () => {
  const getItem = (key) => {
    if (typeof window == 'undefined') {
      return null
     }
     return window.localStorage.getItem(key);
  }

  const setItem = (key, value) => {
    if (typeof window == 'undefined') {
      return null
     }
     return window.localStorage.setItem(key, value);
  }

  const removeItem = (key) => {
    if (typeof window == 'undefined') {
      return null
     }
     return window.localStorage.removeItem(key);
  }

  const removeAll = () => {
    if (typeof window == 'undefined') {
      return null
     }
     return window.localStorage.clear();
  }

  return { getItem, setItem, removeItem, removeAll };
};

export default useLocalStorage;