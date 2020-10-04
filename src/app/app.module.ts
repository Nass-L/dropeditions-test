//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

//component
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { BodyListComponent } from './private-section-list/body-list/body-list.component';
import { NavListComponent } from './private-section-list/nav-list/nav-list.component';

//services
import { AuthService } from './services/auth.service';
import { AuthGuardService} from './services/auth-guard.service';
import { TickerService } from './services/ticker.service';
import { PrivateSectionService } from './services/private-section.service';

import { Routes } from '@angular/router';


const appRoutes: Routes =[
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component : SigninComponent },
  { path: 'sections-list',canActivate:[AuthGuardService] ,component : BodyListComponent },
  { path:'' , redirectTo: 'sections-list', pathMatch: 'full'},
  { path:'**', redirectTo:'sections-list'}

]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    SigninComponent,
    BodyListComponent,
    NavListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ AuthService,AuthGuardService, TickerService, PrivateSectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
