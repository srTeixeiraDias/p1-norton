import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CestaComponent } from './cesta/cesta.component';
import { EsqueciSenhaComponent } from './esqueci-senha/esqueci-senha.component';
import { ProdutoComponent } from './produto/produto.component';
import { VitrineComponent } from './vitrine/vitrine.component';
import { BuscaComponent } from './busca/busca.component';
import { DetalheComponent } from './detalhe/detalhe.component';

const routes: Routes = [
  { path: "vitrine", component: VitrineComponent },
  { path: "cesta", component: CestaComponent },
  { path: "esqueci-senha", component: EsqueciSenhaComponent },
  { path: "produto", component: ProdutoComponent },
  { path: "busca", component: BuscaComponent },
  { path: "detalhe", component: DetalheComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
