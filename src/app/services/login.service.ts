import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enviroment } from 'src/enviroments/enviroment';
import { Login_Usuario } from '../interfaces/Login_Usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  myAppUrl = Enviroment.endpoint;
  myApiUrl = "api/Login/IniciarSesion";

  constructor(private http: HttpClient, private router: Router) { }


  login(usuario: Login_Usuario): Observable<any> {
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}`, usuario);
  }



  logout() {
    this.router.navigate(['/login']);
  }
}
