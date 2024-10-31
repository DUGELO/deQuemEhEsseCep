import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConsultaCepService } from 'src/app/services/consulta-cep.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  cep: Object = '';

  constructor(private service: ConsultaCepService) { }

  ngOnInit(): void {
    //
  }

  consultarCep(ev:any, form: NgForm){
    const cep = ev.target.value;
    if (cep !== "") {
      this.service.getConsultaCep(cep).subscribe((resultado => {
        this.cep = resultado;
      }))
    }
  }

}
