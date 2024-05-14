import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonCard, IonList, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonLabel, IonThumbnail, IonAvatar } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
  standalone: true,
  imports: [IonAvatar, IonLabel, IonThumbnail, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonList, IonCard, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ContactosPage implements OnInit {

  constructor(private http: HttpClient) { }

  users: any[] = [];

  ngOnInit() {
    this.http.get('https://randomuser.me/api/?results=10')
    .subscribe((data: any) => {
      console.log(data.results);
      this.users = data.results;
    });
  }

  ionViewWillEnter() {

  }
}

