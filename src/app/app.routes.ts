import { Routes } from '@angular/router';
import { WidgetNotificationComponent } from './pages/widget/widget-notification.component';
import { MenuComponent } from './pages/menu/menu.component';
import { JsonComponent } from './pages/json-component/json.component';

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
    },{
        path: 'json',
        component: JsonComponent
    },
    {
        path: '**',
        redirectTo: 'menu',
        pathMatch: 'full'
    }
];
