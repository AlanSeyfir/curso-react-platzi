import { useContext } from 'react';
import './TodoCounter.css';
import { TodoContext } from '../../Context/TodoContext/TodoContext';
function TodoCounter() {
  const { loading, completedTodos, totalTodos } = useContext(TodoContext);
  return (
    <>
      {loading && <h2>Cargando los TODOs...</h2>}

      {completedTodos !== totalTodos ? (
        <h1 className="TodoCounter">
          Has completado <span>{completedTodos}</span> de{' '}
          <span>{totalTodos}</span> TODOs
        </h1>
      ) : (
        <h2 className="TodoCounter">
          Felicitaciones! Completaste tus TODOs 🥳 🎉🎉
        </h2>
      )}
    </>
  );
}

export { TodoCounter };
