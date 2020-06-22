import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoringComponent } from './monitoring.component';

describe('BlankPageComponent', () => {
    let component: MonitoringComponent;
    let fixture: ComponentFixture<MonitoringComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MonitoringComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MonitoringComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
