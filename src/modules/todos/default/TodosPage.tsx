import { Suspense } from 'react';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import { getDefaultTodosModule } from '.';
import { Todos } from './Todos';

export const TodosPage = () => {
  return (
    <DynamicModuleLoader modules={[getDefaultTodosModule()]} strictMode>
      <Suspense fallback="loading">
        <Todos />
      </Suspense>
    </DynamicModuleLoader>
  );
};

TodosPage.$ = Symbol('TodosPage');
