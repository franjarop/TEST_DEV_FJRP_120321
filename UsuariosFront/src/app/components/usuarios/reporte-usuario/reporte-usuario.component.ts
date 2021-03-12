import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-reporte-usuario',
  templateUrl: './reporte-usuario.component.html',
  styleUrls: ['./reporte-usuario.component.css']
})
export class ReporteUsuarioComponent implements OnInit {

  constructor(public reportService:ReportService) { }

  ngOnInit(): void {
    this.reportService.obtenerReporteUsuarios();
  }

}
