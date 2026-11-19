import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Authentication } from './componentes/authentication/authentication';
import { IvaMantenimentComponent } from './componentes/iva-manteniment/iva-manteniment.component';

@Component({
  imports: [RouterOutlet, IvaMantenimentComponent], 
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('invoces');
}
