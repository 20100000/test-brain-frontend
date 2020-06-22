import { MonitoringModule } from './monitoring.module';

describe('BlankPageModule', () => {
    let blankPageModule: MonitoringModule;

    beforeEach(() => {
        blankPageModule = new MonitoringModule();
    });

    it('should create an instance', () => {
        expect(blankPageModule).toBeTruthy();
    });
});
