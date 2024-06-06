import { Component } from '@angular/core';
import { IonTabBar, IonTabButton, IonTabs, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonMenu, IonButtons, IonMenuButton, IonList, IonItem, IonLabel, IonAvatar, IonChip } from '@ionic/angular/standalone';
import { AudioService } from '../services/audio.service';
import { addIcons } from 'ionicons';
import { search, library, home, addOutline, flashOutline, timeOutline, settingsOutline } from 'ionicons/icons'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonTabs, IonTabBar, IonTabButton, IonIcon, IonMenu, IonButtons, IonMenuButton, IonList, IonItem, IonLabel, IonAvatar, IonChip],
})
export class HomePage {
  constructor(private audioService: AudioService) {
    addIcons({search, library, home, addOutline, flashOutline, timeOutline, settingsOutline});
    audioService.playAudio("El Reno Renardo - 01 - Tipica Intro.mp3");
  }
}
