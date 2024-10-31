import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  // BehaviorSubject para armazenar e compartilhar os dados
  private resultadoDaBuscaPorCep = new BehaviorSubject<any>(null);

  // Expor como Observable
  public dadosCompartilhados$: Observable<any> = this.resultadoDaBuscaPorCep.asObservable();

  constructor(private http: HttpClient) { }

  // Método que faz a chamada HTTP e armazena os dados
  getConsultaCep(cep: string): Observable<any> {
    return this.http.get(`${environment.consultaCepApi}${cep}/json`)
    .pipe(
      tap(response => {
        this.resultadoDaBuscaPorCep.next(response) // Atualiza o BehaviorSubject com os dados recebidos
      })
    )
  }
}
