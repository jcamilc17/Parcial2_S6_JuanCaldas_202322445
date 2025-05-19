import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-detalleAerolinea',
  imports: [CommonModule],
  templateUrl: './detalleAerolinea.component.html',
  styleUrls: ['./detalleAerolinea.component.css']
})
export class DetalleAerolineaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
