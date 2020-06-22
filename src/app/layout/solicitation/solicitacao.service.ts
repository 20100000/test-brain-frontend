import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

const BASE = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class SolicitacaoService {

  constructor(private http: HttpClient) { }

  createSolicitation (cpf: any) {
      console.log('aquiiiiiiiiiiiiiiii', cpf);

         return this.http.post<any>(BASE + 'brain/', {cpf: cpf});
  }
}
