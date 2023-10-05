import { Component } from '@angular/core';
import { ProdutosService } from '../service/produtos/produtos.service';
import { Observable } from 'rxjs';
import { Produto } from '../model/produto';

@Component({
  selector: 'app-vitrine',
  templateUrl: './vitrine.component.html',
  styleUrls: ['./vitrine.component.css']
})
export class VitrineComponent {

  produtos$: Observable<Produto[]>

  constructor(private service: ProdutosService) {
    this.produtos$ = service.list()
  }

}
