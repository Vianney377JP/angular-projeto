import { ListarComponent } from './components/listar/listar.pac.component';
import { EditarComponent } from './components/editar/editar.pac.component';
import { PipeExemploComponent } from './components/pipe-exemplo/pipe-exemplo.component';
import { NgContentComponetComponent } from './components/ng-content-componet/ng-content-componet.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PacienteRoutingModule } from './paciente-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { DiretivaExemploComponent } from './components/diretiva-exemplo/diretiva-exemplo.component';

@NgModule({
  declarations: [
    ListarComponent,
    EditarComponent,
    DiretivaExemploComponent,
    PipeExemploComponent,
    NgContentComponetComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule,
    PacienteRoutingModule,
    SharedModule
  ]
})
export class PacienteModule { }

