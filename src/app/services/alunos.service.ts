import { inject, Injectable, OnInit } from "@angular/core";
import { Aluno } from "../interfaces/aluno.interface";
import { environment } from "../environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class AlunoService{
 
    url = `${environment.api}/alunos`
    http = inject(HttpClient);

    getAlunos() {
        return this.http.get<Aluno[]>(this.url);
    }

    cadastrarAluno(aluno: any){
        return this.http.post<Aluno>(this.url, aluno)
    }

    deletarAluno(aluno: Aluno){
        const id = `${this.url}/${aluno.id}`
        return this.http.delete(id);
    }

}