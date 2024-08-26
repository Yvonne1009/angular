import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  list:Array<string>=['Angular','React','Vue']

  getList(){
    return this.list
  }

  addList(str:string){
    this.list.push(str)
  }
}
