import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable } from 'rxjs';
import { Produto } from 'src/app/model/produto';
import { ProdutoDetalhe } from 'src/app/model/produto-detalhe';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private readonly API = "http://localhost:8089/api/produto";

  constructor(private httpClient: HttpClient) { }

  create(produto: Produto) {
    this.httpClient.post<Produto>(this.API, produto).subscribe();
  }

  find(id: string): Observable<ProdutoDetalhe> {
    console.log(this.API)
    return this.httpClient.get<ProdutoDetalhe>(this.API + "/" + id).pipe(first())
  }

  list(filtro: string): Observable<Produto[]> {
    return this.httpClient.get<Produto[]>(`${this.API}?filter=${filtro}`).pipe(first());
  }

}
