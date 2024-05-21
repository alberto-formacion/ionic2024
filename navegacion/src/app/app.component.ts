import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonHeader, IonToolbar, IonTitle, IonContent, IonMenu } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonContent, IonTitle, IonToolbar, IonHeader, IonApp, IonRouterOutlet, IonMenu],
})
export class AppComponent {
  constructor() {}
}
