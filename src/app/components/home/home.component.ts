import { Component } from '@angular/core';

declare const initTE: any;
declare const Carousel: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  ngOnInit(): void {
  }

  // Esta función se llamaría cuando se selecciona un nuevo carrusel
  cambiarCarrusel(indice: number): void {
    // Reiniciar todas las clases 'active'
    const items = document.querySelectorAll('.carousel-item');
    items.forEach(item => item.classList.remove('active'));

    // Aplicar 'active' al elemento seleccionado
    const elementoSeleccionado = document.querySelector(`#carousel-${indice + 1}`);
    if (elementoSeleccionado) {
      elementoSeleccionado.classList.add('active');
    }
  }
}
