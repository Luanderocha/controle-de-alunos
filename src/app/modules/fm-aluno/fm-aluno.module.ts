import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PesquisarAlunosComponent } from './components/pesquisar-alunos/pesquisar-alunos.component';
import { CadastrarAlunoComponent } from './components/cadastrar-aluno/cadastrar-aluno.component';
import { FmAlunosService } from './services/fm-alunos.service';



@NgModule({
  declarations: [CadastrarAlunoComponent, PesquisarAlunosComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ], providers: [ FmAlunosService ]
})
export class FmAlunoModule { }
