import { Component } from "@angular/core";



export class AppModule { }

@Component({
    selector: 'home-app',
    standalone: true,
    template: `
    <main class="flex items-center justify-center h-screen border-b-zinc-400 dark:bg-zinc-950 ">
    
        <div class="w-[448px] rounded overflow-hidden">
            <!-- header -->
            <div class="  bg-gradient-to-tr from-zinc-950 to-zinc-900 py-4 px-6 flex items-center justify-between">
                <span class="font-bold text-zinc-50">Widget Notification</span>
                <button class=" text-zinc-900 dark:text-violet-500 font-bold text-xs  dark:hover:text-violet-400">MARCAR TODAS COMO VISTAR</button>
            </div>
            <!-- Recent Section -->
            <div>
                <div class="bg-zinc-700 dark:bg-zinc-900 px-5 py-2 text-zinc-400 dark:text-zinc-500 text-sm">
                    Recentes
                </div>
                <div class="divide-y-2 divide-zinc-950 ">
                    <div class="bg-zinc-400 dark:bg-zinc-800 px-8 py-4 flex items-center gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
                        <div class="flex-1 space-y-1">
                                <p class="text-sm text-zinc-100">Voce recebeu um convite para se inscrever!</p>
                                <div class="text-xss text-zinc-400 flex gap-2">
                                    <span>convite</span>
                                    <span>3 minutos</span>
                                </div>
                        </div>
                        <div class="flex gap-2 self-center"> <!-- self-center e para so os botoes centralizar no meio -->
                            <button class="bg-zinc-700 hover:bg-zinc-900 w-9 h-9 flex items-center justify-center rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#edeef1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                            </button>

                            <button class="bg-violet-600  hover:bg-violet-800 w-9 h-9 flex items-center justify-center rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#edeef1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                            </button>
                        </div>
                    </div>
                    <div class="bg-zinc-800 px-8 py-4 flex items-center gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
                        <div class="flex-1 space-y-1">
                                <p class="text-sm text-zinc-100">Voce recebeu um convite para se inscrever!</p>
                                <div class="text-xss text-zinc-400 flex gap-2">
                                    <span>convite</span>
                                    <span>3 minutos</span>
                                </div>
                        </div>
                    </div>
                    <div class="bg-zinc-800 px-8 py-4 flex items-center gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
                        <div class="flex-1 space-y-1">
                                <p class="text-sm text-zinc-100">Voce recebeu um convite para se inscrever!</p>
                                <div class="text-xss text-zinc-400 flex gap-2">
                                    <span>convite</span>
                                    <span>3 minutos</span>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
             <!-- Antigas Section -->
             <div>
                <div class="bg-zinc-900 px-5 py-2 text-zinc-500 text-sm">
                    Antigas
                </div>
                <div class="divide-y-2 divide-zinc-950 ">
                    <div class="bg-zinc-800 px-8 py-4 flex items-center gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
                        <div class="flex-1 space-y-1">
                                <p class="text-sm text-zinc-400">Voce recebeu um convite para se inscrever!</p>
                                <div class="text-xss text-zinc-400 flex gap-2">
                                    <span>convite</span>
                                    <span>3 minutos</span>
                                </div>
                        </div>
                    </div>
                    <div class="bg-zinc-800 px-8 py-4 flex items-center gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
                        <div class="flex-1 space-y-1">
                                <p class="text-sm text-zinc-400">Voce recebeu um convite para se inscrever!</p>
                                <div class="text-xss text-zinc-400 flex gap-2">
                                    <span>convite</span>
                                    <span>3 minutos</span>
                                </div>
                        </div>
                    </div>
                    <div class="bg-zinc-800 px-8 py-4 flex items-center gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
                        <div class="flex-1 space-y-1">
                                <p class="text-sm text-zinc-400">Voce recebeu um convite para se inscrever!</p>
                                <div class="text-xss text-zinc-400 flex gap-2">
                                    <span>convite</span>
                                    <span>3 minutos</span>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    
    </main>    
    `
})

export class WidgetNotificationComponent{}