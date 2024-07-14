import { Component } from "@angular/core";

@Component({
    selector: 'home-app',
    standalone: true,
    template: `
        <div class="w-[448px] rounded overflow-hidden">
            <div class=" dark:bg-zinc-800 py-4 px-6 flex items-center justify-between">
                <span class="font-bold ">Ola! home-app!</span>
                <button class="text-violet-500 font-bold text-xs hover:text-violet-400">MARCAR TODAS COMO VISTAR</button>
            </div>
        </div>
    `
})

export class HomeAppComponent{}