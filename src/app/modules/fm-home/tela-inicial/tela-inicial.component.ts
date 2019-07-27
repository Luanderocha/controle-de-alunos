import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css']
})
export class TelaInicialComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  direcionarTelaAlunos() {
    this.router.navigateByUrl('/pesquisar-alunos');
  }

  direcionarTelaTurmas() {
    this.router.navigateByUrl('/turmas');
  }

  direcionarTelaDisciplinas() {
    this.router.navigateByUrl('/disciplinas');
  }

  direcionarTelaSalas() {
    this.router.navigateByUrl('/salas');
  }

}
