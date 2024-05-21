import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonMenu, IonButtons, IonMenuButton, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import {RouterModule} from '@angular/router'

@Component({
  selector: 'app-primera-pagina',
  templateUrl: './primera-pagina.page.html',
  styleUrls: ['./primera-pagina.page.scss'],
  standalone: true,
  imports: [IonLabel, IonItem, IonList, IonButtons, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterModule, IonMenu, IonMenuButton]
})
export class PrimeraPaginaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
