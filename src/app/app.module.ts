import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlogComponent } from './blog/blog.component';
import { RouterModule } from '@angular/router';



import { EditformComponent } from './editform/editform.component';
import { UserformComponent } from './userform/userform.component';
=======
import { HomeComponent } from './home/home.component';
>>>>>>> 46ada325adbb56032743c632264aa744a011c94c

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
<<<<<<< HEAD
    DashboardComponent,
    BlogComponent,
 EditformComponent,
    UserformComponent
=======
    HomeComponent
>>>>>>> 46ada325adbb56032743c632264aa744a011c94c
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'blog', component: BlogComponent},
      {path: 'userform', component: UserformComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
