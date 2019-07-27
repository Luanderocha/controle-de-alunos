import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pesquisar-alunos',
  templateUrl: './pesquisar-alunos.component.html',
  styleUrls: ['./pesquisar-alunos.component.css']
})
export class PesquisarAlunosComponent implements OnInit {

  listaAlunos = [
    {
      "nome": "luanderson",
      "matricula": "001",
      "turma": "2018.1",
      "sala": "Sala - 7"
    },
    {
      "nome": "Paulo",
      "matricula": "002",
      "turma": "2016.2",
      "sala": "Sala - 10"
    },
    {
      "nome": "Samuel",
      "matricula": "003",
      "turma": "2018.1",
      "sala": "Sala - 7"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
