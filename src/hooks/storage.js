import { useState, useEffect } from 'react';
import { getTodoItems } from '../lib/firebase';
const STORAGE_KEY = 'itss-todo';

function useStorage() {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    getTodoItems().then(result => setItems(result))
  }, []);

  const putItems = items => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    setItems  (items);
  };

  const clearItems = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    setItems([]);
    
  };

  return [items, putItems, clearItems];
}

export default useStorage;