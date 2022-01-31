import { ComponentMap } from './ComponentMap';

export type ComponentMapObserver = (value: ComponentMap) => void;
export type ComponentMapUnsubscribe = () => void;

export class ComponentsContainer {
  private readonly _subscriptions: Set<ComponentMapObserver> = new Set([]);
  private _value: ComponentMap = new Map();

  public subscribe(observer: ComponentMapObserver): ComponentMapUnsubscribe {
    this._subscriptions.add(observer);
    setTimeout(() => observer(this._value));
    return () => this._subscriptions.delete(observer);
  }

  public register(key: symbol | string, component: React.FC) {
    this._value = new Map([...Array.from(this._value), [key, component]]);
    this._notify();
  }

  public unregister(key: symbol | string) {
    this._value = new Map([
      ...Array.from(this._value).filter(([existingKey]) => existingKey !== key),
    ]);
    this._notify();
  }

  private _notify() {
    for (const subscription of Array.from(this._subscriptions)) {
      subscription(this._value);
    }
  }
}

export const componentsContainer = new ComponentsContainer();
export default componentsContainer;
