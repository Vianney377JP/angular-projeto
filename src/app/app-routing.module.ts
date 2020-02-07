import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PacienteRoutingModule } from './paciente/paciente-routing.module';
import { Paciente } from './paciente/model/paciente';


const routes: Routes = [
  {
    path: 'pacientes',
    // children: [
    //   {component, path, children: []}
    // ],
  //  loadChildren: () => import('./paciente/paciente.module')
  loadChildren: () => import('./paciente/paciente-routing.module')
      .then(mod => mod.PacienteRoutingModule),
  }


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
