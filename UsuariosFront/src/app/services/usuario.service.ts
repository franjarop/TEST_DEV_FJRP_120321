import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  myAppUrl = 'https://localhost:44365/';
  myApiUrl = 'api/Usuarios/'
  list: Usuario[] = [
    {Nombre:"Javier", ApellidoPaterno:"Robles", ApellidoMaterno:"Perez", RFC:"ROPF900217"},
    {Nombre:"Jonathan", ApellidoPaterno:"Rodriguez", ApellidoMaterno:"Perez", RFC:"ROPF901234"}
  ]

  private actualizarFormulario = new BehaviorSubject<Usuario>({} as any);

  constructor(private http:HttpClient) { }

  guardarUsuario(usuario:Usuario):Observable<Usuario>{
    console.log("Si llego al servicio")
    return this.http.post<Usuario>(this.myAppUrl+this.myApiUrl, usuario);
  }

  obtenerUsuarios(){
    console.log("Si llego a obtener")
    this.http.get(this.myAppUrl + this.myAppUrl).toPromise()
                  .then(data => {
                    this.list = data as Usuario[]
                  })

  }

  eliminarUsuario(id:number):Observable<Usuario>{
    return this.http.delete<Usuario>(this.myAppUrl+this.myApiUrl + id)
  }

  actualizar(usuario: Usuario){
    this.actualizarFormulario.next(usuario);
  }

  actualizarUsuario(id:number, usuario: Usuario):Observable<Usuario>{
    return this.http.put<Usuario>(this.myAppUrl + this.myApiUrl + id, usuario);
  }

  obtenerUsuario():Observable<Usuario>{
    return this.actualizarFormulario.asObservable();
  }

}
