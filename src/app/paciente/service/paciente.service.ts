import { Injectable } from '@angular/core';
import {BaseApiService} from '../../shared/base-api.service';
import {HttpClient} from '@angular/common/http';
import {Paciente} from '../model/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService extends BaseApiService<Paciente> {
  constructor(httpClient: HttpClient) {
    super(httpClient, 'pacientes');
  }


}

