import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { HelloComponent } from '../app/hello/hello.component';
import { ListComponent } from '../app/list/list.component';

//路由配置
const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'home',
    component:HomeComponent,
    children:[
      {
        path:'list',
        component:ListComponent
      }
    ]
  },
  {
    path:'hello/:id:name',
    component:HelloComponent
  },
  //通配
  {
    path:'**',
    component:HelloComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
