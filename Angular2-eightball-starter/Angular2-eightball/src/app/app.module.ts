import { AppComponent }  from './app.component';
import { EightballAnswerComponent }  from './eightball-answer.component';
import { EightballService } from './eightball.service';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


const appRoutes: Routes = [
  { path: 'posts', component: EightballAnswerComponent }
];

@NgModule({
  imports:      [ BrowserModule, HttpClientModule,
                RouterModule.forRoot(appRoutes) ],
  declarations: [AppComponent, EightballAnswerComponent ],
  providers:    [EightballService ],
  bootstrap:    [ AppComponent]
})

export class AppModule { }
