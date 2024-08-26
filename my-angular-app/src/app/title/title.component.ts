import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {ListService} from '../serves/list.service'

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  constructor(private listService :ListService) { }
  @Input()
  title?:string

  @Output() addList = new EventEmitter()

  list: Array<string>  | undefined

  addBtnFun(){
    this.addList.emit('Vue')
  }

  ngOnCharges() {
    console.log(this.title)
    console.log('ngOnCharges')
  }

  ngOnInit(): void {
    console.log('ngOnInit')
    this.list = this.listService.getList()
  }
   ngDoCheck(){
     console.log('ngDoCheck')
   }
   ngAfterContentInit(): void {
     console.log('ngAfterContentInit');
   }

   ngAfterContentChecked(): void {
     console.log('ngAfterContentChecked');
   }

  ngAfterViewInit(): void {
  console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}
