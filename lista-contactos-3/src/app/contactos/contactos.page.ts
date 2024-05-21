import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonCard, IonList, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonLabel, IonThumbnail, IonItemSliding, IonItemOption, IonItemOptions, IonIcon, IonModal, IonButtons, IonButton, IonSearchbar } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
import { addIcons } from 'ionicons';
import { trash } from 'ionicons/icons'

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
  standalone: true,
  imports: [IonSearchbar, IonButton, IonButtons, IonModal, IonIcon, IonItemOptions, IonItemOption, IonItemSliding, IonLabel, IonThumbnail, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonList, IonCard, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ContactosPage implements OnInit {
  cerrarModal() {
    this.isModalOpen = false;
  }

  constructor(private http: HttpClient) {
    addIcons({trash});
    this.isModalOpen = false;
  }

  users: any[] = [];
  user?: any;
  isModalOpen: boolean;
  filteredUsers: any[] = [];

  ngOnInit() {

  }

  borrarContacto(user: any){
    console.log(user)
    this.users = this.users.filter((u)=>u.login.uuid!==user.login.uuid)
  }

  abrirDetalle(user: any){
    this.user = user;
    this.isModalOpen = true;
  }

  ionViewWillEnter() {
    this.http.get('https://randomuser.me/api/?results=10')
    .subscribe((data: any) => {
      console.log(data.results);
      this.users = data.results;
      this.filteredUsers = this.users;
    });
  }

  buscarContacto(event: any){
    const txt = event.target.value;

    if(txt && txt.trim() != ''){
      this.filteredUsers = this.users.filter((u:any)=>{
        return (u.name.first.toLowerCase().indexOf(txt.toLowerCase()) > -1 );
      })
    }else{
      this.filteredUsers = this.users;
    }

  }
}

