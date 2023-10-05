import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable } from 'rxjs';
import { Produto } from 'src/app/model/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private readonly API = "/assets/produtos.json"

  constructor(private httpClient: HttpClient) { }

  list(): Observable<Produto[]> {
    console.log(this.httpClient.get<Produto[]>(this.API).pipe(first()))
    return this.httpClient.get<Produto[]>(this.API).pipe(first())
  }

}
