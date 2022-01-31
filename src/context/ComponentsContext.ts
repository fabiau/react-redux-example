import React from 'react';
import { ComponentMap } from './ComponentMap';

export const ComponentsContext = React.createContext<ComponentMap>(new Map([]));
