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
    console.log(this.API)
    return this.httpClient.get<Produto[]>(this.API).pipe(first())
  }

  listBy(filtro: string): Observable<Produto[]> {
    console.log(`${this.API}?filter=${filtro}`)
    return this.httpClient.get<Produto[]>(`${this.API}?filter=${filtro}`).pipe(first())
  }

}
