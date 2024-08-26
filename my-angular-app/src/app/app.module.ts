import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { TestPipe } from './pipes/test.pipe';
import { HomeComponent } from './home/home.component';
import { TitleComponent } from './title/title.component';

import {ListService} from './serves/list.service';
import { ListComponent } from './list/list.component'

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    TestPipe,
    HomeComponent,
    TitleComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
