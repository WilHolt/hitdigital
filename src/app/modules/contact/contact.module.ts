import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContatRoutingModule } from './contact-routing.module';
import { ContentWrapperModule } from '../../components/compositions/content-wrapper/content-wrapper.module';


@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContatRoutingModule,
    ContentWrapperModule
  ]
})
export class ContactModule { }
