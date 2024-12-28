import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel } from '@ionic/angular/standalone';
/* Importe el servicio */
import { ProviderService } from '../services/provider.service';

@Component({
  standalone: true,
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel],
})
export class Tab3Page {

  /* Nombre de la colección */
  collectionName = 'fundaciones';

  /* Arreglo con datos locales */
  dataList: any[] = [];

  /* Inyecte la dependencia a Firestore */
  constructor(private providerService: ProviderService) {}

  /* Al inicializar, carga los datos  */
  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.providerService.readCollection(this.collectionName).subscribe((data) => {
      this.dataList = data;
    })
  }
}
