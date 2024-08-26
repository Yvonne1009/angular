import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import {ListService} from '../serves/list.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(private listService:ListService) { }

  title: string = '朝夕教育';

  @ViewChild('titleDOm') child: any;

  list: Array<string> = ['Angular', 'React'];

  ngOnInit(): void {
    // console.log(this.listService);
    this.list = this.listService.getList()
    console.log(this.list)
  }

  addNode(){
    // this.list?.push('Node')
    this.listService.addList('Node')
  }

  ngAfterViewInit(): void {
    console.log(this.child); // Check if child is defined here
  }

  addFun() {
      this.child.addBtnFun();
    }
  

  addListFun(str: string) {
    this.list.push(str);
  }

  page: number = 0;

  pageCharge() {
    this.page += 1;
  }

  titleCharge() {
    this.title = 'yvonne';
  }

}
