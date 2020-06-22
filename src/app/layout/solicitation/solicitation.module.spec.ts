import { SolicitationModule } from './solicitation.module';

describe('DashboardModule', () => {
    let dashboardModule: SolicitationModule;

    beforeEach(() => {
        dashboardModule = new SolicitationModule();
    });

    it('should create an instance', () => {
        expect(dashboardModule).toBeTruthy();
    });
});
