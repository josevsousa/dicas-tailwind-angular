import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <main class="h-screen bg-zinc-950 flex items-center justify-center text-zinc-50">
        <router-outlet />
    </main>
  `
})
export class AppComponent {}
