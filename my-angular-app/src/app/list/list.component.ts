import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private routerInfo:ActivatedRoute) { }
  list:Array<any>=[];
  page:Number = 0
  ngOnInit(): void {
    this.page= this.routerInfo.snapshot.queryParams.page
    console.log(this.page)
    axios.get('https://www.fastmock.site/mock/22353e56ef21417c7f35f9e1843b0a1/api/getList').then(res=>{
      let list:Array<any> = res.data.data
      for (let index = 0; index < list.length; index++) {
        this.list.push(list.slice(index,index+=10))
        index += 9
      }
      console.log(this.list)
    })
  }

}
