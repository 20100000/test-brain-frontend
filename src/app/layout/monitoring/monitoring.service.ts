import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

const BASE = 'http://localhost:3000/';
@Injectable({
  providedIn: 'root'
})
export class MonitoringService {
    constructor(private http: HttpClient) { }
    getAllDocs () {
        return this.http.get<any>(BASE + 'brain/');
    }
}
