import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthenticationService } from 'src/app/services/Token/authentication.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  role: string = '';
  constructor(private router: Router, private _loginService: LoginService, private cookieService: CookieService,
    private tokenValidator: AuthenticationService
  ) { }

  ngOnInit() {
    this.compararTokens();
  }

  compararTokens() {
    const tokenFrontend = this.cookieService.get('token');

    this.tokenValidator.compararTokens(tokenFrontend).subscribe(
      (resultado: boolean) => { // Asegúrate de tipar explícitamente 'resultado' como booleano
        if (resultado) {
          console.log('Los tokens son iguales');
          // Realizar acciones adicionales si los tokens son iguales
        } else {
          console.log('Los tokens no son iguales');
          // Manejar la situación donde los tokens no son iguales
        }
      },
      error => {
        console.error('Error al comparar tokens:', error);
        // Manejar el error si ocurre algún problema al comparar los tokens
      }
    );
  }

  logout() {
    this._loginService.logout();
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
