import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuscaComponent } from './busca/busca.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CestaComponent } from './cesta/cesta.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { EsqueciSenhaComponent } from './esqueci-senha/esqueci-senha.component';
import { LoginComponent } from './login/login.component';
import { ProdutoComponent } from './produto/produto.component';
import { VitrineComponent } from './vitrine/vitrine.component';

@NgModule({
  declarations: [
    AppComponent,
    VitrineComponent,
    CestaComponent,
    EsqueciSenhaComponent,
    ProdutoComponent,
    BuscaComponent,
    DetalheComponent,
    LoginComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
