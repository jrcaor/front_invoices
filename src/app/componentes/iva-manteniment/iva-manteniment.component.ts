import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonRow } from '@ionic/angular';
import { Iva } from '../../model/interface/iva';
import { IvaService } from '../../services/iva-service';


@Component({
  selector: 'app-iva-manteniment',
  templateUrl: './iva-manteniment.component.html',
  styleUrls: ['./iva-manteniment.component.scss'],
  imports: [CommonModule, IonGrid, IonCol, IonRow],
  standalone: true
})
export class IvaMantenimentComponent implements OnInit {
  ives=signal<Iva[]>([]);
  serviceIva=inject(IvaService)
  constructor() {}

  ngOnInit() {
    this.serviceIva.getIves().subscribe({
      next: (data)=> { this.ives.secd t(data.object as Iva[])},
      error:(error)=>{}
    })
  }
}
