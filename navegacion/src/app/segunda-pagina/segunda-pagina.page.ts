import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import {ActivatedRoute, RouterModule} from '@angular/router'

@Component({
  selector: 'app-segunda-pagina',
  templateUrl: './segunda-pagina.page.html',
  styleUrls: ['./segunda-pagina.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterModule]
})
export class SegundaPaginaPage implements OnInit {

  id?: number;

  constructor(private activateRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(params=>{
      this.id=Number(params.get("id"));
    })
  }

}