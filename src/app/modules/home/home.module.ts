import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ContentWrapperModule } from '../../components/compositions/content-wrapper/content-wrapper.module';
import {  HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ContentWrapperModule,
    
  ]
})
export class HomeModule { }
