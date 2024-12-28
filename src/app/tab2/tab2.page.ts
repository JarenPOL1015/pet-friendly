import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCardSubtitle
} from '@ionic/angular/standalone';

@Component({
  standalone: true,
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonGrid,
    IonRow,
    IonCol,
    IonCardSubtitle
]
})
export class Tab2Page {

  creadores = [
    { imagen: 'assets/jaren.jpg', nombre: 'Jaren Pazmiño' },
    { imagen: 'assets/ariel.jpg', nombre: 'Ariel Vargas' },
    { imagen: 'assets/brian.jpg', nombre: 'Brian Mite' },
  ];

  constructor() {}

}
