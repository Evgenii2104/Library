import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageServices {
  constructor() {}

  set<V>(key: string, value: V): void {
    const valueStr = JSON.stringify(value);
    localStorage.setItem(key, valueStr);
  }

  get<V>(key: string): V | null {
    const valueStr = localStorage.getItem(key);
    try {
      // @ts-ignore
      const value = JSON.parse(valueStr);
      return value;
    } catch (error) {
      return null;
    }
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }
}
