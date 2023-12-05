import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private readonly API = "http://localhost:8089/api/cliente";

  constructor(private httpClient: HttpClient, private router: Router) { }

  


  create(cliente: Cliente) {
    this.httpClient.post<Cliente>(this.API, cliente).subscribe();
  }

  find(email : string, senha : string){
  const cliente = this.httpClient.get<Cliente>(this.API + `/email?email=${email}`);
  cliente.toPromise().then((cliente) => {
  localStorage.setItem("emailCliente", email);
  if(senha != cliente?.senha){
    alert("Senha Incorreta");
  }else{
  this.router.navigateByUrl("vitrine")}
  }, (erro) => {
  // Trata o erro
  if (erro.status === 500) {
  // O erro é um status 500
  alert("Cliente não encontrado");
  } else {
  // O erro é de outro tipo
  console.log(erro);
  }
  });
}

}
