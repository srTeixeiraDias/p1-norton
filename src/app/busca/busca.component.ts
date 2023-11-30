import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Produto } from '../model/produto';
import { ProdutosService } from '../service/produtos/produtos.service';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent {

  filtro: string = "";

  produtos$: Observable<Produto[]>

  constructor(private service: ProdutosService, private router: Router) {
    this.produtos$ = service.list(this.filtro)
  }

  list() {
    this.produtos$ = this.service.list(this.filtro)
  }

  exibirProduto(produtoId: string) {
    this.router.navigateByUrl(`detalhe/${produtoId}`);
  }

}
