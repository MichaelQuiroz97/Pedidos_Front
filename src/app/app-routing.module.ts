import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/authentication/login/login.component';
import { HomeComponent } from './layouts/home/home.component';
import { DesbloquearUsuarioComponent } from './layouts/desbloquearUsuario/desbloquearUsuario.component';
import { ProveedorComponent } from './layouts/proveedor/proveedor.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { Restaurante_formComponent } from './modules/restaurante_form/restaurante_form.component';
import { ConsultarPedidosComponent } from './components/pedidos/consultar-pedidos/consultar-pedidos.component';
import { VerRolesComponent } from './components/Rol/ver-roles/ver-roles.component';

const routes: Routes = [
  {path:'',                                   redirectTo:'login', pathMatch:'full'},
  {path:'login',                              component : LoginComponent},

  {path:'home/seguridad',                    component : HomeComponent,
    children : [
      {path:'desbloquear_usuario',            component : DesbloquearUsuarioComponent},
      {path:'registrarRoles',                     component : VerRolesComponent},
    ]
  },
  {path:'home/pedidos',                       component: ProveedorComponent,
    children : [
      //{path:'/registrar_menu'},
      {path:'pedido',                         component:PedidoComponent},
      
      {path:'consultarPedidos', component:ConsultarPedidosComponent},
    ]
  },
  {path:'restaurantes/formulario_registro', component:Restaurante_formComponent}
  /*,
  {path:'home/reportes'},
  {path:'home/parametros'},
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
