import { api } from '../api';
import { TodosPage } from '../modules/todos/default/TodosPage';

async function loadCrazyTodosModule() {
  const { CrazyTodosPage } = await import(
    './modules/crazy-todos/CrazyTodosPage'
  );
  api.componentsContainer.register(TodosPage.$, CrazyTodosPage);
}

async function unloadCrazyTodosModule() {
  api.componentsContainer.unregister(TodosPage.$);
}

export function customizationLoader() {
  globalThis.loadCrazyTodosModule = loadCrazyTodosModule;
  globalThis.unloadCrazyTodosModule = unloadCrazyTodosModule;
}

export default customizationLoader;
