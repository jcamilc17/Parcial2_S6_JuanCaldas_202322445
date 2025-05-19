import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Aerolinea } from '../aerolinea';
import { AerolineaService } from '../aerolinea.service';

@Component({
  selector: 'app-listaAerolineas',
  templateUrl: './listaAerolineas.component.html',
  imports: [CommonModule],
  styleUrls: ['./listaAerolineas.component.css'],
  standalone: true
})
export class ListaAerolineasComponent implements OnInit {

  aerolineas: Array<Aerolinea> = [];

  constructor(private aerolineaService: AerolineaService) { }

  ngOnInit() {
    this.getAerolineas();
  }

  getAerolineas(): void {
    this.aerolineaService.getAerolineas().subscribe((aerolineas) => {
      this.aerolineas = aerolineas;
    });
  }

}
