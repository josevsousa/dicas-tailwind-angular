import { Component } from "@angular/core";
import { ItemMenuComponent } from "./menu-components/item-menu.component";

@Component({
    standalone: true,
    imports:[ItemMenuComponent],
    template: `
     <main class="
            h-screen 
            flex 
            flex-col 
            space-y-12 
            items-center 
            justify-center
            bg-zinc-950 
            text-zinc-300
            text-xl
        ">
        <img src="../../../assets/angular_pride.png" class="w-[94px]" alt="">
        <h1>DICAS DE FUNCIONALIDADES</h1>
        <ul class="text-zinc-800 flex flex-col gap-4">
            <li>
                <item-menu item-link="widget">Widget Notification</item-menu>
            </li>
            <li>
                <item-menu item-link="json">Json component</item-menu>
            </li>
        </ul>

     </main>
    `
})

export class MenuComponent{}