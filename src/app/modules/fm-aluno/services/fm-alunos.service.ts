import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FmAlunosService {

  constructor(
    private http: HttpClient
  ) { }

    recuperarAlunos(): Observable<String[]>{
      return this.http.get<String[]>('localhost:8081/api/alunos');
    }

}
