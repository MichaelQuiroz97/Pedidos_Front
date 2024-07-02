import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login_Usuario } from 'src/app/interfaces/Login_Usuario';
import { LoginService } from 'src/app/services/login.service';
import { jwtDecode } from 'jwt-decode';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  hide = true;
  form : FormGroup;
  usuario!:Login_Usuario;

  constructor(private fb:FormBuilder, private _loginService:LoginService, private router:Router,
    private cookieService:CookieService) {
    this.form = this.fb.group({
      Correo : new FormControl ('',Validators.required),
      Contrasena : new FormControl ('',Validators.required)
      
    })
   }

   roleId!: string;
  userName!: string;
  cookieValue!: string;

   decryptedString!: Object ;
   onSubmit(){
    this.usuario=this.form.value;
    this._loginService.login(this.form.value).subscribe(response =>{
      // const decodedToken: DecodedToken = jwtDecode(response.data.token);
      
    // this.roleId = decodedToken.Rol;
    // this.userName = decodedToken.userName;
    this.cookieService.set('token',response.data.token,{
      secure: true,
      expires: new Date(Date.now()+360000),
    });
      this.router.navigate(['/home/seguridad']);
    });
      
  }
    
 

  

}
