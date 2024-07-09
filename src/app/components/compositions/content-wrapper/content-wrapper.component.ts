import { Component, Input } from '@angular/core';

@Component({
  selector: 'hit-content-wrapper',
  templateUrl: './content-wrapper.component.html',
  styleUrl: './content-wrapper.component.scss'
})
export class ContentWrapperComponent {
  @Input() title!: string;
  @Input() maxWidth: string ='768px';
}
