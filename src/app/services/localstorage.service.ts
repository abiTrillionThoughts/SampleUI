import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }
  setLocalStorage(key:any, value:any) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  getLocalStorage(key:any) {
    if (key && localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key) || '{}');
    }
    return null;
  }

}
