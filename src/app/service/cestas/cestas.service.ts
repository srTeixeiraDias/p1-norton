import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable } from 'rxjs';
import { Cesta } from 'src/app/model/cesta';
import { Cliente } from 'src/app/model/cliente';

@Injectable({
  providedIn: 'root'
})
export class CestasService {

  private readonly API_CLIENTE = "http://localhost:8089/api/cliente"
  private readonly API_CESTA = "http://localhost:8089/api/cesta"

  constructor(private httpClient: HttpClient) { }
 
  find(): Observable<Cesta> {
    console.log("cesta http")
    console.log(localStorage.getItem("emailCliente"))  
    return this.httpClient.get<Cesta>(this.API_CESTA + "/cliente?email=" + localStorage.getItem("emailCliente")).pipe(first());
  }
}
