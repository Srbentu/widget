import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
  }
  constructor(public afAuth: AngularFireAuth,
    public router: Router
    ) {
    
  }

  ngOnInit(): void {
  }
  async login(){
    return new Promise((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(this.user.email, this.user.password).then( async(user) => {
      localStorage['token'] = await user.user?.getIdToken();
      console.log(user)
        this.router.navigate(['']);
      })
        .catch((error) => {
            this.router.navigate(['/login']);
        });
      })
        .catch((error) => {
            this.router.navigate(['/login']);
        });
  }
}
