import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ProdutoDetalhe } from '../model/produto-detalhe';
import { ProdutosService } from '../service/produtos/produtos.service';
import { CestasService } from '../service/cestas/cestas.service';
import { ItemCesta } from '../model/item-cesta';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent {

  id: string;

  produto$: Observable<ProdutoDetalhe>;

  constructor(private service: ProdutosService, private cestaService: CestasService, private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.produto$ = service.find(this.id);
  }

  adicionar() {
    const item: ItemCesta = {
      produto: {
        id: this.id,
        descricao: '',
        descricaoLonga: '',
        urlImagem: '',
        preco: 0,
        nome: ''
      },
      quantidade: 1
    }

    console.log("adicionar")

    this.cestaService.addProduct(item)
    alert('Produto adicionado')
  }

}
