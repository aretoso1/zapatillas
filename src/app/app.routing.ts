// Importar módulos del router de angular

import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule, Route } from "@angular/router";

//Importar componentes 
import { ZapatillasComponent } from "./zapatillas/zapatillas.component";
import { VideojuegoComponent } from "./videojuego/videojuego.component";
import { CursoComponent } from "./curso/curso.component";
import { HomeComponent } from './home/home.component';
import { ExternoComponent } from "./externo/externo.component";
import { ContactoComponent } from "./contacto/contacto.component";
// Array de rutas

const appRoutes : Routes =[
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'zapatillas', component: ZapatillasComponent},
    {path: 'videojuego', component: VideojuegoComponent},
    {path: 'curso', component: CursoComponent},
    {path: 'externo', component: ExternoComponent},
    {path: 'curso/:nombre/:followers', component: CursoComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: '**', component: HomeComponent}

];

//Exportar el módulo

export const appRoutingProviders: any[]=[] ;
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);