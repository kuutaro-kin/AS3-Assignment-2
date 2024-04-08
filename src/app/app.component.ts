import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonLabel, IonIcon, IonNav } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { heart, bookmark, share, list, settings, home } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonNav, IonIcon, IonLabel, IonTabButton, IonTabBar, IonTabs, IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    addIcons({ heart, bookmark, share, list, settings, home});
  }
}
