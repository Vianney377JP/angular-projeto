import { Component, OnInit, OnDestroy } from '@angular/core';
import { Paciente } from '../../model/paciente';
import { PacienteService } from '../../service/paciente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.pac.component.html',
  styleUrls: ['./listar.pac.component.scss']
})
export class ListarComponent implements OnInit, OnDestroy {
  public paciente: Paciente[];
  colunas: string[] = ['nome', 'telefone','cpf','cep','email', 'logradouro','complemento','bairro','uf', 'acoes'];

  constructor(private pacienteService: PacienteService,
              private router: Router) { }

  ngOnInit() {
    this.atualizar();
  }

  ngOnDestroy(): void {
  }

  atualizar(): void {
    this.pacienteService.listar()
      .subscribe(pacientes => {
      this.paciente = pacientes;
    });
  }

  editar({ id }: Paciente): void {
    this.router.navigate(['editar', id]);
  }

  remover({ id }: Paciente): void {
    this.pacienteService.remover(id)
      .subscribe(() => this.atualizar());
  }

}
