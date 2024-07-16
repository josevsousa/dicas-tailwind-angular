import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Aluno } from "../app/interfaces/aluno.interface";

@Component({
    selector: 'pessoa-component',
    standalone: true,
    template: `
        <li class="flex space-x-2 bg-zinc-500 rounded p-2 font-semibold">
            <span class="flex-none w-12 bg-zinc-400 p-1 ">{{aluno.id}}</span>
            <span class="grow bg-zinc-400 p-1 ">{{aluno.nome}}</span>
            <span class="flex-none w-12 bg-zinc-400 p-1 ">{{aluno.idade}}</span>
            <button class="hover:text-red-500 text-zinc-800" (click)="emitirEvent()">
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-square-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" /><path d="M9 9l6 6m0 -6l-6 6" /></svg>
            </button>
        </li>
    `})

export class PessoaComponent{
    @Input('aluno-completo') aluno!:Aluno;
    // @Output() btDeletar = new EventEmitter<string>();
    @Output() btDeletar = new EventEmitter();
    
    emitirEvent(){
       // this.btDeletar.emit('cliquei no bt deletar');
       this.btDeletar.emit();
    }

}