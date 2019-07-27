import { FmTurmaModule } from './modules/fm-turma/fm-turma.module';
import { FmSalaModule } from './modules/fm-sala/fm-sala.module';
import { FmDisciplinasModule } from './modules/fm-disciplinas/fm-disciplinas.module';
import { FmAlunoModule } from './modules/fm-aluno/fm-aluno.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FmHomeModule } from './modules/fm-home/fm-home.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FmAlunoModule,
    FmHomeModule,
    FmDisciplinasModule,
    FmSalaModule,
    FmTurmaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
