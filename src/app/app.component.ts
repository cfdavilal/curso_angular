import { Component, OnInit } from '@angular/core';
import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  titulo = 'Hola mundo desde Angular';

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyCp04BogxJU6sFmCp5VVQVcpRQ4WfmiFjw",
      authDomain: "listado-personas-angular-da88d.firebaseapp.com",
    })
  }
}
