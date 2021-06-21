import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase';

@Injectable()
export class LoginService {
  token: string

  constructor(private router: Router) {}

  login(email: string, password: string) {
    console.log('email: '+email+"  |  pass: "+password)
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        firebase
          .auth()
          .currentUser?.getIdToken()
          .then((token) => {
            this.token = token;
            this.router.navigate(['listapersonas'])
          });
          console.log(response)
      }).catch(error=>{
        alert("error de logeo: "+error)
      });
  }

  getIdToken(){
    return this.token
  }

  isAutenticado(){
    return this.token != null
  }

  logOuth(){
    firebase.auth().signOut().then(
      ()=>{
        this.token= ""
        this.router.navigate(['/'])
      }
    ).catch(
      (error)=>{
        console.log("Error LogOut: "+error);
      }
    )
  }
}
