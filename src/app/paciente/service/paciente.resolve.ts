import { Injectable } from '@angular/core';
import {BaseApiService} from '../../shared/base-api.service';
import {HttpClient} from '@angular/common/http';
import {Paciente} from '../model/paciente';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {PacienteService} from './paciente.service';


@Injectable({
    providedIn: 'root'
  })
  export class PacienteResolve implements Resolve<Paciente> {
    constructor(private PacienteService: PacienteService) {}
  
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Paciente> | Paciente {
      const id = route.paramMap.get('id');
      if (id) {
        return this.PacienteService.consultar(id);
      }
      return new Paciente();
  
    }
  
  
  }