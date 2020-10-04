//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

//component
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
//services
import { AuthService } from './services/auth.service';
import { AuthGuardService} from './services/auth-guard.service';
import { Routes } from '@angular/router';
import { BodyListComponent } from './private-section-list/body-list/body-list.component';
import { NavListComponent } from './private-section-list/nav-list/nav-list.component';


const appRoutes: Routes =[
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component : SigninComponent },
  
  { path:'' , redirectTo: 'private-section-list/body-list', pathMatch: 'full'},
  { path:'**', redirectTo:'private-section-list/body-list'}

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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ AuthService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
