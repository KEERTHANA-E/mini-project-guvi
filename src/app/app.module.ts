import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { MaterialModule } from 'src/material/material.module';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from 'src/shared/shared.module';
import { FooterComponent } from './components/footer/footer.component';
import { FavListComponent } from './components/fav-list/fav-list.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FavListValidator } from 'src/shared/model/fav-list-validator.model';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollectionsComponent } from './components/collections/collections.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListComponent } from './components/list/list.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    HomeComponent,
    FooterComponent,
    FavListComponent,
    CarouselComponent,
    CollectionsComponent,
    FavoritesComponent,
    ListComponent,
    SigninComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(), 
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FavListValidator],
  bootstrap: [AppComponent]
})
export class AppModule { }
