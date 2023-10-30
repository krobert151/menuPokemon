import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BerriesResponse } from '../modals/berry/berry.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BerriesService {

  constructor(private http:HttpClient) { }
  
  getListBerries():Observable <BerriesResponse>{
    return this.http.get<BerriesResponse>('https://pokeapi.co/api/v2/berry/');
  }

}
