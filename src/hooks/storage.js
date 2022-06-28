import { useState, useEffect } from 'react';
import { getTodoItems,addNewTodoItem } from '../lib/firebase';
const STORAGE_KEY = 'itss-todo';

function useStorage() {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    getTodoItems().then(result => setItems(result))
  }, []);
  const putItems = items => {
    let newItem = items.pop()
    addNewTodoItem(items[items.length-1]).then(result => setItems([...items,{...newItem,key:result}]))
  };

  const clearItems = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    setItems([]);
    
  };

  return [items, putItems, clearItems];
}

export default useStorage;