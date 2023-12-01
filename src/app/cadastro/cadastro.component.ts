import { Component } from '@angular/core';

import { Cliente } from '../model/cliente';
import { ClientesService } from '../service/clientes/clientes.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  public cliente: Cliente = {
    id: '',
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    cpf: '',
    telefone: '',
    cep: '',
    numero: '',
  };

  constructor(private service: ClientesService) { }

  cadastrarCliente() {
    localStorage.setItem("nomeCliente", this.cliente.nome);
    localStorage.setItem("emailCliente", this.cliente.email);
    this.service.create(this.cliente);
  }

}
