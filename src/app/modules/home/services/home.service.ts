import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { HomeDataResponseModel } from '../models/home-data.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private https: HttpClient) {}
  
   getHomeData(){
    return this.https.get<HomeDataResponseModel>('https://hitdigital.com.br/test.php').pipe(
      map(( res) => res.data)
    );
  }
}
