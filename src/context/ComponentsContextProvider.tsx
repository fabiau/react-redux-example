import { useEffect, useState } from 'react';
import { ComponentMap } from './ComponentMap';
import { ComponentsContainer } from './componentsContainer';
import { ComponentsContext } from './ComponentsContext';

export interface IComponentsContextProviderProps
  extends React.PropsWithChildren<{}> {
  container: ComponentsContainer;
}

export const ComponentsContextProvider = (
  props: IComponentsContextProviderProps
) => {
  const [componentMap, setComponentMap] = useState<ComponentMap>(new Map([]));

  useEffect(() => {
    const unsubscribe = props.container.subscribe((values) =>
      setComponentMap(values)
    );
    return () => unsubscribe();
  }, [props.container]);

  return (
    <ComponentsContext.Provider value={componentMap}>
      {props.children}
    </ComponentsContext.Provider>
  );
};
