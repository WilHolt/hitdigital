import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDividerComponent } from './custom-divider.component';



@NgModule({
  declarations: [CustomDividerComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CustomDividerComponent
  ]
})
export class CustomDividerModule { }
