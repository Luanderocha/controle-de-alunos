import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ListarAlunosDto } from '../models/listar-alunos-dto-model';
import { environment } from 'src/environments/environment';

@Injectable()
export class FmAlunosService {

  constructor(
    private http: HttpClient
  ) { }

    recuperarAlunos(): Observable<ListarAlunosDto[]>{
      return this.http.get<ListarAlunosDto[]>(`${environment.apiUrl}alunos`);
    }

}
