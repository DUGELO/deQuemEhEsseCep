import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { MensagemComponent } from './componentes/mensagem/mensagem.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { ResultadoPesquisaComponent } from './componentes/resultado-pesquisa/resultado-pesquisa.component';
import { ValidadorCepDirective } from './componentes/formulario/validador-cep.directive';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MensagemComponent,
    FormularioComponent,
    ResultadoPesquisaComponent,
    ValidadorCepDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
