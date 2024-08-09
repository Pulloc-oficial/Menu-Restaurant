import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  sucursales = ['Bogotá', 'Fusagasugá'];
  selectedSucursal: string = this.sucursales[0];

  onSucursalChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedSucursal = target.value;
  }
}


