import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  constructor( private paisService: PaisService ) { }

  termino: string = "";
  hayError: boolean = false;
  paises: Pais[] = [];

 


  buscar(termino : string) {
    this.hayError = false;
    
    this.termino = termino

    this.paisService.buscarCapital( this.termino )
    .subscribe( (paises) => {
      console.log(paises);
      this.paises = paises;
      
        

    },
    (err) => {
      console.log("Error");
      console.info(err);
      this.hayError = true;
      this.paises = []
    } );


  }

}
