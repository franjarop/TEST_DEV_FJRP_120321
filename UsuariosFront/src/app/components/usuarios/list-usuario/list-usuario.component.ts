import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-list-usuario',
  templateUrl: './list-usuario.component.html',
  styleUrls: ['./list-usuario.component.css']
})
export class ListUsuarioComponent implements OnInit {

  constructor(public usuarioServicio:UsuarioService, public toastr:ToastrService) { }

  ngOnInit(): void {
    this.usuarioServicio.obtenerUsuarios();
  }

  eliminarTarjeta(id:number){
    if(confirm("Estas seguro que desea eliminar el registro")){
      /*
      this.usuarioServicio.eliminarUsuario(id).subscribe(data => {

        this.usuarioServicio.obtenerUsuarios();
      })
      */
      this.toastr.warning("Registro Eliminado", "El usuario fue eliminado");
    }
  }

  editar(usuario: Usuario){
    this.usuarioServicio.actualizar(usuario);
  }

}
