import { Component, inject, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AlunoService } from "../../services/alunos.service";
import { PessoaComponent } from "../../../components/pessoa.component";
import { Aluno } from "../../interfaces/aluno.interface";
import { Observable } from "rxjs";
import { Validators, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormInputComponent } from "../../../components/fom-input.component";

@Component({
    selector: 'json-component',
    standalone: true,
    imports: [
        PessoaComponent,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FormInputComponent
        ],
    templateUrl: "./json.component.html"
})

export class JsonComponent implements OnInit{
    alunoService = inject(AlunoService);

    alunos$ = new Observable<Aluno[]>();
    // nome!: string;
    // idade!: number;

    form = new FormGroup({
        id: new FormControl(''),
        nome: new FormControl('', [Validators.minLength(4), Validators.required]),
        idade: new FormControl('', [Validators.minLength(2), Validators.required])
    })


    ngOnInit(): void {
        this.getAlunos();
    }

    submit(){
        const id = Math.floor(Math.random() * 9000) + 1000;
        this.form.controls.id.setValue(id.toString());
        this.alunoService.cadastrarAluno(this.form.value)
            .subscribe(()=>{
                this.getAlunos();
            });
        this.form.reset();  
    }

    getAlunos(): void{
        this.alunos$ = this.alunoService.getAlunos();
    }

    deletarAluno(aluno: Aluno){
        this.alunoService.deletarAluno(aluno)
            .subscribe(()=> {
                console.log('deletado');
                this.getAlunos();
            });
    }


}