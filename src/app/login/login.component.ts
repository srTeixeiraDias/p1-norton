import { Component } from '@angular/core';
import { ClientesService } from '../service/clientes/clientes.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  

  email : string = "";
  senha : string = "";

  constructor(private serviceCliente : ClientesService){
    
  }

  logar(){
    this.serviceCliente.find(this.email, this.senha);

  }

}
