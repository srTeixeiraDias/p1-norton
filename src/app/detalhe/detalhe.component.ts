import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { ProdutoDetalhe } from '../model/produto-detalhe';
import { ProdutosService } from '../service/produtos/produtos.service';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent {

  id: string = "";

  produto$: Observable<ProdutoDetalhe>;

  constructor(private service: ProdutosService) {
    this.produto$ = service.find(this.id)
  }

}
