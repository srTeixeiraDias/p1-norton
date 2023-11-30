import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuscaComponent } from './busca/busca.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CestaComponent } from './cesta/cesta.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { EsqueciSenhaComponent } from './esqueci-senha/esqueci-senha.component';
import { LoginComponent } from './login/login.component';
import { ProdutoComponent } from './produto/produto.component';
import { VitrineComponent } from './vitrine/vitrine.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: "vitrine", component: VitrineComponent },
  { path: "cesta", component: CestaComponent },
  { path: "esqueci-senha", component: EsqueciSenhaComponent },
  { path: "produto", component: ProdutoComponent },
  { path: "busca", component: BuscaComponent },
  { path: "detalhe/:id", component: DetalheComponent },
  { path: "login", component: LoginComponent},
  { path: "cadastro", component: CadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
