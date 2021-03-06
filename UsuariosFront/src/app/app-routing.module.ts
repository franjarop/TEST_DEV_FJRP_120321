import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ReporteUsuarioComponent } from './components/usuarios/reporte-usuario/reporte-usuario.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'usuario', component:UsuariosComponent},
  {path: 'reporte-usuario', component:ReporteUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
