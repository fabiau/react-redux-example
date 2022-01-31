import { useContext } from 'react';
import { ComponentsContext } from './context/ComponentsContext';
import { Todos } from './modules/todos/default/Todos';
import './App.css';

function App() {
  const componentsContext = useContext(ComponentsContext);
  const TodosComponent = componentsContext.get(Todos.$) ?? Todos;

  return (
    <div className="app">
      <TodosComponent />
    </div>
  );
}

export default App;
