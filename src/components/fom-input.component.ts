import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
    selector: 'input-form',
    standalone: true,
    imports: [ FormsModule, CommonModule, ReactiveFormsModule ],
    template: `
    <div>
    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-zinc-600">{{inputName}}</label>
    <input type="text" id="name" class="
        bg-gray-50 border 
        border-gray-300 
        text-gray-900 
        text-sm 
        rounded-lg 
        focus:ring-blue-500 
        focus:border-blue-500 
        
        block 
        w-full 
        p-2.5 

        dark:bg-zinc-800 
        dark:border-zinc-700 
        dark:placeholder-zinc-400 
        dark:text-white 
        dark:focus:ring-blue-500 
        dark:focus:border-blue-500" 
        id="{{inputName}}"
        placeholder="Digite seu {{inputName}}" 
        [formControl]="control"

        />
</div>
    `
})

export class FormInputComponent{

    @Input() control!: FormControl;
    @Input('input-name') inputName!: string;
}