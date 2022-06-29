import { useState, useEffect } from 'react';
import { getTodoItems, addNewTodoItem, updateTodoItem } from '../lib/firebase';
const STORAGE_KEY = 'itss-todo';

function useStorage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getTodoItems().then(result => setItems(result))
  }, []);
  const putItems = items => {
    let newItem = items.pop()
    addNewTodoItem(newItem).then(result => setItems([...items, { ...newItem, key: result }]))
  };

  const clearItems = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    setItems([]);

  };
  const updateItem = (id) => {
    let uI = undefined
    let tmpItems = items.map(item => {
      if (item.key == id) {
        item.done = !item.done
        uI = item
      }
      return item
    })
    updateTodoItem(uI)
    setItems([...tmpItems])
  }

  return [items, putItems, updateItem, clearItems];
}

export default useStorage;