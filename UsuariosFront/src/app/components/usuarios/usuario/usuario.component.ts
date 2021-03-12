import { Component, OnDestroy, OnInit } from '@angular/core';
import  {FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit, OnDestroy {
  form:FormGroup;
  suscripcion!: Subscription;
  usuario?:Usuario;
  idUsuario = 0;



  constructor(private formBuilder:FormBuilder,
              private usuarioService:UsuarioService,
              private toastr:ToastrService) {
    this.form = this.formBuilder.group({
      id: 0,
      nombre:['',[Validators.required, Validators.maxLength(50)]],
      ApellidoPaterno:['',[Validators.required, Validators.maxLength(50)]],
      ApellidoMaterno:['',[Validators.required, Validators.maxLength(50)]],
      RFC:['',[Validators.required, Validators.maxLength(13), Validators.minLength(13)]],

    })
  }

  ngOnInit(): void {
    this.suscripcion =this.usuarioService.obtenerUsuario().subscribe(data => {
      console.log(data);
      this.usuario= data;
      this.form.patchValue({
        nombre: this.usuario.Nombre,
        ApellidoPaterno: this.usuario.ApellidoPaterno,
        ApellidoMaterno: this.usuario.ApellidoMaterno,
        RFC: this.usuario.RFC
      });
      this.idUsuario = this.idUsuario;
    })
  }

  ngOnDestroy(){
    this.suscripcion.unsubscribe();

  }

  guardarUsuario(){
    if (this.idUsuario === 0){
      this.agregar();
    }else{
      this.editar();
    }



  }

  agregar(){
    const usuario: Usuario = {
      Nombre: this.form.get('Nombre')?.value,
      ApellidoPaterno: this.form.get('ApellidoPaterno')?.value,
      ApellidoMaterno: this.form.get('ApellidoMaterno')?.value,
      RFC: this.form.get('RFC')?.value
    }
    this.toastr.success("Registro Agregado", "El usuario fue registrado");
      this.form.reset();
      /*
    this.usuarioService.guardarUsuario(usuario).subscribe(data => {
      console.log("Guardado");
      this.form.reset();
    })
    */
  }

  editar(){
    const usuario: Usuario = {
      id: this.usuario?.id,
      Nombre: this.form.get('Nombre')?.value,
      ApellidoPaterno: this.form.get('ApellidoPaterno')?.value,
      ApellidoMaterno: this.form.get('ApellidoMaterno')?.value,
      RFC: this.form.get('RFC')?.value
    }
    this.toastr.success("Registro Agregado", "El usuario fue registrado");
      this.form.reset();
      /*
    this.usuarioService.guardarUsuario(usuario).subscribe(data => {
      console.log("Guardado");
      this.form.reset();
    })
    */
   this.usuarioService.actualizarUsuario(this.idUsuario, usuario).subscribe(data => {
    this.toastr.info("Registro actualizado", "El usuario fue actualizado");
    this.usuarioService.obtenerUsuario();
    this.form.reset();
    this.idUsuario = 0;
   })

  }

}
