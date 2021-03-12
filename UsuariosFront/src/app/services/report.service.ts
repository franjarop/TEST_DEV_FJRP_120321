
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReportUsuario } from '../models/reportUsuario';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  myAppUrl = 'https://localhost:44365/';
  myApiUrl = 'api/Reports'
  list?:ReportUsuario[];
  pageActual: number = 1;

  constructor(private http:HttpClient) { }


  obtenerReporteUsuarios(){
    console.log("Si llego a la busqueda del reporte");
    this.http.get(this.myAppUrl + this.myApiUrl).toPromise()
                  .then(data => {
                    this.list = data as ReportUsuario[]
                    console.log(data);
                  }
                  );

  }
}
