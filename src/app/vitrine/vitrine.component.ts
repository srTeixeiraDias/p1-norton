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

  filtro: string = "";

  produtos$: Observable<Produto[]>

  constructor(private service: ProdutosService) {
    if (this.filtro === "")
      this.produtos$ = service.list()
    else 
      this.produtos$ = service.listBy(this.filtro)
  }

  listBy() {
    this.produtos$ = this.service.listBy(this.filtro)
  }
  
}
