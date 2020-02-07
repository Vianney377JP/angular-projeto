import { Component, OnInit } from '@angular/core';
import { Paciente } from '../../model/paciente';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { PacienteService } from '../../service/paciente.service';
import { Validacoes } from 'src/app/shared/validacoes';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.pac.component.html',
  styleUrls: ['./editar.pac.component.scss']
})
export class EditarComponent implements OnInit {

  paciente: Paciente;
  title: string;

  formulario: FormGroup;

  constructor(route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private router: Router,
              private pacienteService: PacienteService) {
    this.paciente = route.snapshot.data.paciente;
    this.title = this.paciente.id ? 'Atualizar Paciente' : 'Cadastrar Paciente';
  }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: [this.paciente.nome, Validators.compose([
        Validators.required,
        Validators.maxLength(10)
      ])],

      telefone: [this.paciente.telefone, Validators.compose([
        Validators.required
      ])],

      cep: [this.paciente.cep, Validators.compose([
        Validators.required
      ])],

      email: [this.paciente.email, Validators.compose([
        Validators.required,
        Validacoes.ValidaEmail
      ])],


      
      logradouro: [this.paciente.logradouro, Validators.compose([
        Validators.required
      ])],


      complemento: [this.paciente.complemento, Validators.compose([
        Validators.required
      ])],

      
      bairro: [this.paciente.bairro, Validators.compose([
        Validators.required
      ])],


      uf: [this.paciente.uf, Validators.compose([
        Validators.required
      ])],
     
    });

    this.formulario.valueChanges
      .subscribe((values) => {
      console.log(values);
    });

    this.nome.valueChanges.subscribe(value => {
      if (value && value.length > 3) {
        this.email.setValue(`${value}@empresa.com`);
      }
    });
  }

  get nome() {
    return this.formulario.get('nome');
  }

  get telefonel() {
    return this.formulario.get('telefone');
  }

  get cpf() {
    return this.formulario.get('cpf');
  }


  get cep() {
    return this.formulario.get('cep');
  }

  get email() {
    return this.formulario.get('email');
  }

  get logradouro() {
    return this.formulario.get('logradouro');
  }

  get complemento() {
    return this.formulario.get('complemento');
  }

  get bairro() {
    return this.formulario.get('bairro');
  }

  get uf() {
    return this.formulario.get('uf');
  }

  voltar(): void {
    this.router.navigate(['..']);
  }

  enviar(): void {
    if (this.formulario.valid) {
      this.pacienteService.salvar(this.formulario.value)
        .subscribe(() => this.voltar());
    }
  }
}
