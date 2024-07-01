import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { CookieService } from 'ngx-cookie-service';


interface DecodedToken {
  Rol: string;
  Nombre: string;
}

@Injectable({
  providedIn: 'root'
})
export class TokenDecoderService {
  constructor(private cookieService: CookieService) { }

  obtainName(): string {
    const token = this.cookieService.get('token');
    if (token) {
      const decodedToken:DecodedToken = jwtDecode(token);
      return decodedToken.Nombre;
    } else {
      return '';
    }
  }
}
