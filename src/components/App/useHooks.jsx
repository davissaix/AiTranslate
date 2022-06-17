import { useState, useEffect, useLayoutEffect } from "react";


const useHooks = () => {

 

  const [searchValue, setSearchValue] = useState("");




  
  let searchedTodos = [];
  if (searchedTodos.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }
  return {
        
        searchedTodos,
        searchValue,
        setSearchValue,
        
      }
}

export { useHooks }