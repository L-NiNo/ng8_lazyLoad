import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LazyComponent } from './lazy/lazy.component';
import { StaticComponent } from './static/static.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'lazy',
    loadChildren: () => import('src/app/lazy/lazy.module').then((l) => l.LazyModule)
  },
  {
    path: 'static',
    component: StaticComponent
  }

];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
