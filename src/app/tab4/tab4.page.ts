import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, 
  IonSelect, IonSelectOption, IonTextarea,IonButton } from '@ionic/angular/standalone';
import { ProviderService } from '../services/provider.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonIcon, 
    IonSelect, IonSelectOption, IonTextarea,IonButton,
    ReactiveFormsModule
  ]
})
export class Tab4Page implements OnInit {

  collectionName = 'lugares_acogida';
  collectionOpiniones = 'opiniones';
  dataList: { name: string; city: string; link: string; img: string }[] = [];
  filteredData: { name: string; city: string; link: string; img: string }[] = [];
  searchTerm: string = '';

  /* Instanciando un form */
  myForm: FormGroup = new FormGroup({
    cantidad: new FormControl("", Validators.required),
    ciudad: new FormControl("", Validators.required),
    detalles: new FormControl("", Validators.required)
  });

  /* El método onSubmit para enviar los datos del formulario mediante el servicio  */

  onSubmit() {
    this.providerService.createDocument(this.collectionOpiniones, this.myForm.value).then(() => {
        this.myForm.reset()
    });
  }

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
