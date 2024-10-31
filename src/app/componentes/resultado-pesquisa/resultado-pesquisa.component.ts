import { Component, OnInit } from '@angular/core';
import { ConsultaCepService } from 'src/app/services/consulta-cep.service';

@Component({
  selector: 'app-resultado-pesquisa',
  templateUrl: './resultado-pesquisa.component.html',
  styleUrls: ['./resultado-pesquisa.component.scss']
})
export class ResultadoPesquisaComponent implements OnInit {

  // Dados recebidos do BehaviorSubject
  resultadoDaBuscaPorCep: any;

  // criando varivaies legiveis para armazenar os dados recebidos
  cep!: string;
  regiao!: string;
  estado!: string;
  uf!: string;
  ddd!: string;
  cidade!: string;
  bairro!: string;
  logradouro!: string;
  complemento!: string;
  ibge!: string;

  constructor(private service: ConsultaCepService) { }

  ngOnInit(): void {
    // Se inscrever no BehaviorSubject para receber os dados
    this.service.dadosCompartilhados$.subscribe(response => {
      this.resultadoDaBuscaPorCep = response;

      this.cep = response.cep;
      this.regiao = response.regiao;
      this.estado = response.estado;
      this.uf = response.uf;
      this.ddd = response.ddd;
      this.cidade = response.localidade;
      this.bairro = response.bairro;
      this.logradouro = response.logradouro;
      this.complemento = response.complemento;
      this.ibge = response.ibge;
    })  
  }

}
