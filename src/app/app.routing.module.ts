import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

/**
 * Routing Module, where all the predefined routes, routeParams, and data associated with each routes are defined.
 */
@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot([
      {
        path: '', component: HomeComponent,
        data: {
          stateName: 'home'
        }
      },
      // {
      //   path: 'about', component: About,
      //   data: {stateName: 'about'}
      // },
      { path: '**', pathMatch: 'full', redirectTo: ''
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
