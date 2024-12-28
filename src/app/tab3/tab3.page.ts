import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon} from '@ionic/angular/standalone';
/* Importe el servicio */
import { ProviderService } from '../services/provider.service';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, FormsModule],
})
export class Tab3Page {

  /* Nombre de la colección */
  collectionName = 'fundaciones';

  /* Arreglo con datos locales */
  dataList: { name: string; img: string; contact: string; social: string }[] = [];
  filteredData: { name: string; img: string; contact: string; social: string }[] = [];
  searchTerm: string = '';

  /* Inyecte la dependencia a Firestore */
  constructor(private providerService: ProviderService) {}

  /* Al inicializar, carga los datos  */
  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.providerService.readCollection(this.collectionName).subscribe((data: any[]) => {
      this.dataList = data;
      this.filteredData = data; // Inicialmente, los datos filtrados son todos
    });
  }

  filterData() {
    const searchTermLower = this.searchTerm.toLowerCase();
    this.filteredData = this.dataList.filter((item) =>
      item.name.toLowerCase().includes(searchTermLower)
    );
  }
}
