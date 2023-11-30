import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Cesta } from '../model/cesta';
import { CestasService } from '../service/cestas/cestas.service';

@Component({
  selector: 'app-cesta',
  templateUrl: './cesta.component.html',
  styleUrls: ['./cesta.component.css']
})
export class CestaComponent {

  cesta$: Observable<Cesta>;

  constructor(private service: CestasService) {
    this.cesta$ = service.find()
  }

}
