import React, {useState} from 'react';
import './App.css';

function App() {

  // state hooks 'useState'

  const [newItem, setNewItem] = useState("");
  const [items, setItem] = useState([]);




  function addItem() {
    
    if(!newItem) {
      alert("Enter an item.")
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000), 
      value: newItem
    };

    setItem(oldList => [...oldList, item]);
    setNewItem("")
  }

    function deleteItem (id) {
      const newArray = items.filter(item => item.id !== id);
      console.log(id);
      setItem(newArray);
    }
  return (
    <div className="App">
      {/*1.Header*/ }
      <h1>Todo List App</h1>

      {/*2. input (input and button) */}
      <input type='text' placeholder='Add an item...'  value={newItem} onChange={e => setNewItem(e.target.value)}/>
      <button className='btn' onClick={() => addItem() }>Add</button>
      {/*3. List of item (unordered list with list item) */}
      <ul>
        {items.map(item => {
          return(
            <li key = {item.id}>{item.value} <button className='delete-button' onClick={ () => deleteItem(item.id)}>❌</button></li>
          )
        })}

      </ul>



    </div>
  );
}

export default App;
