import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentWrapperComponent } from './content-wrapper.component';
import { CustomDividerModule } from '../../elements/custom-divider/custom-divider.module';



@NgModule({
  declarations: [ContentWrapperComponent],
  imports: [
    CommonModule,
    CustomDividerModule
  ],
  exports: [
    ContentWrapperComponent
  ]
})
export class ContentWrapperModule { }
