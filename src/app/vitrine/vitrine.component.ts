import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Produto } from '../model/produto';
import { ProdutosService } from '../service/produtos/produtos.service';

@Component({
  selector: 'app-vitrine',
  templateUrl: './vitrine.component.html',
  styleUrls: ['./vitrine.component.css']
})
export class VitrineComponent {

  filtro: string = "";

  produtos$: Observable<Produto[]>

  constructor(private service: ProdutosService) {
    this.produtos$ = service.list(this.filtro)
  }
  
}
