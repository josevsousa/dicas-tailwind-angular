import { Routes } from '@angular/router';
import { WidgetNotificationComponent } from './pages/widget/widget-notification.component';
import { MenuComponent } from './pages/menu/menu.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'menu',
        pathMatch: 'full'
    },
    {
        path: 'widget',
        component: WidgetNotificationComponent
    },
    {
        path: 'menu',
        component: MenuComponent
    },
    {
        path: '**',
        redirectTo: 'menu',
        pathMatch: 'full'
    }
];
