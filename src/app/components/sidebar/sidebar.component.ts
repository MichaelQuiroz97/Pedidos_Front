import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  constructor(private router:Router, private _loginService:LoginService) { }

  ngOnInit() {
  }
  
  logout(){
    this._loginService.logout();
  }

  navigateToUnblockUser(){
    this.router.navigate(["home/seguridad/desbloquear_usuario"]);
  }
  navigateToPedido(){
    this.router.navigate(["home/pedidos"]);
  }
  

  navigateHistorialPedido() {
    this.router.navigate(["home/pedidos/consultarPedidos"]);
  }
  navigateToRegistrarRol() {
    this.router.navigate(["home/seguridad/registrarRoles"]);
  }

}
