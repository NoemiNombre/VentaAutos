import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AutomovilesService } from '../../servicios/automoviles/automoviles.service';
import { Automovil } from '../../servicios/automoviles/automoviles.interface';

@Component({
  selector: 'app-autosDetail',
  templateUrl: './autosDetail.component.html',
  styleUrls: ['./autosDetail.component.css']
})
export class AutosDetailComponent implements OnInit {

  auto: Automovil | undefined
  constructor(
    private route: ActivatedRoute,
    private autoService: AutomovilesService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params)=>{this.auto =this.autoService.getAutoById(params['id']);
    });
  }

}
