import { Injectable } from '@angular/core';
import { Automovil } from './automoviles.interface';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutomovilesService {
  
  // baseUrl: String = 'https://epico.gob.ec/vehiculo/pulic/api';
  // httpOptions = { headers: new HttpHeaders({'Content-type':'application/json' })}private http:HttpClient

constructor() {}


private autos: Automovil[] = [
  {
    codigo: 1,
    marca: 'Aston Martin',
    modelo: 'DB12',
    anio: 2024,
    color: 'Negro',
    kilometraje: 5000,
    precio: 248780, 
    calificacion: 5,
    img: "https://quantumgallery.cl/wp-content/uploads/2023/09/DB12-2.png"
  },
  {
    codigo: 2,
    marca: 'Ferrari',
    modelo: 'SF90',
    anio: 2023,
    color: 'Rojo',
    kilometraje: 1000,
    precio: 532530, 
    calificacion: 5,
    img: "https://acnews.blob.core.windows.net/imgnews/medium/NAZ_48a3fbf1a1b44e8998fd23c49f400579.webp"
  },
  {
    codigo: 3,
    marca: 'Mercedes Benz',
    modelo: 'G-class',
    anio: 2021,
    color: 'Verde',
    kilometraje: 1000,
    precio: 284990, 
    calificacion: 4.5,
    img: "https://parkers-images.bauersecure.com/wp-images/21971/cut-out/930x620/merc_gclass_01.jpg"
  },
  {
    codigo: 4,
    marca: 'Mclaren',
    modelo: '750s',
    anio: 2023,
    color: 'Naranja',
    kilometraje: 2500,
    precio: 308000, 
    calificacion: 4,
    img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mclaren/750-s/9929/1682577543178/front-left-side-47.jpg?imwidth=420&impolicy=resize"
  },
  {
    codigo: 5,
    marca: 'Alfa Romeo',
    modelo: 'Giulia',
    anio: 2019,
    color: 'Rojo',
    kilometraje: 10000,
    precio: 52500, 
    calificacion: 3,
    img: "https://www.alfaromeo.es/content/dam/alfa/cross/giulia/shift-to-merchant/engine/hub/my24-mca/AR-Giulia-Merchant-ContentGrid-Engine-03.jpg"
  },

]

autosSubject = new BehaviorSubject(this.autos);



getAllAutos(){
  return this.autosSubject.asObservable();
}

getAutoById(id:number){
  return this.autos.find((auto)=>auto.codigo == id);

}

deleteAutoById(id:number):void{
  this.autos = this.autos.filter((auto)=> auto.codigo !== id);
  this.autosSubject.next(this.autos);
}

addAuto(auto:Automovil){
  this.autos.push(auto);
  this.autosSubject.next(this.autos);
}


}
