import {Component, OnDestroy, OnInit} from '@angular/core';
import {MedicoService} from '../../service/medico.service';
import {Router} from '@angular/router';
import {Medico} from '../../model/medico';
import {Subscription} from 'rxjs/src/internal/Subscription';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit, OnDestroy {
  public medicos: Medico[];
  colunas: string[] = ['nome', 'email', 'crm', 'acoes'];

  constructor(private medicoService: MedicoService,
              private router: Router) { }

  ngOnInit() {
    this.atualizar();
  }

  ngOnDestroy(): void {
  }

  atualizar(): void {
    this.medicoService.listar()
      .subscribe(medicos => {
      this.medicos = medicos;
    });
  }

  editar({ id }: Medico): void {
    this.router.navigate(['editar', id]);
  }

  remover({ id }: Medico): void {
    this.medicoService.remover(id)
      .subscribe(() => this.atualizar());
  }

}
