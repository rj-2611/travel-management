import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  model: any = {};

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private http: HttpClient
  ) { }

  ngOnInit() {
      sessionStorage.setItem('token', '');
  }

  login() {
      let url = 'http://localhost:8090/login';
      this.http.post<Observable<boolean>>(url, {
          userName: this.model.username,
          password: this.model.password
      }).subscribe(isValid => {
          if (isValid) {
              sessionStorage.setItem('token', btoa(this.model.username + ':' + this.model.password));
              this.router.navigate(['']);
          } else {
              alert("Authentication failed.")
          }
      });
  }

}
