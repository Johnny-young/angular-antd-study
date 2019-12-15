import { Injectable } from "@angular/core"

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {
  constructor() {}

  get<T>(key: string) {
    return JSON.parse(localStorage.getItem(key)) as T
  }

  getList<T>(key: string): T[] {
    let data =localStorage.getItem(key)
    return data ? JSON.parse(data) as T[] : []
  }

  set<T>(key: string, value: any) {
    if(!value) {
      return
    }
    localStorage.setItem(key, JSON.stringify(value)) 
  }
}