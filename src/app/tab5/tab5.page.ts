import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonFab, IonFabButton, IonIcon, IonCard,
  IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { cloudUploadOutline } from 'ionicons/icons';


@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
  standalone: true,
  imports: [IonFab, IonFabButton, IonIcon, IonCard,
    IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class Tab5Page implements OnInit {

  imageReady = signal(false)
  imageUrl = signal("")

  constructor() { 
    addIcons({ cloudUploadOutline });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();

      // Convertir el archivo a una URL base64 para mostrarlo en el html
      reader.onload = () => {
      this.imageUrl.set(reader.result as string)
      this.imageReady.set(true)
      };

      reader.readAsDataURL(file); // Leer el archivo como base64
    }
}

  ngOnInit() {
  }

}
