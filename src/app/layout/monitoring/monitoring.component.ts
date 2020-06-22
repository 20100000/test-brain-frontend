import { Component, OnInit } from '@angular/core';
import {MonitoringService} from './monitoring.service';
@Component({
    selector: 'app-blank-page',
    templateUrl: './blank-page.component.html',
    styleUrls: ['./monitoring.component.scss']
})
export class MonitoringComponent implements OnInit {
    public docs: any;
    constructor(public monServer: MonitoringService) {}

    getDocs () {
        this.monServer.getAllDocs().subscribe( res => {
            if (res.success) {
                this.docs = res.data;
            }
        });
    }

    ngOnInit() {
        this.getDocs();
    }
}
