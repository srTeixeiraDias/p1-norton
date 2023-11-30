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
    this.service.create(this.cliente);
  }

}
