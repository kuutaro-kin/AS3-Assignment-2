import { Component} from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { IonicModule } from '@ionic/angular';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonCardHeader, IonCard, IonIcon, IonButton, IonCardTitle, IonCardContent, IonImg, IonFooter, IonSearchbar, IonTabs, IonTabButton, IonLabel, IonTabBar, IonGrid, IonRow, IonCol, IonList, IonCardSubtitle } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { chevronBack } from 'ionicons/icons';

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.page.html',
  styleUrls: ['./third-page.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonLabel, IonTabButton, IonTabs, IonSearchbar, IonFooter, IonImg, IonCardContent, IonCardTitle, IonButton, IonIcon, IonCard, IonCardHeader, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonList, IonCardSubtitle]
})
export class ThirdPagePage{

  constructor(private router: Router) {
    addIcons({ chevronBack });
  }

  navigateToSecondPage() {
    this.router.navigateByUrl('/second');
  }

  playVideo() {
    window.location.href="https://youtu.be/9n5z0LTGII4?si=FXUqK288K3tFlAg5";
  }
}
