
import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AutomovilesService } from '../../servicios/automoviles/automoviles.service';
import Swal from 'sweetalert2';
import { Vehiculo } from '../../servicios/automoviles/automoviles.interface';

@Component({
  selector: 'app-editar-auto',
  templateUrl: './editar-auto.component.html',
  styleUrls: ['./editar-auto.component.css']
})
export class EditarAutoComponent implements OnInit {
 formulario: FormGroup 
 vehiculo?: Vehiculo;

 constructor(
  private autoService: AutomovilesService,
  private fb: FormBuilder,
  private activeRoute:ActivatedRoute
) {
  this.formulario = this.fb.group({
    "codigo": [''],
   "marca": [''],
    "modelo": [''],
     "foto": [''],
     "anio": [''],
    "kilometraje": [],
    "precio": [],
    "calificacion": [''],
   
  })
  
}
 ngOnInit(): void {
  this.activeRoute.params.subscribe(params =>{
    let codigo = params['codigo'];
    this.autoService
    // this.autoService.getAllAutos(params['codigo']).subscribe(data =>{
    //   this.vehiculo= data
    // })
  })
  }

guardar() {
  if (this.formulario.valid) {
    this.autoService.insertVehiculo({ ...this.formulario.value }).subscribe(
      respuesta => {
        if (respuesta.codigo == '1') {
          Swal.fire({
            title: "Mensaje",
            text: "Autmovil Registrado con Exito",
            icon: "success"
          });
        }
      }
    );
  } else {
    Swal.fire({
      title: "Mensaje",
      text: "Faltan llenar campos",
      icon: "error"
    });
  }
}

}
