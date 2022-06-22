import { useState, useEffect } from 'react';

import { addFirebaseItem, updateFirebaseItem, getFirebaseItems, clearFirebaseItem } from "../lib/firebase";

function useStorage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems();
  }, [items]);

  const getItems = async () => {
    const _items = await getFirebaseItems();
    setItems(_items);
  };

  const addItem = async item => {
    const newItem = { text: item.text, done: item.done };
    await addFirebaseItem(newItem);
    setItems([...items, newItem]);
  };

  const updateItem = async checked => {
    const changes = { done: !checked.done };
    await updateFirebaseItem(changes, checked.id);
    const newItems = items.map((item) => {
      if (item.id === checked.id) {
        item = { ...item, changes}
      }
      return item;
    })
    setItems(newItems);
  }

  const clearItems = () => {
    items.map(item => {
      clearFirebaseItem(item);
      return 0;
    })
    setItems([]);
  };

  return [items, addItem, updateItem, clearItems];
}

export default useStorage;

// import { useState, useEffect } from 'react';

// const STORAGE_KEY = 'itss-todo';

// function useStorage() {
//   const [items, setItems] = useState([]);
  
//   useEffect(() => {
//     const data = localStorage.getItem(STORAGE_KEY);
    
//     if (!data) {
//       localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
//     } else {
//       setItems(JSON.parse(data));
//     }
//   }, []);

//   const putItems = items => {
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
//     setItems  (items);
//   };

//   const clearItems = () => {
//     localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
//     setItems([]);
    
//   };

//   return [items, putItems, clearItems];
// }

// export default useStorage;