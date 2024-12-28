import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon } from '@ionic/angular/standalone';
import { ProviderService } from '../services/provider.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonIcon]
})
export class Tab4Page implements OnInit {

  collectionName = 'lugares_acogida';
  dataList: { name: string; city: string; link: string; img: string }[] = [];
  filteredData: { name: string; city: string; link: string; img: string }[] = [];
  searchTerm: string = '';

  constructor(private providerService: ProviderService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.providerService.readCollection(this.collectionName).subscribe((data: any[]) => {
      this.dataList = data;
      this.filteredData = [...data]; // Inicialmente, los datos filtrados son todos
    });
  }

  filterData() {
    const searchTermLower = this.searchTerm.toLowerCase();
    this.filteredData = this.dataList.filter((item) =>
      item.name.toLowerCase().includes(searchTermLower)
    );
  }

}
