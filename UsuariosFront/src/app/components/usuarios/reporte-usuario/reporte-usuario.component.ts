import { Component, OnInit } from '@angular/core';
import { ExcelService } from 'src/app/services/excel.service';
import { ReportService } from 'src/app/services/report.service';
import * as XLSX from 'xlsx'

@Component({
  selector: 'app-reporte-usuario',
  templateUrl: './reporte-usuario.component.html',
  styleUrls: ['./reporte-usuario.component.css']
})
export class ReporteUsuarioComponent implements OnInit {

  constructor(public reportService:ReportService, public exportExcelService:ExcelService) { }

  ngOnInit(): void {
    this.reportService.obtenerReporteUsuarios();
  }
  fileNameExcel="ReporteUsuarios.xlsx";

  exportexcel():void{
    let element = document.getElementById("excel-table");
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb,ws,"Sheet1");

    XLSX.writeFile(wb, this.fileNameExcel);
  }

}
