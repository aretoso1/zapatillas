import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {VideojuegoComponent} from './videojuego/videojuego.component';
import {ZapatillasComponent} from './zapatillas/zapatillas.component';
import { CursoComponent } from './curso/curso.component';
import { HomeComponent } from './home/home.component';
import { ExternoComponent } from './externo/externo.component';
import { CalculadoraPipe } from './pipes/calculadora.pipe';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    ZapatillasComponent,
    CursoComponent,
    HomeComponent,
    ExternoComponent,
    CalculadoraPipe,
    ContactoComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule,
    
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
