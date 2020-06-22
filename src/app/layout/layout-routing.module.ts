import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'solicitation', pathMatch: 'prefix' },
            {
                path: 'solicitation',
                loadChildren: () => import('./solicitation/solicitation.module').then((m) => m.SolicitationModule)
            },
            { path: 'crawler/:id', loadChildren: () => import('./crawler/monitoring-crawler.module').then((m) => m.MonitoringCrawlerModule) },
            {
                path: 'components',
                loadChildren: () => import('./bs-component/bs-component.module').then((m) => m.BsComponentModule)
            },
            {
                path: 'monitoring',
                loadChildren: () => import('./monitoring/monitoring.module').then((m) => m.MonitoringModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
