import { Component } from '@angular/core';//, OnInit 
// import { CommonModule } from '@angular/common'; IonicModule, CommonModule, FormsModule,
// import { FormsModule } from '@angular/forms';
// import { IonicModule } from '@ionic/angular';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonCardHeader, IonCard, IonIcon, IonButton, IonCardTitle, IonCardContent, IonImg, IonFooter, IonSearchbar, IonTabs, IonTabButton, IonLabel, IonTabBar, IonGrid, IonRow, IonCol, IonList, IonCardSubtitle } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronBack } from 'ionicons/icons';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.page.html',
  styleUrls: ['./second-page.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonLabel, IonTabButton, IonTabs, IonSearchbar, IonFooter, IonImg, IonCardContent, IonCardTitle, IonButton, IonIcon, IonCard, IonCardHeader, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonList, IonCardSubtitle, RouterModule]
})
export class SecondPagePage{

  constructor() { 
    addIcons({ chevronBack });
  }

  // ngOnInit() { implements OnInit 
  // }

}
