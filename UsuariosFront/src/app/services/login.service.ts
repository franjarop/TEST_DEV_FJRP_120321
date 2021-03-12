import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { UsuarioLogin } from '../models/usuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  myAppUrl = 'https://localhost:44365/';
  myApiUrl = 'api/UsuarioLogins'

  constructor(private http:HttpClient) { }

  validarInicioSesion(usuarioSesion : UsuarioLogin):Observable<UsuarioLogin>{
    console.log("Si entro al servicio de validacion");
    return this.http.post<UsuarioLogin>(this.myAppUrl+this.myApiUrl,usuarioSesion);
  }
}
