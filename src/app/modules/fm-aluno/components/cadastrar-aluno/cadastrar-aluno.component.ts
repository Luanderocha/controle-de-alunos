import { FmAlunosService } from './../../services/fm-alunos.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './cadastrar-aluno.component.html',
  styleUrls: ['./cadastrar-aluno.component.css']
})
export class CadastrarAlunoComponent implements OnInit {

  formCadastroAluno: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private alunoService: FmAlunosService,
  ) { }

  ngOnInit() {
    this.criarFormCadastroAluno();
  }

  criarFormCadastroAluno() {
    this.formCadastroAluno = this.formBuilder.group({
      nome: [''],
      genero: [''],
      rg: [''],
      cpf: [''],
      matricula: [''],
      email: ['']
    })
  }

  salvarForm() {
    const salvar = this.formCadastroAluno.getRawValue();
    this.alunoService.cadastrarAluno(salvar).subscribe();
    this.formCadastroAluno.reset();
  }

  voltarTelaPesquisa() {
    this.router.navigateByUrl('/pesquisar-alunos');
  }

}
