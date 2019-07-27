import { PesquisarAlunosComponent } from './modules/fm-aluno/components/pesquisar-alunos/pesquisar-alunos.component';
import { CadastrarSalaComponent } from './modules/fm-sala/cadastrar-sala/cadastrar-sala.component';
import { CadastrarTurmaComponent } from './modules/fm-turma/cadastrar-turma/cadastrar-turma.component';
import { TelaInicialComponent } from './modules/fm-home/tela-inicial/tela-inicial.component';
import { FmHomeModule } from './modules/fm-home/fm-home.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarDisciplinasComponent } from './modules/fm-disciplinas/cadastrar-disciplinas/cadastrar-disciplinas.component';
import { CadastrarAlunoComponent } from './modules/fm-aluno/components/cadastrar-aluno/cadastrar-aluno.component';


const routes: Routes = [
  { path: '', component: TelaInicialComponent },
  { path: 'pesquisar-alunos', component: PesquisarAlunosComponent},
  { path: 'cadastrar-alunos', component: CadastrarAlunoComponent },
  { path: 'disciplinas', component: CadastrarDisciplinasComponent },
  { path: 'turmas', component: CadastrarTurmaComponent },
  { path: 'salas', component: CadastrarSalaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
