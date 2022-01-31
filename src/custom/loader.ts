import { api } from '../api';
import { Todos } from '../modules/todos/default/Todos';

async function loadCrazyTodosModule() {
  const { CrazyTodos } = await import('./modules/crazy-todos/CrazyTodos');
  api.componentsContainer.register(Todos.$, CrazyTodos);
}

async function unloadCrazyTodosModule() {
  api.componentsContainer.unregister(Todos.$);
}

export function customizationLoader() {
  globalThis.loadCrazyTodosModule = loadCrazyTodosModule;
  globalThis.unloadCrazyTodosModule = unloadCrazyTodosModule;
}

export default customizationLoader;
