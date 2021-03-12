import { Component, OnInit } from '@angular/core';
import  {FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { UsuarioLogin } from 'src/app/models/usuarioLogin';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup;

  constructor(private formBuilder:FormBuilder,
    private loginService:LoginService,
    private toastr:ToastrService) {
      this.form = this.formBuilder.group({
        nombre:['',[Validators.required, Validators.maxLength(50)]],
        password:['',[Validators.required, Validators.maxLength(50)]],
      })


     }

  ngOnInit(): void {
  }

  validarInicioSesion(){
    console.log("Si entro a validar");
      const usuarioLogin: UsuarioLogin = {
      usuario: this.form.get('nombre')?.value,
      password: this.form.get('password')?.value
    }
    this.loginService.validarInicioSesion(usuarioLogin).subscribe(data =>{
      this.toastr.success("Bienvenido", "Bienvenido");
    })

  }

}
