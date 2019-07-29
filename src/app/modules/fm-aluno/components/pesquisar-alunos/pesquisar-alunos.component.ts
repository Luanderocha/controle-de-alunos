import { ListarAlunosDto } from './../../models/listar-alunos-dto-model';
import { FmAlunosService } from './../../services/fm-alunos.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './pesquisar-alunos.component.html',
  styleUrls: ['./pesquisar-alunos.component.css']
})
export class PesquisarAlunosComponent implements OnInit {

  formAluno: FormGroup;
  listaAlunos: BehaviorSubject<ListarAlunosDto[]> = new BehaviorSubject([]);

  constructor(
    private alunoService: FmAlunosService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.criarFormAluno();
    this.recuperarListaAlunos();

  }

  criarFormAluno() {
    this.formAluno = this.formBuilder.group(
      {
        aluno: [null],
      }
    )
  }


  recuperarListaAlunos() {
    this.alunoService.recuperarAlunos().subscribe(
      res => this.listaAlunos.next(res)
    );
  }

  pesquisarAluno() {
    const aluno = this.formAluno.get('aluno').value
    const id = this.listaAlunos.getValue().find(res => res.nome === aluno).id;
    if (id) {
      this.alunoService.recuperarAlunoId(id).subscribe(
        res => {
          const aluno = res
          this.listaAlunos.next([aluno]);
        }
      );
    }
    else {
      this.alunoService.recuperarAlunos().subscribe(
        res => this.listaAlunos.next(res)
      );
    }
  }

  cadastrarAluno() {
    this.router.navigateByUrl('/cadastrar-alunos');
  }

  voltarTelaInicial() {
    this.router.navigateByUrl('');
  }

  deletarAlunoId() {

  }

}
