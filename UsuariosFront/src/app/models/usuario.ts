import { Byte } from "@angular/compiler/src/util";

export class Usuario{
  id?: number;
  fecharegistro?: Date;
  FechaActualizacion?: Date;
  Nombre?: string;
  ApellidoPaterno?: string;
  ApellidoMaterno?: string;
  RFC?: string;
  FechaNacimiento?: Date;
  UsuarioAgrega?: number;
  Activo?: Byte;
}
