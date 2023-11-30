import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Produto } from '../model/produto';
import { ProdutosService } from '../service/produtos/produtos.service';


@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent {
  mensagem : string = "";
  produtos$: Observable<Produto[]>;

  produto: Produto = {
    id: "",
    nome: "",
    descricao: "",
    descricaoLonga: "",
    preco: 0,
    urlImagem: ""
  };

  constructor(private service: ProdutosService, private router: Router) {
    this.produtos$ = this.service.list("");
  }

  public cadastrar(){
    this.service.create(this.produto)
    this.produtos$ = this.service.list("");
  }

  exibirProduto(produtoId: string) {
    this.router.navigateByUrl(`/detalhe/${produtoId}`);
  }

}
