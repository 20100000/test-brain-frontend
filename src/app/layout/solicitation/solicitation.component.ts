import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {NgForm} from '@angular/forms';
import {SolicitacaoService} from './solicitacao.service';
@Component({
    selector: 'app-dashboard',
    templateUrl: './solicitation.component.html',
    styleUrls: ['./solicitation.component.scss'],
    animations: [routerTransition()]
})
export class SolicitationComponent implements OnInit {
    doc: any = {
        cpf: null
    };
    constructor(public sol: SolicitacaoService) {
    }

    addSolicitation () {
        this.sol.createSolicitation( this.doc.cpf). subscribe( res => {
            if ( res.success ) {
                alert( ' OK ' + res.data);
            }
            console.log('retorno', res);
        });
    }

    onSubmit(form: NgForm) {
        console.log('form data : ', form.value);

        this.doc.cpf = form.value.documento;
        if (this.doc.cpf) {
            this.addSolicitation();
        }
    }

    ngOnInit() {}
}
