import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { SolicitationComponent } from './solicitation.component';
import { SolicitationModule } from './solicitation.module';

describe('DashboardComponent', () => {
    let component: SolicitationComponent;
    let fixture: ComponentFixture<SolicitationComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [SolicitationModule, RouterTestingModule, BrowserAnimationsModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SolicitationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
