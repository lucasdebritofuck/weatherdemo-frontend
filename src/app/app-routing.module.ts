import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CidadesComponent } from './cidades/cidades.component';
import { WeatherComponent } from './weather/weather.component';
import { CadastroComponent } from './cadastro/cadastro.component';

const routes: Routes = [
  {path: '', component: CidadesComponent},
  {path: 'cidades', component: CidadesComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'weather/:id', component: WeatherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
