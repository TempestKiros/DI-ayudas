import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AlumnoAltaComponent } from './components/alumno-alta/alumno-alta.component';
import { AlumnoModificarComponent } from './components/alumno-modificar/alumno-modificar.component';
import { CursosListaComponent } from './components/cursos-lista/cursos-lista.component';
import { CursoAlumnosComponent } from './components/curso-alumnos/curso-alumnos.component';
import { AlumnoBuscadorComponent } from './components/alumno-buscador/alumno-buscador.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'; // Ensure this path is correct or update it to the correct path

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'alumno-alta', component: AlumnoAltaComponent },
  { path: 'alumno-modificar', component: AlumnoModificarComponent },
  { path: 'cursos', component: CursosListaComponent },
  { path: 'curso-alumnos', component: CursoAlumnosComponent },
  { path: 'alumno-buscador', component: AlumnoBuscadorComponent },
  { path: '**', component: PageNotFoundComponent } // Ruta de error
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
