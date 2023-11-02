import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { FavListComponent } from './components/fav-list/fav-list.component';
import { CardDetailsComponent } from '../shared/container/card-details/card-details.component';
import { favGuard } from 'src/shared/validators/fav.guard';
import { CollectionsComponent } from './components/collections/collections.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { ListComponent } from './components/list/list.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'details/:id',
    component: CardDetailsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'gallery',
    component: CollectionsComponent,
    children :[
      {
        path:'',
        component:ListComponent
      },
      {
        path: 'details/:id',
        component: CardDetailsComponent
      }
    ]
  },
  {
    path: 'fav', component: FavoritesComponent,
    children: [
      {
        path:'',
        component:FavListComponent
      },
      {
        path: 'details/:id',
        component: CardDetailsComponent,
        // canActivate:[favGuard]
      },
    ]
    // children: [
    //   {
    //     path: 'details/:id',
    //     component: CardDetailsComponent,
    //     canActivate: [FavoriteGuard]
    //   }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
