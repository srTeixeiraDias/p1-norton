import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VitrineComponent } from './vitrine/vitrine.component';
import { CestaComponent } from './cesta/cesta.component';
import { EsqueciSenhaComponent } from './esqueci-senha/esqueci-senha.component';
import { Produto } from './produto/produto.model';

const routes: Routes = [

  {path: "vitrine", component: VitrineComponent},
  {path: "cesta", component: CestaComponent},
  {path: "esqueci-senha", component: EsqueciSenhaComponent},
  {path: "produto", component: Produto}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
