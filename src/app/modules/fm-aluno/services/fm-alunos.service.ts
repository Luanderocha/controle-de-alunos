import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ListarAlunosDto } from '../models/listar-alunos-dto-model';
import { environment } from 'src/environments/environment';
import { $ } from 'protractor';

@Injectable()
export class FmAlunosService {

  constructor(
    private http: HttpClient,
  ) { }

    recuperarAlunos(){
      return this.http.get<ListarAlunosDto[]>(`${environment.apiUrl}/alunos`);
    }

    recuperarAlunoId(id : number){
      return this.http.get<ListarAlunosDto>(`${environment.apiUrl}/alunos/id?id=${id}`);
    }

    cadastrarAluno(aluno : ListarAlunosDto): Observable<ListarAlunosDto>{
      return this.http.post<ListarAlunosDto>(`${environment.apiUrl}/alunos/`, aluno).pipe();
    }

    deletarAlunoId(id : number){
      return this.http.delete<ListarAlunosDto>(`${environment.apiUrl}/alunos/id?id=${id}`).pipe();
    }

}
