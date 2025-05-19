import { Component } from '@angular/core';

import { ListaAerolineasComponent } from '../aerolinea/listaAerolineas/listaAerolineas.component';

@Component({
  selector: 'app-root',
  imports: [ListaAerolineasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent {
  title = 'lista aerolineas';
}
