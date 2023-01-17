import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [ `
    button {
      margin-right: 5px;
      margin-top: 5px;
    }
    `
  ]
})
export class PorRegionComponent  {

  regionesv2: string[] = [ 'EU','EFTA','CARICOM','PA','AU','USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC'];
  regionesv3: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania']
  regionActiva: string = '';
  paises: Pais[] = []

  constructor(private paisService : PaisService) { }

  activarRegion(region: string) {
    
    if(region === this.regionActiva) {return }
    this.regionActiva = region
    this.paises = []
    this.paisService.buscarRegion(this.regionActiva)
    .subscribe( paises => this.paises = paises)
  }

  getClassCss(region: string) : string {
    return this.regionActiva === region ? 'btn btn-primary' : 'btn btn-outline-primary'
  } 

}
