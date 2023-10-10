import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlogComponent } from './blog/blog.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



import { EditformComponent } from './editform/editform.component';
import { UserformComponent } from './userform/userform.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { AddComponent } from './add/add.component';
import { GreetingComponent } from './greeting/greeting.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    BlogComponent,
    EditformComponent,
    UserformComponent,
    HomeComponent,
    SignupComponent,
    AddComponent,
    GreetingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'dashboard', redirectTo: '/dashboard/greeting', pathMatch: 'full'},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: 'dashboard', component: DashboardComponent,
      children: [
        {
          path:'blog', component: BlogComponent,
        },
        {
          path:'userform', component: UserformComponent
        },
        {
          path:'editform', component: EditformComponent
        },
        {
          path:'greeting', component: GreetingComponent
        }
      ]},
      {path: 'login', component: LoginComponent},
      {path: 'home', component: HomeComponent},
      {path: 'signup', component: SignupComponent},

    ]),
  ],
  providers: [HttpClientModule,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
