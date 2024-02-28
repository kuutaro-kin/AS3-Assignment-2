import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonCardHeader, IonCard, IonIcon, IonButton, IonCardTitle, IonCardContent, IonImg, IonFooter, IonSearchbar, IonTabs, IonTabButton, IonLabel, IonTabBar } from '@ionic/angular/standalone';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonLabel, IonTabButton, IonTabs, IonSearchbar, IonFooter, IonImg, IonCardContent, IonCardTitle, IonButton, IonIcon, IonCard, IonCardHeader, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  constructor(private router: Router) { 

  }
  navigateToSecondPage() {
  this.router.navigateByUrl('/second-page/second-page.page');
  }
  
}


