import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbAlertModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { StatModule } from '../../shared';
import { ChatComponent, NotificationComponent, TimelineComponent } from './components';
import { FormsModule } from '@angular/forms';

import {SolicitacaoService} from './solicitacao.service';

import { SolicitationRoutingModule } from './solicitation-routing.module';
import { SolicitationComponent } from './solicitation.component';

@NgModule({
    imports: [CommonModule, NgbCarouselModule, NgbAlertModule, SolicitationRoutingModule, StatModule, FormsModule],
    providers: [SolicitacaoService],
    declarations: [SolicitationComponent, TimelineComponent, NotificationComponent, ChatComponent]
})
export class SolicitationModule {}
