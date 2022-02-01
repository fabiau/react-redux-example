import { useContext } from 'react';
import { ComponentsContext } from './context/ComponentsContext';
import { TodosPage } from './modules/todos/default/TodosPage';
import './App.css';

function App() {
  const componentsContext = useContext(ComponentsContext);
  const TodosComponent = componentsContext.get(TodosPage.$) ?? TodosPage;

  return (
    <div className="app">
      <TodosComponent />
    </div>
  );
}

export default App;
