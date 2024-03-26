import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../servicios/automoviles/automoviles.interface';
import { AutomovilesService } from '../../servicios/automoviles/automoviles.service';


@Component({
  selector: 'autos-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  constructor(private autosService: AutomovilesService) { }

  public muestraImagen: boolean = false;

  public listaVehiculos: Array<Vehiculo> = [];

  public filtro: string = "";
  public rows:number = 10;
  public page:number = 1

  // private autos: Vehiculo[] = [
    // {
    //   codigo: '1',
    //   marca: 'Aston Martin',
    //   modelo: 'DB12',
    //   foto: "https://quantumgallery.cl/wp-content/uploads/2023/09/DB12-2.png",
    //   anio: 2024,
    //   kilometraje: 5000,
    //   precio: 248780,
    //   calificacion: 5

    // },
  //   {
  //     codigo: '2',
  //     marca: 'Ferrari',
  //     modelo: 'SF90',
  //     foto: "https://acnews.blob.core.windows.net/imgnews/medium/NAZ_48a3fbf1a1b44e8998fd23c49f400579.webp",
  //     anio: 2023,
  //     kilometraje: 1000,
  //     precio: 532530,
  //     calificacion: 5

  //   },
  //   {
  //     codigo: '3',
  //     marca: 'Mercedes Benz',
  //     modelo: 'G-class',
  //     foto: "https://parkers-images.bauersecure.com/wp-images/21971/cut-out/930x620/merc_gclass_01.jpg",
  //     anio: 2021,
  //     kilometraje: 1000,
  //     precio: 284990,
  //     calificacion: 4.5

  //   },
  //   {
  //     codigo: '4',
  //     marca: 'Mclaren',
  //     modelo: '750s',
  //     foto: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mclaren/750-s/9929/1682577543178/front-left-side-47.jpg?imwidth=420&impolicy=resize",
  //     anio: 2023,
  //     kilometraje: 2500,
  //     precio: 308000,
  //     calificacion: 4

  //   },
  //   {
  //     codigo: ' 5',
  //     marca: 'Alfa Romeo',
  //     modelo: 'Giulia',
  //     foto: "https://www.alfaromeo.es/content/dam/alfa/cross/giulia/shift-to-merchant/engine/hub/my24-mca/AR-Giulia-Merchant-ContentGrid-Engine-03.jpg",
  //     anio: 2019,
  //     kilometraje: 10000,
  //     precio: 52500,
  //     calificacion: 3

  //   },
  // ]



  ngOnInit(): void {
    console.log("ingreso a ejeecutarse")
  this.getAutos()
  }
  

  consultarVehiculo(){
    this.autosService.getAllAutos(this.filtro, this.rows, this.page).subscribe(respuesta =>{
      console.log(respuesta);
      this.listaVehiculos =respuesta
    });
  }

  toggleImg(): void {
    this.muestraImagen = !this.muestraImagen;
  }
  getAutos() {
    this.autosService.getAllAutos().subscribe((data) => {
      this.listaVehiculos = data;
    })
  }

  deleteAutoById(id: string) {
    this.autosService.deleteAuto(id).subscribe(
      (data) => {
        this.getAutos();
      },
      (error) => {
        console.log(error)
      }
    )
  }

}
