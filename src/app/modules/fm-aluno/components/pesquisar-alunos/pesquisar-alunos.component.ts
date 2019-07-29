import { ListarAlunosDto } from './../../models/listar-alunos-dto-model';
import { FmAlunosService } from './../../services/fm-alunos.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  templateUrl: './pesquisar-alunos.component.html',
  styleUrls: ['./pesquisar-alunos.component.css']
})
export class PesquisarAlunosComponent implements OnInit {

  listaAlunos: BehaviorSubject<ListarAlunosDto[]> = new BehaviorSubject([]);

  constructor(
    private alunoService: FmAlunosService,
  ) { }

  ngOnInit() {
    this.recuperarListaAlunos();
  }

  recuperarListaAlunos() {
    this.alunoService.recuperarAlunos().subscribe(
      res => this.listaAlunos.next(res)
    );
    console.log(this.listaAlunos);
    
  }

}
