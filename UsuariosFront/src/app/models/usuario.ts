import { Byte } from "@angular/compiler/src/util";

export class Usuario{

  id?: number;
  fecharegistro: Date | undefined;
  FechaActualizacion: Date | undefined;
  Nombre: string | undefined;
  ApellidoPaterno: string | undefined;
  ApellidoMaterno: string | undefined;
  RFC: string | undefined;
  FechaNacimiento: Date | undefined;
  UsuarioAgrega: number | undefined;
  Activo: Byte | undefined;

}
