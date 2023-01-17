import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {


  //'https://restcountries.com/v2'.

  // https://restcountries.com/v3.1/name/united


    private apiUrl: string = 'https://restcountries.com/v3.1';
    private apiUrlv2: string = 'https://restcountries.com/v2';
    get parametros () {
      return new HttpParams().set('fields','name,flags,population,capital,cca2')
    }

  constructor( private http: HttpClient ) { }

  buscarPais( termino: string ): Observable<Pais[]> {

    const url = `${ this.apiUrl}/name/${termino}?fields=name,flags,population,capital,cca2`;
    return this.http.get<Pais[]>( url  , {params: this.parametros} )
            
  }

  buscarCapital( termino: string ): Observable<Pais[]> {

    const url = `${ this.apiUrl}/capital/${termino}`;
    return this.http.get<Pais[]>( url , {params: this.parametros})
            
  }

  paisAlpha( id: string ): Observable<Pais[]> {

    const url = `${ this.apiUrl}/alpha/${id}`;
    return this.http.get<Pais[]>( url )
            
  }

  buscarRegion( region: string ): Observable<Pais[]> {

    const url = `${ this.apiUrl}/region/${region}?fields=name,flags,population,capital,cca2`;
    return this.http.get<Pais[]>( url  , {params: this.parametros})
    
  }

  



}
