import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { NavbarModule } from '../../components/sections/navbar/navbar.module';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NavbarModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
