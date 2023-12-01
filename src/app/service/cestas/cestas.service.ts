import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable } from 'rxjs';
import { Cesta } from 'src/app/model/cesta';
import { Cliente } from 'src/app/model/cliente';
import { ItemCesta } from 'src/app/model/item-cesta';

@Injectable({
  providedIn: 'root'
})
export class CestasService {

  private readonly API_CESTA = "http://localhost:8089/api/cesta"

  constructor(private httpClient: HttpClient) { }
 
  find(): Observable<Cesta> {
    console.log("cesta http")
    console.log(localStorage.getItem("emailCliente"))  
    return this.httpClient.get<Cesta>(this.API_CESTA + "/cliente?email=" + localStorage.getItem("emailCliente")).pipe(first());
  }

  addProduct(itemCesta: ItemCesta) {
    console.log(this.API_CESTA + "/cliente/adicionar?email=" + localStorage.getItem("emailCliente"))
    console.log(itemCesta.produto.id)
    console.log(this.httpClient.post(this.API_CESTA + "/cliente/adicionar?email=" + localStorage.getItem("emailCliente"), itemCesta).pipe(first()))
    this.httpClient.post(this.API_CESTA + "/cliente/adicionar?email=" + localStorage.getItem("emailCliente"), itemCesta).subscribe();
  }

  removeAllProducts() {
    this.httpClient.delete(this.API_CESTA + "/cliente/esvaziar?email=" + localStorage.getItem("emailCliente")).subscribe();
  }

}
