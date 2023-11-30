import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from 'src/app/model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private readonly API = "http://localhost:8089/api/cliente";

  constructor(private httpClient: HttpClient) { }

  create(cliente: Cliente) {
    this.httpClient.post<Cliente>(this.API, cliente).subscribe();
  }

}
