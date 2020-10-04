import { Component } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dropedetions-test';
  constructor(){
  const config = {
      apiKey: "AIzaSyD9V1dT4aEIspe4LGrRD3ti1vUscHcVHG0",
      authDomain: "biblio-5b2f9.firebaseapp.com",
      databaseURL: "https://biblio-5b2f9.firebaseio.com",
      projectId: "biblio-5b2f9",
      storageBucket: "biblio-5b2f9.appspot.com",
      messagingSenderId: "25812641816",
      appId: "1:25812641816:web:f966e8b70d364d945bbb6d"

    };
    firebase.initializeApp(config);
  }
}
