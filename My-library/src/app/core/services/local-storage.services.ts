import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageServices<K extends string> {

  constructor() {}

  set<V>(key: K, value: V): void {
    const valueStr = JSON.stringify(value);
    localStorage.setItem(key, valueStr);
  }

  get<V>(key: K): V | null {
    const valueStr = localStorage.getItem(key);
    try {
      // @ts-ignore
      const value = JSON.parse(valueStr);
      return value;
    } catch (error) {
      return null;
    }
  }

  remove(key: K): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }
}
