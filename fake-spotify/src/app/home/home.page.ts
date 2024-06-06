import { Component, OnInit } from '@angular/core';
import { IonTabBar, IonTabButton, IonTabs, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonMenu, IonButtons, IonMenuButton, IonList, IonItem, IonLabel, IonAvatar, IonChip, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonThumbnail, IonCol } from '@ionic/angular/standalone';
import { AudioService } from '../services/audio.service';
import { addIcons } from 'ionicons';
import { search, library, home, addOutline, flashOutline, timeOutline, settingsOutline } from 'ionicons/icons'
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonTabs, IonTabBar, IonTabButton, IonIcon, IonMenu, IonButtons, IonMenuButton, IonList, IonItem, IonLabel, IonAvatar, IonChip, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonThumbnail],
})
export class HomePage implements OnInit{
  constructor(private audioService: AudioService, private albumService: AlbumService) {
    addIcons({search, library, home, addOutline, flashOutline, timeOutline, settingsOutline});

  }

  recientAlbums?: Array<Album>;

  ngOnInit(): void {
    this.albumService.getAllAlbums().subscribe((result)=>{
      //console.log(result);
      this.recientAlbums = result;
    })
    this.audioService.playAudio("El Reno Renardo - 01 - Tipica Intro.mp3");
  }
}
