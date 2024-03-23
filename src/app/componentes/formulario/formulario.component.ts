import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Automovil } from '../../servicios/automoviles/automoviles.interface';
import { AutomovilesService } from '../../servicios/automoviles/automoviles.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

automovil: Automovil

  constructor(
    private route: ActivatedRoute,
    private autoService: AutomovilesService
    ) { 
this.automovil = {
    codigo: 0,
    marca: '',
    modelo: '',
    anio: 0,
    color: '',
    kilometraje: 0,
    precio: 0, 
    calificacion: 0,
    img: '',

}
  }

  ngOnInit():void {
  
  }

  guardar(){
    this.autoService.addAuto(this.automovil); 
    console.log("Guardado con exito");
    
  }

}
