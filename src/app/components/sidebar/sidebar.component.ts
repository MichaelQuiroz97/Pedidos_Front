import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthenticationService } from 'src/app/services/Token/authentication.service';
import { TokenDecoderService } from 'src/app/services/Token/token-decoder.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  role: string = '';
  validacionrol!: boolean;
  constructor(private router: Router, private _loginService: LoginService, private cookieService: CookieService,
    private tokenValidator: AuthenticationService, private tokendecoder :TokenDecoderService
  ) { }

  ngOnInit() {
   // this.compararTokens();
   this.role = this.tokendecoder.obtainRol();
   console.log(this.role)
   this.validacionrol= this.role === 'uno' || this.role === 'Administrador';

  }

  compararTokens() {
    const tokenFrontend = this.cookieService.get('token');

    this.tokenValidator.compararTokens(tokenFrontend).subscribe(
      (resultado: boolean) => { 
        if (resultado) {
          console.log('Los tokens son iguales');
        } else {
          console.log('Los tokens no son iguales');
        }
      });
  }

  logout() {
    this._loginService.logout();
    this.cookieService.delete("token");
  }

  navigateToUnblockUser() {
    this.router.navigate(["home/seguridad/desbloquear_usuario"]);
  }
  navigateToPedido() {
    this.router.navigate(["home/pedidos"]);
  }


  navigateHistorialPedido() {
    this.router.navigate(["home/pedidos/consultarPedidos"]);
  }
  navigateToRegistrarRol() {
    this.router.navigate(["home/seguridad/registrarRoles"]);
  }

}
