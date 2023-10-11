import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlogComponent } from './blog/blog.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { EditformComponent } from './editform/editform.component';
import { UserformComponent } from './userform/userform.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { AddComponent } from './add/add.component';
import { GreetingComponent } from './greeting/greeting.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
<<<<<<< HEAD
import { AuthService } from './auth.service';
=======
import { EditblogComponent } from './editblog/editblog.component';
>>>>>>> 51935d8b2a35d6c3dca1a1baa1f014fcaff15437

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
    GreetingComponent,
    EditblogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
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
        },
        {
          path:'editblog', component: EditblogComponent
        }
      ],
      canActivate: [AuthService]
    },
      {path: 'login', component: LoginComponent},
      {path: 'home', component: HomeComponent},
      {path: 'signup', component: SignupComponent},

    ]),
  ],
  providers: [HttpClientModule,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
