import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListarComponent} from './components/listar/listar.pac.component';
import {EditarComponent} from './components/editar/editar.pac.component';
import {PacienteResolve} from './service/paciente.resolve';


const routes: Routes = [
  {
    component: ListarComponent,
    path: '',
  },
  {
    component: EditarComponent,
    path: 'novo',
    resolve: {
      medico: PacienteResolve,
    }
  },
  {
    component: EditarComponent,
    path: 'editar/:id',
    resolve: {
      medico: PacienteResolve
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})



export class PacienteRoutingModule { }
