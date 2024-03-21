import { Component, OnInit } from '@angular/core';
import { Automovil } from '../../servicios/automoviles/automoviles.interface';
import { AutomovilesService } from '../../servicios/automoviles/automoviles.service';

@Component({
  selector: 'autos-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  
  autos:Automovil[] = [];
 
muestraImagen:boolean = false;

autosFiltrados: Automovil[] = [];

  private _filtro:string = "";
  
  get filtro():string{
    return  this._filtro;
  }
  set filtro(filtro:string){
    console.log(filtro);
    
  }
  
  constructor(private autosService: AutomovilesService) { }

  ngOnInit():void {
    this.autosService.getAllAutos().subscribe((data)=>{this.autos = data})
    console.log(this.autos)
  }

  toggleImg():void{
    this.muestraImagen = !this.muestraImagen;
  }

}
