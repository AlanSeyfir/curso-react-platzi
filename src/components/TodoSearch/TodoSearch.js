import { TodoContext } from '../../Context/TodoContext/TodoContext';
import './TodoSearch.css';
import React, { useContext } from 'react';

function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);
  return (
    <input
      placeholder="Cortar cebolla"
      className="TodoSearch"
      value={searchValue}
      onChange={(e) => {
        setSearchValue(e.target.value);
      }}
    />
  );
}

export { TodoSearch };
