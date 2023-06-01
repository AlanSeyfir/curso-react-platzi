import React, { useContext } from 'react';
import { CreateTodoButton } from '../components/CreateTodoButton/CreateTodoButton';
import { TodoCounter } from '../components/TodoCounter/TodoCounter';
import { TodoItem } from '../components/TodoItem/TodoItem';
import { TodoList } from '../components/TodoList/TodoList';
import { TodoSearch } from '../components/TodoSearch/TodoSearch';
import { TodosError } from '../components/TodosLoading/TodosError/TodosError';
import { EmptyTodos } from '../components/TodosLoading/EmptyTodos/EmptyTodos';
import { TodoLoading } from '../components/TodosLoading/TodosLoading';
import { TodoContext } from '../Context/TodoContext/TodoContext';
import { Modal } from '../components/Modal/Modal';
import { TodoForm } from '../components/TodoForm/TodoForm';

const AppUI = () => {
  const {
    loading,
    error,
    searchTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);
  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {loading && <TodoLoading />}
        {error && <TodosError />}
        {!loading && searchTodos.length === 1 && <EmptyTodos />}
        {searchTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      {openModal && (
        <Modal setOpenModal={setOpenModal}>
          <TodoForm />
        </Modal>
      )}
      <CreateTodoButton setOpenModal={setOpenModal} />
    </>
  );
};

export { AppUI };
