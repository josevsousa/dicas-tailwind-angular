import { Component, Input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { Home } from "lucide-angular"

@Component({
    selector: 'item-menu',
    standalone: true,
    imports: [RouterLink],
    template: `
    <a routerLink="/{{itemLink}}"
        class="
            rounded-md
            cursor-pointer 
            bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
            transition
            hover:to-pink-400
            text-yellow-50
            text-lg
            px-5
            py-3
            ">
        <ng-content />
    </a>
    `
})

export class ItemMenuComponent{
     @Input('item-link') itemLink!: string;
}