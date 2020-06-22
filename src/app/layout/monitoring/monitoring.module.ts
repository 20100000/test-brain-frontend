import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MonitoringRoutingModule } from './monitoring-routing.module';
import { MonitoringComponent } from './monitoring.component';
import {AuthGuard} from '../../shared/guard';
import {MonitoringService} from './monitoring.service'

@NgModule({
    imports: [CommonModule, MonitoringRoutingModule],
    providers: [MonitoringService],
    declarations: [MonitoringComponent]
})
export class MonitoringModule {}
