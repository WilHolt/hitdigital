import { Component, OnInit } from '@angular/core';
import { HomeService } from './services/home.service';
import { HomeContentDataModel } from './models/home-data.model';
import { tap } from 'rxjs';

@Component({
  selector: 'hit-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(private homeService: HomeService){}
  contentData: HomeContentDataModel = {
    text: '',
    title: ''
  };
  ngOnInit(){
    this.homeService.getHomeData().pipe(
      tap(
        data => this.contentData = data
      )
    ).subscribe();
  }
}
