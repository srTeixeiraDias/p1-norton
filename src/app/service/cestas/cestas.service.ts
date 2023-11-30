import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable } from 'rxjs';
import { Cesta } from 'src/app/model/cesta';

@Injectable({
  providedIn: 'root'
})
export class CestasService {

  private readonly API = "/assets/cesta.json"

  constructor(private httpClient: HttpClient) { }
 
  find(): Observable<Cesta> {
    console.log("cesta http")
    return this.httpClient.get<Cesta>(this.API).pipe(first());
  }
}
